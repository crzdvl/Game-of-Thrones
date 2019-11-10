//First form
document.getElementById("userName").addEventListener("keydown", validateName);
document.getElementById("houses").addEventListener("onclick", validateHouses);
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
var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var navBtnId = 0;
var translateWidth = 0;

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
  switch (notChoice) {
    case "Targaryen of King's Landing":
      slideNow = 1;
      break;
    case "Tully of Riverrun":
      slideNow = 2;
      break;
    case "Tyrell of Highgarden":
      slideNow = 3;
      break;
    case "Stark of Winterfell":
      slideNow = 0;
      break;
  }
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