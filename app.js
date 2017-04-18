'use strict';

var pictureArray = [
    new Picture('bag' , './img/bag.jpg'),
    new Picture('banana' , './img/banana.jpg'),
    new Picture('bathroom' , './img/bathroom.jpg'),
    new Picture('boots' , './img/boots.jpg'),
    new Picture('breakfast' , './img/breakfast.jpg'),

    new Picture('bubblegum' , './img/bubblegum.jpg'),
    new Picture('chair' , './img/chair.jpg'),
    new Picture('cthulhu' , './img/cthulhu.jpg'),
    new Picture('dog-duck' , './img/dog-duck.jpg'),
    new Picture('dragon' , './img/dragon.jpg'),

    new Picture('pen' , './img/pen.jpg'),
    new Picture('pet-sweep' , './img/pet-sweep.jpg'),
    new Picture('scissors' , './img/scissors.jpg'),
    new Picture('shark' , './img/shark.jpg'),
    new Picture('sweep' , './img/sweep.png'),

    new Picture('tauntaun' , './img/tauntaun.jpg'),
    new Picture('unicorn' , './img/unicorn.jpg'),
    new Picture('usb' , './img/usb.gif'),
    new Picture('water-can' , './img/water-can.jpg'),
    new Picture('wine-glass' , './img/wine-glass.jpg'),

  ];

//create a constructor for picutes
function Picture(name, path) {
  this.name = name;
  this.path = path;
  this.numberOfTimesShowned = 0;
  this.numberOfTimesClicked = 0;
}

function generateRandonImageIndex () {
  return Math.floor(Math.random()* pictureArray.length);
}


console.log(pictureArray.length);



Picture.prototype.divIdCreate = function () {
  var displayPictureBoxes = document.getElementById('pictureArrays');
  for(var i = 0; i < 1; i++){
    var pictureDivCreate = document.createElement('div');
    pictureDivCreate.setAttribute('id', this.name);
    pictureDivCreate.className = 'pictures-Box';

    var pictureImgTag = document.createElement('img');
    pictureImgTag.src = this.path;
    pictureDivCreate.appendChild(pictureImgTag);
    displayPictureBoxes.appendChild(pictureDivCreate);

  }
};


var pictureOne = new Picture();
var pictureTwo = new Picture();
var pictureThree = new Picture();


var test = document.getElementById(pictureOne.name);
// console.log(pictureOne.numberOfTimesShowned);
// add event listener to table
test.addEventListener("click", countPictureClicks);
