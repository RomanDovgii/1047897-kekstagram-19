'use strict';

(function () {
  var PICTURES_CONTAINER = document.querySelector('.pictures');
  var IMAGE_TEMPLATE = document.querySelector('#picture').content.querySelector('.picture');

  function renderImage(number, photoObjects) {
    var photoBlock = IMAGE_TEMPLATE.cloneNode(true);
    var fragment = document.createDocumentFragment();

    photoBlock.querySelector('.picture__img').src = photoObjects[number].url;
    photoBlock.querySelector('.picture__comments').textContent = photoObjects[number].comments.length;
    photoBlock.querySelector('.picture__likes').textContent = photoObjects[number].likes;
    fragment.appendChild(photoBlock);

    return fragment;
  }

  function appendImage() {

    for (var i = 0; i < window.data.PHOTOS_COUNTER; i++) {
      PICTURES_CONTAINER.appendChild(renderImage(i, window.picture.PHOTO_OBJECTS));
    }

  }

  appendImage();
})();
