'use strict';
// как в дебаггере смотреть результат записанной функции в переменной?
// не показывает результат работы функции дебаггер. как запускать?

// функция нахождения целочисленного случайного числа в диапазоне
// function randomInteger(min, max) {
//     var rand = min + Math.random() * (max + 1 - min);
//     rand = Math.floor(rand);
//     return rand;
//   }

// randomInteger(5, 10);

var getRandomAvatar = function (min, max) {
	var uniqueAvatarNumber = Math.floor(min + (Math.random() * (max + 1 - min)));
	var uniqueAvatarAdress = 'img/avatars/user' + uniqueAvatarNumber + '.png';
	return uniqueAvatarAdress;	
}
getRandomAvatar(1, 8);
console.log(getRandomAvatar(1, 8));

var titleArrayOptions = [Большая уютная квартира, Маленькая неуютная квартира, Огромный прекрасный дворец, Маленький ужасный дворец, Красивый гостевой домик, Некрасивый негостеприимный домик, Уютное бунгало далеко от моря, Неуютное бунгало по колено в воде];
var getRandomTitle = function () {
	return titleArrayOptions[Math.floor(Math.random()*(titleArrayOptions.length))];	
}
getRandomTitle();
console.log(getRandomTitle());

// что писать сюда?
var adressArrayOptions = [];
var getRandomAdress = function () {
	
}
getRandomAdress();
console.log(getRandomAdress());

var getRandomPrice = function (min, max) {
	return Math.floor(min + (Math.random() * (max + 1 - min)));
}
getRandomPrice(1000, 1000000);
console.log(getRandomPrice(1000, 1000000));

var typeArrayOptions = ['flat', 'house', 'bungalo'];
var getRandomType = function () {
	return typeArrayOptions[Math.floor(Math.random()*(typeArrayOptions.length))];	
}
getRandomType();
console.log(getRandomType());

var getRandomRooms = function (min, max) {
	return Math.floor(min + (Math.random() * (max + 1 - min)));
}
getRandomRooms(1, 5);
console.log(getRandomRooms(1, 20));

var getRandomGuests = function (min, max) {
	return Math.floor(min + (Math.random() * (max + 1 - min)));
}
getRandomGuests(1, 20);
console.log(getRandomGuests(1, 20));

var checkInArrayOptions = ['12:00', '13:00', '14:00'];
var getRandomCheckIn = function () {
	return checkInArrayOptions[Math.floor(Math.random()*(checkInArrayOptions.length))];	
}
getRandomCheckIn();
console.log(getRandomCheckIn());

var checkOutArrayOptions = ['12:00', '13:00', '14:00'];
var getRandomCheckOut = function () {
	return checkOutArrayOptions[Math.floor(Math.random()*(checkOutArrayOptions.length))];	
}
getRandomCheckOut();
console.log(getRandomCheckOut());

// как сделать принт нескольких значений - запустить цикл несколько раз?
var featuresArrayOptions = [wifi, dishwasher, parking, washer, elevator, conditioner];
var getRandomFeatures = function () {
	for (var i = 0; i < Math.floor(0 + (Math.random() * (featuresArrayOptions.length + 1))); i++) {
  		return featuresArrayOptions[Math.floor(Math.random()*(featuresArrayOptions.length))];
	}
}
getRandomFeatures();
console.log(getRandomFeatures());

var descriptionArrayOptions = [];
var getRandomDescription = function () {
	return '';	
}
getRandomDescription();
console.log(getRandomDescription());

var photosArrayOptions = [];
var getRandomPhotos = function () {
	return photosArrayOptions[Math.floor(Math.random()*(photosArrayOptions.length))];	
}
getRandomPhotos();
console.log(getRandomPhotos());

var getRandomLocationX = function (min, max) {
	return Math.floor(min + (Math.random() * (max + 1 - min)));
}
getRandomLocationX(300, 900);
console.log(getRandomLocationX(300, 900));

var getRandomLocationY = function (min, max) {
	return Math.floor(min + (Math.random() * (max + 1 - min)));
}
getRandomLocationY(100, 500);
console.log(getRandomLocationY(100, 500));

// здесь задавать несколько объектов?
var arrayAd = [author, offer, location];
var author = {
		avatar: getRandomAvatar(1, 8);
}
var offer = {
		title: getRandomTitle();
		address: getRandomAdress();
		price: getRandomPrice(1000, 1000000);
		type: getRandomType();
		rooms: getRandomRooms(1, 5);
		guests: getRandomGuests(1, 20);
		checkin: getRandomCheckIn();
		checkout: getRandomCheckOut();
		features: getRandomFeatures();
		description: getRandomDescription();
		photos: getRandomPhotos()
}
var location: {
		x: getRandomLocationX(300, 900);
		y: getRandomLocationY(100, 500)
}
