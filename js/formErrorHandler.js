'use strict';

(function () {
  var UPLOAD_EDIT_FORM = document.querySelector('.img-upload__form');
  var SUBMIT_BUTTON = UPLOAD_EDIT_FORM.querySelector('.img-upload__submit');
  var MAIN = document.querySelector('main');
  var ERROR_TEMPLATE = document.querySelector('#error').content.querySelector('.error');

  function renderError() {
    var error = document.querySelector('.error');
    var errorBlock = ERROR_TEMPLATE.cloneNode(true);
    var fragment = document.createDocumentFragment();

    fragment.appendChild(errorBlock);

    if (error === null) {
      MAIN.prepend(fragment);
    }

    handleActions();
  }

  function removeError() {
    var error = document.querySelector('.error');

    if (error !== null) {
      error.remove();
    }
  }

  function removeListeners() {
    var error = document.querySelector('.error');
    var closeButton = error.querySelector('.error__button');

    closeButton.removeEventListener('click', closeButtonActionsHandler);
    document.removeEventListener('keydown', documentActionsHandler);
    error.removeEventListener('click', errorActionsHandler);
  }

  function errorActionsHandler(evt) {

    if (evt.target.closest('.error__inner')) {
      return;
    } else {
      removeListeners();
      removeError();
    }
  }

  function documentActionsHandler(evt) {

    if (evt.keyCode === window.data.ESC_KEY_CODE) {
      removeListeners();
      removeError();
    }
  }

  function closeButtonActionsHandler() {
    removeListeners();
    removeError();
  }

  function handleActions() {
    var error = document.querySelector('.error');

    if (error !== null) {
      var closeButton = error.querySelector('.error__button');

      SUBMIT_BUTTON.disabled = false;
      closeButton.addEventListener('click', closeButtonActionsHandler);
      document.addEventListener('keydown', documentActionsHandler);
      error.addEventListener('click', errorActionsHandler);
    }
  }

  window.formError = {
    render: function () {
      renderError();
    },
    error: function () {
      removeError();
    }
  };
})();
