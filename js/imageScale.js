'use strict';

(function () {
  var IMAGE_UPLOAD_OVERLAY = document.querySelector('.img-upload__overlay');
  var IMAGE_SCALE_BIGGER = IMAGE_UPLOAD_OVERLAY.querySelector('.scale__control--bigger');
  var IMAGE_SCALE_SMALLER = IMAGE_UPLOAD_OVERLAY.querySelector('.scale__control--smaller');
  var IMAGE_SCALE_NUMBER = IMAGE_UPLOAD_OVERLAY.querySelector('.scale__control--value');
  var IMAGE = IMAGE_UPLOAD_OVERLAY.querySelector('.img-upload__preview img');

  var MAX_SCALE = 100;
  var MIN_SCALE = 25;
  var STEP = 25;

  var imageScale = 100;

  function scale(percent) {
    var scaleValue = percent / MAX_SCALE;
    IMAGE.style.transform = 'scale(' + scaleValue + ')';
  }

  function biggerActionsHandler() {
    IMAGE_SCALE_NUMBER.setAttribute('value', imageScale);

    if (imageScale < MAX_SCALE) {
      imageScale += STEP;
    }

    IMAGE_SCALE_NUMBER.setAttribute('value', imageScale + '%');
    scale(imageScale);
  }

  function smallerActionsHandler() {
    if (imageScale > MIN_SCALE) {
      imageScale -= STEP;
    }

    IMAGE_SCALE_NUMBER.setAttribute('value', imageScale + '%');
    scale(imageScale);
  }

  function addEventHandler() {
    IMAGE_SCALE_NUMBER.setAttribute('value', imageScale + '%');

    if (IMAGE_UPLOAD_OVERLAY.classList.contains('hidden')) {
      IMAGE_SCALE_BIGGER.removeEventListener('click', biggerActionsHandler);
      IMAGE_SCALE_SMALLER.removeEventListener('click', smallerActionsHandler);
      imageScale = MAX_SCALE;
      IMAGE_SCALE_NUMBER.setAttribute('value', imageScale + '%');
      scale(imageScale);
    } else {
      IMAGE_SCALE_BIGGER.addEventListener('click', biggerActionsHandler);
      IMAGE_SCALE_SMALLER.addEventListener('click', smallerActionsHandler);
    }
  }

  window.imageScale = {
    actions: function () {
      addEventHandler();
    }
  };
})();
