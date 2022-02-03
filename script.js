$(document).ready (function () {  
 // validate username
    $('.usernameCheck').hide();
    let userNameError=false;
    $("#username").keyup(function (){ 
        validateUsername();
    });
    function validateUsername(){
       let userName= $("#username").val();
       if (userName.length == " ")
          {
              $('.usernameCheck').show();
              $('.usernameCheck').css("color","brown");
              $('.usernameCheck').html("**provide userName");
              userNameError=true;
              return true;
           }
        else if (userName.length < 3 || userName.length>10)
           {
             $('.usernameCheck').show();
             $('.usernameCheck').css("color","brown");
             $('.usernameCheck').html("**username must be between 3 to 10 characters");
             return userNameError=true;
           }
       else 
           {
             $('.usernameCheck').hide();
           }
    }
    // validate email
    $('.emailCheck').hide();
      let emailError=true;
    $("#email").keyup(function (){ 
        validateEmail();
    });
    function validateEmail() {
        let email=$("#email").val();
        var characters=/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        if (characters.test(email))
        {
            emailError=true;
            $('.emailCheck').hide();
        }
        else 
        {
            
            $('.emailCheck').show();
            $('.emailCheck').css("color","brown");
            $('.emailCheck').html("**Invalid Email Format");
               emailError=false;
            return false;
           }
    }
    // validate the first password 
    $('.passwordCheck').hide();
    let passowrdError=true;
    $("#passowrd").keyup(function (){ 
        validatePassword();
    });
   
    function validatePassword() {
        let firstPassowrd=$("#password").val();
        if(firstPassowrd.length == "")
            {
              $('.passwordCheck').show();
                passowrdError=false;
                return false;
            }
        else if (firstPassowrd.length <3 || firstPassowrd.length>10)
            {
               $('.passwordCheck').show();
               $('.passwordCheck').html("**length of your password must be > between 3 and < 10");
               $('.passwordCheck').css("color", "red");
                passwordError = false;
                return false;
            } 
        else 
            {
               $('.passwordCheck').hide();
            }
    }
    // validate the second password 
       $('.passwordCheck2').hide();
       let confirmPassError=true;
       $("#password2").keyup(function (){ 
           validateConfrimPass();
       });
    function validateConfrimPass(){
        let confrimPassowrd=$("#password2").val();
        let firstPassowrd=$("#password").val();
        if (confrimPassowrd  != firstPassowrd)
        {
            $('.passwordCheck2').show();
            $('.passwordCheck2').html( "**Password didn't Match");
            $('.passwordCheck2').css("color","red");
            confirmPassError=false
            return false;
        }
        else 
        {
            $('.passwordCheck2').hide();
        }
    }
    // passowrd toggle
    $(".toggle-password").click(function() { 
        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
          input.attr("type", "text");
        } else {
          input.attr("type", "password");
        }
      });    
// form submission /submit form
    $('#submit_btn').click(function() {
        validateUsername();
        validateEmail();
        validatePassword();
        validateConfrimPass();
        if ((userNameError == true) && (emailError == true) && 
        (passowrdError == true) &&  (confirmPassError == true) ) 
        {
            return true;
        }
        else 
        {
            return false;
        }

        }); 

  });  