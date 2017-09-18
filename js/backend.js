// backend.js
'use strict';
(function () {
  var URL_Save = 'https://1510.dump.academy/keksobooking';
  var URL_Load = 'https://1510.dump.academy/keksobooking/data';
  // функция отправки данных на сервер
  // data = объект с данными, котрые необходим отправить data
  // onSuccess = функция обратного вызова onSuccess, которая будет вызываться каждый раз когда данные отправлены успешно
  window.xhrTransfer = function (data, onSuccess) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      onSuccess(xhr.response);
    });
    // зачем здесь в демке написано else в котором написано onError, если это описывается дальше?
    xhr.addEventListener('error', function () {
      onError('Ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });
    xhr.timeout = 10000; // 10s

    return xhr;
  };
  window.backend = {
    load: function (onLoad, onError) {
      var xhr = xhrTransfer(onSuccess, onError);

      xhr.open('GET', URL_Load);
      xhr.send();
    },

    save: function (data, onLoad, onError) {
      // что за xhrTransfer?? var xhrTransfer = function (onSuccess, onError). зачем дважды дублировать параметры?
      var xhr = xhrTransfer(onSuccess, onError);

      xhr.open('POST', URL_Save);
      xhr.send(data);
    },

  };


})();
