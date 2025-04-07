
// Make text editable on click
document.addEventListener('DOMContentLoaded', function() {
  const scene = document.querySelector('a-scene');
  
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
  });
});

// Hover effects
AFRAME.registerComponent('color-change', {
  init: function () {
    var el = this.el;
    el.addEventListener('mouseenter', function () {
      el.setAttribute('color', '#FF9999');
    });
    el.addEventListener('mouseleave', function () {
      el.setAttribute('color', '#4CC3D9');
    });
  }
});
