const userName = document.getElementById("userName"),
      houses = document.getElementById("houses"),
      userEmail = document.getElementById("userEmail"),
      userPassword = document.getElementById("userPassword"),
      firstSection = document.getElementById("firstSection"),
      secondSection = document.getElementById("secondSection");

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


$(window).on('load', function() {
  $('#houses').on('change', function() {
    changeCurrentSlide();
    nextSlide();
  });
});


/*Slider*/
let slideNow = 1;
    slideCount = $('#slidewrapper').children().length,
    navBtnId = 0,
    translateWidth = 0;

$(document).ready(function() {
    $('#next-btn').click(function() {
        nextSlide();
    });

    $('#prev-btn').click(function() {
        prevSlide();
    });
});


function changeCurrentSlide() {
  notChoice = document.getElementById("houses").value;
  let slideNow = getSlideNow(notChoice);
};

function getSlideNow(notChoice) {
  let slides = {
    0 : 'Stark of Winterfell',
    1 : "Targaryen of King's Landing",
    2 : 'Tully of Riverrun',
    3 : 'Tyrell of Highgarden'
  };
  return slides;
};

function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount || slideNow === 0) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
          slideNow = 1;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
}

function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#viewport').width() * (slideCount - 1);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
}

/**/ 
$(document).ready(function() {
  $('select').niceSelect();
});