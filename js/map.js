'use strict';

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
}

var getRandomNumber = function(min, max) {
  return Math.round(min + Math.random() * (max - min));
};

var advertisements = [];

var createNewAdvertisement = function(index) {

  var locationX = getRandomNumber(LOCATION_MIN_X, LOCATION_MAX_X);
  var locationY = getRandomNumber(LOCATION_MIN_Y, LOCATION_MAX_Y);

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

for (var i = 0; i < OBJECT_NUMBER; i++) {
  advertisements[i] = createNewAdvertisement(i);
}

var map = document.querySelector('.tokyo__pin-map');
var fragment = document.createDocumentFragment();
var createTemplate = function(newPin, index) {
  var div = document.createElement('div');
  var img = document.createElement('img');
  div.classList.add('pin');
  div.style.left = newPin.location.x + 'px';
  div.style.top = newPin.location.y + 'px';
  div.dataset.id = index;
  img.src = newPin.author.avatar;
  img.classList.add('rounded');
  img.style.width = 40 + 'px';
  img.style.height = 40 + 'px';
  div.appendChild(img);
  return div;
};
for (var j = 0; j < advertisements.length; j++) {
  fragment.appendChild(createTemplate(advertisements[j], j));
}

map.appendChild(fragment);

var lodgeTemplate = document.querySelector('#lodge-template').content;
var dialogDomBlock = document.querySelector('#offer-dialog');

var getLodgeTemplate = function(firstObj) {
  var dialogPanel = lodgeTemplate.cloneNode(true);
  dialogPanel.querySelector('.lodge__title').textContent = firstObj.offer.title;
  dialogPanel.querySelector('.lodge__address').textContent = firstObj.offer.address;
  dialogPanel.querySelector('.lodge__price').innerHTML = firstObj.offer.price + '&#x20bd;/ночь';
  dialogPanel.querySelector('.lodge__type').textContent = TYPE_ARRAY[firstObj.offer.type];
  dialogPanel.querySelector('.lodge__rooms-and-guests').textContent = 'Для ' + firstObj.offer.guests + ' гостей в ' + firstObj.offer.rooms + ' комнатах';
  dialogPanel.querySelector('.lodge__checkin-time').textContent = 'Заезд после ' + firstObj.offer.checkin + ',' + 'выезд до ' + firstObj.offer.checkout;
  for (var k = 0; k < firstObj.offer.features.length; k++) {
    var lodgeFeatureImage = document.createElement('span');
    lodgeFeatureImage.className = 'feature__image feature__image--' + firstObj.offer.features[k];
    dialogPanel.querySelector('.lodge__features').appendChild(lodgeFeatureImage);
  }
  dialogPanel.querySelector('.lodge__description').textContent = firstObj.offer.description;

  var dialogTitle = document.querySelector('.dialog__title');
  var dialogImg = dialogTitle.querySelector('img');
  dialogImg.src = firstObj.author.avatar;

  return dialogPanel;
};

var dialogClose = document.querySelector('.dialog__close');
var tokyoPinMap = document.querySelector('.tokyo__pin-map');
var buttonPin = tokyoPinMap.querySelectorAll('.pin:not(:first-child)');
var addHideDialogEventListener = function(evt) {
  if (evt.keyCode === KEYCODE_ESC) {
    hideDialog();
  }
  var pinActive = document.querySelector('.pin--active');
  if (pinActive) {
    pinActive.classList.remove('pin--active');
  }
}

var showDialog = function() {
  dialogDomBlock.classList.remove('hidden');
  document.addEventListener('keydown', addHideDialogEventListener);
}
var hideDialog = function() {
  dialogDomBlock.classList.add('hidden');
  document.removeEventListener('keydown', addHideDialogEventListener);
}
var pinCLickHandler = function(pinEvent) {
  showDialog();
  var clickedElement = pinEvent.currentTarget;
  var currentId = clickedElement.dataset.id;
  var pinActive = document.querySelector('.pin--active');
  if (pinActive) {
    pinActive.classList.remove('pin--active');
    // hideDialog(); почему убрали?
  }
  // document.querySelector('.pin--active').classList.remove('pin--active');
  clickedElement.classList.add('pin--active');
  var oldDialogData = dialogDomBlock.querySelector('.dialog__panel');
  dialogDomBlock.replaceChild(getLodgeTemplate(advertisements[currentId]), oldDialogData);
};

for (var l = 0; l < buttonPin.length; l++) {
  buttonPin[l].addEventListener('click', pinCLickHandler);
}

dialogClose.addEventListener('click', hideDialog);


var formInputTitle = document.querySelector('.form_element_title_input');
formInputTitle.addEventListener('invalid', function (evt) {
  if (!formInputTitle.validity.valid) {
    if (formInputTitle.validity.valueMissing) {
      formInputTitle.setCustomValidity('Привет, это поле пустое. Совсем');
    }
  } else {
    formInputTitle.setCustomValidity('');
  }
});

formInputTitle.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < 30) {
    target.setCustomValidity('Привет. Введите заголовок более 30 символов.');
  } else if (target.value.length > 100) {
    target.setCustomValidity('Привет. Введите заголовок менее 100 символов.');
  } 
  else {
    formInputTitle.setCustomValidity('');
  }
});

var formInputPrice = document.querySelector('.form_element_price_input');
formInputPrice.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value < 30) {
    target.setCustomValidity('Привет. Введите стоимость больше');
  } else if (target.value > 1000000) {
    target.setCustomValidity('Привет. Введите стоимость менее 1000000');
  } 
  else {
    formInputPrice.setCustomValidity('');
  }
});

var formTimeIn = document.querySelector('.form_element_timein');
var formTimeOut = document.querySelector('.form_element_timeout');
console.log(formTimeIn.selectedIndex[0]);
if (formTimeIn.selectedIndex = 0) {
    formTimeOut.selectedIndex = 0;
    console.log(formTimeOut.value);
  } else if (formTimeIn.value == '14:00') {
    formTimeOut.value == '14:00';
}


// автосинхронизация

var form = document.querySelector('.notice__form');
var title = form.querySelector('#title');
var timeIn = form.querySelector('#timein');
var timeOut = form.querySelector('#timeout');
var lodgeType = form.querySelector('#type');
var lodgePrice = form.querySelector('#price');
var roomAmount = form.querySelector('#room_number');
var lodgeCapacity = form.querySelector('#capacity');
var submit = form.querySelector('.form__submit');
var inputs = form.querySelectorAll('input');


var synchronizeTimeInOut = function () {
  for (var t = 0; t < timeOut.options.length; t++) {
    if (timeOut.options[t].value === timeIn.selectedOptions[0].value) {
      timeOut.options[t].selected = true;
    }
  }
};

var synchronizeTimeOutIn = function () {
  for (var t = 0; t < timeIn.options.length; t++) {
    if (timeIn.options[t].value === timeOut.selectedOptions[0].value) {
      timeIn.options[t].selected = true;
    }
  }
};

var synchronizeMinPrice = function () {
  var selectedOption = lodgeType.selectedOptions[0].value;
  if (selectedOption === 'bungalo') {
    lodgePrice.min = '0';
    lodgePrice.placeholder = '0';
  } else if (selectedOption === 'flat') {
    lodgePrice.min = '1000';
    lodgePrice.placeholder = '1000';
  } else if (selectedOption === 'house') {
    lodgePrice.min = '5000';
    lodgePrice.placeholder = '5000';
  } else if (selectedOption === 'palace') {
    lodgePrice.min = '10000';
    lodgePrice.placeholder = '10000';
  }
};

var synchronizeCapacity = function () {
  var selectedOption = roomAmount.selectedOptions[0].textContent;
  if (selectedOption === '1 комната') {
    lodgeCapacity.options[2].selected = true;
  } else if (selectedOption === '2 комнаты') {
    lodgeCapacity.options[1].selected = true;
  } else if (selectedOption === '3 комнаты') {
    lodgeCapacity.options[0].selected = true;
  } else if (selectedOption === '100 комнат') {
    lodgeCapacity.options[3].selected = true;
  }
};

synchronizeMinPrice();
roomAmount.addEventListener('change', synchronizeCapacity);
timeIn.addEventListener('change', synchronizeTimeInOut);
timeOut.addEventListener('change', synchronizeTimeOutIn);
lodgeType.addEventListener('change', synchronizeMinPrice);


