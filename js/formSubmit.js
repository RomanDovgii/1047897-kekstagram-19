'use strict';

(function () {
  var FORM = document.querySelector('.img-upload__form');
  var SUBMIT_BUTTON = FORM.querySelector('.img-upload__submit');

  FORM.addEventListener('submit', function (evt) {
    evt.preventDefault();
    SUBMIT_BUTTON.disabled = true;

    window.backend.upload(new FormData(FORM), function () {
      window.formReset.closeAndReset();
      SUBMIT_BUTTON.disabled = false;
    });
  });
})();
