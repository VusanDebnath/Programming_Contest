function findSecondLargestUnique(numbers) {
  if (!Array.isArray(numbers) || numbers.length < 2) return null;

  const distinctNumbers = [];

  for (const num of numbers) {
    if (!distinctNumbers.includes(num)) {
      distinctNumbers.push(num); 
    }
  }

  if (distinctNumbers.length < 2) return null;

  distinctNumbers.sort((a, b) => b - a);

  return distinctNumbers[1];
}
