(() => {
  const EMPTY = 0;
  const FILL = 1;
  const MARK = 2;

  const STORAGE = {
    theme: "nonograms-theme",
    muted: "nonograms-muted",
    save: "nonograms-save",
    scores: "nonograms-scores",
  };

  const DIFFICULTY_LABEL = {
    easy: "Easy",
    medium: "Medium",
    hard: "Hard",
  };

  const state = {
    puzzle: PUZZLES[0],
    cells: [],
    locked: false,
    elapsedMs: 0,
    startedAt: null,
    theme: "light",
    muted: false,
    tool: "fill",
    paint: null,
    timerId: null,
  };

  const dom = {
    board: document.getElementById("board"),
    puzzleNav: document.getElementById("puzzle-nav"),
    puzzleName: document.getElementById("puzzle-name"),
    puzzleMeta: document.getElementById("puzzle-meta"),
    timer: document.getElementById("timer"),
    winBanner: document.getElementById("win-banner"),
    themeBtn: document.getElementById("theme-btn"),
    soundBtn: document.getElementById("sound-btn"),
    resetBtn: document.getElementById("reset-btn"),
    saveBtn: document.getElementById("save-btn"),
    continueBtn: document.getElementById("continue-btn"),
    randomBtn: document.getElementById("random-btn"),
    solveBtn: document.getElementById("solve-btn"),
    scoresBtn: document.getElementById("scores-btn"),
    scoresDialog: document.getElementById("scores-dialog"),
    scoresClose: document.getElementById("scores-close"),
    scoresBody: document.getElementById("scores-body"),
    hint: document.getElementById("input-hint"),
  };

  const sounds = {
    click: new Audio("click.mp3"),
    cross: new Audio("cross.mp3"),
    clear: new Audio("clear.mp3"),
    win: new Audio("win.mp3"),
  };
  Object.values(sounds).forEach((audio) => {
    audio.preload = "auto";
    audio.volume = 0.28;
  });

  function puzzlesByDifficulty(difficulty) {
    return PUZZLES.filter((puzzle) => puzzle.difficulty === difficulty);
  }

  function findPuzzle(id) {
    return PUZZLES.find((puzzle) => puzzle.id === id);
  }

  function runs(flags) {
    const values = [];
    let count = 0;
    flags.forEach((flag) => {
      if (flag) count += 1;
      else if (count) {
        values.push(count);
        count = 0;
      }
    });
    if (count) values.push(count);
    return values.length ? values : [0];
  }

  function cluesFor(puzzle) {
    const { size, filled } = puzzle;
    const filledSet = new Set(filled);
    const cols = [];
    const rows = [];
    for (let col = 0; col < size; col += 1) {
      cols.push(
        runs(Array.from({ length: size }, (_, row) => filledSet.has(row * size + col)))
      );
    }
    for (let row = 0; row < size; row += 1) {
      rows.push(
        runs(Array.from({ length: size }, (_, col) => filledSet.has(row * size + col)))
      );
    }
    return { cols, rows };
  }

  function formatTime(ms) {
    const total = Math.max(0, Math.floor(ms / 1000));
    const minutes = String(Math.floor(total / 60)).padStart(2, "0");
    const seconds = String(total % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  }

  function currentElapsed() {
    if (state.startedAt === null) return state.elapsedMs;
    return state.elapsedMs + (Date.now() - state.startedAt);
  }

  function playSound(name) {
    if (state.muted) return;
    const audio = sounds[name];
    if (!audio) return;
    audio.currentTime = 0;
    audio.play().catch(() => {});
  }

  function readJson(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw === null ? fallback : JSON.parse(raw);
    } catch (error) {
      return fallback;
    }
  }

  function writeJson(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function applyTheme(theme) {
    state.theme = theme === "dark" ? "dark" : "light";
    document.documentElement.dataset.theme = state.theme;
    const dark = state.theme === "dark";
    document.querySelector("meta[name='theme-color']").setAttribute(
      "content",
      dark ? "#14110E" : "#EFE8DC"
    );
    localStorage.setItem(STORAGE.theme, state.theme);
  }

  function applyMuted(muted) {
    state.muted = Boolean(muted);
    document.documentElement.dataset.muted = String(state.muted);
    dom.soundBtn.setAttribute("aria-pressed", String(!state.muted));
    dom.soundBtn.setAttribute("aria-label", state.muted ? "Unmute sound" : "Mute sound");
    localStorage.setItem(STORAGE.muted, String(state.muted));
  }

  function stopTimer() {
    if (state.startedAt !== null) {
      state.elapsedMs = currentElapsed();
      state.startedAt = null;
    }
    if (state.timerId !== null) {
      window.clearInterval(state.timerId);
      state.timerId = null;
    }
    renderTimer();
  }

  function startTimer() {
    if (state.locked || state.startedAt !== null) return;
    state.startedAt = Date.now();
    if (state.timerId === null) {
      state.timerId = window.setInterval(renderTimer, 250);
    }
  }

  function renderTimer() {
    if (state.locked && dom.winBanner.hidden === false) return;
    dom.timer.textContent = formatTime(currentElapsed());
  }

  function emptyCells(size) {
    return Array.from({ length: size * size }, () => EMPTY);
  }

  function isSolved() {
    const { size, filled } = state.puzzle;
    const filledSet = new Set(filled);
    for (let index = 0; index < size * size; index += 1) {
      if (filledSet.has(index) !== (state.cells[index] === FILL)) return false;
    }
    return true;
  }

  function nextStateFor(current, tool) {
    if (tool === "fill") return current === FILL ? EMPTY : FILL;
    return current === MARK ? EMPTY : MARK;
  }

  function paintCell(index, value, { sound } = { sound: true }) {
    if (state.locked) return false;
    const previous = state.cells[index];
    if (previous === value) return false;
    state.cells[index] = value;
    const node = dom.board.querySelector(`[data-index="${index}"]`);
    if (node) renderCell(node, value);
    if (sound) {
      if (value === FILL) playSound("click");
      else if (value === MARK) playSound("cross");
      else playSound("clear");
    }
    return true;
  }

  function renderCell(node, value) {
    node.classList.toggle("is-fill", value === FILL);
    node.classList.toggle("is-mark", value === MARK);
  }

  function setHot(row, col) {
    dom.board.querySelectorAll(".is-hot").forEach((node) => node.classList.remove("is-hot"));
    if (row === null && col === null) return;
    dom.board.querySelectorAll("[data-row], [data-col]").forEach((node) => {
      const matchRow = row !== null && node.dataset.row === String(row);
      const matchCol = col !== null && node.dataset.col === String(col);
      if (node.classList.contains("clue-col") && matchCol) node.classList.add("is-hot");
      else if (node.classList.contains("clue-row") && matchRow) node.classList.add("is-hot");
      else if (node.classList.contains("cell") && (matchRow || matchCol)) node.classList.add("is-hot");
    });
  }

  function renderBoard() {
    const puzzle = state.puzzle;
    const { size } = puzzle;
    const clues = cluesFor(puzzle);
    const fragment = document.createDocumentFragment();

    dom.board.dataset.size = String(size);
    dom.board.classList.toggle("is-locked", state.locked);
    dom.board.replaceChildren();

    const corner = document.createElement("div");
    corner.className = "clue clue-corner";
    fragment.append(corner);

    clues.cols.forEach((values, col) => {
      const clue = document.createElement("div");
      clue.className = "clue clue-col";
      clue.dataset.col = String(col);
      if ((col + 1) % 5 === 0 && col !== size - 1) clue.classList.add("is-block-x");
      values.forEach((value) => {
        const line = document.createElement("span");
        line.textContent = String(value);
        clue.append(line);
      });
      fragment.append(clue);
    });

    for (let row = 0; row < size; row += 1) {
      const rowClue = document.createElement("div");
      rowClue.className = "clue clue-row";
      rowClue.dataset.row = String(row);
      if ((row + 1) % 5 === 0 && row !== size - 1) rowClue.classList.add("is-block-y");
      clues.rows[row].forEach((value) => {
        const item = document.createElement("span");
        item.textContent = String(value);
        rowClue.append(item);
      });
      fragment.append(rowClue);

      for (let col = 0; col < size; col += 1) {
        const index = row * size + col;
        const cell = document.createElement("button");
        cell.type = "button";
        cell.className = "cell";
        cell.dataset.index = String(index);
        cell.dataset.row = String(row);
        cell.dataset.col = String(col);
        cell.setAttribute("role", "gridcell");
        cell.setAttribute("aria-label", `Row ${row + 1}, column ${col + 1}`);
        if ((col + 1) % 5 === 0 && col !== size - 1) cell.classList.add("is-block-x");
        if ((row + 1) % 5 === 0 && row !== size - 1) cell.classList.add("is-block-y");
        renderCell(cell, state.cells[index]);
        fragment.append(cell);
      }
    }

    dom.board.append(fragment);
    scheduleFitBoard();
  }

  function renderChrome() {
    const puzzle = state.puzzle;
    dom.puzzleName.textContent = puzzle.name;
    dom.puzzleMeta.textContent = `${DIFFICULTY_LABEL[puzzle.difficulty]} · ${puzzle.size}×${puzzle.size}`;

    document.querySelectorAll("[data-difficulty]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.difficulty === puzzle.difficulty);
    });
    document.querySelectorAll("[data-tool]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.tool === state.tool);
    });

    const list = puzzlesByDifficulty(puzzle.difficulty);
    dom.puzzleNav.replaceChildren(
      ...list.map((item) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "puzzle-btn";
        button.dataset.id = item.id;
        if (item.id === puzzle.id) button.classList.add("is-active");
        button.innerHTML = `<span class="puzzle-btn-name">${item.name}</span><span class="puzzle-btn-size">${item.size}×${item.size}</span>`;
        return button;
      })
    );

    const save = readJson(STORAGE.save, null);
    dom.continueBtn.hidden = !(save && findPuzzle(save.id));
    renderTimer();
    scheduleFitBoard();
  }

  function loadPuzzle(puzzle, { cells, elapsedMs, locked } = {}) {
    stopTimer();
    state.puzzle = puzzle;
    state.cells = cells ? cells.slice() : emptyCells(puzzle.size);
    state.elapsedMs = elapsedMs || 0;
    state.startedAt = null;
    state.locked = Boolean(locked);
    state.paint = null;
    dom.winBanner.hidden = true;
    renderBoard();
    renderChrome();
  }

  function recordScore() {
    const scores = readJson(STORAGE.scores, []);
    scores.unshift({
      id: state.puzzle.id,
      name: state.puzzle.name,
      difficulty: state.puzzle.difficulty,
      ms: currentElapsed(),
      at: Date.now(),
    });
    writeJson(STORAGE.scores, scores.slice(0, 5));
  }

  function handleWin() {
    if (state.locked) return;
    state.locked = true;
    stopTimer();
    dom.board.classList.add("is-locked");
    dom.winBanner.hidden = false;
    dom.winBanner.textContent = `Solved ${state.puzzle.name} in ${formatTime(state.elapsedMs)}.`;
    playSound("win");
    recordScore();
    const save = readJson(STORAGE.save, null);
    if (save && save.id === state.puzzle.id) {
      localStorage.removeItem(STORAGE.save);
      renderChrome();
    }
  }

  function checkWin() {
    if (!state.locked && isSolved()) handleWin();
  }

  function toolFromEvent(event) {
    if (event.pointerType === "mouse" && event.button === 2) {
      return state.tool === "fill" ? "mark" : "fill";
    }
    return state.tool;
  }

  function nodeFromPoint(x, y, selector) {
    const node = document.elementFromPoint(x, y);
    return node && node.closest ? node.closest(selector) : null;
  }

  function onPointerDown(event) {
    const cell = event.target.closest("[data-index]");
    if (!cell || state.locked) return;
    if (event.pointerType === "mouse" && event.button !== 0 && event.button !== 2) return;
    event.preventDefault();
    startTimer();
    const index = Number(cell.dataset.index);
    const value = nextStateFor(state.cells[index], toolFromEvent(event));
    paintCell(index, value, { sound: true });
    state.paint = { pointerId: event.pointerId, value };
    checkWin();
  }

  function onPointerMove(event) {
    const hover = nodeFromPoint(event.clientX, event.clientY, "[data-row], [data-col]");
    if (hover && dom.board.contains(hover)) {
      setHot(
        hover.dataset.row === undefined ? null : Number(hover.dataset.row),
        hover.dataset.col === undefined ? null : Number(hover.dataset.col)
      );
    } else {
      setHot(null, null);
    }
    if (!state.paint) return;
    const cell = nodeFromPoint(event.clientX, event.clientY, "[data-index]");
    if (!cell || state.locked) return;
    const index = Number(cell.dataset.index);
    if (paintCell(index, state.paint.value, { sound: false })) checkWin();
  }

  function onPointerUp(event) {
    if (state.paint && state.paint.pointerId === event.pointerId) state.paint = null;
  }

  function onKeyDown(event) {
    const cell = event.target.closest("[data-index]");
    if (!cell || state.locked) return;
    const size = state.puzzle.size;
    const index = Number(cell.dataset.index);
    const row = Math.floor(index / size);
    const col = index % size;
    let next = null;
    if (event.key === "ArrowRight") next = row * size + Math.min(size - 1, col + 1);
    if (event.key === "ArrowLeft") next = row * size + Math.max(0, col - 1);
    if (event.key === "ArrowDown") next = Math.min(size - 1, row + 1) * size + col;
    if (event.key === "ArrowUp") next = Math.max(0, row - 1) * size + col;
    if (next !== null) {
      event.preventDefault();
      const node = dom.board.querySelector(`[data-index="${next}"]`);
      if (node) node.focus();
      return;
    }
    if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
      startTimer();
      paintCell(index, nextStateFor(state.cells[index], "fill"), { sound: true });
      checkWin();
    }
    if (event.key.toLowerCase() === "x") {
      event.preventDefault();
      startTimer();
      paintCell(index, nextStateFor(state.cells[index], "mark"), { sound: true });
      checkWin();
    }
  }

  function saveGame() {
    writeJson(STORAGE.save, {
      id: state.puzzle.id,
      cells: state.cells,
      elapsedMs: currentElapsed(),
    });
    const label = dom.saveBtn.textContent;
    dom.saveBtn.textContent = "Saved";
    window.setTimeout(() => {
      dom.saveBtn.textContent = label;
    }, 1100);
    renderChrome();
  }

  function continueGame() {
    const save = readJson(STORAGE.save, null);
    const puzzle = save && findPuzzle(save.id);
    if (!puzzle) return;
    loadPuzzle(puzzle, {
      cells: save.cells,
      elapsedMs: save.elapsedMs,
    });
    if (save.cells.some((value) => value !== EMPTY)) startTimer();
  }

  function resetGame() {
    loadPuzzle(state.puzzle);
  }

  function randomGame() {
    const pool = PUZZLES.filter((puzzle) => puzzle.id !== state.puzzle.id);
    const next = pool[Math.floor(Math.random() * pool.length)];
    loadPuzzle(next);
  }

  function solveGame() {
    stopTimer();
    const filledSet = new Set(state.puzzle.filled);
    state.cells = state.cells.map((_, index) => (filledSet.has(index) ? FILL : EMPTY));
    state.locked = true;
    dom.winBanner.hidden = true;
    renderBoard();
    renderChrome();
  }

  function renderScores() {
    const scores = readJson(STORAGE.scores, []).slice().sort((a, b) => a.ms - b.ms);
    if (scores.length === 0) {
      dom.scoresBody.innerHTML = `<p class="scores-empty">No solves yet. Finish a picture to land on the board.</p>`;
      return;
    }
    const rows = scores
      .map(
        (entry, index) =>
          `<tr><td>${index + 1}</td><td>${entry.name}</td><td>${DIFFICULTY_LABEL[entry.difficulty]}</td><td>${formatTime(entry.ms)}</td></tr>`
      )
      .join("");
    dom.scoresBody.innerHTML = `<table class="scores-table"><thead><tr><th>#</th><th>Puzzle</th><th>Level</th><th>Time</th></tr></thead><tbody>${rows}</tbody></table>`;
  }

  function updateHint() {
    const narrow = window.matchMedia("(max-width: 640px)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    dom.hint.textContent =
      coarse || narrow
        ? "Tap to paint · switch to Mark for crosses · drag across cells"
        : "Left click fills · right click marks · drag to paint";
  }

  function fitBoard() {
    const puzzle = state.puzzle;
    const scroller = dom.board.parentElement;
    if (!puzzle || !scroller) return;
    const size = puzzle.size;
    const availableW = scroller.clientWidth;
    if (availableW <= 0) return;

    const desktop = window.matchMedia("(min-width: 841px)").matches;
    const availableH = scroller.clientHeight;
    const border = 4;

    const clueMin = size === 5 ? 44 : size === 10 ? 48 : 44;
    const clueMax = size === 5 ? 72 : size === 10 ? 80 : 68;
    let clue = Math.round(
      Math.min(clueMax, Math.max(clueMin, availableW * (size === 15 ? 0.16 : 0.18)))
    );

    const min = size === 15 ? 14 : size === 10 ? 18 : 24;
    const max = size === 5 ? (availableW < 480 ? 40 : desktop ? 48 : 52) : size === 10 ? 32 : 22;

    let cell = Math.floor((availableW - clue - border) / size);
    if (desktop && availableH > 40) {
      const cellFromH = Math.floor((availableH - clue - border) / size);
      cell = Math.min(cell, cellFromH);
      clue = Math.min(clue, availableW - size * Math.max(cell, min) - border);
      clue = Math.min(clue, availableH - size * Math.max(cell, min) - border);
      clue = Math.max(36, clue);
      cell = Math.min(
        cell,
        Math.floor((availableW - clue - border) / size),
        Math.floor((availableH - clue - border) / size)
      );
    }

    cell = Math.max(min, Math.min(max, cell));

    dom.board.style.setProperty("--cell", `${cell}px`);
    dom.board.style.setProperty("--clue-col", `${clue}px`);
    dom.board.style.setProperty("--clue-row", `${clue}px`);
  }

  function scheduleFitBoard() {
    fitBoard();
    requestAnimationFrame(fitBoard);
  }

  function bind() {
    document.querySelectorAll("[data-difficulty]").forEach((button) => {
      button.addEventListener("click", () => {
        const first = puzzlesByDifficulty(button.dataset.difficulty)[0];
        if (first) loadPuzzle(first);
      });
    });

    document.querySelectorAll("[data-tool]").forEach((button) => {
      button.addEventListener("click", () => {
        state.tool = button.dataset.tool;
        renderChrome();
      });
    });

    dom.puzzleNav.addEventListener("click", (event) => {
      const button = event.target.closest("[data-id]");
      const puzzle = button && findPuzzle(button.dataset.id);
      if (puzzle) loadPuzzle(puzzle);
    });

    dom.board.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);
    dom.board.addEventListener("contextmenu", (event) => event.preventDefault());
    dom.board.addEventListener("keydown", onKeyDown);

    dom.themeBtn.addEventListener("click", () => {
      applyTheme(state.theme === "dark" ? "light" : "dark");
    });
    dom.soundBtn.addEventListener("click", () => applyMuted(!state.muted));
    dom.resetBtn.addEventListener("click", resetGame);
    dom.saveBtn.addEventListener("click", saveGame);
    dom.continueBtn.addEventListener("click", continueGame);
    dom.randomBtn.addEventListener("click", randomGame);
    dom.solveBtn.addEventListener("click", solveGame);
    dom.scoresBtn.addEventListener("click", () => {
      renderScores();
      dom.scoresDialog.showModal();
    });
    dom.scoresClose.addEventListener("click", () => dom.scoresDialog.close());
    dom.scoresDialog.addEventListener("click", (event) => {
      if (event.target === dom.scoresDialog) dom.scoresDialog.close();
    });

    window.addEventListener("resize", () => {
      scheduleFitBoard();
      updateHint();
    });
    window.addEventListener("orientationchange", () => {
      window.setTimeout(scheduleFitBoard, 120);
    });
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", scheduleFitBoard);
    }
  }

  function init() {
    const theme = localStorage.getItem(STORAGE.theme);
    applyTheme(theme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
    applyMuted(localStorage.getItem(STORAGE.muted) === "true");
    updateHint();
    bind();
    loadPuzzle(PUZZLES[0]);
  }

  init();
})();
