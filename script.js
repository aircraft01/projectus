document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.memory-card');
  let currentCard = null;

  const content = document.querySelector('.content');
  const searchInput = document.getElementById('searchInput');

  content.addEventListener('scroll', function () {
    const scrollTop = content.scrollTop;
    const scrollLeft = content.scrollLeft;
    document.querySelector('.background').style.backgroundPosition = `-${scrollLeft}px -${scrollTop}px`;
  });

  searchInput.addEventListener('input', filterCards);

  function filterCards() {
    const searchTerm = searchInput.value.toLowerCase();
    cards.forEach(card => {
      const keywords = card.getAttribute('data-keywords').toLowerCase();
      if (keywords.includes(searchTerm)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  cards.forEach(card => {
    card.addEventListener('click', toggleCard);
    card.addEventListener('touchstart', toggleCard);
  });

  function toggleCard(event) {
    const card = event.currentTarget;
    if (currentCard !== card) {
      currentCard = card;
      const rect = card.getBoundingClientRect();
      showQuestionPopup(rect.left, rect.top);
    } else {
      const rect = card.getBoundingClientRect();
      showQuestionPopup(rect.left, rect.top);
    }
  }

  setInterval(createStar, 2000);
});