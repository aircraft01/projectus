document.addEventListener('DOMContentLoaded', function () {
  const starsContainer = document.querySelector('.stars');
  const questionPopup = document.getElementById('questionPopup');
  const yesButton = document.getElementById('yesButton');

  let currentStar = null; // Variable to keep track of the currently selected star

  // Define fixed animation durations and delays for each star
  const animationDurations = [7, 9, 6, 8, 10]; // in seconds
  const animationDelays = [0, 1, 2, 3, 4]; // in seconds

  // Create stars dynamically
  for (let i = 0; i < 5; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.animationDuration = `${animationDurations[i % animationDurations.length]}s`;
    star.style.animationDelay = `${animationDelays[i % animationDelays.length]}s`;
    starsContainer.appendChild(star);

    star.addEventListener('click', function () {
      if (currentStar !== star) {
        // If the user clicks on a new star
        if (currentStar) {
          // If there was a previously selected star, resume its animation
          currentStar.style.animationPlayState = 'running';
        }
        // Stop the animation of the clicked star
        star.style.animationPlayState = 'paused';
        // Set the current star to the clicked star
        currentStar = star;
        // Show the question popup
        showQuestionPopup();
      }
    });
  }

  // Function to show the question popup
  function showQuestionPopup() {
    questionPopup.style.display = 'block';
  }

  // Function to hide the question popup
  function hideQuestionPopup() {
    questionPopup.style.display = 'none';
  }

  // Event listener for the "Yes" button
  yesButton.addEventListener('click', function () {
    // Redirect to the subpage when the button is clicked
    navigateToSubpage();
  });

  // Event listener for clicks on the background
  document.addEventListener('click', function (event) {
    if (event.target === document.body) {
      // If the user clicks on the background, hide the question popup and resume the animation of the current star
      hideQuestionPopup();
      if (currentStar) {
        currentStar.style.animationPlayState = 'running';
      }
    }
  });
});

// Function to navigate to the subpage
function navigateToSubpage() {
  // Redirect to the desired subpage URL
  window.location.href = "subpage.html"; // Change "subpage.html" to the desired subpage URL
}
