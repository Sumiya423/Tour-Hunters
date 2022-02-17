//home login
document.getElementById('login-submit1').addEventListener
('click',function(){
    // get user emai
    const emailField = document.getElementById('user-email');
    const userEmail= emailField.value;
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword= passwordField.value;
// check email & password
    if(userEmail == 'mehedi15-11384@diu.edu.bd' && userPassword=='cse418'){
        window.location.href = 'index.html';
    }
    else{
        alert("Please Submit Valid Information");
    }

})
