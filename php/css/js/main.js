$(function() {
  $('select').niceSelect();

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

  $('#houses').on('change', function() {
    notChoice = document.getElementById('houses').value;
    let slideNow = getSlideNow(notChoice);
    slider.goToSlide(slideNow);
    console.log(slideNow);
  });

});