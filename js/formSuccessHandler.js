'use strict';

(function () {
  var MAIN = document.querySelector('main');
  var SUCCESS_TEMPLATE = document.querySelector('#success').content.querySelector('.success');

  function renderSuccess() {
    var success = document.querySelector('.success');
    var successBlock = SUCCESS_TEMPLATE.cloneNode(true);
    var fragment = document.createDocumentFragment();

    fragment.appendChild(successBlock);
    if (success === null) {
      MAIN.prepend(fragment);
    }

    handleActions();
  }

  function removeSuccess() {
    var success = document.querySelector('.success');

    if (success !== null) {
      success.remove();
    }

  }

  function removeListeners() {
    var success = document.querySelector('.success');
    var closeButton = success.querySelector('.success__button');
    closeButton.removeEventListener('click', closeButtonActionsHandler);
    document.removeEventListener('keydown', documentActionsHandler);
    closeButton.removeEventListener('click', closeButtonActionsHandler);
  }

  function successActionsHandler(evt) {

    if (evt.target.closest('.success__inner')) {
      return;
    } else {
      removeListeners();
      removeSuccess();
    }

  }

  function documentActionsHandler(evt) {

    if (evt.keyCode === window.data.ESC_KEY_CODE) {
      removeListeners();
      removeSuccess();
    }

  }

  function closeButtonActionsHandler() {
    removeListeners();
    removeSuccess();
  }


  function handleActions() {
    var success = document.querySelector('.success');

    if (success !== null) {
      var closeButton = success.querySelector('.success__button');

      closeButton.addEventListener('click', closeButtonActionsHandler);
      document.addEventListener('keydown', documentActionsHandler);
      success.addEventListener('click', successActionsHandler);
    }

  }

  window.formSuccess = {
    render: function () {
      renderSuccess();
    },
    remove: function () {
      removeSuccess();
    }
  };
})();
