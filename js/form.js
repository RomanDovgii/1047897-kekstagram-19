'use strict';

(function () {
  var UPLOAD_EDIT_FORM = document.querySelector('.img-upload__form');
  var UPLOAD_FILE_INPUT = document.querySelector('#upload-file');
  var UPLOAD_EDIT_OVERLAY = document.querySelector('.img-upload__overlay');
  var UPLOAD_CANCEL_BUTTON = UPLOAD_EDIT_OVERLAY.querySelector('#upload-cancel');
  var EFFECT_RADIO_LIST = document.querySelector('.effects__list');
  var EFFECT_NONE = EFFECT_RADIO_LIST.querySelector('#effect-none');
  var EFFECT_LEVEL_VALUE = UPLOAD_EDIT_OVERLAY.querySelector('.effect-level__value');
  var UPLOAD_DESCRIPTION_INPUT = UPLOAD_EDIT_OVERLAY.querySelector('.text__description');
  var UPLOAD_HASHTAGS_INPUT = UPLOAD_EDIT_OVERLAY.querySelector('.text__hashtags');
  var EFFECT_LEVEL_LINE = UPLOAD_EDIT_OVERLAY.querySelector('.effect-level__line');
  var EFFECT_LEVEL_PIN = EFFECT_LEVEL_LINE.querySelector('.effect-level__pin');
  var UPLOAD_EDIT_DEPTH = UPLOAD_EDIT_OVERLAY.querySelector('.effect-level__depth');

  var BASIC_VALUE = 20;
  var MAX_HASHTAGS = 5;

  function openUploadHandler() {
    window.imageScale.actions();
    EFFECT_NONE.checked = true;
    var type = EFFECT_NONE.type;
    window.effects.applyEffect(type, BASIC_VALUE);
    EFFECT_LEVEL_PIN.addEventListener('mouseup', onVolumePinMouseupHandler);
    UPLOAD_HASHTAGS_INPUT.addEventListener('input', onHashtagsInputHandler);
    UPLOAD_DESCRIPTION_INPUT.addEventListener('input', onDescriptionInputHandler);
    UPLOAD_EDIT_FORM.addEventListener('change', onFormChangeHandler);
    document.addEventListener('keydown', closeEditorFormHandler);
    UPLOAD_CANCEL_BUTTON.addEventListener('click', window.formReset.closeAndReset);
  }

  function closeUploadHandler() {
    EFFECT_LEVEL_PIN.removeEventListener('mouseup', onVolumePinMouseupHandler);
    UPLOAD_HASHTAGS_INPUT.removeEventListener('input', onHashtagsInputHandler);
    UPLOAD_DESCRIPTION_INPUT.removeEventListener('input', onDescriptionInputHandler);
    UPLOAD_EDIT_FORM.removeEventListener('change', onFormChangeHandler);
    document.removeEventListener('keydown', closeEditorFormHandler);
    UPLOAD_CANCEL_BUTTON.removeEventListener('click', window.formReset.closeAndReset);
  }

  function closeEditorFormHandler(evt) {
    if ((evt.keyCode === window.data.ESC_KEY_CODE) && (!UPLOAD_EDIT_OVERLAY.classList.contains('hidden')) && (document.activeElement !== UPLOAD_DESCRIPTION_INPUT) && (document.activeElement !== UPLOAD_HASHTAGS_INPUT)) {
      window.formReset.closeAndReset();
    }
  }

  function checkIfHashtagsAreCorrect(array) {
    var customValidityString = '';

    if (array.length <= MAX_HASHTAGS) {
      array.forEach(function (element) {
        var wordWithHashtag = element;
        var lowerCaseArray = makeArrayLowerCase(array);
        customValidityString = chechIfFirstSymbolIsHashtag(wordWithHashtag);
        if (customValidityString === '') {
          customValidityString = checkIfUsedTwice(lowerCaseArray);
        }
      });
    } else {
      customValidityString = 'К сожалению, фото не может иметь более 5 хештегов';
    }

    return customValidityString;
  }

  function chechIfFirstSymbolIsHashtag(string) {
    var customValidityString = '';

    if (string[0] !== '#') {
      customValidityString = 'Не забудьте, что каждый хештег должен начинаться с # и отделяться пробелом';
    } else {
      customValidityString = checIfLengthIsOk(string);
    }

    return customValidityString;
  }

  function checIfLengthIsOk(string) {
    var customValidityString = '';

    if (string.length > window.data.HASHTAG_MAX_LENGTH) {
      customValidityString = 'Один из хэштегов больше 20 символов, просим вас сократить его';
    } else {
      customValidityString = checkIfSymbolsAreAllowed(string);
    }

    return customValidityString;
  }

  function checkIfUsedTwice(array) {
    var customValidityString = '';

    array.forEach(function (element) {
      var counter = 0;
      var firstElement = element;

      array.forEach(function (anotherElement) {
        var secondElement = anotherElement;

        if (firstElement === secondElement) {
          counter += 1;
        }
      });

      if (counter > 1) {
        customValidityString = firstElement + ' повторяется ' + counter.toString() + ' раза';
      }
    });

    return customValidityString;
  }

  function checkIfSymbolsAreAllowed(string) {
    var wordWithoutHashtag = string.substr(1);
    var customValidityString = '';

    if (!window.data.LETTER_NUMBER.test(wordWithoutHashtag) && !(wordWithoutHashtag === '')) {
      customValidityString = 'Похоже, вы использовали спецсимвол или знак препинания, пожалуйста, удалите их';
    } else if (wordWithoutHashtag === '') {
      customValidityString = 'Не забудьте ввести хештег';
    }

    return customValidityString;
  }

  function selectRightSymbolWordForm(number) {
    var rightWord = ' символ';
    var numberModulus = number % 10;

    if (numberModulus > 1 && numberModulus < 5) {
      rightWord = ' символа';
    } else if (numberModulus > 4 || numberModulus === 0) {
      rightWord = ' символов';
    }

    return rightWord;
  }

  function makeArrayLowerCase(array) {
    var lowerCaseArray = [];

    array.forEach(function (element) {
      lowerCaseArray.push(element.toLowerCase());
    });

    return lowerCaseArray;
  }

  function onEffectChangeHandler(evt) {

    if (evt.target && evt.target.matches('input[type="radio"]')) {
      var type = evt.target.value;
      EFFECT_LEVEL_VALUE.setAttribute('value', BASIC_VALUE);
      EFFECT_LEVEL_PIN.style.left = 20 + '%';
      UPLOAD_EDIT_DEPTH.style.width = EFFECT_LEVEL_PIN.style.left;
      window.effects.applyEffect(type, BASIC_VALUE);
    }
  }

  function onVolumePinMouseupHandler() {
    var parentLength = EFFECT_LEVEL_LINE.offsetWidth;
    var pinDistanceFromLeft = EFFECT_LEVEL_PIN.offsetLeft;
    var volumeMaxValue = 100;
    EFFECT_LEVEL_VALUE.value = Math.floor((pinDistanceFromLeft * volumeMaxValue) / parentLength);
  }

  function onHashtagsInputHandler() {
    var hashtags = [];
    var customValidityString = '';
    hashtags = UPLOAD_HASHTAGS_INPUT.value.split(' ');
    customValidityString = checkIfHashtagsAreCorrect(hashtags);
    UPLOAD_HASHTAGS_INPUT.setCustomValidity(customValidityString);

    if (customValidityString !== '') {
      UPLOAD_HASHTAGS_INPUT.reportValidity();
    }
  }

  function onDescriptionInputHandler() {
    var customValidityString = '';
    var textContent = UPLOAD_DESCRIPTION_INPUT.value;
    UPLOAD_DESCRIPTION_INPUT.setCustomValidity(customValidityString);

    if (textContent.length > window.data.DESCRIPTION_MAX_LENGTH) {
      var difference = textContent.length - window.data.DESCRIPTION_MAX_LENGTH;
      customValidityString = 'Ваш комментарий слишком длинный, попробуйте укоротить его на ' + difference.toString() + selectRightSymbolWordForm(difference);
      UPLOAD_DESCRIPTION_INPUT.setCustomValidity(customValidityString);
      UPLOAD_DESCRIPTION_INPUT.reportValidity();
    }
  }

  function onFormChangeHandler(evt) {
    var value = onEffectChangeHandler(evt);
    return value;
  }

  window.form = {
    open: function () {
      UPLOAD_FILE_INPUT.addEventListener('change', openUploadHandler);
    },
    close: function () {
      closeUploadHandler();
    }
  };
})();
