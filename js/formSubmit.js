'use strict';

(function () {
  var SUBMIT = document.querySelector('.img-upload__submit');
  var FORM = document.querySelector('.img-upload__form');
  // var SUBMIT_BUTTON = FORM.querySelector('.img-upload__submit');

  function showSuccessPopup() {
    SUBMIT.disabled = false;
    window.formReset.closeAndReset();
    window.formSuccess.render();
  }

  function showErrorPopup() {
    SUBMIT.disabled = false;
    window.formReset.closeAndReset();
    window.formError.render();
  }

  FORM.addEventListener('submit', function (evt) {
    evt.preventDefault();
    SUBMIT.disabled = true;

    window.backend.upload(new FormData(FORM), showSuccessPopup, showErrorPopup);
  });
})();
