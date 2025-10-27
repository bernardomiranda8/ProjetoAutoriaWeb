const cards = document.querySelectorAll('.card');
const selectedText = document.querySelector('.selected p');
const confirmBtn = document.getElementById('confirm-btn');
let selectedCard = null;

cards.forEach(card => {
  card.addEventListener('click', () => {
    cards.forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    selectedCard = card.getAttribute('data-card');
    selectedText.textContent = `Você escolheu: ${selectedCard}`;
    confirmBtn.disabled = false;
  });
});

confirmBtn.addEventListener('click', () => {
  if (selectedCard) {
    localStorage.setItem('cardSelecionado', selectedCard);
    window.location.href = 'inicio.html';
  }
});
