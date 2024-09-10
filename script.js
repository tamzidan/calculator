function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function backspace() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculateSquareRoot() {
  let display = document.getElementById("display");
  try {
    let value = parseFloat(display.value);
    if (value >= 0) {
      display.value = Math.sqrt(value);
    } else {
      display.value = "Error";
    }
  } catch (error) {
    display.value = "Error";
  }
}

function calculate() {
  let display = document.getElementById("display");
  try {
    // Mengganti operator % dengan fungsi modulus
    let expression = display.value.replace(/%/g, "%");
    let result = eval(expression);
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}
