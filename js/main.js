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
  bookingModal.classList.add('modal-booking--visible')
};

// Close modal dialog:

var closeModalButton = document.querySelector('.modal__button-close');

closeModalButton.addEventListener('click', bookingModalClose);

function bookingModalClose(event) {
  event.preventDefault()
  bookingModal.classList.remove('modal-booking--visible')
};