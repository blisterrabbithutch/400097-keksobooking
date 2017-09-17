// show-card.js
(function () {

  var dialogClose = document.querySelector('.dialog__close');
  var tokyoPinMap = document.querySelector('.tokyo__pin-map');
  var buttonPin = tokyoPinMap.querySelectorAll('.pin:not(:first-child)');
  var addHideDialogEventListener = function(evt) {
    if (evt.keyCode === window.data.KEYCODE_ESC) {
      hideDialog();
    }
    var pinActive = document.querySelector('.pin--active');
    if (pinActive) {
      pinActive.classList.remove('pin--active');
    }
  }

  var showDialog = function() {
    window.card.dialogDomBlock.classList.remove('hidden');
    document.addEventListener('keydown', addHideDialogEventListener);
  }
  var hideDialog = function() {
    window.card.dialogDomBlock.classList.add('hidden');
    document.removeEventListener('keydown', addHideDialogEventListener);
  }
  window.showCard= function(pinEvent) {
    showDialog();
    var clickedElement = pinEvent.currentTarget;
    var currentId = clickedElement.dataset.id;
    var pinActive = document.querySelector('.pin--active');
    if (pinActive) {
      pinActive.classList.remove('pin--active');
    }
    clickedElement.classList.add('pin--active');
    var oldDialogData = dialogDomBlock.querySelector('.dialog__panel');
    window.card.dialogDomBlock.replaceChild(window.getLodgeTemplate(window.map.advertisements[currentId]), oldDialogData);
  };

  for (var l = 0; l < buttonPin.length; l++) {
    buttonPin[l].addEventListener('click', showCard);
  }

  dialogClose.addEventListener('click', hideDialog);


})();
