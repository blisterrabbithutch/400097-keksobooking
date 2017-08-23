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

for (var i = 0; i < OBJECT_NUMBER; i++) {
  advertisements[i] = createNewAdvertisement(i);
}

// console.log(advertisements);



var template = document.querySelector('.location_mark');
var map = document.querySelector('.tokyo__pin-map');
var pin = template.content.querySelector('.pin');
var fragment = document.createDocumentFragment();
var createTemplate = function(newPin) {
  var div = document.createElement('div');
  var img = document.createElement('img');
  div.classList.add('pin');
  div.style.left = newPin.location.x + 'px';
  div.style.top = newPin.location.y + 'px';
  img.src = newPin.author.avatar;
  img.classList.add('rounded');
  img.style.width = 40 + 'px';
  img.style.height = 40 + 'px';
  div.appendChild(img);
  return div;
}


for (var j = 0; j < advertisements.length; j++) {
  fragment.appendChild(createTemplate(advertisements[j]));
}

map.appendChild(fragment);

console.log(map);

// var lodge = document.querySelector('#lodge-template');
// var dialogPanel = document.querySelector('.dialog__panel');
// var createLodge = function(newLodge) {
//   var dialog__panel = document.createElement('div');
//   dialog__panel.classList.add('dialog__panel');
//   var lodge__title = document.createElement('h3');
//   lodge__title.classList.add('lodge__title');
//   lodge__title.textContent = newLodge.offer.title;
//   var lodge__address = document.createElement('p');
//   lodge__address.classList.add('lodge__address');
//   lodge__address.textContent = newLodge.offer.address;
//   var lodge__price = document.createElement('h3');
//   lodge__price.classList.add('lodge__price');
//   lodge__price.textContent = newLodge.offer.price;
//   var lodge__type = document.createElement('h4');
//   lodge__type.classList.add('lodge__type');
//   lodge__type.textContent = newLodge.offer.type;
//   var lodge__rooms_and_guests = document.createElement('p');
//   lodge__rooms_and_guests.classList.add('lodge__rooms-and-guests');
//   lodge__title.textContent = 'Для ' + newLodge.offer.guests + ' гостей в ' + newLodge.offer.rooms + ' комнатах';
//   var lodge__checkin_time = document.createElement('p');
//   lodge__checkin_time.classList.add('lodge__checkin-time');
//   lodge__checkin_time.textContent = 'Заезд после ' + newLodge.offer.checkin + ',' + 'выезд до ' + newLodge.offer.checkout;
//   var lodge__features = document.createElement('div');
//   lodge__features.classList.add('lodge__features');
//   var lodge__features__array = function () {
//     for (var k = 0; k < newLodge.offer.features.length; k++) {
//     var lodge__feature__image = document.createElement('span');
//     lodge__features__array[k] = lodge__feature__image;
//     // console.log(newLodge.offer.feature);
//     lodge__feature__image.classList.add('feature__image feature__image--' + newLodge.offer.feature[k]);
//     }
//   }
//   // console.log('тут');
//   console.log(lodge__features__array());
//   var lodge__description = document.createElement('p');
//   lodge__description.classList.add('lodge__description');
//   lodge__description.textContent = newLodge.offer.description;
//   var lodge__photos = document.createElement('div');
//   lodge__photos.classList.add('lodge__photos');
// }

// console.log(createLodge(advertisements[0]));

var lodgeTemplate = document.querySelector('#lodge-template').content;
var dialogPanel = document.querySelector('.dialog__panel');


var getLodgeTemplate = function(firstObj) {
  dialogPanel.querySelector('.lodge__title').textContent = firstObj.offer.title;
  dialogPanel.querySelector('.lodge__address').textContent = firstObj.offer.address;
  dialogPanel.querySelector('.lodge__price').textContent = firstObj.offer.price + '&#x20bd;/ночь';
  dialogPanel.querySelector('.lodge__type').textContent = firstObj.offer.type;
  if (dialogPanel.querySelector('.lodge__type').textContent === 'flat') {
    dialogPanel.querySelector('.lodge__type').textContent = 'Квартира';
  } else if (dialogPanel.querySelector('.lodge__type').textContent === 'bungalo') {
    dialogPanel.querySelector('.lodge__type').textContent = 'Бунгало';
  } else {
    dialogPanel.querySelector('.lodge__type').textContent = 'Дом';
  }
  dialogPanel.querySelector('.lodge__rooms-and-guests').textContent = 'Для ' + firstObj.offer.guests + ' гостей в ' + firstObj.offer.rooms + ' комнатах';
  dialogPanel.querySelector('.lodge__checkin-time').textContent = 'Заезд после ' + firstObj.offer.checkin + ',' + 'выезд до ' + firstObj.offer.checkout;
  for (var k = 0; k < firstObj.offer.features.length; k++) {
    var lodge__feature__image = document.createElement('span');
    lodge__feature__image.classList.add('feature__image feature__image--' + firstObj.offer.feature[k]);
    dialogPanel.querySelector('.lodge__features').appendChild(lodge__feature__image);
  }
  dialogPanel.querySelector('.lodge__description').textContent = firstObj.offer.description;
  var dialogTitle = document.querySelector('.dialog__title');
  var dialogImg = dialogTitle.content.querySelector('img');
  dialogImg.src = firstObj.author.avatar;
  console.log(dialogImg);
}

getLodgeTemplate(advertisements[0]);

// console.log(getLodgeTemplate(advertisements[0]));