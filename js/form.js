// form.js

(function () {

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

})();

