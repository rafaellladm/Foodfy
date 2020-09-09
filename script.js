// Identifica modal
const modalOverlay = document.querySelector('.modal');

// ativar modal
const cards = document.querySelectorAll('.card')
console.log(cards)

for (let card of cards) {
    card.addEventListener('click', function(){
        modalOverlay.classList.add('active')
    })
}

// desativa modal
document.querySelector('.close-modal').addEventListener('click', function(){
    modalOverlay.classList.remove('active')
})