function validation(){
    var username = document.getElementById("username");
    var username_error = document.getElementById("error_username");

    
    if (username.value == "") {
        username_error.innerHTML = "Username field is empty.";
        username_error.style.color = "#ff0000";

        return false;
    }
    else if (username.value.length <= 5) {
         username_error.innerHTML = "Username is too short.";
         username_error.style.color = "#ff0000";

         return false;
    }
    else {
        username_error.textContent = "";
    }
}