import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let currentPlayer = 'circle';
let button = '_';

document.querySelector('.restart').addEventListener('click', (event) => {
  const odpovedUzivatele = confirm('Opravdu chceš začít znovu?');
  if (!odpovedUzivatele) {
    event.preventDefault();
  }
});

const buttons = document.querySelectorAll('button');
const herniPole = Array.from(buttons).map((button) => '_');

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
      setTimeout(() => {
        alert(`Vyhrál hráč se symbolem ${vitez}!`);
        location.reload();
      }, 300);
    } else if (vitez === 'tie') {
      setTimeout(() => {
        alert(`Hra skončila nerozhodné.`);
        location.reload();
      }, 300);
    } else if (currentPlayer === 'cross') {
      fetch('https://piskvorky.czechitas-podklady.cz/api/suggest-next-move', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          board: herniPole,
          player: 'x',
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          const { x, y } = data.position;
          const index = x + y * 10;
          buttons[index].click();
        });
    }
  };

  button.addEventListener('click', handleClick);
});
