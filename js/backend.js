'use strict';

(function () {
  var URL = 'https://js.dump.academy/kekstagram';
  var PHOTOS_URL = 'https://js.dump.academy/kekstagram/data';

  var NO_ERROR_CODE = 200;

  window.backend = {
    upload: function (data, onSuccess, onError) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        if (xhr.status > NO_ERROR_CODE) {
          onError();
        } else {
          onSuccess(xhr.response);
        }

      });

      xhr.open('POST', URL);
      xhr.send(data);
    },
    load: function (onSuccess, onError) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.open('GET', PHOTOS_URL);

      xhr.addEventListener('load', function () {
        if (xhr.status > NO_ERROR_CODE) {
          onError();
        } else {
          onSuccess(xhr.response);
        }
      });

      xhr.send();
    }
  };

})();
