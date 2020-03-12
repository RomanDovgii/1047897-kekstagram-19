'use strict';

(function () {
  var UPLOAD_EDIT_OVERLAY = document.querySelector('.img-upload__overlay');
  var FORM = document.querySelector('.img-upload__form');

  function closeUploadFormHandler() {
    UPLOAD_EDIT_OVERLAY.classList.add('hidden');
    FORM.reset();
    window.imageScale.actions();
  }

  window.formReset = {
    closeAndReset: function () {
      closeUploadFormHandler();
    }
  };
})();
