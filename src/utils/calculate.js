export function calculateIndividualTip(totalBill, noPerson, tipPercentage) {
  // totalBill: total to pay
  // noPerson: number of clients
  // tipPercentage: percentage tip
  var tipAmount = (totalBill / 100) * tipPercentage;
  var tipClient = tipAmount / noPerson;

  if (isFinite(tipClient) === false || isNaN(tipClient)) {
    tipClient = 0;
  }

  tipClient = tipClient.toFixed(2);

  return tipClient;
}

export function calculateTotalWithTip(
  totalBill = 0, // totalBill: total to pay
  noPerson = 0, // noPerson: number of clients
  tipAmount = 0 // tipAmount: total amount of tip to pay
) {
  var totalDivided = totalBill / noPerson || 0;
  if (isFinite(totalDivided) === false) {
    totalDivided = 0.0;
  }

  totalDivided = parseFloat(totalDivided);
  tipAmount = parseFloat(tipAmount);

  var totalWithTip = totalDivided + tipAmount;
  totalWithTip = totalWithTip || 0;
  totalWithTip = totalWithTip.toFixed(2);

  return totalWithTip;
}
