var menuButton = document.querySelector('.header-top__menu-button');
var popupMenu = document.querySelector('.popup-menu');
var hotel = document.querySelector('.hotel');
var newsletter = document.querySelector('.newsletter');
var reviews = document.querySelector('.reviews');

function popupMenuShow() { 
  popupMenu.classList.toggle('popup-menu--active')
  hotel.classList.toggle('section--disabled')
  newsletter.classList.toggle('section--disabled')
  reviews.classList.toggle('section--disabled')
};

menuButton.addEventListener('click', popupMenuShow);

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