'use strict';

(function () {
  var URL = 'https://js.dump.academy/kekstagram';
  var PHOTOS_URL = 'https://js.dump.academy/kekstagram/data';

  window.backend = {
    upload: function (data, onSuccess) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        if (xhr.status > 200) {
          window.formReset.closeAndReset();
          window.formError.render();
        } else {
          onSuccess(xhr.response);
          window.formSuccess.render();
        }

      });

      xhr.open('POST', URL);
      xhr.send(data);
    },
    load: function (onSuccess) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.open('GET', PHOTOS_URL);

      xhr.addEventListener('load', function () {
        if (xhr.status > 200) {
          window.formError.render();
        } else {
          onSuccess(xhr.response);
        }
      });

      xhr.send();
    }
  };

})();
