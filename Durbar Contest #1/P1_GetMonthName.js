function getMonthName(monthNumber) {
  // TODO: Implement this function
  let originalMonthNumber = monthNumber;

  if(typeof(monthNumber) === "string"){
    const trimInput = monthNumber.trim()
    originalMonthNumber = Number(trimInput)
  }

  if (
    !Number.isInteger(originalMonthNumber) ||
    originalMonthNumber < 1 ||
    originalMonthNumber > 12
  ) {
    return "Invalid";
  }

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const outputMonth = months[originalMonthNumber - 1];

  return outputMonth;
}


