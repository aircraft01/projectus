// Function to navigate to subpage
function navigateToSubpage() {
  window.location.href = "subpage.html"; // Change "subpage.html" to your subpage URL
}

// Create stars
function createStar() {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.left = Math.random() * window.innerWidth + 'px';
  document.body.appendChild(star);

  // Move star upwards
  const moveUp = () => {
    const currentBottom = parseInt(getComputedStyle(star).bottom);
    if (currentBottom > window.innerHeight) {
      clearInterval(interval);
      star.remove();
    } else {
      star.style.bottom = (currentBottom + 1) + 'px';
    }
  };

  // Add event listener to stop star and show question popup
  star.addEventListener('click', () => {
    clearInterval(interval);
    document.getElementById('questionPopup').style.display = 'block';
  });

  const interval = setInterval(moveUp, 10);
}

// Create stars periodically
setInterval(createStar, 2000); // Adjust timing as needed

