'use strict';

// 1. завожу переменные.

var AUTHOR_MIN_AVATAR = 1;
var AUTHOR_MAX_AVATAR = 8;
var OFFER_TITLE = ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];
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
var LOCATION_MIN_X = 300;
var LOCATION_MAX_X = 900;
var LOCATION_MIN_Y = 100;
var LOCATION_MAX_Y = 500;
var OBJECT_NUMBER = 8;

// 2. пишем универсальную функцию.

var getRandomNumber = function(min, max) {
  return Math.round(min + Math.random() * (max - min));
};

// 3. создаем переменные содержащие наши объекты.

var advertisements = [];

// 4. пишем функцию, которая формирует и возвращает объект со сгенерированными данными.


var createNewAdvertisement = function(index) {

  var locationX = getRandomNumber(300, 900);
  var locationY = getRandomNumber(100, 500);

  return {
    "author": {
      "avatar": 'img/avatars/user0' + (index + 1) + '.png'
    },

    "offer": {
      "title": OFFER_TITLE[i],
      "address": locationX + ', ' + locationY,
      "price": getRandomNumber(OFFER_MIN_PRICE, OFFER_MAX_PRICE),
      "type": OFFER_TYPE[getRandomNumber(0, OFFER_TYPE.length - 1)],
      "rooms": getRandomNumber(OFFER_MIN_ROOMS, OFFER_MAX_ROOMS),
      "guests": getRandomNumber(OFFER_MIN_GUESTS, OFFER_MAX_GUESTS),
      "checkin": OFFER_CHECK_IN[getRandomNumber(0, OFFER_CHECK_IN.length - 1)],
      "checkout": OFFER_CHECK_OUT[getRandomNumber(0, OFFER_CHECK_OUT.length - 1)],
      "features": OFFER_FEATURES.slice(0, OFFER_FEATURES.length - 1),
      "description": '',
      "photos": []
    },

    "location": {
      "x": locationX,
      "y": locationY
    }
  }
}

// 5. создаем цикл, который заполняет пустой массив элементами генерирующимися объектами. 

var template = document.querySelector('.location_mark');
var map = document.querySelector('.tokyo__pin-map');
var pin = template.content.querySelector('.pin');
var fragment = document.createDocumentFragment();
var createTemplate = function (index) {
	var div = document.createElement('div');
	var img = document.createElement('img');
	div.classList.add('pin');
	div.style.left = index + 'px';
	div.style.top = index + 'px';
	img.src = index;
	img.classList.add('rounded');
	img.style.width = 40;
	img.style.height = 40;
	div.appendChild(img);
	return div;
}



for (var i = 0; i < OBJECT_NUMBER; i++) {
  advertisements[i] = createNewAdvertisement(i);
  fragment.appendChild(createTemplate(i));
}
map.appendChild(fragment);
console.log(advertisements);




