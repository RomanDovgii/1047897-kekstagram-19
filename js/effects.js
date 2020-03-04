'use strict';

(function () {
  var FORM = document.querySelector('.img-upload__form');
  var IMAGE_UPLOAD_PREVIEW = FORM.querySelector('.img-upload__preview');
  var IMAGE = IMAGE_UPLOAD_PREVIEW.querySelector('img');

  function effectProportion(min, max, percent) {
    var strength = min + ((max - min) * percent);
    return strength;
  }

  window.effects = {
    applyEffect: function (type, percent) {
      var localPercent = percent / 100;
      var min = 0;
      var max = 100;

      switch (type) {
        case 'chrome':
          min = 0;
          max = 1;
          effectProportion(min, max, localPercent);
          IMAGE.removeAttribute('class');
          IMAGE.classList.add('effect__preview--chrome');
          IMAGE.style.filter = 'grayscale(' + effectProportion(min, max, localPercent) + ')';
          break;
        case 'sepia':
          min = 0;
          max = 1;
          effectProportion(min, max, localPercent);
          IMAGE.removeAttribute('class');
          IMAGE.classList.add('effect__preview--sepia');
          IMAGE.style.filter = 'sepia(' + effectProportion(min, max, localPercent) + ')';
          break;
        case 'marvin':
          min = 0;
          max = 100;
          effectProportion(min, max, localPercent);
          IMAGE.removeAttribute('class');
          IMAGE.classList.add('effect__preview--marvin');
          IMAGE.style.filter = 'invert(' + effectProportion(min, max, localPercent) + '%)';
          break;
        case 'phobos':
          min = 0;
          max = 3;
          IMAGE.removeAttribute('class');
          IMAGE.classList.add('effect__preview--phobos');
          IMAGE.style.filter = 'blur(' + effectProportion(min, max, localPercent) + 'px)';
          break;
        case 'heat':
          min = 1;
          max = 3;
          effectProportion(min, max, localPercent);
          IMAGE.removeAttribute('class');
          IMAGE.classList.add('effect__preview--heat');
          IMAGE.style.filter = 'brightness(' + effectProportion(min, max, localPercent) + ')';
          break;
        default:
          min = 0;
          max = 100;
          effectProportion(min, max, localPercent);
          IMAGE.removeAttribute('class');
          IMAGE.removeAttribute('style');
          break;

      }
    }
  };
})();
