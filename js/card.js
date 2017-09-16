// card.js

(function () {

for (var i = 0; i < window.data.OBJECT_NUMBER; i++) {
  window.map.advertisements[i] = createNewAdvertisement(i);
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

})();
