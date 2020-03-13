'use strict';

(function () {
  var FORM = document.querySelector('.img-upload__form');
  // var SUBMIT_BUTTON = FORM.querySelector('.img-upload__submit');

  function showSuccessPopup() {
    window.formReset.closeAndReset();
    window.formSuccess.render();
  }

  function showErrorPopup() {
    window.formReset.closeAndReset();
    window.formError.render();
  }

  FORM.addEventListener('submit', function (evt) {
    evt.preventDefault();

    window.backend.upload(new FormData(FORM), showSuccessPopup, showErrorPopup);
  });
})();
