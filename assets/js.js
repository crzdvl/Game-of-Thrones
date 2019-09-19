//First form
document.getElementById("userName").addEventListener("keydown", validateName);
document.getElementById("houses").addEventListener("click", validateHouses);

function validateName() {
  if (!document.getElementById("userName").value.match(/^[a-zA-Z0-9]+$/g)) {
    document.getElementById("userName").style.cssText=`    
      border-color: #ff0000;
    `;
    return false;
  } else if (document.getElementById("userName").value.match(/^[a-zA-Z0-9]+$/g)){
    document.getElementById("userName").style.cssText=`    
      border-color: #d3bb89;
  `;
    return true;
  }
}

function validateHouses() {
  let notChoice = document.getElementById("houses").value;
  if (notChoice === "select") {
    document.getElementById("houses").style.cssText=`    
      border-color: #ff0000;
    `;
    return false; 
  } else {
    document.getElementById("houses").style.cssText=`    
    border-color: #d3bb89;
  `;
    return true;
  }
}

//Second form
document.getElementById("userEmail").addEventListener("keydown", validateEmail);
document.getElementById("userPassword").addEventListener("keydown", validatePassword);

function validateEmail() {

  if (!document.getElementById("userEmail").value.match(/^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g)) {
    document.getElementById("userEmail").style.cssText=`    
      border-color: #ff0000;
    `;

  } else if (document.getElementById("userEmail").value.match(/^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g)){
    document.getElementById("userEmail").style.cssText=`    
      border-color: #d3bb89;
  `;

  }
}

function validatePassword() {

  if (!document.getElementById("userPassword").value.match(/?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/g)) {
    document.getElementById("userPassword").style.cssText=`    
      border-color: #ff0000;
    `;

  } else if (document.getElementById("userPassword").value.match(/?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/g)){
    document.getElementById("userPassword").style.cssText=`    
      border-color: #d3bb89;
  `;

  }
}

submit_1.onclick = function() {
  validateName();
  validateHouses()
  if(validateName() === true && validateHouses() === true){
    document.getElementById("firstSection").style.cssText=`    
    display: none;
    `;
    document.getElementById("secondSection").style.cssText=`    
      display: block;
    `;
  }

  




}