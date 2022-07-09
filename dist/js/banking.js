//.......................Input Amount function ......
function amountTotal(inputData) {
  const InputAmount = document.getElementById(inputData);
  const InputAmountText = InputAmount.value;
  const previusInputValue = parseFloat(InputAmountText);
  InputAmount.value = "";
  return previusInputValue;
}

//......................... Input Amount display function

function amountInputDisplay(inputID, inputAmount) {
  const currentAmount = document.getElementById(inputID);
  const currentAmountText = currentAmount.innerText;
  const amountNumberTotal = parseFloat(currentAmountText);
  const totalAmount = amountNumberTotal + inputAmount;
  currentAmount.innerText = totalAmount;
}

//,,,,,,,,,,,, balance error amount handle
function currentBalance() {
  const balanceDisplay = document.getElementById("balance-input-display");
  const balanceAmountText = balanceDisplay.innerText;
  const balanceAmount = parseFloat(balanceAmountText);
  return balanceAmount;
}
//.............balance update
function balanceTotal(amount, isAdd) {
  const balanceDisplay = document.getElementById("balance-input-display");
  const balanceAmount = currentBalance();
  if (isAdd == true) {
    const balanceAmountTotal = balanceAmount + amount;
    balanceDisplay.innerText = balanceAmountTotal;
  } else {
    const balanceAmountTotal = balanceAmount - amount;
    balanceDisplay.innerText = balanceAmountTotal;
  }
}

// Deposite
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const depositInputValue = amountTotal("deposit-input"); //.............
    if (depositInputValue > 0) {
      amountInputDisplay("deposit-input-display", depositInputValue);

      //   update Acount deposite balance
      balanceTotal(depositInputValue, true);
    }
  });

//   update Acount withdraw balance
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawAmount = amountTotal("withdraw-input");
    const currentBalanceAmount = currentBalance();
    if (withdrawAmount > 0 && withdrawAmount <= currentBalanceAmount) {
      amountInputDisplay("withdraw-input-display", withdrawAmount);
      balanceTotal(withdrawAmount, false);
    }
  });
