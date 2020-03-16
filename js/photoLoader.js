'use strict';

(function () {
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

  var FILE_CHOOSER = document.querySelector('#upload-file');
  var UPLOAD_EDIT_OVERLAY = document.querySelector('.img-upload__overlay');
  var PREVIEW = document.querySelector('.img-upload__preview img');
  var RADIO_PREVIEWS = document.querySelectorAll('.effects__preview');

  var uploadFile = function () {
    var file = FILE_CHOOSER.files[0];
    var fileName = file.name.toLowerCase();

    var matches = FILE_TYPES.some(function (it) {
      return fileName.endsWith(it);
    });

    if (matches) {
      var reader = new FileReader();

      reader.addEventListener('load', function () {
        PREVIEW.src = reader.result;
        RADIO_PREVIEWS.forEach(function (element) {
          element.style.backgroundImage = 'url("' + reader.result + '")';
        });

      });

      reader.readAsDataURL(file);
      UPLOAD_EDIT_OVERLAY.classList.remove('hidden');
    } else {
      window.formError.render();
    }
  };

  FILE_CHOOSER.addEventListener('change', uploadFile);
})();
