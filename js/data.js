'use strict';

// data.js

(function () {

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
  var KEYCODE_ESC = 27;
  var KEYCODE_ENTER = 13;
  var TYPE_ARRAY = {
    'flat': 'Квартира',
    'house': 'Дом',
    'bungalo': 'Бунгало'
  };

  window.data = {
    TYPE_ARRAY: {
      'flat': 'Квартира',
      'house': 'Дом',
      'bungalo': 'Бунгало'
    },
    OBJECT_NUMBER: 8,
    LOCATION_MIN_X: 300,
    LOCATION_MAX_X: 900,
    LOCATION_MIN_Y: 100,
    LOCATION_MAX_Y: 500,
    OFFER_MIN_PRICE: 1000,
    OFFER_MAX_PRICE: 1000000,
    OFFER_MIN_ROOMS: 1,
    OFFER_MAX_ROOMS: 5,
    OFFER_MIN_GUESTS: 1,
    OFFER_MAX_GUESTS: 20,
    KEYCODE_ESC: 27,
    KEYCODE_ENTER: 13,
    OFFER_TYPE: ['flat', 'house', 'bungalo'],
    OFFER_CHECK_IN: ['12:00', '13:00', '14:00'],
    OFFER_CHECK_OUT: ['12:00', '13:00', '14:00'],
    OFFER_FEATURES: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
    OFFER_TITLE: ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде']
  };

})();
