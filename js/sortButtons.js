'use strict';

(function () {
  var BUTTON_DEFAULT = document.querySelector('#filter-default');
  var BUTTON_RANDOM = document.querySelector('#filter-random');
  var BUTTON_DISCUSSED = document.querySelector('#filter-discussed');
  var FILTERS = document.querySelector('.img-filters--inactive');
  var PICTURES_CONTAINER = document.querySelector('.pictures');

  var ACTIVE = 'img-filters__button--active';

  var photos = [];

  var debounce = window.debounce(function () {
    cleanContainer();

    if (BUTTON_DEFAULT.classList.contains(ACTIVE)) {
      window.render.gallery(photos);
    }

    if (BUTTON_RANDOM.classList.contains(ACTIVE)) {
      window.render.gallery(window.sort.random(photos));
    }

    if (BUTTON_DISCUSSED.classList.contains(ACTIVE)) {
      window.render.gallery(window.sort.discussed(photos));
    }

  });

  function cleanContainer() {
    PICTURES_CONTAINER.querySelectorAll('.picture').forEach(function (element) {
      element.remove();
    });
  }

  function makeDefault(evt) {
    evt.preventDefault();
    debounce();
    BUTTON_DEFAULT.classList.add(ACTIVE);

    if (BUTTON_RANDOM.classList.contains(ACTIVE)) {
      BUTTON_RANDOM.classList.remove(ACTIVE);
    }

    if (BUTTON_DISCUSSED.classList.contains(ACTIVE)) {
      BUTTON_DISCUSSED.classList.remove(ACTIVE);
    }

  }

  function makeRandom(evt) {
    evt.preventDefault();
    debounce();
    BUTTON_RANDOM.classList.add(ACTIVE);

    if (BUTTON_DEFAULT.classList.contains(ACTIVE)) {
      BUTTON_DEFAULT.classList.remove(ACTIVE);
    }

    if (BUTTON_DISCUSSED.classList.contains(ACTIVE)) {
      BUTTON_DISCUSSED.classList.remove(ACTIVE);
    }
  }

  function makeDiscussed(evt) {
    evt.preventDefault();
    debounce();
    BUTTON_DISCUSSED.classList.add(ACTIVE);

    if (BUTTON_RANDOM.classList.contains(ACTIVE)) {
      BUTTON_RANDOM.classList.remove(ACTIVE);
    }

    if (BUTTON_DEFAULT.classList.contains(ACTIVE)) {
      BUTTON_DEFAULT.classList.remove(ACTIVE);
    }
  }

  window.gallerySort = {
    sortButtons: function (array) {
      photos = array;
      FILTERS.classList.remove('img-filters--inactive');
      BUTTON_DEFAULT.addEventListener('click', makeDefault);
      BUTTON_RANDOM.addEventListener('click', makeRandom);
      BUTTON_DISCUSSED.addEventListener('click', makeDiscussed);
    }
  };

})();
