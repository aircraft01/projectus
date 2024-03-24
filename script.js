document.addEventListener('DOMContentLoaded', function () {
  const starsContainer = document.querySelector('.stars');
  const questionPopup = document.getElementById('questionPopup');
  const yesButton = document.getElementById('yesButton');
  let currentStar = null;

  function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = Math.random() * window.innerWidth + 'px';
    starsContainer.appendChild(star);

    const moveUp = () => {
      const currentBottom = parseInt(getComputedStyle(star).bottom);
      if (currentBottom > window.innerHeight) {
        clearInterval(interval);
        star.remove();
      } else {
        star.style.bottom = (currentBottom + 1) + 'px';
      }
    };

    star.addEventListener('click', () => {
      clearInterval(interval);
      showQuestionPopup(star.offsetLeft, star.offsetTop);
      currentStar = star;
    });

    const interval = setInterval(moveUp, 10);
  }

  function showQuestionPopup(x, y) {
    questionPopup.style.display = 'block';
    questionPopup.style.left = x + 'px';
    questionPopup.style.top = y + 'px';
  }

  yesButton.addEventListener('click', function () {
    hideQuestionPopup();
    navigateToSubpage();
  });

  document.addEventListener('click', function (event) {
    if (event.target === document.body) {
      hideQuestionPopup();
      if (currentStar) {
        currentStar.style.animationPlayState = 'running';
      }
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
