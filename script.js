'use strict';
const new_game = document.querySelector('.btn--new');
const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const permanentScorep1 = document.querySelector('.permanentScoreP1');
const permanentScorep2 = document.querySelector('.permanentScoreP2');
const tempScorep1 = document.querySelector('.tempScoreP1');
const tempScorep2 = document.querySelector('.tempScoreP2');
const zar_img = document.querySelector('.zar');
let oyuncular = ['oyuncu1', 'oyuncu2'];
let aktifOyuncu = oyuncular[0];
console.log(aktifOyuncu);
let tempP1 = parseInt(tempScorep1.innerHTML);
let tempP2 = parseInt(tempScorep2.innerHTML);
let permP1 = parseInt(permanentScorep1.innerHTML);
let permP2 = parseInt(permanentScorep2.innerHTML);
let randomNumber;
const maxPuan = 100;
roll.addEventListener('click', function () {
  winner();
  zarAt();
  // BİRİNCİ OYUNCU OYNUYOR
  if (aktifOyuncu === oyuncular[0]) {
    zar_img.src = `./img/dice-${randomNumber}.png`;
    tempP1 += randomNumber;
    tempScorep1.innerHTML = tempP1;

    if (randomNumber == 1) {
      tempP1 = 0;
      tempScorep1.innerHTML = tempP1;
      aktifOyuncu = oyuncular[1]; // 1. oyuncu zar 1 attığında 2. oyuncuya geçiyor
      changePlayer();
      console.log(aktifOyuncu);
    }
  } else if (aktifOyuncu == oyuncular[1]) {
    zar_img.src = `./img/dice-${randomNumber}.png`;
    tempP2 += randomNumber;
    tempScorep2.innerHTML = tempP2;

    if (randomNumber == 1) {
      tempP2 = 0;
      tempScorep2.innerHTML = tempP2;
      aktifOyuncu = oyuncular[0]; // 2. oyuncu zar 1 attığında 1. oyuncuya geçiyor
      changePlayer();
      console.log(aktifOyuncu);
    }
  }
});

function zarAt() {
  randomNumber = Math.trunc(Math.random() * 6) + 1; // Her tıklamada yeni bir sayı üretir
  zar_img.src = `./img/dice-${randomNumber}.png`;
  zar_img.classList.remove('hidden');
  console.log(randomNumber);
}

hold.addEventListener('click', function () {
  if (aktifOyuncu == oyuncular[0]) {
    permP1 += tempP1;
    permanentScorep1.innerHTML = permP1;
    tempP1 = 0;
    tempScorep1.innerHTML = tempP1;
    aktifOyuncu = oyuncular[1]; // Sıra 2. oyuncuya geçiyor
    changePlayer();
    console.log(aktifOyuncu);
  } else if (aktifOyuncu == oyuncular[1]) {
    permP2 += tempP2;
    permanentScorep2.innerHTML = permP2;
    tempP2 = 0;
    tempScorep2.innerHTML = tempP2;
    aktifOyuncu = oyuncular[0]; // Sıra 1. oyuncuya geçiyor
    changePlayer();
    console.log(aktifOyuncu);
  }
  winner();
});
new_game.addEventListener('click', function () {
  reset();
});
function winner() {
  if (permP1 >= maxPuan) {
    window.alert('PLAYER 1 WİNNER!!');
    reset();
  } else if (permP2 >= maxPuan) {
    window.alert('PLAYER 2 WİNNER!!');
    reset();
  }
}
function reset() {
  zar_img.classList.add('hidden');
  permanentScorep1.innerHTML = 0;
  permanentScorep2.innerHTML = 0;
  tempScorep1.innerHTML = 0;
  tempScorep2.innerHTML = 0;
}
function changePlayer() {
  if (aktifOyuncu == oyuncular[0]) {
    document.querySelector('#player2').style.backgroundColor = '#f4bdcc';
    document.querySelector('#player1').style.backgroundColor = '#c7365f';
  } else if (aktifOyuncu == oyuncular[1]) {
    document.querySelector('#player1').style.backgroundColor = '#f4bdcc';
    document.querySelector('#player2').style.backgroundColor = '#c7365f';
  }
}
