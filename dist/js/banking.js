function convertNumberAndSum(e) {
  const convertNumber = parseFloat(e);
  return convertNumber;
}

// Deposite
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const depositInput = document.getElementById("deposit-input");
    const depositInputText = depositInput.value;
    const depositInputValue = convertNumberAndSum(depositInputText);
    console.log(depositInputValue);

    const depositTotalc = document.getElementById("deposit-input-display");
    const currentDepositText = depositTotalc.innerText;
    const depositTotal = convertNumberAndSum(currentDepositText);
    const totalDepositAmount = depositTotal + depositInputValue;
    depositTotalc.innerText = totalDepositAmount;
    console.log(totalDepositAmount);

    depositInput.value = "";
    //   update Acount deposite balance
    const balanceDisplay = document.getElementById("balance-input-display");
    const balanceAmountText = balanceDisplay.innerText;
    const balanceAmount = convertNumberAndSum(balanceAmountText);
    const balanceAmountTotal = balanceAmount + depositInputValue;
    balanceDisplay.innerText = balanceAmountTotal;
  });

//   update Account withdraw
// withdraw Button
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawInputText = withdrawInput.value;
    const withdrawAmount = convertNumberAndSum(withdrawInputText);
    console.log(withdrawAmount);
    //withdraw  data show area
    const currentWithdrawAmount = document.getElementById(
      "withdraw-input-display"
    );
    const currentWithdrawText = currentWithdrawAmount.innerText;
    const CurrentWithdrawAmount = convertNumberAndSum(currentWithdrawText);
    const withdrawTotal = withdrawAmount + CurrentWithdrawAmount;
    currentWithdrawAmount.innerText = withdrawTotal;
    withdrawInput.value = "";

    //   update Acount withdraw balance
    const balanceDisplay = document.getElementById("balance-input-display");
    const balanceAmountText = balanceDisplay.innerText;
    const balanceAmount = convertNumberAndSum(balanceAmountText);
    const balanceAmountTotal = balanceAmount - withdrawAmount;
    balanceDisplay.innerText = balanceAmountTotal;
  });
