const income = parseFloat(prompt("enter your salary? "));
const rent = parseFloat(prompt("whats your rent? "));
const transport = parseFloat(prompt("how much did u spend on transport? "));
const food = parseFloat(prompt("how much did you spend on food? "));

if (
  Number.isNaN(income) ||
  Number.isNaN(rent) ||
  Number.isNaN(transport) ||
  Number.isNaN(food)
) {
  console.log("Invalid Input! ");
}

const total_expenses = rent + transport + food;
const savings = income - total_expenses;
const savings_perc = (savings / income) * 100;

let highest_expense;
if (rent > transport && rent > food) {
  highest_expense = `Rent: $${rent}`;
} else if (transport > rent && transport > food) {
  highest_expense = `Transport: $${transport}`;
} else {
  highest_expense = `Food: $${food}`;
}

let saving_status;
if (savings_perc >= 30) {
  saving_status = "Excellent";
} else if (savings_perc >= 20) {
  saving_status = "Very good";
} else if (savings_perc <= 20) {
  saving_status = "Average";
} else if (savings_perc <= 10) {
  saving_status = "Non existant";
}

let status;
if (savings >= 0) {
  status = "Saving Money!";
} else {
  status = "Overspending!";
}

const tip1 = "Save before spending.";
const tip2 = "Track expenses daily.";
const tip3 = "Build an emergency fund.";
const tip4 = "Avoid impulse purchases.";

console.log("Generating a random finance tip for you.... ");

const random_tip = Math.floor(Math.random() * 4) + 1;
let selected_tip = random_tip;

switch (random_tip) {
  case 1:
    selected_tip = tip1;
    break;

  case 2:
    selected_tip = tip2;
    break;

  case 3:
    selected_tip = tip3;
    break;

  case 4:
    selected_tip = tip4;
    break;

  default:
    console.log("No tip for you! ");
    break;
}

console.log(`
----- MONTHLY REPORT -----

Income: ₹${income}
Total Expenses: ₹${total_expenses}
Savings: ₹${savings}
Savings Percentage: ${savings_perc.toFixed(2)}%

Savings Status: ${saving_status}
Financial Status: ${status}
Largest Expense: ${highest_expense}
Random Financial Tip: ${selected_tip}
`);
