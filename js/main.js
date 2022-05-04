$(function () {
  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active')
  });
  $("a").on("click", function (e) {
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });
  $('.shop__main-filter-btn').on('click', function () {
    $('.filter').slideToggle();
  });
  var mixer = mixitup('.collection__items');
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });
  $('.team__slider').slick({
    prevArrow: '<button type = "button" class= "slick-prev" ><svg width="29" height="16" viewBox="0 0 29 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29 8L0.999999 8M0.999999 8L8.18919 0.999999M0.999999 8L8.18919 15", stroke="#858585"/><svg></button>',
    nextArrow: '<button type = "button" class= "slick-next" ><svg width="29" height="16" viewBox="0 0 29 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d = "M8.34742e-08 8L28 8M28 8L20.8108 15M28 8L20.8108 1" stroke = "black"/></svg ></button>',
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
     responsive: [
      {
        breakpoint: 550,
        settings: {
          arrows: false,
        }
      }
    ]
  });
  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  };

  function initializeClock(id, endtime) {
    const clock = document.querySelector('.promo__clock');
    const daysSpan = clock.querySelector('.promo__days');
    const hoursSpan = clock.querySelector('.promo__hours');
    const minutesSpan = clock.querySelector('.promo__minutes');
    const secondsSpan = clock.querySelector('.promo__seconds');

    function updateClock() {
      const t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  };
  const deadline = $('.promo__clock').attr('data-time');
  initializeClock('promo__clock', deadline);
})