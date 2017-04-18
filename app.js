'use strict';

var pictureArray = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg','breakfast.jpg','bubblegum.jpg','chair.jpg','cthulhu.jpg','dog-duck.jpg','dragon.jpg','pen.jpg','pet-sweep.jpg','scissors.jpg','shark.jpg','sweep.png','tauntaun.jpg','unicorn.jpg','usb.gif','water-can.jpg','wine-glass.jpg'];


function Picture(name, path) {
  this.name = name;
  this.path = path;
  this.numberOfTimesShowned = 0;
  this.numberOfTimesClicked = 0;
  this.generateRandonImage();
}

Picture.prototype.generateRandonImage = function () {
  var generatedPicture = pictureArray[Math.floor(Math.random()* pictureArray.length)];
  if(pictureArray.indexOf(generatedPicture == -1)) {
    this.name = generatedPicture;
    this.path = 'img/' + this.name;
    // console.log(this.path)
  } else {
    this.generateRandonImage();
  }
  this.divIdCreate();
  this.numberOfTimesShowned++;
};

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

function countPictureClicks(){
  this.numberOfTimesClicked++;
  pictureOne.generateRandonImage();
  pictureTwo.generateRandonImage();
  pictureThree.generateRandonImage();
  console.log(test.numberOfTimesClicked);

}

var pictureOne = new Picture();
var pictureTwo = new Picture();
var pictureThree = new Picture();


var test = document.getElementById(pictureOne.name);
console.log(test.numberOfTimesShowned);
// add event listener to table
test.addEventListener("click", countPictureClicks);
