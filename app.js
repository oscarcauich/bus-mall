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

//This generates a random picture from the Array but they are set yet to not repeat. I will work on that tomorrow morning.
function pictureGenerator() {
  picturesOnScreenIndex = [];
  var pictureOne = generateRandonImageIndex();
  picturesOnScreenIndex.push(pictureOne);


  var pictureTwo = generateRandonImageIndex();
  picturesOnScreenIndex.push(pictureTwo);

  var pictureThree = generateRandonImageIndex();
  picturesOnScreenIndex.push(pictureThree);

  return picturesOnScreenIndex;
}

function startImages() {
  if(totalNumberOfClicks === 0){
    pictureGenerator();
    pictureOne.src = pictureArray[picturesOnScreenIndex[0]].path;
    pictureTwo.src = pictureArray[picturesOnScreenIndex[1]].path;
    pictureThree.src = pictureArray[picturesOnScreenIndex[2]].path;
    pictureArray[picturesOnScreenIndex[0]].numberOfTimesShowned++;
    pictureArray[picturesOnScreenIndex[1]].numberOfTimesShowned++;
    pictureArray[picturesOnScreenIndex[2]].numberOfTimesShowned++;
  }
}

//this function will generate a new set of pictures for the click event
function generateNewImages(){
  pictureGenerator();
  pictureOne.name = pictureArray[picturesOnScreenIndex[0]].name;
  pictureTwo.name = pictureArray[picturesOnScreenIndex[1]].name;
  pictureThree.name = pictureArray[picturesOnScreenIndex[2]].name;
  pictureOne.src = pictureArray[picturesOnScreenIndex[0]].path;
  pictureTwo.src = pictureArray[picturesOnScreenIndex[1]].path;
  pictureThree.src = pictureArray[picturesOnScreenIndex[2]].path;
  pictureArray[picturesOnScreenIndex[0]].numberOfTimesShowned++;
  pictureArray[picturesOnScreenIndex[1]].numberOfTimesShowned++;
  pictureArray[picturesOnScreenIndex[2]].numberOfTimesShowned++;
}
function countClicks(event) {

  totalNumberOfClicks += 1;
  for(var i = 0; i < pictureArray.length; i++){
    if(event.target.name === pictureArray[i].name)
      pictureArray[i].numberOfTimesClicked++;
      // console.log(pictureArray[i].numberOfTimesClicked);
  }
  if (totalNumberOfClicks < 25){
    generateNewImages();
    console.log('clicked'  + pictureArray[0].numberOfTimesClicked);
    console.log('showned' + pictureArray[0].numberOfTimesShowned);
  }
  // console.log(pictureArray[picturesOnScreenIndex[0]].numberOfTimesClicked);
}


//variables needed
var totalNumberOfClicks = 0;
var picturesOnScreenIndex = [];
var generatePictures;
var pictureOne = document.getElementById('image-one');
var pictureTwo = document.getElementById('image-two');
var pictureThree = document.getElementById('image-three');
pictureOne.addEventListener('click', countClicks);
pictureTwo.addEventListener('click', countClicks);
pictureThree.addEventListener('click', countClicks);
startImages();
