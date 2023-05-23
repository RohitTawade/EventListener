  // Project 1: Onclick Event
  const onclickButton = document.getElementById('onclick-button');
  const onclickOutput = document.getElementById('onclick-output');

  onclickButton.addEventListener('click', () => {
      onclickOutput.textContent = 'Button clicked!';
  });

  // Project 2: Doubleclick Event
  const doubleclickButton = document.getElementById('doubleclick-button');
  const doubleclickOutput = document.getElementById('doubleclick-output');

  doubleclickButton.addEventListener('dblclick', () => {
      doubleclickOutput.textContent = 'Button double-clicked!';
  });

  // Project 3: Mouseover Event
  const mouseoverDiv = document.getElementById('mouseover-div');
  const mouseoverOutput = document.getElementById('mouseover-output');

  mouseoverDiv.addEventListener('mouseover', () => {
      mouseoverOutput.textContent = 'Mouse over the div!';
  });

  // Project 4: Mouseout Event
  const mouseoutDiv = document.getElementById('mouseout-div');
  const mouseoutOutput = document.getElementById('mouseout-output');

  mouseoutDiv.addEventListener('mouseout', () => {
      mouseoutOutput.textContent = 'Mouse out of the div!';
  });

  // Project 5: Keypress Event
  const keypressInput = document.getElementById('keypress-input');
  const keypressOutput = document.getElementById('keypress-output');

  keypressInput.addEventListener('keypress', (event) => {
      keypressOutput.textContent = `Key pressed: ${event.key}`;
  });

  // Project 6: Keydown and Keyup Events
  const keydownKeyupInput = document.getElementById('keydown-keyup-input');
  const keydownOutput = document.getElementById('keydown-output');
  const keyupOutput = document.getElementById('keyup-output');

  keydownKeyupInput.addEventListener('keydown', () => {
      keydownOutput.textContent = 'Key is being held down...';
  });

  keydownKeyupInput.addEventListener('keyup', () => {
      keyupOutput.textContent = 'Key is released!';
  });