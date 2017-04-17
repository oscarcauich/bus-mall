'use strict';

console.log('It works');

var pictureArray = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg','breakfast.jpg','bubblegum.jpg','chair.jpg','cthulhu.jpg','dog-duck.jpg','dragon.jpg','pen.jpg','pet-sweep.jpg','scissors.jpg','shark.jpg','sweep.png','tauntaun.jpg','unicorn.jpg','usb.gif','water-can.jpg','wine-glass.jpg'];

var displayPictureArray = document.getElementById('pictureArrays');

function randomArrayCreateIndex () {
  var randomArrayIndex = pictureArray[Math.floor(Math.random()* pictureArray.length)];
  return randomArrayIndex;
}

displayPictureArray.innerHTML = '<img src="img/' + randomArrayCreateIndex() + '" />';

console.log(randomArrayCreateIndex());
