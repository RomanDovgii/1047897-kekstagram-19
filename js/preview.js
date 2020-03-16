'use strict';

(function () {

  var BIG_PICTURE = document.querySelector('.big-picture');
  var BIG_PICTURE_COMMENTS_MORE = document.querySelector('.social__comments-loader');

  var BIG_PICTURE_COMMENT_INPUT = BIG_PICTURE.querySelector('.social__footer-text');
  var BIG_PICTURE_CLOSE = BIG_PICTURE.querySelector('.big-picture__cancel');
  var USERS_PICTURES_LIST = document.querySelector('.pictures');
  var UPLOAD_EDIT_OVERLAY = document.querySelector('.img-upload__overlay');
  var UPLOAD_CANCEL_BUTTON = UPLOAD_EDIT_OVERLAY.querySelector('#upload-cancel');
  var UPLOAD_HASHTAGS_INPUT = UPLOAD_EDIT_OVERLAY.querySelector('.text__hashtags');
  var UPLOAD_DESCRIPTION_INPUT = UPLOAD_EDIT_OVERLAY.querySelector('.text__description');

  var counter = 0;
  var maxRender = 5;
  var numberEnclosed = 0;
  var photosEnclosed = [];

  function renderBigPicture(index, photos) {
    BIG_PICTURE.querySelector('.big-picture__img img').src = photos[index].url;
    BIG_PICTURE.querySelector('.social__caption').textContent = photos[index].description;
    BIG_PICTURE.querySelector('.likes-count').textContent = photos[index].likes;
    BIG_PICTURE.querySelector('.comments-count').textContent = photos[index].comments.length;
  }

  function showBigPicture(number) {
    counter = 0;
    maxRender = 5;
    numberEnclosed = 0;
    photosEnclosed = [];
    var photos = window.gallery.data;
    BIG_PICTURE.classList.remove('hidden');
    BIG_PICTURE_COMMENTS_MORE.classList.remove('hidden');
    document.querySelector('.social__comments').innerHTML = '';
    document.querySelector('body').classList.add('modal-open');
    renderBigPicture(number, photos);
    window.comments.appendComments(photos[number].comments, counter, maxRender);
    numberEnclosed = number;
    photosEnclosed = photos;
    BIG_PICTURE_COMMENTS_MORE.addEventListener('click', renderAdditionalComments);
  }

  function renderAdditionalComments() {
    counter = maxRender;

    if ((maxRender + 5) >= photosEnclosed[numberEnclosed].comments.length) {
      maxRender = photosEnclosed[numberEnclosed].comments.length;
      BIG_PICTURE_COMMENTS_MORE.classList.add('hidden');
    } else {
      maxRender += 5;
    }

    window.comments.appendComments(photosEnclosed[numberEnclosed].comments, counter, maxRender);
  }

  function showPicture(evt) {
    var linksMassive = USERS_PICTURES_LIST.querySelectorAll('.picture');
    var number = -1;
    var eventTarget = evt.target.closest('a');

    for (var i = 0; i < linksMassive.length; i++) {
      if (eventTarget === linksMassive[i]) {
        number = i;
      }
    }

    if (number >= 0) {
      showBigPicture(number);
    }


  }

  function hideBigPicture() {
    BIG_PICTURE.classList.add('hidden');
    BIG_PICTURE_COMMENTS_MORE.removeEventListener('click', renderAdditionalComments);
  }

  window.preview = {
    onCloseEditorButtonClick: function () {
      UPLOAD_CANCEL_BUTTON.addEventListener('click', function () {
        window.formReset.closeAndReset();
      });
    },
    onDocumentKeydown: function () {
      document.addEventListener('keydown', function (evt) {
        if ((evt.keyCode === window.data.ESC_KEY_CODE) && (!UPLOAD_EDIT_OVERLAY.classList.contains('hidden')) && (document.activeElement !== UPLOAD_DESCRIPTION_INPUT) && (document.activeElement !== UPLOAD_HASHTAGS_INPUT)) {
          window.formReset.closeAndReset();
        }

        if ((evt.keyCode === window.data.ESC_KEY_CODE) && (!BIG_PICTURE.classList.contains('hidden')) && (document.activeElement !== BIG_PICTURE_COMMENT_INPUT)) {
          hideBigPicture();
        }
      });
    },
    onPicturesKeydown: function () {
      USERS_PICTURES_LIST.addEventListener('keydown', function (evt) {

        if (evt.keyCode === window.data.ENTER_KEY_CODE) {
          showPicture(evt);
        }

      });
    },
    onPicturesClick: function () {
      USERS_PICTURES_LIST.addEventListener('click', function (evt) {
        showPicture(evt);
      });
    },
    onBigPictureCloseClick: function () {
      BIG_PICTURE_CLOSE.addEventListener('click', hideBigPicture);
    },
    bigPictureClose: function () {
      window.formReset.closeAndReset();
    }
  };
})();
