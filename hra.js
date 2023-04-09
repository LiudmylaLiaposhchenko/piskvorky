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
document
  .querySelector('button:nth-child(1)')
  .addEventListener('click', handleClick);
document
  .querySelector('button:nth-child(2)')
  .addEventListener('click', handleClick);
document
  .querySelector('button:nth-child(3)')
  .addEventListener('click', handleClick);
document
  .querySelector('button:nth-child(4)')
  .addEventListener('click', handleClick);
document
  .querySelector('button:nth-child(5)')
  .addEventListener('click', handleClick);
document
  .querySelector('button:nth-child(6)')
  .addEventListener('click', handleClick);
document
  .querySelector('button:nth-child(7)')
  .addEventListener('click', handleClick);
document
  .querySelector('button:nth-child(8)')
  .addEventListener('click', handleClick);
document
  .querySelector('button:nth-child(9)')
  .addEventListener('click', handleClick);
document
  .querySelector('button:nth-child(10)')
  .addEventListener('click', handleClick);
