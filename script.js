document.addEventListener('DOMContentLoaded', function () {
  const starsContainer = document.querySelector('.stars');
  const questionPopup = document.getElementById('questionPopup');
  const yesButton = document.getElementById('yesButton');
  let currentStar = null;

  function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    const startPosition = Math.random() * (window.innerWidth - 20); // Adjusted for star width
    star.style.left = startPosition + 'px';
    starsContainer.appendChild(star);

    star.addEventListener('click', () => {
      if (currentStar !== star) { // If this star was not the previously clicked one
        clearInterval(interval);
        const rect = star.getBoundingClientRect();
        showQuestionPopup(rect.left, rect.top); // Updated to use getBoundingClientRect to get star position
        currentStar = star;
        animateStarToBottom(star);
      } else {
        // If the same star is clicked again, show the question popup again
        const rect = star.getBoundingClientRect();
        showQuestionPopup(rect.left, rect.top); // Updated to use getBoundingClientRect to get star position
      }
    });

    const interval = setInterval(() => {
      const currentBottom = parseInt(getComputedStyle(star).bottom);
      if (currentBottom >= 0) { // Reached bottom of the page
        clearInterval(interval);
      } else {
        star.style.bottom = (currentBottom + 1) + 'px';
      }
    }, 10);
  }

  function showQuestionPopup(x, y) {
    questionPopup.style.display = 'block';
    questionPopup.style.left = x + 'px';
    questionPopup.style.top = (y - questionPopup.offsetHeight) + 'px'; // Adjusted to position above the star
  }

  yesButton.addEventListener('click', function () {
    hideQuestionPopup();
    navigateToSubpage();
  });

  document.addEventListener('click', function (event) {
    if (event.target === document.body) {
      hideQuestionPopup();
      currentStar = null; // Reset currentStar when clicking outside
    }
  });

  setInterval(createStar, 2000);
});

function navigateToSubpage() {
  window.location.href = "subpage.html"; 
}

function hideQuestionPopup() {
  const questionPopup = document.getElementById('questionPopup');
  questionPopup.style.display = 'none';
}

function animateStarToBottom(star) {
  const interval = setInterval(() => {
    const currentBottom = parseInt(getComputedStyle(star).bottom);
    if (currentBottom >= 0) { // Reached bottom of the page
      clearInterval(interval);
    } else {
      star.style.bottom = (currentBottom + 1) + 'px';
    }
  }, 10);
}
