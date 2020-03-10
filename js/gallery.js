'use strict';

(function () {
  var PICTURES_CONTAINER = document.querySelector('.pictures');
  var IMAGE_TEMPLATE = document.querySelector('#picture').content.querySelector('.picture');
  var PHOTOS = [];

  function renderImage(photoObjects) {
    var photoBlock = IMAGE_TEMPLATE.cloneNode(true);
    var fragment = document.createDocumentFragment();

    photoBlock.querySelector('.picture__img').src = photoObjects.url;
    photoBlock.querySelector('.picture__comments').textContent = photoObjects.comments.length;
    photoBlock.querySelector('.picture__likes').textContent = photoObjects.likes;
    fragment.appendChild(photoBlock);

    return fragment;
  }

  function createImageList(photos) {

    for (var i = 0; i < photos.length; i++) {
      PICTURES_CONTAINER.appendChild(renderImage(photos[i]));
    }

  }

  window.backend.load(function (photos) {
    createImageList(photos);
    PHOTOS = photos;
    window.gallery = {
      data: PHOTOS
    };
  });
})();
