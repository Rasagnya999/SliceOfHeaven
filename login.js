function validate() {
    const Email = document.getElementById("Email").value
     const EmailError = document.getElementById("EmailError");
     const EmailError1 = document.getElementById("EmailError1");

        let EmailStatus = false;
         const EmailExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      //E-Mail validation
        if(Email === "") {
            EmailError.innerHTML = "Please Enter E-mail address";
        } else {
            if (Email.match(EmailExp)){
                EmailError1.innerHTML = "Successfully Logged In"
                EmailStatus = true;
            } else {
                EmailError.innerHTML = "Enter Valid Email I'd";
            }
        }
        
    
     //Return validation
        if (EmailStatus){
            return true;
        } else {
            return false;
        }
    }



   //Cart
    function signup() {
        const Email = document.getElementById("Email").value
         const EmailError = document.getElementById("EmailError");
         const EmailError1 = document.getElementById("EmailError1");
    
            let EmailStatus = false;
             const EmailExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
          //E-Mail validation
            if(Email === "") {
                EmailError.innerHTML = "Please Enter E-mail address";
            } else {
                if (Email.match(EmailExp)){
                    EmailError1.innerHTML = "Successfully Logged In"
                    EmailStatus = true;
                } else {
                    EmailError.innerHTML = "Enter Valid Email I'd";
                }
            }
            
        
         //Return validation
            if (EmailStatus){
                return true;
            } else {
                return false;
            }
        }
        EmailError1.style.color="green"

        //custom
    function Automatic() {
        const Email3 = document.getElementById("Email3").value
         const EmailError3 = document.getElementById("EmailError3");
         const EmailError1 = document.getElementById("EmailError1");
    
            let Email3Status = false;
             const Email3Exp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
          //E-Mail validation
            if(Email3 === "") {
                EmailError3.innerHTML = "Please Enter E-mail address";
            } else {
                if (Email3.match(Email3Exp)){
                    EmailError1.innerHTML = "Successfully Logged In"
                    Email3Status = true;
                } else {
                    EmailError3.innerHTML = "Enter Valid Email I'd";
                }
            }
            EmailError1.style.color="green"
        
         //Return validation
            if (Email3Status){
                return true;
            } else {
                return false;
            }
        }


       //// Explore
    function Explorepage() {
        const Email = document.getElementById("Email").value
         const EmailError = document.getElementById("EmailError");
         const EmailError1 = document.getElementById("EmailError1");
    
            let EmailStatus = false;
             const EmailExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
          //E-Mail validation
            if(Email === "") {
                EmailError.innerHTML = "Please Enter E-mail address";
            } else {
                if (Email.match(EmailExp)){
                    EmailError1.innerHTML = "Successfully Logged In"
                    EmailStatus = true;
                } else {
                    EmailError.innerHTML = "Enter Valid Email I'd";
                }
            }
            EmailError1.style.color="green"
        
         //Return validation
            if (EmailStatus){
                return true;
            } else {
                return false;
            }
        }

   


       //// Home
       function  Homepage() {
        const Email = document.getElementById("Email").value
         const EmailError = document.getElementById("EmailError");
         const EmailError1 = document.getElementById("EmailError1");
    
            let EmailStatus = false;
             const EmailExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
          //E-Mail validation
            if(Email === "") {
                EmailError.innerHTML = "Please Enter E-mail address";
            } else {
                if (Email.match(EmailExp)){
                    EmailError1.innerHTML = "Successfully Logged In"
                    EmailStatus = true;
                } else {
                    EmailError.innerHTML = "Enter Valid Email I'd";
                }
            }
             EmailError1.style.color="green"
         //Return validation
            if (EmailStatus){
                return true;
            } else {
                return false;
            }
        }

   