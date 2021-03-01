'use strict';

let busMallArray = ['bag','banana','bathroom','boots','breakfast',
  'bubblegum','chair','cthulhu','dog-duck','dragon','pen','pet-sweep',
  'scissors','shark','sweep','tauntaun','unicorn','water-can','wine-glass'];


const imageSection = document.getElementById ( 'imageSection' );
const leftImage = document.getElementById( 'leftImage' );
const middleImage = document.getElementById( 'middleImage' );
const rightImage = document.getElementById( 'rightImage' );

let leftImgIndex = 0;
let middleImgIndex = 0;
let rightImgIndex = 0;
const clickCounter = 25;



function Bussmall( name ) {
  this.name = name;
  this.image = `./img/${name}.jpg`;
  this.clicks = 0;
  this.shown = 0;
  Bussmall.all.push( this );
}


Bussmall.all = [];
Bussmall.counter = 0;


for( let i = 0; i < busMallArray.length; i++ ) {
  new Bussmall( busMallArray[i] );
}





let left = 27;
let middle = 27;
let right = 27;

function render() {

  let leftIndex = randomNumber( 0, Bussmall.all.length - 1 );

  while( leftIndex === left || leftIndex === middle || leftIndex === right ){
    leftIndex = randomNumber( 0, Bussmall.all.length - 1 );
  }

  leftImage.src = Bussmall.all[leftIndex].image;
  leftImage.alt = Bussmall.all[leftIndex].name;
  leftImgIndex = leftIndex;

  let middleIndex;
  let rightIndex;


  rightIndex = randomNumber( 0, Bussmall.all.length - 1 );

  while( leftIndex === rightIndex || rightIndex === left || rightIndex === middle || rightIndex === right );
  { rightIndex = randomNumber( 0, Bussmall.all.length - 1 );
  }

  rightImage.src = Bussmall.all[rightIndex].image;
  rightImage.alt = Bussmall.all[rightIndex].name;
  rightImgIndex = rightIndex;



  middleIndex = randomNumber( 0, Bussmall.all.length - 1 );

  while ( middleIndex === leftIndex || middleIndex === rightIndex || middleIndex === left || middleIndex === middle || middleIndex === right );{
    middleIndex = randomNumber( 0, Bussmall.all.length - 1 );

  }

  middleImage.src = Bussmall.all[middleIndex].image;
  middleImage.alt = Bussmall.all[middleIndex].name;
  middleImgIndex = middleIndex;
  middle = middleIndex;






  Bussmall.all[leftIndex].shown++;
  Bussmall.all[middleIndex].shown++;
  Bussmall.all[rightIndex].shown++;

  left = leftIndex;
  right = rightIndex;

}






// function render() {
//   let leftIndex = randomNumber( 0, Bussmall.all.length - 1 );
//   leftImage.src = Bussmall.all[leftIndex].image;
//   leftImage.alt = Bussmall.all[leftIndex].name;

//   let middleIndex;
//   let rightIndex;

//   do {
//     rightIndex = randomNumber( 0, Bussmall.all.length - 1 );
//   } while( leftIndex === rightIndex );

//   rightImage.src = Bussmall.all[rightIndex].image;
//   rightImage.alt = Bussmall.all[rightIndex].name;


//   do{
//     middleIndex = randomNumber( 0, Bussmall.all.length - 1 );
//   } while ( middleIndex === leftIndex || middleIndex === rightIndex );

//   middleImage.src = Bussmall.all[middleIndex].image;
//   middleImage.alt = Bussmall.all[middleIndex].name;


//   Bussmall.all[leftIndex].shown++;
//   Bussmall.all[middleIndex].shown++;
//   Bussmall.all[rightIndex].shown++;


//   leftImgIndex = leftIndex;
//   rightImgIndex = rightIndex;
//   middleImgIndex = middleIndex;

// }




function handelClick( event ) {

  if( Bussmall.counter < clickCounter ) {
    const clickedElement = event.target;
    if( clickedElement.id === 'leftImage' || clickedElement.id === 'middleImage' || clickedElement.id === 'rightImage' ) {
      if( clickedElement.id === 'leftImage' ) {
        Bussmall.all[leftImgIndex].clicks++;
      }

      if( clickedElement.id === 'rightImage' ) {
        Bussmall.all[rightImgIndex].clicks++;
      }

      if( clickedElement.id === 'middleImage' ) {
        Bussmall.all[middleImgIndex].clicks++;
      }



      Bussmall.counter++;
      render();

      console.log( Bussmall.all );
    }
  }
  // else {
  //   renderChart();
  // }
}


imageSection.addEventListener( 'click', handelClick );



function randomNumber( min, max ) {
  return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
}

render();





const Button = document.getElementById( 'button' );
Button.addEventListener ( 'click', function (){

  const result = document.getElementById( 'results' );
  const ulElement = document.createElement( 'ul' );
  result.appendChild( ulElement );
  for ( let i = 0 ; i < busMallArray.length ; i++ )
  {
    const liElement = document.createElement( 'li' );
    ulElement.appendChild( liElement );
    liElement.textContent = `the ${ busMallArray[i]} image was shown ${Bussmall.all[i].shown} times, and it was clicked ${Bussmall.all[i].clicks} times`;
  }
}
);








const chartButton = document.getElementById( 'chartbutton' );
chartButton.addEventListener ( 'click', function (){
  let nameArray = [];
  let clicksArray = [];
  let showsArray = [];

  for ( let i = 0; i < Bussmall.all.length; i++ ) {
    nameArray.push ( Bussmall.all[i].name );
    clicksArray.push ( Bussmall.all[i].clicks );
    showsArray.push( Bussmall.all[i].shown );
  }

  let ctx = document.getElementById( 'myChart' ).getContext( '2d' );
  new Chart ( ctx, {
    type: 'bar',
    data: {
      labels: nameArray,
      datasets: [{
        label: 'Votes',
        data: clicksArray,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
          ,
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)'

        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
          ,
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)'
        ],
        borderWidth: 1
      },{
        label: 'Shows',
        data: showsArray,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
          ,
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
          ,
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)'
        ],
        borderWidth: 1}
      ]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  } );
} );















