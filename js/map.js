// map.js

(function () {

var getRandomNumber = function(min, max) {
  return Math.round(min + Math.random() * (max - min));
};

var advertisements = [];

var createNewAdvertisement = function(index) {

  var locationX = getRandomNumber(window.data.LOCATION_MIN_X, window.data.LOCATION_MAX_X);
  var locationY = getRandomNumber(window.data.LOCATION_MIN_Y, window.data.LOCATION_MAX_Y);

  return {
    'author': {
      'avatar': 'img/avatars/user0' + (index + 1) + '.png'
    },

    'offer': {
      'title': OFFER_TITLE[i],
      'address': locationX + ', ' + locationY,
      'price': getRandomNumber(OFFER_MIN_PRICE, OFFER_MAX_PRICE),
      'type': OFFER_TYPE[getRandomNumber(0, OFFER_TYPE.length - 1)],
      'rooms': getRandomNumber(OFFER_MIN_ROOMS, OFFER_MAX_ROOMS),
      'guests': getRandomNumber(OFFER_MIN_GUESTS, OFFER_MAX_GUESTS),
      'checkin': OFFER_CHECK_IN[getRandomNumber(0, OFFER_CHECK_IN.length - 1)],
      'checkout': OFFER_CHECK_OUT[getRandomNumber(0, OFFER_CHECK_OUT.length - 1)],
      'features': OFFER_FEATURES.slice(0, OFFER_FEATURES.length - 1),
      'description': '',
      'photos': []
    },

    'location': {
      'x': locationX,
      'y': locationY
    }
  };
};

// не уверен можно ли записать функцию в объект так, а не перенося ее целиком как в демке

window.map = {
    advertisements : [],
    createNewAdvertisement : function (index)
};

})();
