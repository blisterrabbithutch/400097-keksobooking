'use strict';

// 1. завожу переменные.

var AUTHOR_AVATAR = 'img/avatars/user{{xx}}.png';
var AUTHOR_MIN_AVATAR = 1;
var AUTHOR_MAX_AVATAR = 8;
var OFFER_TITLE = ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];
var OFFER_ADDRESS = '{{location.x}}, {{location.y}}';
var OFFER_MIN_PRICE = 1000;
var OFFER_MAX_PRICE = 1000000;
var OFFER_TYPE = ['flat', 'house', 'bungalo'];
var OFFER_MIN_ROOMS = 1;
var OFFER_MAX_ROOMS = 5;
var OFFER_MIN_GUESTS = 1;
var OFFER_MAX_GUESTS = 20;
var OFFER_CHECK_IN = ['12:00', '13:00', '14:00'];
var OFFER_CHECK_OUT = ['12:00', '13:00', '14:00'];
var OFFER_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var OFFER_DESCRIPTION = '';
var OFFER_PHOTOS = [];
var LOCATION_MIN_X = 300;
var LOCATION_MAX_X = 900;
var LOCATION_MIN_Y = 100;
var LOCATION_MAX_Y = 500;

// 2. пишем универсальную функцию.

var getRandomNumber = function (min, max) {
  return Math.round(min + Math.random() * (max - min));
};

// 3. создаем переменные содержащие наши объекты.

var advertisements = [];

// 4. пишем функцию, которая формирует и возвращает объект со сгенерированными данными.
// как вывести все переменные? в какой момент и как создавать объект? как написать функцию getRandomFeatures. какие имена свойств объекта выбрать
// дебаггер не останавливается на функции. не понимаю почему
// что значит индекс у функции в 4 пункте?

var createNewAdvertisement = function () {
  var getRandomAvatar = 'img/avatars/user' + '0' + getRandomNumber(AUTHOR_MIN_AVATAR, AUTHOR_MAX_AVATAR) + '.png';
  var getRandomTitle = OFFER_TITLE[getRandomNumber(0, OFFER_TITLE.length - 1)];
  var getRandomLocationX = getRandomNumber(LOCATION_MIN_X, LOCATION_MAX_X);
  var getRandomLocationY = getRandomNumber(LOCATION_MIN_Y, LOCATION_MAX_Y);
  var getRandomAdress = getRandomLocationX,
    getRandomLocationY; // не понимаю как их вывести
  var getRandomPrice = getRandomNumber(OFFER_MIN_PRICE, OFFER_MAX_PRICE);
  var getRandomType = OFFER_TYPE[getRandomNumber(0, OFFER_TYPE.length - 1)];
  var getRandomRooms = getRandomNumber(OFFER_MIN_ROOMS, OFFER_MAX_ROOMS);
  var getRandomGuests = getRandomNumber(OFFER_MIN_GUESTS, OFFER_MAX_GUESTS);
  var getRandomCheckIn = OFFER_CHECK_IN[getRandomNumber(0, OFFER_CHECK_IN.length - 1)];
  var getRandomCheckOut = OFFER_CHECK_OUT[getRandomNumber(0, OFFER_CHECK_OUT.length - 1)];
  // var getRandomFeatures = function () {
  // 	for (var i = 0; i < getRandomNumber(0, OFFER_FEATURES.length - 1); i++) {
  //    		return OFFER_FEATURES[getRandomNumber(0, OFFER_FEATURES.length - 1)];
  //  		};
  var getRandomDescription = '';
  var getRandomPhotos = [];
  // как здесь разделять свойства объекта? структура объекта по заданию? author_avatar: getRandomAvatar() или author = { avatar: getRandomAvatar()}
  var advertisementObject = {
    author_avatar: getRandomAvatar(),
    offer_title: getRandomTitle(),
    offer_adress: getRandomAdress(),
    offer_price: getRandomPrice(),
    offer_type: getRandomType(),
    offer_rooms: getRandomRooms(),
    offer_guests: getRandomGuests(),
    offer_check_in: getRandomCheckIn(),
    offer_check_out: getRandomCheckOut(),
    offer_features: getRandomFeatures(),
    offer_description: getRandomDescription(),
    offer_photos: getRandomPhotos(),
    location_x: getRandomLocationX(),
    location_y: getRandomLocationY()
  }
};

for (var i = 0; i < 8; i++) {
  advertisements[i] = createNewAdvertisement();
}