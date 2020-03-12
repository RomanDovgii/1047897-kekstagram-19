'use strict';

(function () {
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
    },
    actions: function () {
      handleActions();
    }
  };
})();
