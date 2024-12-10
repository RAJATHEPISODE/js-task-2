// script.js
document.addEventListener("DOMContentLoaded", () => {
    // String Manipulation
    const stringInput = document.getElementById("string-input");
    const stringResult = document.getElementById("string-result");
  
    document.getElementById("uppercase-btn").addEventListener("click", () => {
      stringResult.textContent = stringInput.value.toUpperCase();
    });
  
    document.getElementById("reverse-btn").addEventListener("click", () => {
      stringResult.textContent = stringInput.value.split("").reverse().join("");
    });
  
    document.getElementById("char-count-btn").addEventListener("click", () => {
      stringResult.textContent = `Character Count (excluding spaces): ${
        stringInput.value.replace(/\s+/g, "").length
      }`;
    });
  
    // Number Manipulation
    const numberInput = document.getElementById("number-input");
    const numberResult = document.getElementById("number-result");
  
    document.getElementById("even-odd-btn").addEventListener("click", () => {
      const num = Number(numberInput.value);
      if (isNaN(num)) {
        numberResult.textContent = "Please enter a valid number.";
      } else {
        numberResult.textContent = num % 2 === 0 ? "Even" : "Odd";
      }
    });
  
    document.getElementById("sqrt-btn").addEventListener("click", () => {
      const num = Number(numberInput.value);
      if (isNaN(num)) {
        numberResult.textContent = "Please enter a valid number.";
      } else {
        numberResult.textContent = `Square Root: ${Math.sqrt(num).toFixed(2)}`;
      }
    });
  
    document.getElementById("round-btn").addEventListener("click", () => {
      const num = Number(numberInput.value);
      if (isNaN(num)) {
        numberResult.textContent = "Please enter a valid number.";
      } else {
        numberResult.textContent = `Rounded to 2 Decimal Places: ${num.toFixed(
          2
        )}`;
      }
    });
  });
  