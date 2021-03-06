'use strict';

//Main Array for instances of Pictures
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

//Constructor for various pictures
function Picture(name, path) {
  this.name = name;
  this.path = path;
  this.percentage = 0;
  this.numberOfTimesShowned = 0;
  this.numberOfTimesClicked = 0;
}

//This function generate a unique random number to be used to generate picture indexes
function generateRandonImageIndex () {
  return Math.floor(Math.random()* pictureArray.length);
}

//This generates a random picture indexes to used to generate the three pictures
function pictureGenerator() {
  picturesOnScreenIndex = [];

  var pictureOne = generateRandonImageIndex();
  picturesOnScreenIndex.push(pictureOne);


  var pictureTwo = generateRandonImageIndex();
  while(pictureTwo === picturesOnScreenIndex[0]){
    pictureTwo = generateRandonImageIndex();
  }
  picturesOnScreenIndex.push(pictureTwo);

  var pictureThree = generateRandonImageIndex();
  while(pictureThree === picturesOnScreenIndex[0] || pictureThree === picturesOnScreenIndex[1]){
    pictureThree = generateRandonImageIndex();
  }
  picturesOnScreenIndex.push(pictureThree);

  return picturesOnScreenIndex;
}

//This function is called when the page is loaded the first time
function startImages() {
  if(totalNumberOfClicks === 0){
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
}

//this function will generate a new set of pictures for the click event
function generateNewImages(){
  var previousImageIndex = picturesOnScreenIndex;

  var newImageIndex  = pictureGenerator();

  while(previousImageIndex[0] === newImageIndex[0] || previousImageIndex[1] === newImageIndex[1] || previousImageIndex[2] === newImageIndex[2]){
    newImageIndex = pictureGenerator();
  }
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

//functoin to track total number of clicks per picture and call the function to generate a new set of pictures
function countClicks(event) {

  totalNumberOfClicks++;
  for(var i = 0; i < pictureArray.length; i++){
    if(event.target.name === pictureArray[i].name)
      pictureArray[i].numberOfTimesClicked++;
    pictureArray[i].percentage = Math.round(pictureArray[i].numberOfTimesClicked / pictureArray[i].numberOfTimesShowned * 100);
  }
  if (totalNumberOfClicks < 25){
    generateNewImages();

  } else {
    pictureBox.textContent = '';

    localStorage.pictureArray = JSON.stringify(pictureArray);
    createChart();
    createPercentageChart();

  }
}

//Function to Generate the Chart
function createChart() {
  pictureBox.style.backgroundColor = 'white';
  title = document.createElement('h4');
  title.textContent = 'Data for Number of times Showned vs Number of Times Click per Picture';
  pictureBox.appendChild(title);

  var chartBox = document.createElement('canvas');
  chartBox.width = pictureBox.clientWidth;
  chartBox.height = '500';
  pictureBox.appendChild(chartBox);

  var ctx = chartBox.getContext('2d');
  var data = {
    labels: [],
    datasets: [
      {
        label: 'Total Number Of Clicks',
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF'
        ],
        borderColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966C0',
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966C0',
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966C0',
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966C0'
        ],
        borderWidth: 1,
        data: [],
      },
      {
        label: 'Total Number of Displays',
        backgroundColor: [
          '#FF6386',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF'
        ],borderColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966C0',
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966C0',
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966C0',
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966C0'
        ],

        data: [],
      },
    ],
  };

  /*Here we are looping thur our pictureArray to get the value of each picture number of clicks and number of displays, and then we are pushing those values into our datasets array*/
  var ClicksAndShowsData;
  for(var i=0; i< pictureArray.length; i++){
    ClicksAndShowsData = pictureArray[i];
    data.labels.push(ClicksAndShowsData.name);
    data.datasets[0].data.push(ClicksAndShowsData.numberOfTimesClicked);
    data.datasets[1].data.push(ClicksAndShowsData.numberOfTimesShowned );
  }

  new Chart(ctx, {
    type: 'bar',
    data: data,
  });

}
//This function generates a graphs for percentages for each picture
function createPercentageChart() {
  percentagesChart = document.getElementById('percentages');
  percentagesChart.style.backgroundColor = 'white';
  title = document.createElement('h4');
  title.textContent = 'Percentage Of Clicks per Picture';
  percentagesChart.appendChild(title);

  var percentageBox = document.createElement('canvas');
  percentageBox.width = percentagesChart.clientWidth;
  percentageBox.height = '500';
  percentagesChart.appendChild(percentageBox);

  var ctx = percentageBox.getContext('2d');

  var data = {
    labels: [],
    datasets: [
      {
        label: 'Percentage # of Clicks',
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF'
        ],
        borderColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966C0',
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966C0',
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966C0',
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966C0'
        ],
        borderWidth: 1,
        data: [],
      },
    ],
  };

  /*Here we are looping thur our pictureArray to get the value of each picture number of clicks and number of displays, and then we are pushing those values into our datasets array*/
  var percentageData;
  for(var i=0; i< pictureArray.length; i++){
    percentageData = pictureArray[i];
    data.labels.push(percentageData.name);
    data.datasets[0].data.push(percentageData.percentage);
  }

  new Chart(ctx, {
    type: 'bar',
    data: data,
  });
}

//This seccion is to create the social media effect when the logo is clicked
function handleLogoClickEvent(){
  if(socialShow.className == 'social-media-hide'){
    socialShow.className = 'social-media-show';
    console.log('show');
  } else {
    socialShow.className = 'social-media-hide';
  }
}

var logoClick = document.getElementById('call-social-media');
var socialShow = document.getElementById('social-media');
logoClick.addEventListener('click', handleLogoClickEvent);

//variables needed for this to work
var percentagesChart;
var title;
var totalNumberOfClicks = 0;
var picturesOnScreenIndex = [];
var pictureBox = document.getElementById('pictureArrays');
var pictureOne = document.getElementById('image-one');
var pictureTwo = document.getElementById('image-two');
var pictureThree = document.getElementById('image-three');
pictureOne.addEventListener('click', countClicks);
pictureTwo.addEventListener('click', countClicks);
pictureThree.addEventListener('click', countClicks);

try {
  pictureArray = JSON.parse(localStorage.pictureArray);
} catch(error){
  console.log('error');
}
startImages();
