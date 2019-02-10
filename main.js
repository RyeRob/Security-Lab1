window.onload = function () {
    "use strict";
     var formHandle = document.forms[0];
     var message_display = document.getElementById ("message");
     message_display.style.display = "none";

     function processform() {
        var usernameVar = document.forms[0].username.value;
        var passwordVar = document.forms[0].password.value;
        if (usernameVar === "" || usernameVar === null){
            var username_error = document.getElementById("username");
            username_error.style.background = "red";
            username_error.focus();
            return false;
        }
        else if(passwordVar === "" || passwordVar === null){
            var password_error = document.getElementById("password");
            password_error.style.background = "red";
            password_error.focus();
            return false;
            }
        else{
            var dis_name = document.getElementById("display__username");
            dis_name.innerHTML = usernameVar;
            var dis_pass = document.getElementById("display__password");
            dis_pass.innerHTML = passwordVar;
            formHandle.style.display="none";
            var dis_message = document.getElementById("message");
            dis_message.style.display="block";
            return false;
            }
        }
        formHandle.onsubmit=processform;
    };