'use strict';

(function () {
  var UPLOAD_FILE_INPUT = document.querySelector('#upload-file');
  var BIG_PICTURE = document.querySelector('.big-picture');
  var BIG_PICTURE_COMMENT_INPUT = BIG_PICTURE.querySelector('.social__footer-text');
  var BIG_PICTURE_CLOSE = BIG_PICTURE.querySelector('.big-picture__cancel');
  var SOCIAL_COMMENTS = BIG_PICTURE.querySelector('.social__comments');
  var SOCIAL_COMMENT_TEMPLATE = SOCIAL_COMMENTS.querySelector('.social__comment');
  var USERS_PICTURES_LIST = document.querySelector('.pictures');
  var UPLOAD_EDIT_OVERLAY = document.querySelector('.img-upload__overlay');
  var UPLOAD_CANCEL_BUTTON = UPLOAD_EDIT_OVERLAY.querySelector('#upload-cancel');
  var UPLOAD_HASHTAGS_INPUT = UPLOAD_EDIT_OVERLAY.querySelector('.text__hashtags');
  var UPLOAD_DESCRIPTION_INPUT = UPLOAD_EDIT_OVERLAY.querySelector('.text__description');

  function renderBigPicture(index, photos) {
    BIG_PICTURE.querySelector('.big-picture__img img').src = photos[index].url;
    BIG_PICTURE.querySelector('.social__caption').textContent = photos[index].description;
    BIG_PICTURE.querySelector('.likes-count').textContent = photos[index].likes;
    BIG_PICTURE.querySelector('.comments-count').textContent = photos[index].comments.length;
  }

  function showBigPicture(number) {
    var photos = window.gallery;
    BIG_PICTURE.classList.remove('hidden');
    document.querySelector('.social__comments').innerHTML = '';
    document.querySelector('body').classList.add('modal-open');
    renderBigPicture(number, photos);
    appendComments(number, photos);
    BIG_PICTURE.querySelector('.social__comment-count').classList.add('hidden');
    BIG_PICTURE.querySelector('.comments-loader').classList.add('hidden');
  }

  function appendComments(index, photos) {

    for (var i = 0; i < photos[index].comments.length; i++) {
      var socialComment = SOCIAL_COMMENT_TEMPLATE.cloneNode(true);
      socialComment.querySelector('.social__picture').src = photos[index].comments[i].avatar;
      socialComment.querySelector('.social__picture').alt = photos[index].comments[i].name;
      socialComment.querySelector('.social__text').textContent = photos[index].comments[i].message;
      SOCIAL_COMMENTS.append(socialComment);
    }

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


  function closeUploadFormHandler() {
    UPLOAD_EDIT_OVERLAY.classList.add('hidden');
    UPLOAD_FILE_INPUT.value = '';
  }

  window.preview = {
    onCloseEditorButtonClick: function () {
      UPLOAD_CANCEL_BUTTON.addEventListener('click', function () {
        closeUploadFormHandler();
      });
    },
    onDocumentKeydown: function () {
      document.addEventListener('keydown', function (evt) {
        if ((evt.keyCode === window.data.ESC_KEY_CODE) && (!UPLOAD_EDIT_OVERLAY.classList.contains('hidden')) && (document.activeElement !== UPLOAD_DESCRIPTION_INPUT) && (document.activeElement !== UPLOAD_HASHTAGS_INPUT)) {
          closeUploadFormHandler();
        }

        if ((evt.keyCode === window.data.ESC_KEY_CODE) && (!BIG_PICTURE.classList.contains('hidden')) && (document.activeElement !== BIG_PICTURE_COMMENT_INPUT)) {
          BIG_PICTURE.classList.add('hidden');
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
      BIG_PICTURE_CLOSE.addEventListener('click', function () {
        BIG_PICTURE.classList.add('hidden');
      });
    }
  };
})();
