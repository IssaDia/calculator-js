const keysContainer = document.querySelector(".keys-container");
const keysArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const operators = ["+", "-", "*", "/", "C", "="];
const output = document.querySelector(".output");

console.log(output.value.charAt(0));
keysArray.forEach((key) => {
  const button = document.createElement("button");
  button.innerText = key;
  button.style.width = "50px";
  button.style.height = "50px";
  keysContainer.appendChild(button);
  button.addEventListener("click", function () {
    output.value += key;
    if (output.value.charAt(0) == "0") {
      output.value = output.value.substring(1);
    }
  });
});
operators.forEach((operator) => {
  const button = document.createElement("button");
  button.innerText = operator;

  button.style.width = "50px";
  button.style.height = "50px";
  keysContainer.appendChild(button);
  button.addEventListener("click", function () {
    output.value += operator;
    if (operator == "=") {
      output.value = eval(output.value.substring(0, output.value.length - 1));
    }

    if (operator == "C") {
      output.value = " ";
    }
  });
});
