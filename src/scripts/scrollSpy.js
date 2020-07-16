import scrollSpy from 'simple-scrollspy';

const options = {
  sectionClass: '.scrollspy', // Query selector to your sections
  menuActiveTarget: '.navigation__link', // Query selector to your elements that will be added `active` class
  offset: 100, // Menu item will active before scroll to a matched section 100px
};

// init:
// scrollSpy(document.getElementById('main-menu'), options);

// or shorter:
scrollSpy('#menu', options);
