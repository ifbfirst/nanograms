const input = document.createElement("input");
const btn = document.createElement("button");
btn.textContent = "Перевести в бинарную систему";
const output = document.createElement("div");
document.body.append(input, btn, output);

btn.addEventListener("click", function changeDigitalIntoBinary() {
  if (!Number(input.value)) alert("Введите число");
  let str = "";
  let value = input.value;

  while (value > 0) {
    let binary;
    binary = value % 2;
    value = parseInt(value / 2);
    str = `${binary}${str}`;
  }

  output.textContent = str;
});
