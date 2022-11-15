var menuButton = document.querySelector('.header-top__menu-button');
var navMobile = document.querySelector('.nav');
/* Скрыть секции
var hotelSection = document.querySelector('.hotel');
var packagesSection = document.querySelector('.packages');
var newsletterSection = document.querySelector('.newsletter');
var reviewsSection = document.querySelector('.reviews');
var activitiesSection = document.querySelector('.activities');
var footerSection = document.querySelector('.footer');
*/

menuButton.addEventListener('click', popupNavMobileShow);

function popupNavMobileShow() {
  navMobile.classList.toggle('nav--mobile--visible')
  /* Скрыть секции
  hotelSection.classList.toggle('section--disabled')
  packagesSection.classList.toggle('section--disabled')
  newsletterSection.classList.toggle('section--disabled')
  reviewsSection.classList.toggle('section--disabled')
  activitiesSection.classList.toggle('section--disabled')
  footerSection.classList.toggle('section--disabled')
  */
};

// Swiper slider for hotel images:

const photoSlider = new Swiper('.photo-swiper', {
  // Optional parameters
  loop: true,
  speed: 500,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.photo-slider__button--next',
    prevEl: '.photo-slider__button--prev',
  },

});

// Swiper slider for peviews:

const reviewSlider = new Swiper('.review-swiper', {
  // Optional parameters
  loop: true,
  speed: 500,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },

});

// Open booking dialog:

var openBookingModalButton = document.querySelector('.booking__button');
var bookingModal = document.querySelector('.modal-booking');

openBookingModalButton.addEventListener('click', bookingModalShow);

function bookingModalShow() {
  bookingModal.classList.add('modal--visible');  
};

// Close modal dialog:

var modal = document.querySelector('.modal');

var closeModalButton = document.querySelector('.modal__button-close');
closeModalButton.addEventListener('click', modalClose);

var closeModalAround = document.querySelector('.modal-overlay');
closeModalAround.addEventListener('click', modalClose);

function modalClose(event) {
  event.preventDefault();
  modal.classList.remove('modal--visible');
};

window.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') modal.classList.remove('modal--visible');
});
  
// Form validation:

$(".footer__form").validate(
  {
    messages: {
      phone: {
      required: "This field is required.",
      minlength: "Please write your mobile phone number."
    }
    },
    errorClass: "footer__form--error"
  }
);

$(".subscribe-form").validate(
  {
    errorClass: "subscribe-form--error"
  }
);

$(".modal__form").validate(
  {
    errorClass: "modal__form--error"
  }
);

// Phone pattern:

$(document).ready(function(){
  $('.form__input-phone').mask('+7 (000) 000-00-00');
});