$(document).ready(function(){
    $('.login-info-box').fadeOut();
    $('.login-show').addClass('show-log-panel');
});


$('.login-reg-panel input[type="radio"]').on('change', function() {
    if($('#log-login-show').is(':checked')) {
        $('.register-info-box').fadeOut(); 
        $('.login-info-box').fadeIn();
        
        $('.white-panel').addClass('right-log');
        $('.register-show').addClass('show-log-panel');
        $('.login-show').removeClass('show-log-panel');
        
    }
    else if($('#log-reg-show').is(':checked')) {
        $('.register-info-box').fadeIn();
        $('.login-info-box').fadeOut();
        
        $('.white-panel').removeClass('right-log');
        
        $('.login-show').addClass('show-log-panel');
        $('.register-show').removeClass('show-log-panel');
    }
});
  
//login-signup

document.getElementById('login-submit').addEventListener
('click',function(){
    // get user emai
    const emailField = document.getElementById('user-email');
    const userEmail= emailField.value;
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword= passwordField.value;
// check email & password
    if(userEmail == 'mehedi15-11384@diu.edu.bd' && userPassword=='cse418'){
        alert("Login Successfully!");
        window.location.href = 'places.html';
    }
    else{
        alert("Please Submit Valid Information");
    }

})
function myFunction(){
    alert("Registration Successfully. Please Login.");
}
