// pazzle

const game1 = {
  nameGame: "turtle",
  positionCell: [
    7, 9, 11, 13, 14, 15, 16, 17, 20, 21, 22, 25, 26, 27, 28, 29, 31, 35,
  ],
  level: "light",
  help: {
    0: "",
    1: "2 <br> 2",
    2: "3",
    3: "4",
    4: "3",
    5: "2 <br> 2",
    6: "1 <span>1</span> 1",
    12: "5",
    18: "3",
    24: "5",
    30: "1 <span>1</span>",
  },
};
const game2 = {
  nameGame: "chick",
  positionCell: [11, 14, 15, 17, 19, 21, 22, 23, 26, 27, 28, 29, 34],
  level: "light",
  help: {
    0: "",
    1: "1",
    2: "1 <br> 1",
    3: "3",
    4: "3",
    5: "4",
    6: "1",
    12: "2 <span>1</span>",
    18: "1 <span>3</span>",
    24: "4",
    30: "1",
  },
};
const game3 = {
  nameGame: "dinosaur",
  positionCell: [7, 8, 14, 16, 20, 21, 22, 23, 26, 27, 28, 32, 34],
  level: "light",
  help: {
    0: "",
    1: "1",
    2: "5",
    3: "2",
    4: "4",
    5: "1",
    6: "2",
    12: "1<span> 1</span>",
    18: "4",
    24: "3",
    30: "1<span> 1</span>",
  },
};
const game4 = {
  nameGame: "snake",
  positionCell: [8, 9, 10, 11, 17, 19, 20, 21, 22, 23, 25, 27, 32],
  level: "light",
  help: {
    0: "",
    1: "2",
    2: "1  <br>  1 <br> 1",
    3: "1  <br>  2",
    4: "1  <br>  1",
    5: "3",
    6: "4",
    12: "1",
    18: "5",
    24: "1 <span>1</span>",
    30: "1",
  },
};
const game5 = {
  nameGame: "fly",
  positionCell: [9, 13, 15, 16, 20, 21, 22, 23, 25, 26, 27, 32, 34],
  level: "light",
  help: {
    0: "",
    1: "1  <br>  1 ",
    2: "3",
    3: "4",
    4: "2 <br> 1 ",
    5: "1",
    6: "1",
    12: "1 <span>2</span>",
    18: "4",
    24: "3",
    30: "1 <span>1</span>",
  },
};
const game6 = {
  nameGame: "snail",
  positionCell: [
    12, 13, 23, 24, 27, 28, 29, 30, 31, 35, 37, 38, 42, 43, 45, 46, 47, 48, 54,
    56, 59, 61, 62, 63, 65, 67, 68, 70, 72, 74, 76, 79, 81, 82, 83, 87, 90, 93,
    94, 95, 96, 97, 98, 101, 102, 109, 113, 114, 115, 116, 117, 118, 119,
  ],
  level: "medium",
  help: {
    0: "",
    1: "2 <br> 3",
    2: "4 <br> 4",
    3: "1 <br> 2",
    4: "5 <br> 1",
    5: "2 <br> 2 <br> 1",
    6: "1 <br> 4 <br> 1",
    7: "1 <br> 1 <br> 1 <br> 1",
    8: "1 <br> 2 <br> 1 <br> 1",
    9: "2 <br> 1 <br> 1 ",
    10: "7",
    11: "2",
    22: "2<span>5</span>",
    33: "1 <span>2 </span>2",
    44: "4 <span>1</span>",
    55: "1 <span>1</span> 3 <span>1</span>",
    66: "2 <span>1</span>1 <span>1</span> 1",
    77: "1 <span>3</span> 1",
    88: "1 <span>6</span>",
    99: "2 <span>1</span>",
    110: "7",
  },
};
const game7 = {
  nameGame: "cat",
  positionCell: [
    13, 15, 24, 25, 26, 34, 35, 36, 37, 38, 45, 46, 47, 48, 49, 58, 69, 76, 80,
    87, 91, 92, 97, 98, 102, 103, 104, 108, 112, 113, 114, 115, 116, 117, 118,
    119,
  ],
  level: "medium",
  help: {
    0: "",
    1: "2",
    2: "4 <br> 1",
    3: "9",
    4: "4 <br> 3",
    5: "2 <br> 2",
    6: "1",
    7: "1",
    8: "1",
    9: "3",
    10: "3",
    11: "1 <span>1 </span>",
    22: "3",
    33: "5",
    44: "5",
    55: "1",
    66: "1  <span>1 </span>",
    77: "1  <span>1 </span>",
    88: "2  <span>2 </span>",
    99: "3  <span>1 </span>",
    110: "8",
  },
};
const game8 = {
  nameGame: "swan",
  positionCell: [
    14, 15, 16, 24, 26, 27, 28, 34, 35, 36, 38, 39, 48, 49, 58, 59, 68, 69, 71,
    72, 73, 74, 75, 76, 78, 79, 81, 82, 83, 85, 87, 89, 90, 91, 92, 93, 95, 97,
    100, 101, 102, 103, 107, 108, 112, 113, 114, 115, 116, 117, 118,
  ],
  level: "medium",
  help: {
    0: "",
    1: "1 <br> 3",
    2: "2 <br> 5",
    3: "1 <br> 1 <br> 2<br> 3",
    4: "2 <br> 2 <br> 4",
    5: "4 <br> 2 <br> 1",
    6: "2 <br> 2 <br> 1",
    7: "1 <br> 1 <br> 1",
    8: "3 <br> 2",
    9: "2 <br> 2",
    10: "1 <br> 2",
    11: "3",
    22: "1  <span>3 </span>",
    33: "3  <span>2 </span>",
    44: "2  <span>1 </span>",
    55: "2  <span>2 </span>",
    66: "2  <span>6 </span>",
    77: "2  <span>3 </span> 1  <span>1 </span>",
    88: "5  <span>1 </span> 1",
    99: "4  <span>2 </span>",
    110: "7",
  },
};
const game9 = {
  nameGame: "fish",
  positionCell: [
    17, 18, 19, 20, 21, 25, 26, 27, 28, 32, 35, 36, 37, 38, 41, 43, 47, 49, 54,
    58, 61, 62, 63, 64, 65, 69, 74, 75, 78, 79, 80, 83, 84, 89, 90, 91, 92, 93,
    101, 102, 113,
  ],
  level: "medium",
  help: {
    0: "",
    1: "2",
    2: "1 <br> 3",
    3: "9",
    4: "2 <br> 3",
    5: "3 <br> 1",
    6: "2 <br> 1 <br> 1",
    7: "1 <br> 1 <br> 1",
    8: "1 <br> 1 <br> 3",
    9: "1 <br> 2",
    10: "5",
    11: "5",
    22: "4  <span>1 </span>",
    33: "4  <span>1 </span> 1",
    44: "1  <span>1 </span> 1",
    55: "1 <span> 5 </span>",
    66: "1  <span>2 </span>",
    77: "3  <span>2 </span>",
    88: "6",
    99: "3",
    110: "2",
  },
};
const game10 = {
  nameGame: "puppy",
  positionCell: [
    15, 26, 36, 37, 38, 45, 46, 47, 48, 49, 56, 57, 58, 59, 60, 61, 64, 70, 71,
    72, 73, 76, 81, 82, 83, 84, 85, 87, 92, 93, 94, 95, 96, 97, 98, 104, 106,
    107, 108, 109, 114, 115, 116, 117, 118, 119,
  ],
  level: "medium",
  help: {
    0: "",
    1: "2",
    2: "2",
    3: "3",
    4: "8 <br> 1",
    5: "8",
    6: "4 <br> 1",
    7: "5",
    8: "4",
    9: "3",
    10: "4",
    11: "1",
    22: "1",
    33: "3",
    44: "5",
    55: "6  <span>1 </span>",
    66: "4  <span>1 </span>",
    77: "5  <span>1 </span>",
    88: "7",
    99: "1  <span>4 </span>",
    110: "6",
  },
};

const game11 = {
  nameGame: "mouse",
  positionCell: [
    23, 24, 25, 27, 28, 33, 39, 42, 43, 44, 45, 50, 56, 58, 59, 60, 62, 63, 66,
    73, 74, 75, 76, 77, 78, 79, 82, 89, 90, 91, 92, 93, 94, 98, 103, 104, 105,
    106, 107, 108, 113, 117, 118, 119, 120, 121, 122, 123, 124, 129, 132, 133,
    134, 135, 136, 137, 138, 139, 141, 145, 147, 148, 149, 150, 151, 152, 153,
    154, 155, 156, 158, 161, 163, 164, 165, 166, 167, 170, 173, 177, 179, 180,
    181, 182, 184, 185, 193, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211,
    212, 213, 214, 215, 216, 217, 218, 228, 229, 230, 231, 232, 233, 245, 246,
    247, 248, 249, 250, 251,
  ],
  level: "hight",
  help: {
    0: "",
    1: "1 <br> 6",
    2: "4 <br> 1",
    3: "5",
    4: "7",
    5: "9",
    6: "9",
    7: "2 <br> 5 <br> 4",
    8: "1 <br> 1 <br> 4 <br> 5",
    9: "1 <br> 6 <br> 5",
    10: "9 <br> 2 <br> 1",
    11: "9 <br> 1",
    12: "7 <br> 1",
    13: "1 <br> 2 <br> 1 <br> 1",
    14: "3 <br> 1 ",
    15: "2",
    16: "3  <span>2 </span>",
    32: "1 <span> 1 </span> 4",
    48: "1  <span>1 </span> 3  <span>2 </span>",
    64: "1  <span>7 </span>",
    80: "1  <span>6 </span>",
    96: "1  <span>6 </span>",
    112: "1  <span>8 </span>",
    128: "1  <span>8 </span> 1",
    144: "1  <span>10 </span> 1",
    160: "1  <span>5 </span> 1  <span>1 </span>",
    176: "1  <span>4 </span> 2",
    192: "1  <span>8 </span>",
    208: "9",
    224: "6",
    240: "7",
  },
};
const game12 = {
  nameGame: "bird",
  positionCell: [
    18, 34, 36, 50, 51, 52, 66, 67, 68, 83, 84, 100, 113, 114, 122, 123, 124,
    125, 129, 130, 131, 132, 133, 137, 138, 141, 142, 146, 147, 148, 149, 150,
    151, 152, 159, 163, 164, 165, 166, 167, 168, 169, 175, 178, 180, 181, 182,
    183, 184, 185, 189, 191, 195, 197, 198, 199, 200, 212, 222, 223, 228, 229,
    236, 238, 245, 246, 247, 248, 249, 250, 251,
  ],
  level: "hight",
  help: {
    0: "",
    1: "2",
    2: "4 <br> 3 <br> 1",
    3: "3 <br> 3 <br> 1",
    4: "5 <br> 4 <br> 2",
    5: "5 <br> 2",
    6: "4 <br> 1",
    7: "4 <br> 1",
    8: "4 <br> 1",
    9: "1 <br> 2 <br> 1",
    10: "2 <br> 1",
    11: "1 <br> 3",
    12: "1 <br> 1",
    13: "2 <br> 1",
    14: "1 <br> 2",
    15: "3 <br> 1",
    16: "1",
    32: "1  <span>1 </span>",
    48: "3",
    64: "3",
    80: "2",
    96: "1",
    112: "2 <span>4 </span>",
    128: "5  <span>2 </span> 2",
    144: "7  <span>1 </span>",
    160: "7  <span>1 </span>",
    176: "1  <span>6  </span>1  <span>1 </span>",
    192: "1  <span>4 </span>",
    208: "1  <span>1 </span>2",
    224: "2  <span>2 </span> 1",
    240: "7",
  },
};
const game13 = {
  nameGame: "butterfly",
  positionCell: [
    17, 21, 22, 26, 27, 31, 33, 34, 35, 38, 42, 45, 46, 47, 49, 50, 51, 52, 54,
    55, 57, 58, 60, 61, 62, 63, 65, 66, 67, 68, 71, 72, 73, 76, 77, 78, 79, 81,
    82, 83, 84, 85, 88, 91, 92, 93, 94, 95, 98, 99, 100, 101, 103, 104, 105,
    107, 108, 109, 110, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125,
    131, 132, 133, 134, 136, 138, 139, 140, 141, 146, 151, 152, 153, 158, 164,
    165, 166, 168, 170, 171, 172, 179, 180, 181, 183, 184, 185, 187, 188, 189,
    195, 196, 197, 199, 200, 201, 203, 204, 205, 211, 212, 213, 216, 219, 220,
    221, 227, 228, 236, 237, 245, 251,
  ],
  level: "hight",
  help: {
    0: "",
    1: "5",
    2: "5 <br> 1",
    3: "7 <br> 4",
    4: "6 <br> 6",
    5: "1 <br> 4 <br> 4",
    6: "3 <br> 2 <br> 1",
    7: "2 <br> 2 <br> 1 <br> 2",
    8: "10",
    9: "2 <br> 2 <br> 1 <br> 2",
    10: "3 <br> 2 <br> 1",
    11: "1 <br> 4 <br> 4",
    12: "6 <br> 6",
    13: "7 <br> 4",
    14: "5 <br> 1",
    15: "5",
    16: "1  <span>2  </span>2  <span>1 </span>",
    32: "3  <span>1 </span> 1  <span>3 </span>",
    48: "4  <span>2 </span> 2  <span>4 </span>",
    64: "4  <span>3  </span>4",
    80: "5  <span>1 </span> 5",
    96: "4  <span>3  </span>4",
    112: "1  <span>1 </span>",
    128: "4  <span>1 </span> 1",
    144: "1  <span>3 </span> 1",
    160: "3  <span>1 </span> 3",
    176: "3  <span>3  </span>3",
    192: "3  <span>3 </span> 3",
    208: "3  <span>1 </span>3",
    224: "2  <span>2 </span>",
    240: "1  <span>1 </span>",
  },
};
const game14 = {
  nameGame: "octopus",
  positionCell: [
    25, 26, 27, 28, 40, 41, 42, 43, 44, 45, 56, 58, 60, 61, 67, 68, 69, 70, 71,
    72, 73, 74, 75, 76, 77, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 98, 103,
    104, 105, 106, 107, 108, 109, 113, 118, 119, 120, 121, 122, 123, 124, 125,
    126, 129, 132, 133, 134, 135, 137, 138, 139, 140, 141, 142, 147, 148, 149,
    153, 154, 157, 158, 159, 163, 168, 169, 174, 175, 179, 184, 190, 191, 196,
    200, 203, 204, 205, 206, 212, 216, 218, 227, 231, 234, 247,
  ],
  level: "hight",
  help: {
    0: "",
    1: "2",
    2: "2",
    3: "2 <br> 3 <br> 1",
    4: "2 <br> 2 <br> 2",
    5: "2 <br> 2",
    6: "2 <br> 2 <br> 2",
    7: "5 <br> 1",
    8: "6 <br> 4",
    9: "2 <br> 7",
    10: "9 <br> 2",
    11: "2 <br> 5 <br> 1",
    12: "8 <br> 1",
    13: "3 <br> 4 <br> 1",
    14: "6",
    15: "3",
    16: "4",
    32: "6",
    48: "1  <span>1 </span> 2",
    64: "1 <span> 1 </span>",
    80: "1  <span>1 </span>",
    96: "1  <span>7 </span>",
    112: "1  <span>9 </span>",
    128: "1  <span>4 </span> 6",
    144: "3  <span>2 </span> 3",
    160: "1  <span>2 </span> 2",
    176: "1  <span>1 </span> 2",
    192: "1  <span>1 </span> 4",
    208: "1  <span>2 </span> 1",
    224: "1  <span>1 </span> 1",
    240: "1",
  },
};
const game15 = {
  nameGame: "frog",
  positionCell: [
    20, 21, 22, 26, 27, 28, 35, 36, 38, 39, 41, 42, 44, 45, 51, 53, 55, 57, 59,
    61, 67, 68, 70, 71, 72, 73, 74, 76, 77, 84, 85, 86, 87, 88, 89, 90, 91, 92,
    99, 100, 108, 109, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124,
    125, 130, 142, 147, 157, 158, 163, 164, 172, 173, 180, 181, 182, 183, 184,
    185, 186, 187, 188, 193, 194, 195, 196, 204, 205, 206, 207, 209, 212, 220,
    223, 226, 227, 229, 232, 235, 237, 238, 241, 242, 243, 244, 245, 248, 251,
    252, 253, 254,
  ],
  level: "hight",
  help: {
    0: "",
    1: "2 <br> 1",
    2: "2 <br> 1 <br> 2",
    3: "3 <br> 2 <br> 2 <br> 1 <br> 2",
    4: "2 <br> 4 <br> 4 <br> 1",
    5: "1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 2",
    6: "2 <br> 2 <br> 1 <br> 1",
    7: "4 <br> 1 <br> 1",
    8: "2 <br> 1 <br> 1 <br> 2",
    9: "4 <br> 1  <br> 1",
    10: "2 <br> 2 <br> 1 <br> 1",
    11: "1 <br> 1 <br> 1 <br> 1 <br> 1 <br> 2",
    12: "2 <br> 4 <br> 4 <br> 1",
    13: "3 <br> 2 <br> 2 <br> 1 <br> 2",
    14: "2 <br> 1 <br> 2",
    15: "2",
    16: "3  <span>3 </span>",
    32: "2  <span>2 </span> 2  <span>2 </span>",
    48: "1  <span>1 </span> 1  <span>1 </span> 1  <span>1 </span>",
    64: "2  <span>5 </span> 2",
    80: "9",
    96: "2  <span>2 </span>",
    112: "12",
    128: "1  <span>1 </span>",
    144: "1  <span>2 </span>",
    160: "2 <span> 2 </span>",
    176: "9",
    192: "4  <span>4 </span>",
    208: "1  <span>1 </span> 1  <span>1 </span>",
    224: "2  <span>1 </span> 1 <span>1</span> 2",
    240: "5<span>1</span> 4",
  },
};
const gameOptionsLight = [game1, game2, game3, game4, game5];
const gameOptionsMedium = [game6, game7, game8, game9, game10];
const gameOptionsHight = [game11, game12, game13, game14, game15];

// create area for game

const nameWrapper = document.createElement("div"); //name wrapper
nameWrapper.className = "name-wrapper";
document.body.append(nameWrapper);

const nameGame = document.createElement("h1"); //name game
nameGame.className = "name-game";
nameGame.textContent = "Nonograms";
nameWrapper.appendChild(nameGame);

const menuTemplate = document.createElement("div"); // menu for choosing template
menuTemplate.className = "menu-game";
//menuTemplate.innerHTML = "<p>Choose theme</p>";
nameWrapper.append(menuTemplate);

btnDarkTemplate = document.createElement("button"); // dark template
btnDarkTemplate.className = "btn-menu";
btnDarkTemplate.textContent = "dark";
menuTemplate.append(btnDarkTemplate);

btnLightTemplate = document.createElement("button"); // light template
btnLightTemplate.className = "btn-menu";
btnLightTemplate.className = "btn-menu btn-menu_active";
btnLightTemplate.textContent = "bright";
menuTemplate.append(btnLightTemplate);

const muteSound = document.createElement("div"); // mute sound
muteSound.className = "sound-on";
nameWrapper.append(muteSound);

const gameWrapper = document.createElement("div"); //wrapper game
gameWrapper.className = "game-wrapper";
document.body.append(gameWrapper);

const menuLevel = document.createElement("div"); // menu for choosing level
menuLevel.className = "menu-game";
menuLevel.innerHTML = "<p>levels:</p>";
gameWrapper.append(menuLevel);

btnLightLevel = document.createElement("button"); // light level
btnLightLevel.className = "btn-menu btn-level btn-menu_active";
btnLightLevel.textContent = "light";
menuLevel.append(btnLightLevel);

btnMediumLevel = document.createElement("button"); // medium level
btnMediumLevel.className = "btn-menu btn-level";
btnMediumLevel.textContent = "medium";
menuLevel.append(btnMediumLevel);

btnHightLevel = document.createElement("button"); // hight level
btnHightLevel.className = "btn-menu btn-level";
btnHightLevel.textContent = "hight";
menuLevel.append(btnHightLevel);

//choose level

let menuGame;
let btnOption;

function chooseGame(level) {
  if (menuGame !== undefined) {
    while (menuGame.firstChild) {
      menuGame.removeChild(menuGame.firstChild);
    }
    menuGame.innerHTML = "<p>games:</p>";
  } else {
    menuGame = document.createElement("div"); // menu for choosing game
    menuGame.className = "menu-game";
    gameWrapper.append(menuGame);
  }

  if (level === "light") {
    gameOptions = gameOptionsLight;
  } else if (level === "medium") {
    gameOptions = gameOptionsMedium;
  } else if (level === "hight") {
    gameOptions = gameOptionsHight;
  }

  btnOption;
  for (let i = 0; i < 5; i = i + 1) {
    btnOption = document.createElement("button");
    btnOption.className = "btn-menu btn-options";
    if (i === 0) {
      btnOption.className = "btn-menu btn-menu_active btn-options";
    }
    menuGame.append(btnOption);
    btnOption.value = `${gameOptions[i].nameGame}`;
    btnOption.textContent = `${gameOptions[i].nameGame}`;
  }
}

chooseGame("light");

menuLevel.onclick = function (event) {
  if (event.target === btnLightLevel) {
    btnHightLevel.classList.remove("btn-menu_active");
    btnMediumLevel.classList.remove("btn-menu_active");
    btnLightLevel.classList.add("btn-menu_active");
    clearGame();
    chooseGame("light");
    startGame(game1, gameOptionsLight);
    listenToOptions(gameOptionsLight);
  }
  if (event.target === btnMediumLevel) {
    btnLightLevel.classList.remove("btn-menu_active");
    btnHightLevel.classList.remove("btn-menu_active");
    btnMediumLevel.classList.add("btn-menu_active");
    clearGame();
    chooseGame("medium");
    startGame(game6, gameOptionsMedium);
    listenToOptions(gameOptionsMedium);
  }

  if (event.target === btnHightLevel) {
    btnLightLevel.classList.remove("btn-menu_active");
    btnMediumLevel.classList.remove("btn-menu_active");
    btnHightLevel.classList.add("btn-menu_active");
    clearGame();
    chooseGame("hight");
    startGame(game11, gameOptionsHight);
    listenToOptions(gameOptionsHight);
  }
};



const menuActions = document.createElement("div"); // menu fo actions
menuActions.className = "menu-game";
gameWrapper.append(menuActions);

btnReset = document.createElement("button"); // reset game
btnReset.className = "btn-menu";
btnReset.textContent = "reset";
menuActions.append(btnReset);

btnSave = document.createElement("button"); // save game
btnSave.className = "btn-menu";
btnSave.textContent = "save";
menuActions.append(btnSave);

// localStorage.clear();

btnRandom = document.createElement("button"); // random game
btnRandom.className = "btn-menu";
btnRandom.textContent = "random";
menuActions.append(btnRandom);

btnSolution = document.createElement("button"); // solution
btnSolution.className = "btn-menu";
btnSolution.textContent = "solution";
menuActions.append(btnSolution);

btnResults = document.createElement("button"); // show last 5 result
btnResults.className = "btn-menu";
btnResults.textContent = "last results";
menuActions.append(btnResults);

const modalBg = document.createElement("div");
document.body.append(modalBg);
modalBg.className = "modal-bg";
const modal = document.createElement("div");
modalBg.appendChild(modal);
modal.className = "modal";

const closeModal = document.createElement("span");
closeModal.className = "close-modal";
closeModal.innerHTML = "&times;";
modal.appendChild(closeModal);
const tableResults = document.createElement("table");
modal.appendChild(tableResults);

const fieldGame = document.createElement("div"); // field for game
fieldGame.className = "field";
gameWrapper.appendChild(fieldGame);

const timer = document.createElement("div"); // timer
timer.className = "timer";
gameWrapper.appendChild(timer);
timer.textContent = "00:00";

// create cells and help cells for 5x5

function createFieldCellsFive(game) {
  fieldGame.style.gridTemplateColumns = "60px repeat(5, 30px)";
  fieldGame.style.gridTemplateRows = "60px repeat(5, 30px)";
  for (let i = 0; i < 36; i = i + 1) {
    const fieldCell = document.createElement("div");
    fieldCell.className = "field-cell";
    fieldCell.id = `${i}`;
    fieldGame.appendChild(fieldCell);
    if (i >= 0 && i < 6) {
      fieldCell.className = "field-cell help-cell help-cell_top";
    }
    if (i % 6 === 0) {
      fieldCell.className = "field-cell help-cell help-cell_left";
    }
    if (i === 0) {
      fieldCell.className = "field-cell help-cell help-cell_left help-cell_top";
    }
    if ((i >= 0 && i < 6) || i % 6 === 0) {
      for (let y = 0; y < Object.keys(game.help).length; y = y + 1) {
        fieldCell.innerHTML = `${game.help[i]}`;
      }
    }
  }
}

// create cells and help cells for 10x10

function createFieldCellsTen(game) {
  if (window.screen.width>=500){
    fieldGame.style.gridTemplateColumns = "80px repeat(10, 30px)";
  fieldGame.style.gridTemplateRows = "90px repeat(10, 30px)";
  } else if (window.screen.width<500){
  fieldGame.style.gridTemplateColumns = "80px repeat(10, 25px)";
  fieldGame.style.gridTemplateRows = "90px repeat(10, 25px)";
  }
  for (let i = 0; i < 121; i = i + 1) {
    const fieldCell = document.createElement("div");
    fieldCell.className = "field-cell";
    fieldCell.id = `${i}`;
    fieldGame.appendChild(fieldCell);
    if (i >= 0 && i < 11) {
      fieldCell.className = "field-cell help-cell help-cell_top";
    }
    if (i % 11 === 0) {
      fieldCell.className = "field-cell help-cell help-cell_left";
    }
    if (i > 11 && (i + 6) % 11 === 0) {
      fieldCell.className = "field-cell cell_middle_right";
    }
    if (i > 55 && i < 66) {
      fieldCell.className = "field-cell cell_middle_bottom";
    }
    if (i === 60) {
      fieldCell.className = "field-cell cell_middle_bottom cell_middle_right";
    }
    if (i === 0) {
      fieldCell.className = "field-cell help-cell help-cell_left help-cell_top";
    }
    if ((i >= 0 && i < 11) || i % 11 === 0) {
      for (let y = 0; y < Object.keys(game.help).length; y = y + 1) {
        fieldCell.innerHTML = `${game.help[i]}`;
      }
    }
  }
}

// create cells and help cells for 15x15

function createFieldCellsFifteen(game) {
  
 
  if (window.screen.width>=500){
  fieldGame.style.gridTemplateColumns = "110px repeat(15, 23px)";
  fieldGame.style.gridTemplateRows = "130px repeat(15, 23px)";
  let style = document.createElement('style');
  style.innerHTML = `
    .cross-cell::after {
      margin-left: 2px;
    }
  `;
  document.head.appendChild(style);
}
  else if (window.screen.width<500){
    fieldGame.style.gridTemplateColumns = "90px repeat(15, 18px)";
    fieldGame.style.gridTemplateRows = "90px repeat(15, 18px)";
  }
  for (let i = 0; i < 256; i = i + 1) {
    const fieldCell = document.createElement("div");
    fieldCell.className = "field-cell";
    fieldCell.id = `${i}`;
    fieldGame.appendChild(fieldCell);
    if (i >= 0 && i < 16) {
      fieldCell.className = "field-cell help-cell help-cell_top";
    }
    if (i % 16 === 0) {
      fieldCell.className = "field-cell help-cell help-cell_left";
    }
    if ((i > 16 && (i + 6) % 16 === 0) || (i > 16 && (i + 11) % 16 === 0)) {
      fieldCell.className = "field-cell cell_middle_right";
    }
    if ((i > 80 && i < 96) || (i > 160 && i < 176)) {
      fieldCell.className = "field-cell cell_middle_bottom";
    }
    if (i === 85 || i === 90 || i === 165 || i === 170) {
      fieldCell.className = "field-cell cell_middle_bottom cell_middle_right";
    }
    if (i === 0) {
      fieldCell.className = "field-cell help-cell help-cell_left help-cell_top";
    }
    if ((i >= 0 && i < 16) || i % 16 === 0) {
      for (let y = 0; y < Object.keys(game.help).length; y = y + 1) {
        fieldCell.innerHTML = `${game.help[i]}`;
      }
    }
  }
}

//timer

let seconds = 1;
let clickWas = true;
let minutes = 0;
let secText = "";
let minText = "";

function timerCount() {
  changeSecondsToMin();

  timer.textContent = `${minText}:${secText}`;
  seconds = seconds + 1;
}

function changeSecondsToMin() {
  minutes = Math.trunc(seconds / 60);
  secondsFromMinutes = Math.round((seconds / 60 - minutes) * 60);

  if (secondsFromMinutes < 10) {
    secText = `0${secondsFromMinutes}`;
  } else if (secondsFromMinutes >= 10 && secondsFromMinutes < 60) {
    secText = `${secondsFromMinutes}`;
  }
  if (minutes === 0) {
    minText = `00`;
  } else if (minutes > 0 && minutes < 10) {
    minText = `0${minutes}`;
  } else if (minutes >= 10) {
    minText = `${minutes}`;
  }
}

//stopGame

function stopGame() {
  audioAdd("win.mp3");
  timer.textContent = `Great! You have solved the nonogram in ${seconds} seconds!`;
  clearInterval(intervalID, 1000);
}

//add audio
let muted = true;
function audioAdd(src) {
  if(muted === true){
  const audio = new Audio();
  audio.autoplay = true;
  audio.volume = 0.3;
  audio.src = `${src}`;
  } 
}

// add-remove cross cell

fieldGame.addEventListener("contextmenu", {
  handleEvent(event) {
    if (clickWas === true) {
      intervalID = setInterval(timerCount, 1000);
      clickWas = false;
    }
    event.preventDefault();
    let cell = event.target.closest(".field-cell");
    if (cell.classList.contains("open-cell")) {
      cell.classList.remove("open-cell");
    }
    if (cell.classList.contains("guessed-cell")) {
      cell.classList.remove("guessed-cell");
    }
    if (cell.classList.contains("cross-cell")) {
      cell.classList.remove("cross-cell");
    audioAdd("clear.mp3");

    } else if (!cell.classList.contains("help-cell")){
      
      cell.classList.add("cross-cell");
      audioAdd("cross.mp3");
    }
  },
});

//start game and guessing

let intervalID;
let openCell;
let guessedCell;
let openCells;
let guessedCells;
let crossCells;
let time;
let btnContinue;
let index = 1;

let btnLevelOptions;

function startGame(game, btnLevelOptions, continueGameTrue) {
  fieldGame.style.pointerEvents = "all";
  if (
    btnLevelOptions === gameOptionsLight ||
    btnLevelOptions === undefined ||
    btnLevelOptions === "light"
  ) {
    createFieldCellsFive(game);
  } else if (
    btnLevelOptions === gameOptionsMedium ||
    btnLevelOptions === "medium"
  ) {
    createFieldCellsTen(game);
  } else if (
    btnLevelOptions === gameOptionsHight ||
    btnLevelOptions === "hight"
  ) {
    createFieldCellsFifteen(game);
  }

  if (
    JSON.parse(localStorage.getItem("game")) !== null &&
    continueGameTrue === true
  ) {
    openCells = JSON.parse(localStorage.getItem("openCells")); // get arr id open cells
    for (i = 0; i < openCells.length; i = i + 1) {
      let id = document.getElementById(`${openCells[i]}`);
      id.classList.add("open-cell");
    }

    guessedCells = JSON.parse(localStorage.getItem("guessedCells")); // get arr id guessed cells
    for (i = 0; i < guessedCells.length; i = i + 1) {
      let id = document.getElementById(`${guessedCells[i]}`);
      id.classList.add("guessed-cell");
    }

    crossCells = JSON.parse(localStorage.getItem("crossCells")); // get arr id guessed cells
    for (i = 0; i < crossCells.length; i = i + 1) {
      let id = document.getElementById(`${crossCells[i]}`);
      id.classList.add("cross-cell");
    }
    seconds = JSON.parse(localStorage.getItem("time"));

    let levelsBtn = document.querySelectorAll(".btn-level");
    levelsBtn.forEach((element) => {
      element.classList.remove("btn-menu_active");
      if (element.textContent === game.level) {
        element.classList.add("btn-menu_active");
      }
    });

    chooseGame(game.level);

    let optionsBtn = document.querySelectorAll(".btn-options");
    optionsBtn.forEach((element) => {
      element.classList.remove("btn-menu_active");
      if (element.textContent === game.nameGame) {
        element.classList.add("btn-menu_active");
      }
    });
    if (game.level === "light") {
      btnLevelOptions = gameOptionsLight;
    } else if (game.level === "medium") {
      btnLevelOptions = gameOptionsMedium;
    } else if (game.level === "hight") {
      btnLevelOptions = gameOptionsHight;
    }
    listenToOptions(btnLevelOptions);
  }

  fieldGame.onclick = function (event) {
    if (clickWas === true) {
      intervalID = setInterval(timerCount, 1000);
      clickWas = false;
    }

    let cell = event.target.closest(".field-cell");

    if (cell.classList.contains("cross-cell")) {
      cell.classList.remove("cross-cell");
    }
    if (cell.classList.contains("open-cell")) {
      cell.classList.remove("open-cell");
      audioAdd("clear.mp3");
    } else if (!cell.classList.contains("help-cell")){
      cell.classList.add("open-cell");
      audioAdd("click.mp3");
    }
    let cellNumber = cell.id;
    let i;
    for (i = 0; i < Object.keys(game.positionCell).length; i = i + 1) {
      if (cellNumber === String(game.positionCell[i])) {
        cell.classList.toggle("guessed-cell");
      }
    }
    openCell = document.querySelectorAll(".open-cell");
    guessedCell = document.querySelectorAll(".guessed-cell");
    if (
      guessedCell.length === openCell.length &&
      openCell.length === Object.keys(game.positionCell).length
    ) {
      if (
        JSON.parse(localStorage.getItem("game")) !== null &&
        JSON.parse(localStorage.getItem("game")).nameGame === game.nameGame
      ) {
        localStorage.setItem("continueGame", "stopContinue");
        btnContinue.remove();
      }
      audioAdd("win.mp3");
      stopGame();
      fieldGame.style.pointerEvents = "none";

      if (localStorage.getItem("index") !== null) {
        index = Number(localStorage.getItem("index"));
      } else {
        index = 1;
      }

      if (index > 5) {
        localStorage.removeItem(`gameGuessed${index - 5}`);
        localStorage.removeItem(`levelGuessed${index - 5}`);
        localStorage.removeItem(`timeGuessed${index - 5}`);
        index = 1;
      }

      localStorage.setItem(`gameGuessed${index}`, game.nameGame);
      localStorage.setItem(`levelGuessed${index}`, game.level);
      localStorage.setItem(`timeGuessed${index}`, seconds);
      index = index + 1;
      localStorage.setItem("index", index);
    }
  };

  //save game

  btnSave.onclick = function () {
    if (btnContinue) {
      btnContinue.remove();
    }
    btnContinue = document.createElement("button"); // continue game
    btnContinue.className = "btn-menu";
    btnContinue.textContent = "continue a game";
    menuActions.append(btnContinue);

    openCells = document.querySelectorAll(".open-cell");
    let openCellsId = [];
    openCells.forEach((element) => {
      openCellsId.push(element.id);
    });
    guessedCells = document.querySelectorAll(".guessed-cell");
    let guessedCellsId = [];
    guessedCells.forEach((element) => {
      guessedCellsId.push(element.id);
    });
    crossCells = document.querySelectorAll(".cross-cell");
    let crossCellsId = [];
    crossCells.forEach((element) => {
      crossCellsId.push(element.id);
    });
    time = seconds;

    clearInterval(intervalID, 1000);

    localStorage.setItem("openCells", JSON.stringify(openCellsId));
    localStorage.setItem("guessedCells", JSON.stringify(guessedCellsId));
    localStorage.setItem("crossCells", JSON.stringify(crossCellsId));
    localStorage.setItem("game", JSON.stringify(game));
    localStorage.setItem("time", JSON.stringify(time));
    localStorage.setItem("continueGame", "continue game");
    localStorage.setItem("level", JSON.stringify(game.level));

    btnContinue.onclick = function () {
      //
      continueG();
    };
  };

  //solutions

  btnSolution.onclick = function () {
    resetGame();
    let position = game.positionCell;
    for (i = 0; i < position.length; i = i + 1) {
      let cell = document.getElementById(`${position[i]}`);
      cell.classList.add("open-cell");
      fieldGame.style.pointerEvents = "none";
    }
  };
}

//show last results

btnResults.onclick = function () {
  modalBg.style.display = "block";
  modal.style.display = "block";

  while (tableResults.firstChild) {
    tableResults.removeChild(tableResults.firstChild);
  }
  let arrTime = [];
  for (let i = 1; i < 6; i = i + 1) {
    let time = Number(localStorage.getItem(`timeGuessed${i}`));
    if (time !== 0) {
      arrTime.push(time);
    }
  }
  if (arrTime.length !==0){
  arrTime.sort((a, b) => a - b);

  for (let i = 1; i < arrTime.length + 1; i = i + 1) {
    let lineTable = document.createElement("tr");
    tableResults.appendChild(lineTable);
    let place = i;

    for (let y = 1; y < arrTime.length + 1; y = y + 1) {
      let timeGame = Number(localStorage.getItem(`timeGuessed${y}`));
      if (arrTime[i - 1] === timeGame) {
        let guessedGame = localStorage.getItem(`gameGuessed${y}`);
        let levelGame = localStorage.getItem(`levelGuessed${y}`);
        seconds = timeGame;
        changeSecondsToMin();
        lineTable.innerHTML = `<td>${place}</td> <td>${guessedGame}</td><td> ${levelGame}</td><td>${minText}:${secText}</td>`;
      }
    }
  }
}
else {
  lineTable = document.createElement("tr");
  tableResults.appendChild(lineTable);
  lineTable.innerHTML = `<td>No results yet</td>` 
}

  closeModal.onclick = function () {
    modalBg.style.display = "none";
    modal.style.display = "none";
  };
};

//continueGame

let continueGameTrue = false;
function continueG() {
  openCells = JSON.parse(localStorage.getItem("openCells"));
  guessedCells = JSON.parse(localStorage.getItem("guessedCells"));
  crossCells = JSON.parse(localStorage.getItem("crossCells"));
  time = JSON.parse(localStorage.getItem("time"));
  game = JSON.parse(localStorage.getItem("game"));
  level = JSON.parse(localStorage.getItem("level"));
  seconds = time;
  continueGameTrue = true;
  clearGame();
  startGame(game, level, continueGameTrue);
  setInterval(intervalID, 1000);
  timerCount();
}

let game;
function listenToOptions(btnLevelOptions) {
  menuGame.onclick = function (event) {
    if (event.target.closest("button")) {
      let btnActive = document.querySelector(".btn-options.btn-menu_active");
      btnActive.classList.remove("btn-menu_active");
      clearGame();
      btnOption = event.target.closest("button");

      let btnValue = btnOption.value;
      btnOption.className = "btn-menu btn-menu_active btn-options";
      btnLevelOptions.forEach((element) => {
        if (element.nameGame === btnValue) {
          game = element;
        }
      });

      startGame(game, btnLevelOptions);
    }
  };
}

//choose light or dart template

btnDarkTemplate.onclick = function () {
  btnLightTemplate.classList.remove("btn-menu_active");
  btnDarkTemplate.className = "btn-menu btn-menu_active";
  document.documentElement.style.setProperty("--main-color", "#233b4b");
  document.documentElement.style.setProperty("--text-color", "#f9f5ee");
  document.documentElement.style.setProperty("--accent-color", "#27546f");
  document.documentElement.style.setProperty("--accent2-color", "#8cc9ef");
  document.documentElement.style.setProperty("--light-color", "#457ea7");
};

btnLightTemplate.onclick = function () {
  btnDarkTemplate.classList.remove("btn-menu_active");
  btnLightTemplate.className = "btn-menu btn-menu_active";
  document.documentElement.style.setProperty("--main-color", "#daeefb");
  document.documentElement.style.setProperty("--text-color", "#403f3d");
  document.documentElement.style.setProperty("--accent-color", "#c0e5fc");
  document.documentElement.style.setProperty("--accent2-color", "#8cc9ef");
  document.documentElement.style.setProperty("--light-color", "#ffffff");
};

// on/off sound

muteSound.onclick = function () {
  if (muteSound.classList.contains('sound-on')){
    muteSound.classList.remove('sound-on');
    muteSound.classList.add('sound-off');
    muted = false;
  }
  else if (muteSound.classList.contains('sound-off')){
    muteSound.classList.remove('sound-off');
    muteSound.classList.add('sound-on');
    muted = true;
  }
}

//clear game

function clearGame() {
  while (fieldGame.firstChild) {
    fieldGame.removeChild(fieldGame.firstChild);
  }
  timer.textContent = "00:00";
  seconds = 0;
  clearInterval(intervalID, 1000);
  clickWas = true;
  btnOption.className = "btn-menu";
}

//reset game

btnReset.onclick = function () {
  resetGame();
  fieldGame.style.pointerEvents = "all";
};

function resetGame() {
  openCell = document.querySelectorAll(".field-cell");
  for (let i = 0; i < openCell.length; i++) {
    if (openCell[i].classList.contains("open-cell")) {
      openCell[i].classList.remove("open-cell");
    }
    if (openCell[i].classList.contains("guessed-cell")) {
      openCell[i].classList.remove("guessed-cell");
    }
    if (openCell[i].classList.contains("cross-cell")) {
      openCell[i].classList.remove("cross-cell");
    }
  }
  timer.textContent = "00:00";
  seconds = 0;
  clearInterval(intervalID, 1000);
  clickWas = true;
}

//random game

btnRandom.onclick = function () {
  const levels = [gameOptionsLight, gameOptionsMedium, gameOptionsHight];
  btnLevelOptions = levels[Math.floor(Math.random() * levels.length)];
  game = btnLevelOptions[Math.floor(Math.random() * btnLevelOptions.length)];

  clearGame();
  startGame(game, btnLevelOptions);
};

// loading default game

window.onload = function () {
  let continueGame = localStorage.getItem("continueGame");

  if (continueGame === "continue game") {
    btnContinue = document.createElement("button"); // create button continueGame
    btnContinue.className = "btn-menu";
    btnContinue.textContent = "continue a game";
    menuActions.append(btnContinue);
    btnContinue.onclick = function () {
      continueG(game);
    };
  }

  startGame(game1, gameOptionsLight);
  chooseGame("light");
  listenToOptions(gameOptionsLight);
};
