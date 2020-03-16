'use strict';

(function () {
  var UPLOAD_EDIT_OVERLAY = document.querySelector('.img-upload__overlay');
  var FORM = document.querySelector('.img-upload__form');
  var PREVIEW = document.querySelector('.img-upload__preview img');
  var RADIO_PREVIEWS = document.querySelectorAll('.effects__preview');
  var UPLOAD_FILE_INPUT = document.querySelector('#upload-file');

  function closeUploadFormHandler() {
    UPLOAD_EDIT_OVERLAY.classList.add('hidden');
    UPLOAD_FILE_INPUT.value = '';
    FORM.reset();
    window.imageScale.actions();
    PREVIEW.src = 'img/upload-default-image.jpg';
    RADIO_PREVIEWS.forEach(function (element) {
      element.style.backgroundImage = 'url("img/upload-default-image.jpg")';
    });
  }

  window.formReset = {
    closeAndReset: function () {
      closeUploadFormHandler();
    }
  };
})();
