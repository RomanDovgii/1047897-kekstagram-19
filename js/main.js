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

var PATH_TO_PHOTOS = 'photos/';
var PATH_TO_IMAGE = 'img/avatar-';

// arrays//


var NAMES_ARRAY = ['Аарон', 'Авраам', 'Агафон', 'Азат', 'Айрат', 'Артём', 'Арам', 'Борис', 'Блез', 'Богдан', 'Булат', 'Адольф', 'Бронислав', 'Бестрева', 'Будёна', 'Валентин', 'Вит', 'Василий', 'Влад', 'Владимир', 'Вильгельм', 'Евгений', 'Евдоким', 'Евсей', 'Жерар', 'Ждан', 'Александра', 'Закир', 'Зиновий', 'Дазвсемир', 'Даздранагон', 'Даздраперма', 'Далис', 'Кукуцаполь', 'Вилюр', 'Лоренс', 'Леон', 'Лев', 'Ленар', 'Любомир', 'Панкрат', 'Павел', 'Пётр', 'Равиль', 'Радик', 'Рамзан', 'Ролан', 'Рудольф', 'Радий', 'Полоний', 'Саша', 'Тигран', 'Томас', 'Серафим', 'Тайлер', 'Фарид', 'Савва', 'Фазиль', 'Хабиб', 'Самвел', 'Сани', 'Сергей', 'Спартак', 'Султан', 'Сидор', 'Станислав', 'Ладимир', 'Влада', 'Тарас', 'Тихон', 'Фёдор', 'Флор', 'Филипп', 'Фарид', 'Фазиль', 'Цезарь', 'Цефас', 'Хаким', 'Чарльз', 'Артур', 'Чеслав', 'Шарль', 'Эдгар', 'Эдуард', 'Эрик', 'Эльдар', 'Ильдар', 'Юрий', 'Юнус', 'Юлиан', 'Роман', 'Юстиниан', 'Ян', 'Яков', 'Федот', 'Фома', 'Филипп', 'Фридрих', 'Феликс', 'Ганс', 'Фриц', 'Иван', 'Ильшат', 'Искандер', 'Игнатий', 'Клим', 'Ким', 'Корнелий', 'Коре', 'Клаус', 'Казбек', 'Мар', 'Марий', 'Мартин', 'Микула', 'Михаил', 'Милослав', 'Моисей', 'Иисус', 'Никодим', 'Никола', 'Нестор', 'Ник', 'Николай', 'Нильс', 'Нариман', 'Осип', 'Иосиф', 'Олег', 'Огюст', 'Орландо', 'Оскар', 'Остап', 'Орест', 'Рамон', 'Рафик', 'Ринат', 'Ренат', 'Рожден', 'Рэй', 'Рубен', 'Радомир', 'Роланд', 'Ролан', 'Равиль', 'Перри', 'Прохор', 'Патрик', 'Платон', 'Педро', 'Оливер', 'Остин', 'Мэтью', 'Ян', 'Яков', 'Яромир', 'Ярослав', 'Лев', 'Ладо', 'Леонард', 'Лука', 'Максуд', 'Людвиг', 'Лукиллиан', 'Люций', 'Лукьян', 'Леонид', 'Леон', 'Ираклий', 'Иннокентий', 'Исидор', 'Итан', 'Исмаил', 'Исааклий', 'Ильнур', 'Игорь', 'Имран', 'Ильгиз', 'Ильяс', 'Исаак', 'Ислам', 'Захар', 'Зиновий', 'Зураб', 'Зигмунд', 'Зуфар', 'Еремей', 'Евстахий', 'Елисей', 'Ефрем', 'Ефим', 'Егор', 'Исидор', 'Мар', 'Марс', 'Борислав', 'Блез', 'Архип', 'Анфим', 'Анар', 'Алмаз', 'Ангел', 'Августин', 'Аваз', 'Агапит', 'Агап', 'Азиз', 'Бахрам', 'Ава', 'Ангелина', 'Алана', 'Альфия', 'Аэлита', 'Аяна', 'Ася', 'Ария', 'Антонина', 'Анфиса', 'Асель', 'Афина', 'Анна', 'Бажена', 'Ванда', 'Бела', 'Божена', 'Грета', 'Галия', 'Галина', 'Дина', 'Диля', 'Анастасия', 'Джессика', 'Дарья', 'Даша', 'Ева', 'Екатерина', 'Елена', 'Евгения', 'Жанна', 'Жаклин', 'Маша', 'Мария', 'Леся', 'Лада', 'Лиза', 'Лета', 'Мадлен', 'Мика', 'Мила', 'Надежда', 'HELL9000', 'Памела', 'Полина', 'Мия', 'Мио', 'Марта', 'Милица', 'Мариям', 'Оксана', 'Хилари', 'Хлоя', 'Юнона', 'Ясмниа', 'Юнона', 'Эмилия', 'Шерил', 'Юлия', 'Антонина', 'Алиса', 'Айлин', 'Азалия', 'Ада', 'Агафья', 'Асия', 'Амина', 'Анита', 'Вера', 'Валентина', 'Вита', 'Вероника', 'Валерия', 'Василиса', 'Веста', 'Венера', 'Виола', 'Владислава', 'Виолетта', 'Викторина', 'Василина', 'Владана'];
var MESSAGES_PARTS_ARRAY = ['Всё отлично!', 'В целом всё не плохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

// functions//

// generates ta url array//
var createUrlArray = function (type, arrayLength) {
  var array = [];
  var typeExtension = type === PATH_TO_PHOTOS ? '.jpg' : '.svg';

  for (var i = 1; i <= arrayLength; i++) {
    var filePath = type.toString() + i.toString() + typeExtension.toString();
    array.push(filePath);
  }

  return array;
};

// generates a random number//
var generateRandomNumber = function (min, max) {
  var number;
  number = Math.floor(Math.random() * (max - min) + min);
  return number;
};

// generates a random comment//

var generateRandomComment = function (pieces) {
  var comment = '';
  var previousPart = '';
  var piecesArray = Array.from(MESSAGES_PARTS_ARRAY);

  for (var i = 0; i < pieces; i++) {
    previousPart = piecesArray[generateRandomNumber(0, piecesArray.length)];
    comment = comment + previousPart + ' ';
    piecesArray.splice(piecesArray.indexOf(previousPart), 1);
  }

  return comment;
};

// generates a comment object//
var generateCommentObject = function (count) {
  var commentsList = [];

  for (var i = 0; i < count; i++) {
    var comment = {
      avatar: AVATARS_URL_ARRAY[generateRandomNumber(0, AVATARS_URL_ARRAY.length)],
      message: generateRandomComment(2),
      name: NAMES_ARRAY[generateRandomNumber(0, NAMES_ARRAY.length)]
    };
    commentsList.push(comment);
  }

  return commentsList;
};


// generates a picture object//
var generatePictureObject = function (photosArray) {
  var picture = {
    url: photosArray[generateRandomNumber(0, photosArray.length)],
    description: '',
    likes: generateRandomNumber(LIKES_MIN_NUMBER, LIKES_MAX_NUMBER),
    comments: generateCommentObject(generateRandomNumber(COMMENTS_MIN_NUMBER, COMMENTS_MAX_NUMBER))
  };
  return picture;
};

// generates images objects array//

var generatePhotoArray = function () {
  var localPhotoObjectArray = [];
  var localPHOTOS_URL_ARRAY = Array.from(PHOTOS_URL_ARRAY);

  for (var i = 0; i < PHOTOS_COUNTER; i++) {
    localPhotoObjectArray.push(generatePictureObject(localPHOTOS_URL_ARRAY));
    localPHOTOS_URL_ARRAY.splice(localPHOTOS_URL_ARRAY.indexOf(localPhotoObjectArray[i].url), 1);
  }

  return localPhotoObjectArray;
};

// renders images blocks//

var renderImage = function (number, photoObjectArray) {
  var photoBlock = IMAGE_TEMPLATE.cloneNode(true);
  photoBlock.querySelector('.picture__img').src = photoObjectArray[number].url;
  photoBlock.querySelector('.picture__comments').textContent = photoObjectArray[number].comments.length;
  photoBlock.querySelector('.picture__likes').textContent = photoObjectArray[number].likes;
  var fragment = document.createDocumentFragment();
  fragment.appendChild(photoBlock);
  return fragment;
};

// appends rendered images blocks//

var appendImage = function () {
  var photoObjectArray = generatePhotoArray();

  for (var i = 0; i < PHOTOS_COUNTER; i++) {
    PICTURES_CONTAINER.appendChild(renderImage(i, photoObjectArray));
  }

};

var PHOTOS_URL_ARRAY = createUrlArray(PATH_TO_PHOTOS, PHOTOS_COUNTER);
var AVATARS_URL_ARRAY = createUrlArray(PATH_TO_IMAGE, AVATAR_DESCRIPTION_COUNTER);
// body//

appendImage();
