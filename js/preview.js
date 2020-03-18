'use strict';

(function () {

  var BIG_PICTURE = document.querySelector('.big-picture');
  var BIG_PICTURE_COMMENTS_MORE = document.querySelector('.social__comments-loader');
  var BIG_PICTURE_COMMENT_INPUT = BIG_PICTURE.querySelector('.social__footer-text');
  var BIG_PICTURE_CLOSE = BIG_PICTURE.querySelector('.big-picture__cancel');
  var USERS_PICTURES_LIST = document.querySelector('.pictures');

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
    var photos = window.photos;

    BIG_PICTURE.classList.remove('hidden');
    BIG_PICTURE_COMMENTS_MORE.classList.remove('hidden');
    document.querySelector('.social__comments').innerHTML = '';
    document.querySelector('body').classList.add('modal-open');
    renderBigPicture(number, photos);
    window.comments.add(photos[number].comments, counter, maxRender);
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

    window.comments.add(photosEnclosed[numberEnclosed].comments, counter, maxRender);
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
    removeListeners();
  }

  function onDocumentKeydownHandler(evt) {

    if ((evt.keyCode === window.data.ESC_KEY_CODE) && (!BIG_PICTURE.classList.contains('hidden')) && (document.activeElement !== BIG_PICTURE_COMMENT_INPUT)) {
      hideBigPicture();
    }
  }

  function initiateListeners() {
    document.addEventListener('keydown', onDocumentKeydownHandler);
    BIG_PICTURE_CLOSE.addEventListener('click', hideBigPicture);
  }

  function onPictureKeydownHandler(evt) {

    if (evt.keyCode === window.data.ENTER_KEY_CODE) {
      showPicture(evt);
    }

    initiateListeners();
  }

  function onPictureClickHandler(evt) {
    showPicture(evt);
    initiateListeners();
  }

  function openPreview() {
    USERS_PICTURES_LIST.addEventListener('keydown', onPictureKeydownHandler);
    USERS_PICTURES_LIST.addEventListener('click', onPictureClickHandler);
  }

  function removeListeners() {
    document.removeEventListener('keydown', onDocumentKeydownHandler);
    BIG_PICTURE_CLOSE.removeEventListener('click', hideBigPicture);
  }

  window.preview = {
    open: function () {
      openPreview();
    }
  };
})();
