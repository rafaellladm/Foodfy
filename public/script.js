// enviar informações para nova pagina
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener('click', function(){
        const cardId = card.getAttribute('id')
        window.location.href = `/receitas/${cardId}`
        console.log(card)
    })
}

const buttons = document.querySelectorAll('.hide_show')

for (let button of buttons) {
    button.addEventListener('click', () => {
        const hide = button.getAttribute('id')

        if (document.querySelector(`.list_${hide}`).style.display == 'none') {
            document.querySelector(`.list_${hide}`).style.display = 'block'
            button.innerHTML = "ESCONDER"
        }else {
            document.querySelector(`.list_${hide}`).style.display = 'none'
            button.innerHTML = "MOSTRAR"
        }
    })
}