document.addEventListener('DOMContentLoaded', function () {
  const stars = document.querySelectorAll('.star');

  stars.forEach(star => {
    const duration = Math.random() * 5 + 5; // Random duration for animation
    star.style.animationDuration = `${duration}s`;

    star.addEventListener('click', function () {
      star.style.animationPlayState = 'paused';
      const button = document.createElement('button');
      button.innerText = 'Question';
      button.addEventListener('click', function () {
        window.location.href = 'star.html'; // Replace 'star.html' with the desired subpage URL
      });
      const textbox = document.createElement('div');
      textbox.className = 'textbox';
      textbox.appendChild(button);
      star.appendChild(textbox);
    });
  });
});
