//First form
document.getElementById("userName").addEventListener("keydown", validateName);
document.getElementById("houses").addEventListener("click", validateHouses);
document.getElementById("userEmail").addEventListener("keydown", validateEmail);
document.getElementById("userPassword").addEventListener("keydown", validatePassword);

function validateName() {
  if (!document.getElementById("userName").value.match(/^[a-zA-Z0-9]+$/g)) {
    document.getElementById("userName").style.cssText=`border-color: #ff0000;`;
    return false;
  } else if (document.getElementById("userName").value.match(/^[a-zA-Z0-9]+$/g)){
    document.getElementById("userName").style.cssText=`border-color: #d3bb89;`;
    return true;
  }
}

function validateHouses() {
  const notChoice = document.getElementById("houses").value;
  if (notChoice === "select") {
    document.getElementById("houses").style.cssText=`border-color: #ff0000;`;
    return false; 
  } else {
    document.getElementById("houses").style.cssText=`border-color: #d3bb89;`;
    return true;
  }
}

//Second form
function validateEmail() {
  if (!document.getElementById("userEmail").value.match(/^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g)) {
    document.getElementById("userEmail").style.cssText=`border-color: #ff0000;`;
    return false;
  } else if (document.getElementById("userEmail").value.match(/^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g)){
    document.getElementById("userEmail").style.cssText=`border-color: #d3bb89;`;
    return true;
  }
}

function validatePassword() {
  if (!document.getElementById("userPassword").value.match(/^.{8,}$/g)) {
    document.getElementById("userPassword").style.cssText=`border-color: #ff0000;`;
    return false;
  } else if (document.getElementById("userPassword").value.match(/^.{8,}$/g)){
    document.getElementById("userPassword").style.cssText=`border-color: #d3bb89;`;
    return true;
  }
}

submit_2.onclick = function() {
  validateEmail();
  validatePassword();
  if(validatePassword() && validateEmail()){
    document.getElementById("firstSection").style.cssText=`display: none;`;
    document.getElementById("secondSection").style.cssText=`display: block;`;
  }
};