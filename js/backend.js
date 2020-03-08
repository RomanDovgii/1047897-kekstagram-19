'use strict';

(function () {
  // var URL = 'https://js.dump.academy/code-and-magick';
  var PHOTOS = 'https://js.dump.academy/kekstagram/data';
  // var FORM = document.querySelector('.setup-wizard-form');
  // var SUBMIT_BUTTON = FORM.querySelector('.setup-submit');

  var renderError = function (errorMessage) {
    removeError();

    var errorBlock = document.createElement('div');
    errorBlock.style = 'z-index: 50; margin: 0 auto; text-align: center; background-color: #f44a47; width: 100%;';
    errorBlock.style.position = 'fixed';
    errorBlock.style.left = 0;
    errorBlock.style.right = 0;
    errorBlock.style.fontSize = '40px';
    errorBlock.classList.add('error-block');
    errorBlock.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', errorBlock);
  };

  var removeError = function () {
    var errorBlock = document.querySelector('.error-block');

    if (errorBlock !== null) {
      errorBlock.remove();
    }
  };

  window.backend = {
    load: function (onSuccess) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.open('GET', PHOTOS);

      xhr.addEventListener('load', function () {
        if (xhr.status > 200) {
          renderError('Произошла ошибка');
        } else {
          onSuccess(xhr.response);
          removeError();
        }
      });

      xhr.send();
    }
  };


})();
