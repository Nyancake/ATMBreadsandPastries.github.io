var slideIndex = 1;

var TIMEOUT = 6000;


var interval = setInterval(handleNext, TIMEOUT);

function handleNext() {

  var $radios = $('input[class*="slide-radio"]');
  var $activeRadio = $('input[class*="slide-radio"]:checked');

  var currentIndex = $activeRadio.index();
  var radiosLength = $radios.length;

  $radios
    .attr('checked', false);


  if (currentIndex >= radiosLength - 1) {

    $radios
      .first()
      .attr('checked', true);

  } else {

    $activeRadio
      .next('input[class*="slide-radio"]')
      .attr('checked', true);

  }

}

/*Testimonials*/
$(document).ready(function () {
  var silder = $(".owl-carousel");
  silder.owlCarousel({
  autoPlay: false,
  items: 1,
  center: false,
  nav: true,
  margin: 40,
  dots: false,
  loop: true,
  navText: ["<i class='fa fa-arrow-left' aria-hidden='true'></i>", "<i class='fa fa-arrow-right' aria-hidden='true'></i>"],
  responsive: {
  0: {
  items: 1,
  },
  575: { items: 1 },
  768: { items: 2 },
  991: { items: 3 },
  1200: { items: 4 }
  }
  });
  });

