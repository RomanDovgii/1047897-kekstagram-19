'use strict';

// constants//

var LIKES_MIN_NUMBER = 15;
var LIKES_MAX_NUMBER = 200;

var COMMENTS_MIN_NUMBER = 1;
var COMMENTS_MAX_NUMBER = 15;

var PHOTOS_COUNTER = 25;
var AVATAR_DESCRIPTION_COUNTER = 6;

var IMAGE_TEMPLATE = document.querySelector('#picture').content.querySelector('.picture');
var PICTURES_CONTAINER = document.querySelector('.pictures');

var pathTo = {
  PHOTOS: 'photos/',
  AVATARS: 'img/avatar-'
};

// arrays//

var NAMES_ARRAY = ['Аарон', 'Авраам', 'Агафон', 'Азат', 'Айрат', 'Артём', 'Арам', 'Борис', 'Блез', 'Богдан', 'Булат', 'Адольф', 'Бронислав', 'Бестрева', 'Будёна', 'Валентин', 'Вит', 'Василий', 'Влад', 'Владимир', 'Вильгельм', 'Евгений', 'Евдоким', 'Евсей', 'Жерар', 'Ждан', 'Александра', 'Закир', 'Зиновий', 'Дазвсемир', 'Даздранагон', 'Даздраперма', 'Далис', 'Кукуцаполь', 'Вилюр', 'Лоренс', 'Леон', 'Лев', 'Ленар', 'Любомир', 'Панкрат', 'Павел', 'Пётр', 'Равиль', 'Радик', 'Рамзан', 'Ролан', 'Рудольф', 'Радий', 'Полоний', 'Саша', 'Тигран', 'Томас', 'Серафим', 'Тайлер', 'Фарид', 'Савва', 'Фазиль', 'Хабиб', 'Самвел', 'Сани', 'Сергей', 'Спартак', 'Султан', 'Сидор', 'Станислав', 'Ладимир', 'Влада', 'Тарас', 'Тихон', 'Фёдор', 'Флор', 'Филипп', 'Фарид', 'Фазиль', 'Цезарь', 'Цефас', 'Хаким', 'Чарльз', 'Артур', 'Чеслав', 'Шарль', 'Эдгар', 'Эдуард', 'Эрик', 'Эльдар', 'Ильдар', 'Юрий', 'Юнус', 'Юлиан', 'Роман', 'Юстиниан', 'Ян', 'Яков', 'Федот', 'Фома', 'Филипп', 'Фридрих', 'Феликс', 'Ганс', 'Фриц', 'Иван', 'Ильшат', 'Искандер', 'Игнатий', 'Клим', 'Ким', 'Корнелий', 'Коре', 'Клаус', 'Казбек', 'Мар', 'Марий', 'Мартин', 'Микула', 'Михаил', 'Милослав', 'Моисей', 'Иисус', 'Никодим', 'Никола', 'Нестор', 'Ник', 'Николай', 'Нильс', 'Нариман', 'Осип', 'Иосиф', 'Олег', 'Огюст', 'Орландо', 'Оскар', 'Остап', 'Орест', 'Рамон', 'Рафик', 'Ринат', 'Ренат', 'Рожден', 'Рэй', 'Рубен', 'Радомир', 'Роланд', 'Ролан', 'Равиль', 'Перри', 'Прохор', 'Патрик', 'Платон', 'Педро', 'Оливер', 'Остин', 'Мэтью', 'Ян', 'Яков', 'Яромир', 'Ярослав', 'Лев', 'Ладо', 'Леонард', 'Лука', 'Максуд', 'Людвиг', 'Лукиллиан', 'Люций', 'Лукьян', 'Леонид', 'Леон', 'Ираклий', 'Иннокентий', 'Исидор', 'Итан', 'Исмаил', 'Исааклий', 'Ильнур', 'Игорь', 'Имран', 'Ильгиз', 'Ильяс', 'Исаак', 'Ислам', 'Захар', 'Зиновий', 'Зураб', 'Зигмунд', 'Зуфар', 'Еремей', 'Евстахий', 'Елисей', 'Ефрем', 'Ефим', 'Егор', 'Исидор', 'Мар', 'Марс', 'Борислав', 'Блез', 'Архип', 'Анфим', 'Анар', 'Алмаз', 'Ангел', 'Августин', 'Аваз', 'Агапит', 'Агап', 'Азиз', 'Бахрам', 'Ава', 'Ангелина', 'Алана', 'Альфия', 'Аэлита', 'Аяна', 'Ася', 'Ария', 'Антонина', 'Анфиса', 'Асель', 'Афина', 'Анна', 'Бажена', 'Ванда', 'Бела', 'Божена', 'Грета', 'Галия', 'Галина', 'Дина', 'Диля', 'Анастасия', 'Джессика', 'Дарья', 'Даша', 'Ева', 'Екатерина', 'Елена', 'Евгения', 'Жанна', 'Жаклин', 'Маша', 'Мария', 'Леся', 'Лада', 'Лиза', 'Лета', 'Мадлен', 'Мика', 'Мила', 'Надежда', 'HELL9000', 'Памела', 'Полина', 'Мия', 'Мио', 'Марта', 'Милица', 'Мариям', 'Оксана', 'Хилари', 'Хлоя', 'Юнона', 'Ясмниа', 'Юнона', 'Эмилия', 'Шерил', 'Юлия', 'Антонина', 'Алиса', 'Айлин', 'Азалия', 'Ада', 'Агафья', 'Асия', 'Амина', 'Анита', 'Вера', 'Валентина', 'Вита', 'Вероника', 'Валерия', 'Василиса', 'Веста', 'Венера', 'Виола', 'Владислава', 'Виолетта', 'Викторина', 'Василина', 'Владана'];
var MESSAGES_PARTS_ARRAY = ['Всё отлично!', 'В целом всё не плохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
var PHOTOS_URL_ARRAY = generateUrlArray(pathTo.PHOTOS, PHOTOS_COUNTER);
var AVATARS_URL_ARRAY = generateUrlArray(pathTo.AVATARS, AVATAR_DESCRIPTION_COUNTER);
// functions//

// generates ta url array//
function generateUrlArray(type, arrayLength) {
  var array = [];
  var typeExtension = '';

  switch (type) {
    case pathTo.PHOTOS:
      typeExtension = '.jpg';
      break;
    case pathTo.AVATARS:
      typeExtension = '.svg';
      break;
  }

  for (var a = 1; a <= arrayLength; a++) {
    var filePath = type + a.toString() + typeExtension;
    array.push(filePath);
  }

  return array;
}

// generates a random number//
function generateRandomNumber(min, max) {
  var number;

  number = Math.floor(Math.random() * (max - min) + min);

  return number;
}

// generates a random comment//

function generateRandomComment(pieces) {
  var comment = '';
  var previousPart = '';
  var piecesArray = Array.from(MESSAGES_PARTS_ARRAY);

  for (var b = 0; b < pieces; b++) {
    previousPart = piecesArray[generateRandomNumber(0, piecesArray.length)];
    comment = comment + previousPart + ' ';
    piecesArray.splice(piecesArray.indexOf(previousPart), 1);
  }

  return comment;
}

// generates a comment object//
function generateCommentObject(count) {
  var commentsList = [];

  for (var c = 0; c < count; c++) {
    var comment = {
      avatar: AVATARS_URL_ARRAY[generateRandomNumber(0, AVATARS_URL_ARRAY.length)],
      message: generateRandomComment(2),
      name: NAMES_ARRAY[generateRandomNumber(0, NAMES_ARRAY.length)]
    };

    commentsList.push(comment);
  }

  return commentsList;
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
  var localPhotoObjectArray = [];
  var localPhotosUrlArray = Array.from(PHOTOS_URL_ARRAY);

  for (var d = 0; d < PHOTOS_COUNTER; d++) {
    localPhotoObjectArray.push(generatePictureObject(localPhotosUrlArray));
    localPhotosUrlArray.splice(localPhotosUrlArray.indexOf(localPhotoObjectArray[d].url), 1);
  }

  return localPhotoObjectArray;
}

// renders images blocks//

function renderImage(number, photoObjectArray) {
  var photoBlock = IMAGE_TEMPLATE.cloneNode(true);
  var fragment = document.createDocumentFragment();

  photoBlock.querySelector('.picture__img').src = photoObjectArray[number].url;
  photoBlock.querySelector('.picture__comments').textContent = photoObjectArray[number].comments.length;
  photoBlock.querySelector('.picture__likes').textContent = photoObjectArray[number].likes;
  fragment.appendChild(photoBlock);

  return fragment;
}

// appends rendered images blocks//

function appendImage() {
  var photoObjectArray = generatePhotoArray();

  for (var e = 0; e < PHOTOS_COUNTER; e++) {
    PICTURES_CONTAINER.appendChild(renderImage(e, photoObjectArray));
  }

}

// body//

appendImage();
