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
  new Picture('wine-glass' , './img/wine-glass.jpg')

];

//create a constructor for various images
function Picture(name, path) {
  this.name = name;
  this.path = path;
  this.numberOfTimesShowned = 0;
  this.numberOfTimesClicked = 0;
}

//This function generate a unique random number
function generateRandonImageIndex () {
  return Math.floor(Math.random()* pictureArray.length);
  // return imagesSelected;
}

 var imageOneName, imageOnePath;
//Function to generate three random images
function generateThreeRandomImages () {

  var imageOneIndex = generateRandonImageIndex();
  imageOneName = pictureArray[imageOneIndex].name;

  imageOnePath = pictureArray[imageOneIndex].path;
  pictureArray[imageOneIndex].numberOfTimesShowned++;

  var imageTwoIndex = generateRandonImageIndex();
  while(imageTwoIndex === imageOneIndex){
    imageTwoIndex = generateRandonImageIndex();
  }
  var imageTwoName = pictureArray[imageTwoIndex].name;
  var imageTwoPath = pictureArray[imageTwoIndex].path;
  pictureArray[imageTwoIndex].numberOfTimesShowned++;

  var imageThreeIndex = generateRandonImageIndex();
  while(imageThreeIndex === imageOneIndex || imageThreeIndex === imageTwoIndex){
  imageThreeIndex = generateRandonImageIndex();
}
  var imageThreeName = pictureArray[imageThreeIndex].name;
  var imageThreePath = pictureArray[imageThreeIndex].path;
  pictureArray[imageThreeIndex].numberOfTimesShowned++;


  // function displayPics() {
  //   var leftIndex = randNum(0, allProducts.length);
  //   left.src = allProducts[leftIndex].path;
  //   left.alt = allProducts[leftIndex].name;
  //   allProducts[leftIndex].views += 1;

  // console.log(arrayNew);
}
// for(var i = 0; i < pictureArray.length; i++){
//   console.log(pictureArray[i]);
// }
// console.log(pictureArray[6]);
var test = generateThreeRandomImages ()
console.log(imageOnePath);

// console.log(imagesDisplaying[0]);
// console.log(generateRandonImageIndex());

// console.log(images);



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

//Create variables to hold each item that will be displayed on the screen
var imageOne, imageTwo, imageThree;

// var test = document.getElementById(pictureOne.name);
// console.log(pictureOne.numberOfTimesShowned);
// add event listener to table
// test.addEventListener("click", countPictureClicks);
