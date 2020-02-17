'use strict';


// constants//

var LIKES_MIN_NUMBER = 15;
var LIKES_MAX_NUMBER = 200;

var COMMENTS_MIN_NUMBER = 1;
var COMMENTS_MAX_NUMBER = 15;

var PHOTOS_COUNTER = 25;
var AVATAR_DESCRIPTION_COUNTER = 6;

var DESCRIPTION_MAX_LENGTH = 140;

var HASHTAG_MAX_LENGTH = 20;

var IMAGE_TEMPLATE = document.querySelector('#picture').content.querySelector('.picture');
var PICTURES_CONTAINER = document.querySelector('.pictures');
var BIG_PICTURE = document.querySelector('.big-picture');
var BIG_PICTURE_CLOSE = BIG_PICTURE.querySelector('.big-picture__cancel');
var BIG_PICTURE_COMMENT_INPUT = BIG_PICTURE.querySelector('.social__footer-text');
var SOCIAL_COMMENTS = BIG_PICTURE.querySelector('.social__comments');
var SOCIAL_COMMENT_TEMPLATE = SOCIAL_COMMENTS.querySelector('.social__comment');
var UPLOAD_FILE_INPUT = document.querySelector('#upload-file');
var UPLOAD_EDIT_OVERLAY = document.querySelector('.img-upload__overlay');
var UPLOAD_EDIT_FORM = document.querySelector('.img-upload__form');
var UPLOAD_CANCEL_BUTTON = UPLOAD_EDIT_OVERLAY.querySelector('#upload-cancel');
var EFFECT_LEVEL_VALUE = UPLOAD_EDIT_OVERLAY.querySelector('.effect-level__value');
var EFFECT_LEVEL_LINE = UPLOAD_EDIT_OVERLAY.querySelector('.effect-level__line');
var EFFECT_LEVEL_PIN = EFFECT_LEVEL_LINE.querySelector('.effect-level__pin');
var UPLOAD_HASHTAGS_INPUT = UPLOAD_EDIT_OVERLAY.querySelector('.text__hashtags');
var UPLOAD_DESCRIPTION_INPUT = UPLOAD_EDIT_OVERLAY.querySelector('.text__description');
var USERS_PICTURES_LIST = document.querySelector('.pictures');

var ENTER_KEY_CODE = 13;
var ESC_KEY_CODE = 27;

// restrictions//

var LETTER_NUMBER = /^[0-9a-zA-ZаАбБвВгГдДеЕёЁжЖзЗиИйЙкКлЛмМнНоОпПрРсСтТуУфФхХцЦчЧшШщЩъЪыЫьЬэЭюЮяЯ]+$/;

var PathTo = {
  PHOTOS: 'photos/',
  AVATARS: 'img/avatar-'
};


// arrays//

var NAMES_ARRAY = ['Аарон', 'Авраам', 'Агафон', 'Азат', 'Айрат', 'Артём', 'Арам', 'Борис', 'Блез', 'Богдан', 'Булат', 'Адольф', 'Бронислав', 'Бестрева', 'Будёна', 'Валентин', 'Вит', 'Василий', 'Влад', 'Владимир', 'Вильгельм', 'Евгений', 'Евдоким', 'Евсей', 'Жерар', 'Ждан', 'Александра', 'Закир', 'Зиновий', 'Дазвсемир', 'Даздранагон', 'Даздраперма', 'Далис', 'Кукуцаполь', 'Вилюр', 'Лоренс', 'Леон', 'Лев', 'Ленар', 'Любомир', 'Панкрат', 'Павел', 'Пётр', 'Равиль', 'Радик', 'Рамзан', 'Ролан', 'Рудольф', 'Радий', 'Полоний', 'Саша', 'Тигран', 'Томас', 'Серафим', 'Тайлер', 'Фарид', 'Савва', 'Фазиль', 'Хабиб', 'Самвел', 'Сани', 'Сергей', 'Спартак', 'Султан', 'Сидор', 'Станислав', 'Ладимир', 'Влада', 'Тарас', 'Тихон', 'Фёдор', 'Флор', 'Филипп', 'Фарид', 'Фазиль', 'Цезарь', 'Цефас', 'Хаким', 'Чарльз', 'Артур', 'Чеслав', 'Шарль', 'Эдгар', 'Эдуард', 'Эрик', 'Эльдар', 'Ильдар', 'Юрий', 'Юнус', 'Юлиан', 'Роман', 'Юстиниан', 'Ян', 'Яков', 'Федот', 'Фома', 'Филипп', 'Фридрих', 'Феликс', 'Ганс', 'Фриц', 'Иван', 'Ильшат', 'Искандер', 'Игнатий', 'Клим', 'Ким', 'Корнелий', 'Коре', 'Клаус', 'Казбек', 'Мар', 'Марий', 'Мартин', 'Микула', 'Михаил', 'Милослав', 'Моисей', 'Иисус', 'Никодим', 'Никола', 'Нестор', 'Ник', 'Николай', 'Нильс', 'Нариман', 'Осип', 'Иосиф', 'Олег', 'Огюст', 'Орландо', 'Оскар', 'Остап', 'Орест', 'Рамон', 'Рафик', 'Ринат', 'Ренат', 'Рожден', 'Рэй', 'Рубен', 'Радомир', 'Роланд', 'Ролан', 'Равиль', 'Перри', 'Прохор', 'Патрик', 'Платон', 'Педро', 'Оливер', 'Остин', 'Мэтью', 'Ян', 'Яков', 'Яромир', 'Ярослав', 'Лев', 'Ладо', 'Леонард', 'Лука', 'Максуд', 'Людвиг', 'Лукиллиан', 'Люций', 'Лукьян', 'Леонид', 'Леон', 'Ираклий', 'Иннокентий', 'Исидор', 'Итан', 'Исмаил', 'Исааклий', 'Ильнур', 'Игорь', 'Имран', 'Ильгиз', 'Ильяс', 'Исаак', 'Ислам', 'Захар', 'Зиновий', 'Зураб', 'Зигмунд', 'Зуфар', 'Еремей', 'Евстахий', 'Елисей', 'Ефрем', 'Ефим', 'Егор', 'Исидор', 'Мар', 'Марс', 'Борислав', 'Блез', 'Архип', 'Анфим', 'Анар', 'Алмаз', 'Ангел', 'Августин', 'Аваз', 'Агапит', 'Агап', 'Азиз', 'Бахрам', 'Ава', 'Ангелина', 'Алана', 'Альфия', 'Аэлита', 'Аяна', 'Ася', 'Ария', 'Антонина', 'Анфиса', 'Асель', 'Афина', 'Анна', 'Бажена', 'Ванда', 'Бела', 'Божена', 'Грета', 'Галия', 'Галина', 'Дина', 'Диля', 'Анастасия', 'Джессика', 'Дарья', 'Даша', 'Ева', 'Екатерина', 'Елена', 'Евгения', 'Жанна', 'Жаклин', 'Маша', 'Мария', 'Леся', 'Лада', 'Лиза', 'Лета', 'Мадлен', 'Мика', 'Мила', 'Надежда', 'HELL9000', 'Памела', 'Полина', 'Мия', 'Мио', 'Марта', 'Милица', 'Мариям', 'Оксана', 'Хилари', 'Хлоя', 'Юнона', 'Ясмниа', 'Юнона', 'Эмилия', 'Шерил', 'Юлия', 'Антонина', 'Алиса', 'Айлин', 'Азалия', 'Ада', 'Агафья', 'Асия', 'Амина', 'Анита', 'Вера', 'Валентина', 'Вита', 'Вероника', 'Валерия', 'Василиса', 'Веста', 'Венера', 'Виола', 'Владислава', 'Виолетта', 'Викторина', 'Василина', 'Владана'];
var MESSAGES_PARTS_ARRAY = ['Всё отлично!', 'В целом всё не плохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
var PHOTOS_URL_ARRAY = generateUrlArray(PathTo.PHOTOS, PHOTOS_COUNTER);
var AVATARS_URL_ARRAY = generateUrlArray(PathTo.AVATARS, AVATAR_DESCRIPTION_COUNTER);
var PHOTO_OBJECTS = generatePhotoArray();


// functions//

// generates ta url array//
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

// generates a random number//
function generateRandomNumber(min, max) {
  var randomNumber;

  randomNumber = Math.floor(Math.random() * (max - min) + min);

  return randomNumber;
}

// generates a random comment//

function generateRandomComment(pieces) {
  var comment = '';
  var previousPart = '';
  var commentPieces = Array.from(MESSAGES_PARTS_ARRAY);

  for (var i = 0; i < pieces; i++) {
    previousPart = commentPieces[generateRandomNumber(0, commentPieces.length)];
    comment = comment + previousPart + ' ';
    commentPieces.splice(commentPieces.indexOf(previousPart), 1);
  }

  return comment;
}

// generates a comment object//
function generateCommentObject(count) {
  var comments = [];

  for (var c = 0; c < count; c++) {
    var comment = {
      avatar: AVATARS_URL_ARRAY[generateRandomNumber(0, AVATARS_URL_ARRAY.length)],
      message: generateRandomComment(2),
      name: NAMES_ARRAY[generateRandomNumber(0, NAMES_ARRAY.length)]
    };

    comments.push(comment);
  }

  return comments;
}


// generates a picture object//
function generatePictureObject(photosArray) {
  var picture = {
    url: photosArray[generateRandomNumber(0, photosArray.length)],
    description: '',
    likes: generateRandomNumber(LIKES_MIN_NUMBER, LIKES_MAX_NUMBER),
    comments: generateCommentObject(generateRandomNumber(COMMENTS_MIN_NUMBER, COMMENTS_MAX_NUMBER))
  };

  return picture;
}

// generates images objects array//

function generatePhotoArray() {
  var localPhotoObjects = [];
  var localPhotoUrls = Array.from(PHOTOS_URL_ARRAY);

  for (var i = 0; i < PHOTOS_COUNTER; i++) {
    localPhotoObjects.push(generatePictureObject(localPhotoUrls));
    localPhotoUrls.splice(localPhotoUrls.indexOf(localPhotoObjects[i].url), 1);
  }

  return localPhotoObjects;
}

// renders images blocks//

function renderImage(number, photoObjects) {
  var photoBlock = IMAGE_TEMPLATE.cloneNode(true);
  var fragment = document.createDocumentFragment();

  photoBlock.querySelector('.picture__img').src = photoObjects[number].url;
  photoBlock.querySelector('.picture__comments').textContent = photoObjects[number].comments.length;
  photoBlock.querySelector('.picture__likes').textContent = photoObjects[number].likes;
  fragment.appendChild(photoBlock);

  return fragment;
}

// appends rendered images blocks//

function appendImage() {

  for (var i = 0; i < PHOTOS_COUNTER; i++) {
    PICTURES_CONTAINER.appendChild(renderImage(i, PHOTO_OBJECTS));
  }

}

// renders big picture //

function bigPictureRender(photoNumber) {
  BIG_PICTURE.querySelector('.big-picture__img img').src = PHOTO_OBJECTS[photoNumber].url;
  BIG_PICTURE.querySelector('.likes-count').textContent = PHOTO_OBJECTS[photoNumber].likes;
  BIG_PICTURE.querySelector('.comments-count').textContent = PHOTO_OBJECTS[photoNumber].comments.length;
}

// appends comments//

function appendComments(photoNumber) {

  for (var i = 0; i < PHOTO_OBJECTS[photoNumber].comments.length; i++) {
    var socialComment = SOCIAL_COMMENT_TEMPLATE.cloneNode(true);
    socialComment.querySelector('.social__picture').src = PHOTO_OBJECTS[photoNumber].comments[i].avatar;
    socialComment.querySelector('.social__picture').alt = PHOTO_OBJECTS[photoNumber].comments[i].name;
    socialComment.querySelector('.social__text').textContent = PHOTO_OBJECTS[photoNumber].comments[i].message;
    SOCIAL_COMMENTS.append(socialComment);
  }

}

// shows big picture //

function showBigPicture(number) {
  document.querySelector('.social__comments').innerHTML = '';
  document.querySelector('body').classList.add('modal-open');
  BIG_PICTURE.classList.remove('hidden');
  bigPictureRender(number);
  appendComments(number);
  BIG_PICTURE.querySelector('.social__comment-count').classList.add('hidden');
  BIG_PICTURE.querySelector('.comments-loader').classList.add('hidden');
}

// select right word //

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

  for (var i = 0; i < array.length; i++) {
    lowerCaseArray.push(array[i].toLowerCase());
  }

  return lowerCaseArray;
}

// check if hashtags are correct //

function checkIfHashtagsAreCorrect(array) {
  var customValidityString = '';

  if (array.length <= 5) {
    for (var i = 0; i < array.length; i++) {
      var wordWithHashtag = array[i];
      var lowerCaseArray = makeArrayLowerCase(array);
      customValidityString = chechIfFirstSymbolIsHashtag(wordWithHashtag);
      if (customValidityString === '') {
        customValidityString = checkIfUsedTwice(lowerCaseArray);
      }
    }
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

  if (string.length > HASHTAG_MAX_LENGTH) {
    customValidityString = 'Один из хэштегов больше 20 символов, просим вас сократить его';
  } else {
    customValidityString = checkIfSymbolsAreAllowed(string);
  }

  return customValidityString;
}

function checkIfUsedTwice(array) {
  var customValidityString = '';

  for (var i = 0; i < array.length; i++) {
    var counter = 0;

    for (var j = 0; j < array.length; j++) {
      if (array[i] === array [j]) {
        counter = counter + 1;
      }
    }

    if (counter > 1) {
      customValidityString = 'Один из хэштегов повторяется ' + counter.toString() + ' раз';
    }
  }

  return customValidityString;
}

function checkIfSymbolsAreAllowed(string) {
  var wordWithoutHashtag = string.substr(1);
  var customValidityString = '';

  if (!LETTER_NUMBER.test(wordWithoutHashtag) && !(wordWithoutHashtag === '')) {
    customValidityString = 'Похоже, вы использовали спецсимвол или знак препинания, пожалуйста, удалите их';
  } else if (wordWithoutHashtag === '') {
    customValidityString = 'Не забудьте ввести хештег';
  }

  return customValidityString;
}
// handlers //

function closeUploadFormHandler() {
  UPLOAD_EDIT_OVERLAY.classList.add('hidden');
  UPLOAD_FILE_INPUT.value = '';
}

// events //

function onInputFileChange() {
  UPLOAD_FILE_INPUT.onchange = function () {
    UPLOAD_EDIT_OVERLAY.classList.remove('hidden');
  };
}

function onCloseEditorButtonClick() {
  UPLOAD_CANCEL_BUTTON.onclick = function () {
    closeUploadFormHandler();
  };
}

function onVolumePinMouseup() {
  EFFECT_LEVEL_PIN.onmouseup = function () {
    var parentLength = EFFECT_LEVEL_LINE.offsetWidth;
    var pinLength = EFFECT_LEVEL_PIN.offsetWidth;
    var pinDistanceFromLeft = EFFECT_LEVEL_PIN.offsetLeft - (pinLength * 0.5);
    var volumeMaxValue = 100;
    EFFECT_LEVEL_VALUE.value = Math.floor((pinDistanceFromLeft * volumeMaxValue) / parentLength);
  };
}

function onRadioButtonChangeHandler(evt) {
  if (evt.target && evt.target.matches('input[type="radio"]')) {
    EFFECT_LEVEL_VALUE.value = 20;
  }
}

function onHashtagsInput() {
  var hashtags = [];

  UPLOAD_HASHTAGS_INPUT.oninput = function () {
    var customValidityString = '';
    hashtags = UPLOAD_HASHTAGS_INPUT.value.split(' ');
    customValidityString = checkIfHashtagsAreCorrect(hashtags);
    UPLOAD_HASHTAGS_INPUT.setCustomValidity(customValidityString);

    if (customValidityString !== '') {
      UPLOAD_HASHTAGS_INPUT.reportValidity();
    }
  };
}

function onDescriptionInput() {
  var textContent = '';
  UPLOAD_DESCRIPTION_INPUT.oninput = function () {
    var customValidityString = '';
    textContent = UPLOAD_DESCRIPTION_INPUT.value;
    UPLOAD_DESCRIPTION_INPUT.setCustomValidity(customValidityString);

    if (textContent.length > DESCRIPTION_MAX_LENGTH) {
      var difference = textContent.length - DESCRIPTION_MAX_LENGTH;
      customValidityString = 'Ваш комментарий слишком длинный, попробуйте укоротить его на ' + difference.toString() + selectRightSymbolWordForm(difference);
      UPLOAD_DESCRIPTION_INPUT.setCustomValidity(customValidityString);
      UPLOAD_DESCRIPTION_INPUT.reportValidity();
    }
  };
}

function onFormChange() {
  UPLOAD_EDIT_FORM.onchange = function (evt) {
    onRadioButtonChangeHandler(evt);
  };
}

// big picture section //

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

function onPicturesClick() {
  USERS_PICTURES_LIST.onclick = function (evt) {
    showPicture(evt);
  };
}

function onPicturesKeydown() {
  USERS_PICTURES_LIST.onkeydown = function (evt) {

    if (evt.keyCode === ENTER_KEY_CODE) {
      showPicture(evt);
    }

  };
}

function onBigPictureCloseClick() {
  BIG_PICTURE_CLOSE.onclick = function () {
    BIG_PICTURE.classList.add('hidden');
  };
}

function onCommentInput() {
  var textContent = '';
  BIG_PICTURE_COMMENT_INPUT.oninput = function () {
    var customValidityString = '';
    textContent = BIG_PICTURE_COMMENT_INPUT.value;
    BIG_PICTURE_COMMENT_INPUT.setCustomValidity(customValidityString);

    if (textContent.length > DESCRIPTION_MAX_LENGTH) {
      var difference = textContent.length - DESCRIPTION_MAX_LENGTH;
      customValidityString = 'Ваш комментарий слишком длинный, попробуйте укоротить его на ' + difference.toString() + selectRightSymbolWordForm(difference);
      BIG_PICTURE_COMMENT_INPUT.setCustomValidity(customValidityString);
      BIG_PICTURE_COMMENT_INPUT.reportValidity();
    }
  };
}


// document //

function onDocumentKeydown() {
  document.onkeydown = function (evt) {
    if ((evt.keyCode === ESC_KEY_CODE) && (!UPLOAD_EDIT_OVERLAY.classList.contains('hidden')) && (document.activeElement !== UPLOAD_DESCRIPTION_INPUT) && (document.activeElement !== UPLOAD_HASHTAGS_INPUT)) {
      closeUploadFormHandler();
    }

    if ((evt.keyCode === ESC_KEY_CODE) && (!BIG_PICTURE.classList.contains('hidden')) && (document.activeElement !== BIG_PICTURE_COMMENT_INPUT)) {
      BIG_PICTURE.classList.add('hidden');
    }
  };
}

// handlers //

function imageEditorActionsHandler() {
  onInputFileChange();
  onCloseEditorButtonClick();
  onVolumePinMouseup();
  onFormChange();
  onDescriptionInput();
  onHashtagsInput();
}

function bigPictureActionsHandler() {
  onPicturesClick();
  onPicturesKeydown();
  onBigPictureCloseClick();
  onDocumentKeydown();
  onCommentInput();
}
// body//

imageEditorActionsHandler();
appendImage();
onDocumentKeydown();
bigPictureActionsHandler();
