'use strict';

(function () {

  function onSuccess(photos) {
    window.gallery.render(photos);
    window.gallerySort.sortButtons(photos);
  }

  window.backend.load(onSuccess);
})();
