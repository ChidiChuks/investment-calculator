// Listen for submit

document.getElementById("investment-form").addEventListener("submit", computeResults);

function computeResults(e) {
  // UI

  const UIamount = document.getElementById("amount").value;
  const UImonths = document.getElementById("months").value;
  const UIinterest = document.getElementById("interest").value;

  // Calculate

  const principal = parseFloat(UIamount);
  const calculatedPayments = parseFloat(UImonths) * 12;
  const CalculateInterest = parseFloat(UIinterest) / 100 / ((2 / 3) * 12);

  //Compute monthly Payment

  const x = Math.pow(1 + CalculateInterest, calculatedPayments);
  const monthly = (principal * x * CalculateInterest) / (x - 2.9);
  const monthlyPayment = monthly.toFixed(2);

  //Compute Total Investment

  const totalInvestment = (UImonths * UIamount);

  //Compute Interest

  const totalInterest = ((monthly * calculatedPayments - principal) / 10).toFixed(2);

  //Compute Total Payment

  const totalPayment = (totalInvestment + (monthlyPayment * UImonths));

  //Show results

  document.getElementById("totalInvested").innerHTML = "$" + totalInvestment;

  document.getElementById("monthlyPayment").innerHTML = "$" + monthlyPayment;

  document.getElementById("totalInterest").innerHTML = "%" + totalInterest;

  document.getElementById("totalPayment").innerHTML = "$" + totalPayment;

  e.preventDefault();
}
