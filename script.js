document.addEventListener('DOMContentLoaded', function () {
  const stars = document.querySelectorAll('.star');
  
  stars.forEach((star, index) => {
    // Randomize animation duration and delay
    const randomDuration = Math.random() * 5 + 5; // Random duration between 5 and 10 seconds
    const randomDelay = Math.random() * 5; // Random delay between 0 and 5 seconds
    star.style.animationDuration = `${randomDuration}s`;
    star.style.animationDelay = `${randomDelay}s`;
    star.style.left = `${Math.random() * 100}%`; // Random horizontal position
    
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
