const userName = document.getElementById("userName"),
      houses = document.getElementById("houses"),
      userEmail = document.getElementById("userEmail"),
      userPassword = document.getElementById("userPassword"),
      firstSection = document.getElementById("first-section-submit"),
      secondSection = document.getElementById("second-section-submit");

//First form
userName.addEventListener("focusout", validateName);
houses.addEventListener("onclick", validateHouses);
userEmail.addEventListener("focusout", validateEmail);
userPassword.addEventListener("keydown", validatePassword);

function validateName() {
  if (!userName.value.match(/^[a-zA-Z0-9]+$/g)) {
    userName.classList.add('false');
    return false;
  } else if (userName.value.match(/^[a-zA-Z0-9]+$/g)){
    userName.classList.remove('false');
    return true;
  }
}

let notChoice = document.getElementById("houses").value;
function validateHouses() {
  if (notChoice === "Select House") {
    console.log('false');
  } else {
    console.log('true');
  }

}

//Second form
function validateEmail() {
  if (!userEmail.value.match(/^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g)) {
      userEmail.classList.add('false');
      return false;
  } else if (userEmail.value.match(/^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g)){
      userEmail.classList.remove('false');
      return true;
  }
}

function validatePassword() {
  if (!userPassword.value.match(/^.{8,}$/g)) {
      userPassword.classList.add('false');
      return false;
  } else if (userPassword.value.match(/^.{8,}$/g)){
      userPassword.classList.remove('false');
      return true;
  }
}

submit_2.onclick = function() {
  validateEmail();
  validatePassword();
  if(validatePassword() && validateEmail()){
    firstSection.classList.add('section-none');
    secondSection.classList.remove('section-none');
  }
};

submit_1.onclick = function() {
  validateName();
  validateHouses();
};

$(document).ready(function() {
  $('select').niceSelect();
});

let slider = jQuery('#sliders').slippry({
  adaptiveHeight: false,
  start: 1, 
  loop: false,
  controls: false,
  transition: 'fade', 
  easing: 'linear', 
  continuous: false,
  auto: false
});

function getSlideNow (type) {
  let slides = {
    'Stark of Winterfell' : 1,
    "Targaryen of King's Landing" : 2 ,
    'Tully of Riverrun' : 3,
    'Tyrell of Highgarden' : 4,
    'Select House': 1
  };
  return slides[type];
}

$(window).on('load', function() {
  $('#houses').on('change', function() {
    
    notChoice = document.getElementById("houses").value;
    let slideNow = getSlideNow(notChoice);
    /*switch(notChoice) {
      case "Stark of Winterfell":
        slideNow = 1;
      break;

      case "Targaryen of King's Landing":
        slideNow = 2;
      break;

      case 'Tully of Riverrun':
        slideNow = 3;
      break;

      case 'Tyrell of Highgarden': 
      slideNow = 4;
      break;

      default:
      slideNow = 1;
    }*/
    slider.goToSlide(slideNow);
    console.log(slideNow);
  });
});