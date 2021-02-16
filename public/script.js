// Identifica modal
const modalOverlay = document.querySelector('.modal');

// ativar modal
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener('click', function(){
        const cardId = card.getAttribute('id')
        window.location.href = `/receitas/${cardId}`
    })
}
