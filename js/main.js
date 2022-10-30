var menuButton = document.querySelector('.header-top__menu-button');
var popupMenu = document.querySelector('.popup-menu');

function popupMenuShow() { 
  popupMenu.classList.toggle('popup-menu--active')
};

menuButton.addEventListener('click', popupMenuShow);

// Swiper slider:

const swiper = new Swiper('.swiper', {
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