function insertNumberOrOperator(number) {
    let insertNumbers = document.getElementById('displayNumbers').innerText
    document.getElementById('displayNumbers').innerText = insertNumbers + number
}

function clearDisplay() {
    let displayNumbers = document.getElementById('displayNumbers')
    let displayTotal = document.getElementById('displayTotal')

    displayNumbers.innerText = ""
    displayTotal.innerText = "Total"
}

function deleteCaracter() {
    let displayNumbers = document.getElementById('displayNumbers').innerText
    document.getElementById('displayNumbers').innerText = displayNumbers.substring(0, displayNumbers.length - 1)
}

function calculateDisplay() {
    let displayNumbers = document.getElementById('displayNumbers').innerText
    if (displayNumbers) {
        document.getElementById('displayTotal').innerText = eval(displayNumbers)
    }
}

function TurnOn() {
    let displayNumbers = document.getElementById('displayNumbers')
    let displayTotal = document.getElementById('displayTotal')

    displayNumbers.style.display = "flex"
    displayTotal.style.display = "flex"

    displayNumbers.innerText = ""
    displayTotal.innerText = "Total"
}

function TurnOff() {
    let displayNumbers = document.getElementById('displayNumbers')
    let displayTotal = document.getElementById('displayTotal')

    displayNumbers.style.display = "none"
    displayTotal.style.display = "none"
}