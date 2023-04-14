import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let currentPlayer = 'circle';
let button = '_';

document.querySelector('.restart').addEventListener('click', (event) => {
  const odpovedUzivatele = confirm('Opravdu chceš začít znovu?');
  if (!odpovedUzivatele) {
    event.preventDefault();
  }
});

const herniPole = [
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
];

const buttons = document.querySelectorAll('button');
buttons.forEach((button, index) => {
  const handleClick = (event) => {
    if (currentPlayer === 'circle') {
      herniPole[index] = 'o';
      event.target.classList.add('board__field--circle');
      currentPlayer = 'cross';
      document
        .querySelector('.player')
        .classList.remove('board__field--circle');
      document.querySelector('.player').classList.add('board__field--cross');
    } else {
      herniPole[index] = 'x';
      event.target.classList.add('board__field--cross');
      currentPlayer = 'circle';
      document.querySelector('.player').classList.remove('board__field--cross');
      document.querySelector('.player').classList.add('board__field--circle');
    }
    event.target.disabled = true;
    const vitez = findWinner(herniPole);
    if (vitez === 'o' || vitez === 'x') {
      alert(`Vyhrál hráč se symbolem ${vitez}!`);
      location.reload();
    }
  };

  button.addEventListener('click', handleClick);
});
