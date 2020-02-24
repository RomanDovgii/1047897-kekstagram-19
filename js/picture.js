'use strict';

(function () {
  var PathTo = {
    PHOTOS: 'photos/',
    AVATARS: 'img/avatar-'
  };

  var PHOTOS_URLS = generateUrlArray(PathTo.PHOTOS, window.data.PHOTOS_COUNTER);
  var AVATARS_URLS = generateUrlArray(PathTo.AVATARS, window.data.AVATAR_DESCRIPTION_COUNTER);
  var PHOTO_OBJECTS = generatePhotoArray();

  function generateUrlArray(type, arrayLength) {
    var urls = [];
    var extension = '';

    switch (type) {
      case PathTo.PHOTOS:
        extension = '.jpg';
        break;
      case PathTo.AVATARS:
        extension = '.svg';
        break;
    }

    for (var i = 1; i <= arrayLength; i++) {
      var path = type + i.toString() + extension;
      urls.push(path);
    }

    return urls;
  }

  function generatePhotoArray() {
    var localPhotoObjects = [];
    var localPhotoUrls = Array.from(PHOTOS_URLS);

    for (var i = 0; i < window.data.PHOTOS_COUNTER; i++) {
      localPhotoObjects.push(generatePictureObject(localPhotoUrls));
      localPhotoUrls.splice(localPhotoUrls.indexOf(localPhotoObjects[i].url), 1);
    }

    return localPhotoObjects;
  }

  function generatePictureObject(photosArray) {
    var picture = {
      url: photosArray[generateRandomNumber(0, photosArray.length)],
      description: '',
      likes: generateRandomNumber(window.data.LIKES_MIN_NUMBER, window.data.LIKES_MAX_NUMBER),
      comments: generateCommentObject(generateRandomNumber(window.data.COMMENTS_MIN_NUMBER, window.data.COMMENTS_MAX_NUMBER))
    };

    return picture;
  }

  function generateRandomComment(pieces) {
    var comment = '';
    var previousPart = '';
    var commentPieces = Array.from(window.data.MESSAGE_PARTS);

    for (var i = 0; i < pieces; i++) {
      previousPart = commentPieces[generateRandomNumber(0, commentPieces.length)];
      comment = comment + previousPart + ' ';
      commentPieces.splice(commentPieces.indexOf(previousPart), 1);
    }

    return comment;
  }

  function generateRandomNumber(min, max) {
    var randomNumber;

    randomNumber = Math.floor(Math.random() * (max - min) + min);

    return randomNumber;
  }

  function generateCommentObject(count) {
    var comments = [];

    for (var c = 0; c < count; c++) {
      var comment = {
        avatar: AVATARS_URLS[generateRandomNumber(0, AVATARS_URLS.length)],
        message: generateRandomComment(2),
        name: window.data.NAMES[generateRandomNumber(0, window.data.NAMES.length)]
      };

      comments.push(comment);
    }

    return comments;
  }

  window.picture = {
    AVATARS_URLS: AVATARS_URLS,
    PHOTO_OBJECTS: PHOTO_OBJECTS
  };
})();
