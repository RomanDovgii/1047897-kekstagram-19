'use strict';

//constants//

var LIKES_MIN_NUMBER = 15;
var LIKES_MAX_NUMBER = 200;

var COMMENTS_MIN_NUMBER = 1;
var COMMENTS_MAX_NUMBER = 15;

//counters for elements//

var photoDescriptionCounter = 25;
var avatarDescriptionCounter = 6;
var pathToPhotos = 'photos/'
var pathToImg = 'img/avatar-';

//functions//

//function #1//
var urlArrayCreator = function (type ,arrayLength) {
  var array = [];
  var typeExtension = '';

  if (type == 'photos/') {
    typeExtension = '.jpg'
  }
  else {
    typeExtension = '.svg'
  }

  for (var i = 1; i <= arrayLength; i++) {
    var filePath = type.toString() + i.toString() + typeExtension.toString();
    array.push(filePath);
  }

  return array;
};

//function #2//
var randomNumberGenerator = function (min,max) {
  var number;
  number = Math.floor(Math.random() * (max - min) + min);
  return number;
};

//function #3//
var commentObjectGeneration = function () {
  var comment = {
    avatar: avatarsUrlArray[randomNumberGenerator(0, avatarsUrlArray.length)],
    message: messagePartsArray[randomNumberGenerator(0, messagePartsArray.length)],
    name: namesArray[randomNumberGenerator(0, namesArray.length)]
  }
  return comment;
};


//function #4//
var pictureObjectGeneration = function () {
  var picture = {

  };
  return picture;
};

//arrays//

var photosUrlArray = urlArrayCreator(pathToPhotos, photoDescriptionCounter);
var avatarsUrlArray = urlArrayCreator(pathToImg, avatarDescriptionCounter);
var namesArray = ["Аарон", "Авраам", "Агафон", "Азат", "Айрат", "Артём", "Арам", "Борис", "Блез", "Богдан", "Булат", "Адольф", "Бронислав", "Бестрева", "Будёна", "Валентин", "Вит", "Василий", "Влад", "Владимир", "Вильгельм", "Евгений", "Евдоким", "Евсей", "Жерар", "Ждан", "Александра", "Закир", "Зиновий", "Дазвсемир", "Даздранагон", "Даздраперма", "Далис", "Кукуцаполь", "Вилюр", "Лоренс", "Леон", "Лев", "Ленар", "Любомир", "Панкрат", "Павел", "Пётр", "Равиль", "Радик", "Рамзан", "Ролан", "Рудольф", "Радий", "Полоний", "Саша", "Тигран", "Томас", "Серафим", "Тайлер", "Фарид", "Савва", "Фазиль", "Хабиб", "Самвел", "Сани", "Сергей", "Спартак", "Султан", "Сидор", "Станислав", "Ладимир", "Влада", "Тарас", "Тихон", "Фёдор", "Флор", "Филипп", "Фарид", "Фазиль", "Цезарь", "Цефас", "Хаким", "Чарльз", "Артур", "Чеслав", "Шарль", "Эдгар", "Эдуард", "Эрик", "Эльдар", "Ильдар", "Юрий", "Юнус", "Юлиан", "Роман", "Юстиниан", "Ян", "Яков", "Федот", "Фома", "Филипп", "Фридрих", "Феликс", "Ганс", "Фриц", "Иван", "Ильшат", "Искандер", "Игнатий", "Клим", "Ким", "Корнелий", "Коре", "Клаус", "Казбек", "Мар", "Марий", "Мартин", "Микула", "Михаил", "Милослав", "Моисей", "Иисус", "Никодим", "Никола", "Нестор", "Ник", "Николай", "Нильс", "Нариман", "Осип", "Иосиф", "Олег", "Огюст", "Орландо", "Оскар", "Остап", "Орест", "Рамон", "Рафик", "Ринат", "Ренат", "Рожден", "Рэй", "Рубен", "Радомир", "Роланд", "Ролан", "Равиль", "Перри", "Прохор", "Патрик", "Платон", "Педро", "Оливер", "Остин", "Мэтью", "Ян", "Яков", "Яромир", "Ярослав", "Лев", "Ладо", "Леонард", "Лука", "Максуд", "Людвиг", "Лукиллиан", "Люций", "Лукьян", "Леонид", "Леон", "Ираклий", "Иннокентий", "Исидор", "Итан", "Исмаил", "Исааклий", "Ильнур", "Игорь", "Имран", "Ильгиз", "Ильяс", "Исаак", "Ислам", "Захар", "Зиновий", "Зураб", "Зигмунд", "Зуфар", "Еремей", "Евстахий", "Елисей", "Ефрем", "Ефим", "Егор", "Исидор", "Мар", "Марс", "Борислав", "Блез", "Архип", "Анфим", "Анар", "Алмаз", "Ангел", "Августин", "Аваз", "Агапит", "Агап", "Азиз", "Бахрам", "Ава", "Ангелина", "Алана", "Альфия", "Аэлита", "Аяна", "Ася", "Ария", "Антонина", "Анфиса", "Асель", "Афина", "Анна", "Бажена", "Ванда", "Бела", "Божена", "Грета", "Галия", "Галина", "Дина", "Диля", "Анастасия", "Джессика", "Дарья", "Даша", "Ева", "Екатерина", "Елена", "Евгения", "Жанна", "Жаклин", "Маша", "Мария", "Леся", "Лада", "Лиза", "Лета", "Мадлен", "Мика", "Мила", "Надежда", "HELL9000", "Памела", "Полина", "Мия", "Мио", "Марта", "Милица", "Мариям", "Оксана", "Хилари", "Хлоя", "Юнона", "Ясмниа", "Юнона", "Эмилия", "Шерил", "Юлия", "Антонина", "Алиса", "Айлин", "Азалия", "Ада", "Агафья", "Асия", "Амина", "Анита", "Вера", "Валентина", "Вита", "Вероника", "Валерия", "Василиса", "Веста", "Венера", "Виола", "Владислава", "Виолетта", "Викторина", "Василина", "Владана"];
var messagePartsArray = ["Всё отлично!", "В целом всё не плохо. Но не всё.", "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.", "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.", "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.", "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!"]
//variables//

//body//
var test = commentObjectGeneration();
console.log(test);
