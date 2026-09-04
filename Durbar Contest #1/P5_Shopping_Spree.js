function calculateRemainingMoney(totalMoney, cakeCost, donutCost) {
  const remainingMoney = totalMoney - cakeCost;

  const donutCount = Math.floor(remainingMoney / donutCost);
  const donutTotalCost = donutCost * donutCount;

  const remainingTotalMoney = remainingMoney - donutTotalCost;

  return remainingTotalMoney;
}

// function calculateRemainingMoney(totalMoney, cakeCost, donutCost) {
//   const moneyAfterCake =
//     totalMoney >= cakeCost ? totalMoney - cakeCost : totalMoney;

//   return moneyAfterCake % donutCost;
// }

function calculateRemainingMoney(totalMoney, cakeCost, donutCost) {
  if (totalMoney < cakeCost) {
    return totalMoney;
  }

  const moneyAfterCake = totalMoney - cakeCost;
 
  return moneyAfterCake % donutCost;
} 