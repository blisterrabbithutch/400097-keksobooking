'use strict';

var getRandomAvatar = function (min, max) {
	var uniqueAvatarNumber = Math.floor(min + (Math.random() * (max + 1 - min)));
	var uniqueAvatarAdress = 'img/avatars/user' + uniqueAvatarNumber + '.png';
	return uniqueAvatarAdress;	
}

var titleArrayOptions = ["Большая уютная квартира", "Маленькая неуютная квартира", "Огромный прекрасный дворец", "Маленький ужасный дворец", "Красивый гостевой домик", "Некрасивый негостеприимный домик", "Уютное бунгало далеко от моря", "Неуютное бунгало по колено в воде"];
var getRandomTitle = function () {
	return titleArrayOptions[Math.floor(Math.random()*(titleArrayOptions.length))];	
}

var adressArrayOptions = ['string'];
var getRandomAdress = function () {
	return adressArrayOptions;
}

var getRandomPrice = function (min, max) {
	return Math.floor(min + (Math.random() * (max + 1 - min)));
}

var typeArrayOptions = ['flat', 'house', 'bungalo'];
var getRandomType = function () {
	return typeArrayOptions[Math.floor(Math.random()*(typeArrayOptions.length))];	
}

var getRandomRooms = function (min, max) {
	return Math.floor(min + (Math.random() * (max + 1 - min)));
}

var getRandomGuests = function (min, max) {
	return Math.floor(min + (Math.random() * (max + 1 - min)));
}

var checkInArrayOptions = ['12:00', '13:00', '14:00'];
var getRandomCheckIn = function () {
	return checkInArrayOptions[Math.floor(Math.random()*(checkInArrayOptions.length))];	
}

var checkOutArrayOptions = ['12:00', '13:00', '14:00'];
var getRandomCheckOut = function () {
	return checkOutArrayOptions[Math.floor(Math.random()*(checkOutArrayOptions.length))];	
}

var featuresArrayOptions = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"];
var getRandomFeatures = function () {
	for (var i = 0; i < Math.floor(0 + (Math.random() * (featuresArrayOptions.length + 1))); i++) {
  		return featuresArrayOptions[Math.floor(Math.random()*(featuresArrayOptions.length))];
	}
}

var descriptionArrayOptions = [];
var getRandomDescription = function () {
	return '';	
}

var photosArrayOptions = [];
var getRandomPhotos = function () {
	return photosArrayOptions[Math.floor(Math.random()*(photosArrayOptions.length))];	
}

var getRandomLocationX = function (min, max) {
	return Math.floor(min + (Math.random() * (max + 1 - min)));
}
getRandomLocationX(300, 900);
console.log(getRandomLocationX(300, 900));

var getRandomLocationY = function (min, max) {
	return Math.floor(min + (Math.random() * (max + 1 - min)));
}

var author = {
	avatar: getRandomAvatar(1, 8)
}
var offer = {
		title: getRandomTitle(),
		// adress: getRandomAdress()
		price: getRandomPrice(1000, 1000000),
		type: getRandomType(),
		rooms: getRandomRooms(1, 5),
		guests: getRandomGuests(1, 20),
		checkin: getRandomCheckIn(),
		checkout: getRandomCheckOut(),
		features: getRandomFeatures(),
		description: getRandomDescription(),
		photos: getRandomPhotos()
}
var location: {
		x: getRandomLocationX(300, 900)
		y: getRandomLocationY(100, 500)
}

var arrayAd = [author, offer, location];

var template = document.querySelector('.location_mark');
var map = document.querySelector('.tokyo__pin-map');
var fragment = document.createDocumentFragment();
for (var i = 0; i < 6; i++) {
	var element = template.content.querySelector('.pin').cloneNode(true);
	element.content.querySelector('.pin_location_x').textContent = location.x;
	element.content.children[0].querySelector('.pin_location_y').textContent = location.y;
	element.content.children[0].querySelector('.pin_avatar').textContent = author.avatar;
	fragment.appendChild(element);
}
map.appendChild(fragment);









