function subscribe() {
    const email = document.getElementById("email").value
    const emailError = document.getElementById("emailError");



    let emailstatus =  false;
    const emailExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    
    //E-Mail validation
    if(email === "") {
        emailError.innerHTML = "Please Enter E-mail address";
    } else {
        if (email.match(emailExp)){
            emailError.innerHTML = "";
                        emailstatus= true;
        } else {
            emailError.innerHTML = "Enter Valid Email I'd";
        }
    }
    emailError.style.color="Red"
    //Return validation
    if (emailstatus){
        return true;
    } else {
        return false;
    }}



 ////custom
    function subscribenow() {
        const EmailNow = document.getElementById("EmailNow").value
        const EmailErrorNow = document.getElementById("EmailErrorNow");
    
    
    
        let EmailNowstatus =  false;
        const EmailNowExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        
        
        //E-Mail validation
        if(EmailNow === "") {
            EmailErrorNow.innerHTML = "Please Enter E-mail address";
        } else {
            if (EmailNow.match(EmailNowExp)){
                EmailErrorNow.innerHTML = "";
                EmailNowstatus= true;
            } else {
                EmailErrorNow.innerHTML = "Enter Valid Email I'd";
            }
        }
        EmailErrorNow.style.color="Red"
        //Return validation
        if (EmailNowstatus){
            return true;
        } else {
            return false;
        }}


      ///////Home
        function Homesubscribe() {
            const email1 = document.getElementById("email1").value
            const emailError2 = document.getElementById("emailError2");
        
        
        
            let email1Status =  false;
            const email1Exp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            
            
            //E-Mail validation
            if(email1 === "") {
                emailError2.innerHTML = "Please Enter E-mail address";
            } else {
                if (email1.match(email1Exp)){
                   emailError2.innerHTML = "";
                   email1Status= true;
                } else {
                   emailError2.innerHTML = "Enter Valid Email I'd";
                }
            }
            emailError2.style.color="Red"
            //Return validation
            if (email1Status){
                return true;
            } else {
                return false;
            }}




            ///////Explore
        function explorenow() {
            const emailexplore = document.getElementById("emailexplore").value
            const emailErrorexplore = document.getElementById("emailErrorexplore");
        
        
        
            let emailexploreStatus =  false;
            const emailexploreExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            
            
            //E-Mail validation
            if(emailexplore === "") {
                emailErrorexplore.innerHTML = "Please Enter E-mail address";
            } else {
                if (emailexplore.match(emailexploreExp)){
                   emailErrorexplore.innerHTML = "";
                   emailexploreStatus= true;
                } else {
                   emailErrorexplore.innerHTML = "Enter Valid Email I'd";
                }
            }
            emailErrorexplore.style.color="Red"
            //Return validation
            if (emailexploreStatus){
                return true;
            } else {
                return false;
            }}