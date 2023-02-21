// API Lucas Delivery Treino
// https://deliveryljg.herokuapp.com

/* ------------------------------------------------------------------------------------------------------------- */


// Menu Mobile
function handleOpenMobileMenu() {
    let openMobileMenuButton = document.querySelector("#mobileMenu")
    openMobileMenuButton.style.display = "flex"
}

function handleCloseMobileMenu() {
    let openMobileMenuButton = document.querySelector("#mobileMenu")
    openMobileMenuButton.style.display = "none"
}

/* ------------------------------------------------------------------------------------------------------------- */


// Check Search Input
let searchInput = document.querySelector("#searchInput")

searchInput.onkeyup = function () {
    checkingSearchInputValue()
}

const InputValue = []

function checkingSearchInputValue() {
    let currentValueOnInput = document.querySelector("#searchInput").value

    InputValue.push(currentValueOnInput)

    if (InputValue[3]) {
        document.querySelector("#searchInputContainer").childNodes[3].style.cursor =
            "pointer"
    } else if (!InputValue[3]) {
        document.querySelector("#searchInputContainer").childNodes[3].style.cursor =
            "not-allowed"
    }
}

/* ------------------------------------------------------------------------------------------------------------- */


// Get HighLights API products
const highLights = "http://localhost:3002/highlights"

async function getHighLightsProducts() {
    let response = await fetch(highLights)
    let products = await response.json()

    let highLightCard = ""

    for (let product of products) {
        highLightCard += `
            <div id="card">
                <div id="productImage">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div id="productInfos">
                    <span id="productName">${product.name}</span>
                    <p>${product.description}</p>
                    <div id="prices">
                        <span>${"R$" + product.price.toFixed(2).replace(".", ",")
            }</span>
                        <span>${"R$" + product.promotion.toFixed(2).replace(".", ",")
            }</span>
                    </div>
                </div>
            </div>
        `
    }

    document.querySelector("#lineOfHighLightCards").innerHTML = highLightCard
}

getHighLightsProducts()

/* ------------------------------------------------------------------------------------------------------------- */


// Get Sneacks API products
const sneacks = "http://localhost:3002/sneacks"

async function getSneacksProducts() {
    let response = await fetch(sneacks)
    let products = await response.json()

    let sneacksCard = ""

    for (let product of products) {
        sneacksCard += `
            <div id="card">
                <div id="productImage">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div id="productInfos">
                    <span id="productName">${product.name}</span>
                    <p>${product.description}</p>
                    <div id="prices">
                        <span>${"R$" + product.price.toFixed(2).replace(".", ",")
            }</span>
                        <span>${"R$" + product.promotion.toFixed(2).replace(".", ",")
            }</span>
                    </div>
                </div>
            </div>
        `
    }

    document.querySelector("#lineOfSneacksCards").innerHTML = sneacksCard
}

getSneacksProducts()

/* ------------------------------------------------------------------------------------------------------------- */


// Get Drinks API products
const drinks = "http://localhost:3002/drinks"

async function getDrinksProducts() {
    let response = await fetch(drinks)
    let products = await response.json()

    let drinksCard = ""

    for (let product of products) {
        drinksCard += `
            <div id="card">
                <div id="productImage">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div id="productInfos">
                    <span id="productName">${product.name}</span>
                    <p>${product.description}</p>
                    <div id="prices">
                        <span>${"R$" + product.price.toFixed(2).replace(".", ",")
            }</span>
                        <span>${"R$" + product.promotion.toFixed(2).replace(".", ",")
            }</span>
                    </div>
                </div>
            </div>
        `
    }

    document.querySelector("#lineOfDrinksCards").innerHTML = drinksCard
}

getDrinksProducts()

/* ------------------------------------------------------------------------------------------------------------- */


// Modais
const myAccountContainer = document.querySelector('#myAccountContainer')
const createAnAccountModal = document.querySelector('#createAnAccountContainer')
const moreDetailsContainer = document.querySelector('#moreDetailsContainer')

function handleOpenMyAccountModal() {
    myAccountContainer.style.display = "flex"
}

function handleCloseMyAccountModal() {
    myAccountContainer.style.display = "none"
}

function handleOpenCreateAnAccountModal() {
    handleCloseMyAccountModal()
    createAnAccountModal.style.display = "flex"
}

function handleCloseCreateAnAccount() {
    createAnAccountModal.style.display = "none"
}

function handleCloseCreateAnAccountAndOpenLoginModal() {
    createAnAccountModal.style.display = "none"
    myAccountContainer.style.display = "flex"
}

function handleCloseMoreDetailsModal() {
    moreDetailsContainer.style.display = "none"
}

function handleOpenMoreDetailsModal() {
    moreDetailsContainer.style.display = "flex"
}