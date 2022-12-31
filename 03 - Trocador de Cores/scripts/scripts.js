// Escolha uma cor
function changeBackgroundColor() {

    let inputValue = document.getElementById('colors').value
    let cardBackground = document.getElementById('card')

    if (inputValue === 'blue') {
        cardBackground.style.backgroundColor = "blue"
    } else if (inputValue === 'yellow') {
        cardBackground.style.backgroundColor = "yellow"
    } else if (inputValue === 'green') {
        cardBackground.style.backgroundColor = "green"
    } else if (inputValue === 'red') {
        cardBackground.style.backgroundColor = "red"
    } else if (inputValue === 'black') {
        cardBackground.style.backgroundColor = "black"
    } else if (inputValue === 'none') {
        alert("Por gentileza, selecione uma das cores.")
        return
    }

}


// Botão Liga x Desliga
function changeBackgroundColorOfAllPage() {

    let bolinha = document.querySelector('.ball')
    bolinha.classList.toggle('ball-move')

    let fundoCard = document.querySelector('.content')
    fundoCard.classList.toggle('otherColor')

}