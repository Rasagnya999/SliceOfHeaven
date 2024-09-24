function validate() {
    
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value
    const mobile = document.getElementById("mobile").value;
    const caketype = document.getElementById("caketype").value;
    const Description = document.getElementById("Description").value;
    const Address = document.getElementById("Address").value;
    const flavour = document.getElementById("flavour").value;
    const Weight = document.getElementById("Weight").value;
    
    const nameError = document.getElementById("nameError");
    const mobileError = document.getElementById("mobileError");
    const emailError = document.getElementById("emailError");
    const DescriptionError = document.getElementById("DescriptionError");
    const AddressError = document.getElementById("AddressError");
    const caketypeError = document.getElementById("caketypeError");
    const flavourError = document.getElementById("flavourError");
    const WeightError = document.getElementById("WeightError");

    
    let nameStatus = mobileStatus = emailStatus = messageStatus= DescriptionStatus= AddressStatus= caketypeStatus = flavourStatus= WeightStatus= false;
    
    const alphaExp = /^[a-zA-Z]+$/;
    const alphaExp1 = /^[a-z]+$/;
    const numExp = /^[0-9]+$/;
    const emailExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const alphanumExp =/^[a-z0-9]+$/i
    
    
    
    
    
    //Name Validation
    if(username === "") {
        nameError.innerHTML = "Please Enter Name";
    } else {
        if (username.match(alphaExp)){
            nameError.innerHTML = "";
            nameStatus = true;
        } else {
            nameError.innerHTML = "Only Characters";
        }
    }
    
    //Mobile validation
    if (mobile === ""){
        mobileError.innerHTML = "Please Enter Mobile Number";
    } else {
        if(mobile.match(numExp)){
            if(mobile.length === 10){
                mobileError.innerHTML = "";
                mobileStatus = true;
            }
           else{
            mobileError.innerHTML = "10 Digits Mobile Number";
           
           }
           
        }
        else {
            mobileError.innerHTML = "Only Digits"
        }
    }
    
    //E-Mail validation
    if(email === "") {
        emailError.innerHTML = "Please Enter E-mail address";
    } else {
    
        if (email.match(emailExp)){
            emailError.innerHTML = "";
            emailStatus = true;
        } else {
            emailError.innerHTML = "Enter Valid Email I'd";
        }
    }
    
     ///Description validation
if (Description === ""){
        DescriptionError.innerHTML = "Please Add Description";
 } else {
      if(Description.match(alphaExp1)){
          if(Description){
               DescriptionError.innerHTML = "";
               DescriptionStatus = true;
          }
          else{
           DescriptionError.innerHTML = "45 Characters Allowed";
          }
           
       }
       else {
           DescriptionError.innerHTML = "invalid"
      }
    }
    
///Address validation
if (Address === ""){
    AddressError.innerHTML = "Please Add Address";
} else {
  if(Address.match(alphaExp1)){
      AddressError.innerHTML = "";
      AddressStatus = true;
    //   if(){
    //   }
    //   else{
    //    AddressError.innerHTML = "15 Characters Allowed";
       
    //   }
       
   }
   else {
    AddressError.innerHTML = "Only Characters"
  }
}

     ///caketype validation
     if (caketype == "") {
        caketypeError.innerHTML = "Please select  CakeType";
        caketypeStatus = false;
    } else {
        caketypeError.innerHTML = "";
        caketypeStatus = true;
    }
    

     ///flavour validation
     if (flavour == "") {
        flavourError.innerHTML = "Please select a flavor";
        flavourStatus = false;
    } else {
        flavourError.innerHTML = "";
        flavourStatus = true;
    }
     ///Weight validation
     if (Weight == "") {
        WeightError.innerHTML = "Please select Weight";
        WeightStatus = false;
    } else {
        WeightError.innerHTML = "";
        WeightStatus = true;
    }
    
   event.preventDefault();
    
   //Return validation
   if (nameStatus && mobileStatus && emailStatus && DescriptionStatus && AddressStatus && caketypeStatus && flavourStatus && WeightStatus){
       return true;
   } else {
       return false;
       
   }
 
}

    
    