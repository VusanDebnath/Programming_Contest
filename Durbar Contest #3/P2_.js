function convertTemperature(value, unit) {
  let convertedValue;

  if (unit === "C" || unit === "c") {
    convertedValue = (value * 9) / 5 + 32;
  }
  else if (unit === "F" || unit === "f") {
    convertedValue = ((value - 32) * 5) / 9;
  }
  else {
    return value;
  }

  return Number(convertedValue.toFixed(2));
}
