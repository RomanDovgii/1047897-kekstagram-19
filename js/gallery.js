'use strict';

(function () {
  function onSuccess(photos) {
    window.render.gallery(photos);
    window.gallerySort.sortButtons(photos);
    window.gallery = {
      data: photos
    };
  }

  window.backend.load(onSuccess);
})();
