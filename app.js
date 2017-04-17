'use strict';

console.log('It works');

var pictureArray = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg','breakfast.jpg','bubblegum.jpg','chair.jpg','cthulhu.jpg','dog-duck.jpg','dragon.jpg','pen.jpg','pet-sweep.jpg','scissors.jpg','shark.jpg','sweep.png','tauntaun.jpg','unicorn.jpg','usb.gif','water-can.jpg','wine-glass.jpg'];

var displayPictureArrayOne = document.getElementById('pictures-Box-1');
var displayPictureArrayTwo = document.getElementById('pictures-Box-2');
var displayPictureArrayThree = document.getElementById('pictures-Box-3');

function randomArrayCreateIndex () {
  var randomArrayIndex = pictureArray[Math.floor(Math.random()* pictureArray.length)];
  return randomArrayIndex;
}

displayPictureArrayOne.innerHTML = '<img src="img/' + randomArrayCreateIndex() + '" />';
displayPictureArrayTwo.innerHTML = '<img src="img/' + randomArrayCreateIndex() + '" />';
displayPictureArrayThree.innerHTML = '<img src="img/' + randomArrayCreateIndex() + '" />';

console.log(randomArrayCreateIndex());
