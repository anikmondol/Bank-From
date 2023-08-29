// step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
    // step-2: get the deposit amount from the deposit input field
    // for input field use .value to the value inside field
    const depositField =  document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString)


    // step-3: get the current deposit total
    // for non-input(element other input, textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step-4 add number to set the deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // set the deposit total
    depositTotalElement.innerText = currentDepositTotal ;

    // step-5: get ballance current total

    const ballanceTotalElement = document.getElementById('Balance-total');

    const ballanceTotalString = ballanceTotalElement.innerText;
    const ballanceTotal = parseFloat(ballanceTotalString);

    // step-6: add newDepositAmount + ballanceTotal

    const newBallanceTotal = ballanceTotal + newDepositAmount

    // set the ballance total

    ballanceTotalElement.innerText = newBallanceTotal;

    // step-7: clear thee depositField
    depositField.value = "";

})