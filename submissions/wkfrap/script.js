// Make text editable on click
document.addEventListener('DOMContentLoaded', function() {
  const scene = document.querySelector('a-scene');
  const music = document.querySelector('a-sound');
  const musicButton = document.querySelector('#music-button');

  scene.addEventListener('loaded', function() {
    const boards = document.querySelectorAll('.interactive');
    const emailText = document.querySelector('#email-text');

    boards.forEach(board => {
      board.addEventListener('click', function() {
        const currentText = this.getAttribute('text').value;
        const newText = prompt('Edit your content:', currentText);
        if (newText) {
          this.setAttribute('text', 'value', newText);
        }
      });
    });

    emailText.addEventListener('click', function() {
      const newEmail = prompt('Enter your email:', this.getAttribute('value'));
      if (newEmail) {
        this.setAttribute('value', newEmail);
      }
    });

    // Rotate the ocelot continuously
    const ocelot = document.querySelector('a-entity[rotation]');
    let rotationY = 45; // initial rotation
    function rotateOcelot() {
      rotationY += 1; // Increment rotation
      ocelot.setAttribute('rotation', `0 ${rotationY} 0`); // Update rotation
      requestAnimationFrame(rotateOcelot); // Call next frame
    }
    rotateOcelot(); // Start rotating

    // Music control with the button
    let isPlaying = true;
    musicButton.addEventListener('click', function() {
      if (isPlaying) {
        music.components.sound.pauseSound();
        this.querySelector('a-text').setAttribute('value', 'Play Music');
      } else {
        music.components.sound.playSound();
        this.querySelector('a-text').setAttribute('value', 'Pause Music');
      }
      isPlaying = !isPlaying;
    });
  });
});
// Make the arrow move up and down
const arrow = document.querySelector('a-entity[scale="2 2 2"]');
let arrowYPosition = -3;
let direction = 1; // 1 for up, -1 for down

function moveArrow() {
  arrowYPosition += direction * 0.01; // Adjust speed as needed
  if (arrowYPosition > -2.5) direction = -1; // Reverse direction if above max
  if (arrowYPosition < -3.5) direction = 1; // Reverse direction if below min
  arrow.setAttribute('position', `-7 ${arrowYPosition} -18`); // Update position
  requestAnimationFrame(moveArrow); // Call next frame
}
moveArrow(); // Start moving the arrow
