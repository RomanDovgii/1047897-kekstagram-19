'use strict';

(function () {
  var UPLOAD_EDIT_OVERLAY = document.querySelector('.img-upload__overlay');
  var UPLOAD_EDIT_DEPTH = UPLOAD_EDIT_OVERLAY.querySelector('.effect-level__depth');
  var UPLOAD_EDIT_INPUT = UPLOAD_EDIT_OVERLAY.querySelector('.effect-level__value');
  var EFFECT_LEVEL_LINE = UPLOAD_EDIT_OVERLAY.querySelector('.effect-level__line');
  var EFFECT_LEVEL_PIN = EFFECT_LEVEL_LINE.querySelector('.effect-level__pin');
  var IMAGE_UPLOAD_PREVIEW = UPLOAD_EDIT_OVERLAY.querySelector('.img-upload__preview');
  var IMAGE = IMAGE_UPLOAD_PREVIEW.querySelector('img');


  EFFECT_LEVEL_PIN.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startClientX = evt.clientX;
    var pinHalf = EFFECT_LEVEL_PIN.offsetWidth / 2;
    var min = EFFECT_LEVEL_LINE.offsetLeft - EFFECT_LEVEL_PIN.offsetWidth;
    var max = min + EFFECT_LEVEL_LINE.offsetWidth - EFFECT_LEVEL_PIN.offsetWidth + pinHalf;
    var basePosition = min + EFFECT_LEVEL_PIN.offsetLeft;
    var type = IMAGE.className.slice(17);
    var dragged = false;

    function onMouseMove(moveEvt) {
      moveEvt.preventDefault();

      dragged = true;

      var shift = startClientX - moveEvt.clientX;

      startClientX = evt.clientX;

      EFFECT_LEVEL_PIN.style.left = (basePosition - shift) + 'px';

      if ((basePosition - shift) <= min) {
        EFFECT_LEVEL_PIN.style.left = min + 'px';
      }

      if (((basePosition - shift) - pinHalf) >= max) {
        EFFECT_LEVEL_PIN.style.left = max + pinHalf + 'px';
      }

      UPLOAD_EDIT_DEPTH.style.width = EFFECT_LEVEL_PIN.style.left;

      var percent = Math.floor(UPLOAD_EDIT_DEPTH.offsetWidth / EFFECT_LEVEL_LINE.offsetWidth * 100);
      UPLOAD_EDIT_INPUT.setAttribute('value', percent);
      window.effects.applyEffect(type, percent);
    }

    function onMouseUp(upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          EFFECT_LEVEL_PIN.removeEventListener('click', onClickPreventDefault);
        };
        EFFECT_LEVEL_PIN.addEventListener('click', onClickPreventDefault);
      }
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
