document.addEventListener('DOMContentLoaded', function () {
  const starsContainer = document.querySelector('.stars');

  // Define fixed animation durations and delays for each star
  const animationDurations = [7, 9, 6, 8, 10]; // in seconds
  const animationDelays = [0, 1, 2, 3, 4]; // in seconds

  // Create stars dynamically
  for (let i = 0; i < 5; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.animationDuration = `${animationDurations[i % animationDurations.length]}s`;
    star.style.animationDelay = `${animationDelays[i % animationDelays.length]}s`;
    starsContainer.appendChild(star);

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
  }
});

