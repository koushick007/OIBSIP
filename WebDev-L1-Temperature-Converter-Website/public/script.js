(function () {
  "use strict";

  // Absolute zero expressed in each unit.
  var ABSOLUTE_ZERO = {
    celsius: -273.15,
    fahrenheit: -459.67,
    kelvin: 0,
  };

  var form = document.getElementById("converter-form");
  var input = document.getElementById("temp-input");
  var errorMessage = document.getElementById("error-message");
  var results = document.getElementById("results");

  var valueEls = {
    celsius: document.querySelector("#result-celsius [data-value]"),
    fahrenheit: document.querySelector("#result-fahrenheit [data-value]"),
    kelvin: document.querySelector("#result-kelvin [data-value]"),
  };
  var resultEls = {
    celsius: document.getElementById("result-celsius"),
    fahrenheit: document.getElementById("result-fahrenheit"),
    kelvin: document.getElementById("result-kelvin"),
  };

  var symbols = {
    celsius: "\u00B0C",
    fahrenheit: "\u00B0F",
    kelvin: "K",
  };

  // Convert any input unit to Celsius (the pivot).
  function toCelsius(value, unit) {
    if (unit === "celsius") return value;
    if (unit === "fahrenheit") return (value - 32) * (5 / 9);
    if (unit === "kelvin") return value - 273.15;
    return NaN;
  }

  // Convert Celsius to the requested unit.
  function fromCelsius(celsius, unit) {
    if (unit === "celsius") return celsius;
    if (unit === "fahrenheit") return celsius * (9 / 5) + 32;
    if (unit === "kelvin") return celsius + 273.15;
    return NaN;
  }

  function getSelectedUnit() {
    var checked = form.querySelector('input[name="unit"]:checked');
    return checked ? checked.value : "celsius";
  }

  // Round to 2 decimals but drop trailing zeros for clean display.
  function formatNumber(num) {
    return parseFloat(num.toFixed(2)).toString();
  }

  function showError(message) {
    errorMessage.textContent = message;
    input.classList.add("is-invalid");
    input.setAttribute("aria-invalid", "true");
    results.hidden = true;
  }

  function clearError() {
    errorMessage.textContent = "";
    input.classList.remove("is-invalid");
    input.removeAttribute("aria-invalid");
  }

  function convert() {
    var raw = input.value.trim();

    // Validation: reject empty input.
    if (raw === "") {
      showError("Please enter a temperature value.");
      return;
    }

    // Validation: reject non-numeric input.
    // Accepts optional sign, digits, and one decimal point.
    var numericPattern = /^-?\d*\.?\d+$/;
    if (!numericPattern.test(raw)) {
      showError('"' + raw + '" is not a valid number. Enter digits only, e.g. 25 or -4.5.');
      return;
    }

    var value = Number(raw);
    if (!isFinite(value)) {
      showError("Please enter a finite number.");
      return;
    }

    var unit = getSelectedUnit();

    // Edge case: absolute zero violation.
    if (value < ABSOLUTE_ZERO[unit]) {
      showError(
        "That is below absolute zero (" +
          formatNumber(ABSOLUTE_ZERO[unit]) +
          " " +
          symbols[unit] +
          "). Temperatures cannot go that low."
      );
      return;
    }

    clearError();

    var celsius = toCelsius(value, unit);
    var converted = {
      celsius: celsius,
      fahrenheit: fromCelsius(celsius, "fahrenheit"),
      kelvin: fromCelsius(celsius, "kelvin"),
    };

    ["celsius", "fahrenheit", "kelvin"].forEach(function (key) {
      valueEls[key].textContent = formatNumber(converted[key]) + " " + symbols[key];
      // Highlight the row that matches the input unit.
      resultEls[key].classList.toggle("result--source", key === unit);
    });

    results.hidden = false;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    convert();
  });

  // Clear the error styling as soon as the user edits the input.
  input.addEventListener("input", function () {
    if (input.classList.contains("is-invalid")) {
      clearError();
    }
  });
})();
