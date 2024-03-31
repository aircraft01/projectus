document.addEventListener('DOMContentLoaded', function () {
  const starsContainer = document.querySelector('.stars');
  const questionPopup = document.getElementById('questionPopup');
  const yesButton = document.getElementById('yesButton');
  const cards = document.querySelectorAll('.memory-card');
  
  let currentStar = null;
  let currentCard = null;

  const content = document.querySelector('.content');

  content.addEventListener('scroll', function () {
    // Adjust the background position based on content scroll position
    const scrollTop = content.scrollTop;
    const scrollLeft = content.scrollLeft;
    document.querySelector('.background').style.backgroundPosition = `-${scrollLeft}px -${scrollTop}px`;
  });

  const searchTerm = this.value.toLowerCase();
  const memoryCards = document.querySelectorAll('.memory-card');

  memoryCards.forEach(function(card) {
    const keywords = card.getAttribute('data-keywords').toLowerCase();
    if (keywords.includes(searchTerm)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });

  cards.forEach(card => {
    card.addEventListener('click', function () {
      if (currentCard !== card) {
        currentCard = card;
        const rect = card.getBoundingClientRect();
        showQuestionPopup(rect.left, rect.top);
      } else {
        const rect = card.getBoundingClientRect();
        showQuestionPopup(rect.left, rect.top);
      }
    });
  });

  setInterval(createStar, 2000);
});



