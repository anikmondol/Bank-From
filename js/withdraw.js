/*
1. add event handler with the withdraw button
2. get the amount from the withdraw input field
2-5: also make sure to convert the input int a number by using parsefloat
3. get previous withdraw total
4. calculate total withdraw amount
4-5. set total withdraw amount
5. get the previous balance total
6. calculate new balance total
6-5. set set new balance total

*/ 



// step-1

document.getElementById('btn-withdraw').addEventListener('click',function(){
    // step-2
    const withdrawField  = document.getElementById('withdraw-field');
    const newWithdrawFieldString = withdrawField.value;
    const withdraw = parseFloat(newWithdrawFieldString);


    // step-3
    const withdrawTOtalElement = document.getElementById('withdraw-total');

    const withdrawTotalString = withdrawTOtalElement.innerText;
    const withdrawTOtal = parseFloat(withdrawTotalString);
    
    // step-4.

    const currentWithdrawTotal = withdraw + withdrawTOtal;
    withdrawTOtalElement.innerText = currentWithdrawTotal;

    // step-5.
    const ballanceTotalElement = document.getElementById('Balance-total');
    const ballanceTotalString = ballanceTotalElement.innerText;
    const ballanceTotal = parseFloat(ballanceTotalString);
    

    // step-6.
    const newBallanceTotal = ballanceTotal - currentWithdrawTotal;

    // step-6.5.
    ballanceTotalElement.innerText = newBallanceTotal;

    // step-7

    withdrawField.value = '';
    
})