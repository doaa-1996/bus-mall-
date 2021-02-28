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


function render() {
  let leftIndex = randomNumber( 0, Bussmall.all.length - 1 );
  leftImage.src = Bussmall.all[leftIndex].image;
  leftImage.alt = Bussmall.all[leftIndex].name;
  leftImgIndex = leftIndex;

  let middleIndex;
  let rightIndex;

  do {
    rightIndex = randomNumber( 0, Bussmall.all.length - 1 );
  } while( leftIndex === rightIndex );

  rightImage.src = Bussmall.all[rightIndex].image;
  rightImage.alt = Bussmall.all[rightIndex].name;
  rightImgIndex = rightIndex;


  do{
    middleIndex = randomNumber( 0, Bussmall.all.length - 1 );
  } while ( middleIndex === leftIndex || middleIndex === rightIndex );

  middleImage.src = Bussmall.all[middleIndex].image;
  middleImage.alt = Bussmall.all[middleIndex].name;
  middleImgIndex = middleIndex;



  Bussmall.all[leftIndex].shown++;
  Bussmall.all[middleIndex].shown++;
  Bussmall.all[rightIndex].shown++;

}




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










