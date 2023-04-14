let currentPlayer = 'circle';

const handleClick = (event) => {
  if (currentPlayer === 'circle') {
    event.target.classList.add('board__field--circle');
    currentPlayer = 'cross';
    document.querySelector('.player').classList.remove('board__field--circle');
    document.querySelector('.player').classList.add('board__field--cross');
  } else {
    event.target.classList.add('board__field--cross');
    currentPlayer = 'circle';
    document.querySelector('.player').classList.remove('board__field--cross');
    document.querySelector('.player').classList.add('board__field--circle');
  }

  event.target.disabled = true;
};

document.querySelector('.restart').addEventListener('click', (event) => {
  const odpovedUzivatele = confirm('Opravdu chceš začít znovu?');
  if (!odpovedUzivatele) {
    event.preventDefault();
  }
});

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', handleClick);
});
