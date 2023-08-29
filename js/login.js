// step-1. add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    
    // step-2. get the email address inside the email field
    //2-a: always remember to use .value to get text from an input field

    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    // step-3: get password
    // 3.a: set id on the html element
    // 3.b: get the element
    // 3.c: get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // DANGER: Do not verify email password on the client side

    // step-4: verify email and password

    if(email === 'anikmondol558363@gmail.com' && password === 'anik(2000)'){
        window.location.href = 'Bank.html'
    }
    else{
        alert('Tui passsword vule gesos !! Toke ami teijjo sontan gosona korlam')
    }

    emailField.value = "";
    passwordField.value = "";
})


