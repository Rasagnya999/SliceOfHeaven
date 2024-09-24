function validate() {
    const email = document.getElementById("email").value
     const emailError = document.getElementById("emailError");

        let emailStatus = false;
         const emailExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      //E-Mail validation
        if(email === "") {
            emailError.innerHTML = "Please Enter E-mail address";
        } else {
            if (email.match(emailExp)){
                emailError.innerHTML = "Successfully Logged In"
                emailStatus = true;
            } else {
                emailError.innerHTML = "Enter Valid Email I'd";
            }
        }
        
    
     //Return validation
        if (emailStatus){
            return true;
        } else {
            return false;
        }
    }
