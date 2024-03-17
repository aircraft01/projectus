document.addEventListener('DOMContentLoaded', function () {
  const stars = document.querySelectorAll('.star');
  
  stars.forEach((star, index) => {
    // Randomize initial position
    const randomDelay = Math.random() * 5; // Random delay for animation start
    const randomDuration = (Math.random() * 5) + 5; // Random duration for animation
    star.style.animationDelay = `${randomDelay}s`;
    star.style.animationDuration = `${randomDuration}s`;
    star.style.left = `${Math.random() * 100}%`; // Random horizontal position

    star.addEventListener('animationiteration', function() {
      const randomDelay = Math.random() * 5; // Random delay for animation start
      const randomDuration = (Math.random() * 5) + 5; // Random duration for animation
      star.style.animationDelay = `${randomDelay}s`;
      star.style.animationDuration = `${randomDuration}s`;
    });

    star.addEventListener('click', function () {
      star.style.animationPlayState = 'paused';
      const button = document.createElement('button');
      button.innerText = 'Question';
      button.addEventListener('click', function () {
        window.location.href = 'star.html'; // Replace 'star.html' with the desired subpage URL
      });
      star.appendChild(button);
    });

    star.addEventListener('animationend', function() {
      this.remove(); // Remove the star when animation ends
    });
  });
});
