'use strict';

(function () {
  var SUBMIT = document.querySelector('.img-upload__submit');
  var UPLOAD_EDIT_FORM = document.querySelector('.img-upload__form');
  // var SUBMIT_BUTTON = UPLOAD_EDIT_FORM.querySelector('.img-upload__submit');

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

  UPLOAD_EDIT_FORM.addEventListener('submit', function (evt) {
    evt.preventDefault();
    SUBMIT.disabled = true;

    window.backend.upload(new FormData(UPLOAD_EDIT_FORM), showSuccessPopup, showErrorPopup);
  });
})();
