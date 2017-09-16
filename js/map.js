// map.js
(function () {

  var getRandomNumber = function(min, max) {
    return Math.round(min + Math.random() * (max - min));
  };

  var advertisements = [];

  window.createNewAdvertisement = function(index) {

    var locationX = getRandomNumber(window.data.LOCATION_MIN_X, window.data.LOCATION_MAX_X);
    var locationY = getRandomNumber(window.data.LOCATION_MIN_Y, window.data.LOCATION_MAX_Y);

    return {
      'author': {
        'avatar': 'img/avatars/user0' + (index + 1) + '.png'
      },

      'offer': {
        'title': window.data.OFFER_TITLE[index],
        'address': locationX + ', ' + locationY,
        'price': getRandomNumber(window.data.OFFER_MIN_PRICE, window.data.OFFER_MAX_PRICE),
        'type': window.data.OFFER_TYPE[getRandomNumber(0, window.data.OFFER_TYPE.length - 1)],
        'rooms': getRandomNumber(window.data.OFFER_MIN_ROOMS, window.data.OFFER_MAX_ROOMS),
        'guests': getRandomNumber(window.data.OFFER_MIN_GUESTS, window.data.OFFER_MAX_GUESTS),
        'checkin': window.data.OFFER_CHECK_IN[getRandomNumber(0, window.data.OFFER_CHECK_IN.length - 1)],
        'checkout': window.data.OFFER_CHECK_OUT[getRandomNumber(0, window.data.OFFER_CHECK_OUT.length - 1)],
        'features': window.data.OFFER_FEATURES.slice(0, window.data.OFFER_FEATURES.length - 1),
        'description': '',
        'photos': []
      },

      'location': {
        'x': locationX,
        'y': locationY
      }
    };
  };

  window.map = {
    advertisements: [],
    
  }

var dialogHandle = document.querySelector('.pin__main');

dialogHandle.addEventListener('mousedown', function (evt) {
  evt.preventDefault();

  var startCoords = {
    x: evt.clientX,
    y: evt.clientY
  };

  var onMouseMove = function (moveEvt) {
    moveEvt.preventDefault();

    var shift = {
      x: startCoords.x - moveEvt.clientX,
      y: startCoords.y - moveEvt.clientY
    };
    // проверить убрав начальные координаты
    startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };

    dialogHandle.style.top = (dialogHandle.offsetTop - shift.y) + 'px';
    dialogHandle.style.left = (dialogHandle.offsetLeft - shift.x) + 'px';
    var addressType = document.querySelector('#address');
    addressType.value = 'x:' + moveEvt.clientX + ', y:' + moveEvt.clientY;
  };

  var onMouseUp = function (upEvt) {
    upEvt.preventDefault();

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);

});


})();