var incomeCount = 1;
function addIncomeItem() {
  let incomeName = document.getElementById("income-name").value;
  let incomeAmount = document.getElementById("income-amount").value;

  var tableRow = document.getElementById("income-table");
  var row = tableRow.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = ++count;
  cell2.innerHTML = incomeName;
  cell3.innerHTML = incomeAmount;
}

function addExpenseItem() {}
