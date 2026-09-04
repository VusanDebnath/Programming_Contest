function checkMathOperationsForNine(a, b) {
    const checkForNine = (a + b === 9 || a - b === 9 || a * b === 9 || a / b === 9) ? "Nine" : "Nein";

    return checkForNine;
}
