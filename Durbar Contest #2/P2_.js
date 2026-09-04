function countEvenOdd(numbers) {
  if (!Array.isArray(numbers)) return { even: 0, odd: 0 };

  const result = { even: 0, odd: 0 };

  for (const num of numbers) {
    if (typeof num !== "number" || Number.isNaN(num)) {
      continue;
    }

    if (num % 2 === 0) {
      result.even++;
    } else {
      result.odd++;
    }
  }

  return result;
}
