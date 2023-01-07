var incomeCounter = {
  count: 1,
  total: 0,
  incrementCount: function () {
    this.count++;
  },
  incrementTotal: function (amount) {
    this.total += amount;
  },
};
var expenseCounter = {
  count: 1,
  total: 0,
  incrementCount: function () {
    this.count++;
  },
  incrementTotal: function (amount) {
    this.total += amount;
  },
};
function addIncomeItem() {
  let incomeName = document.getElementById("income-name").value;
  let incomeAmount = document.getElementById("income-amount").value;

  var tableRow = document.getElementById("income-table");
  var row = tableRow.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = incomeCounter.count;
  cell2.innerHTML = incomeName;
  cell3.innerHTML = "$" + incomeAmount;
  incomeCounter.incrementCount();
  incomeCounter.incrementTotal(incomeAmount);
}

function addExpenseItem() {
  let expenseName = document.getElementById("expense-name").value;
  let expenseAmount = document.getElementById("expense-amount").value;

  var tableRow = document.getElementById("expense-table");
  var row = tableRow.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = expenseCounter.count;
  cell2.innerHTML = expenseName;
  cell3.innerHTML = "$" + expenseAmount;
  expenseCounter.incrementCount();
  expenseCounter.incrementTotal(expenseAmount);
}
