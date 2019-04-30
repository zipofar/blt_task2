import build from './builder';

const init = () => {
  const fieldPosition = document.getElementById('position');
  const btnResult = document.getElementById('btn_result');

  // Add event listener for OK button
  btnResult.addEventListener('click', (e) => {
    e.preventDefault();
    const currentPosition = fieldPosition.value;
    alert(build(currentPosition).join(', '));
  });
};

init();
