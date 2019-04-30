const init = () => {
  const field_position = document.getElementById('position');
  const btnResult = document.getElementById('btn_result');

  // Add event listener for calc button
  btnResult.addEventListener('click', (e) => {
    e.preventDefault();
  });
};

init();
