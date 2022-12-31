const savePeopleList = []
let loadingToSaveRegister
let saveRegisterButton

function otherFunction() {
    let id = Math.floor(Math.random() * 99999999999999)
    let name = document.querySelector('#name').value
    let ocupation = document.querySelector('#ocupation').value
    let contact = document.querySelector('#contact').value

    console.log(id, name, ocupation, contact)

    const myObjectOfPeople = {
        id: id,
        name: name,
        ocupation: ocupation,
        contact: contact
    }

    savePeopleList.push(myObjectOfPeople)
    console.log(savePeopleList)

    document.querySelector('#name').value = ""
    document.querySelector('#ocupation').value = ""
    document.querySelector('#contact').value = ""

    let registerPeopleContainer = document.querySelector('.registerPeopleContainer')

    let card = document.createElement('div')
    card.classList.add('card')
    registerPeopleContainer.appendChild(card)

    let userIdentify = document.createElement('i')
    userIdentify.classList.add('fa')
    userIdentify.classList.add('fa-address-book-o')
    card.appendChild(userIdentify)

    let nameOfRegister = document.createElement('span')
    nameOfRegister.innerText = myObjectOfPeople['name']
    card.appendChild(nameOfRegister)

    let nameOfOcupation = document.createElement('span')
    nameOfOcupation.innerText = myObjectOfPeople['ocupation']
    card.appendChild(nameOfOcupation)

    let valueOfContact = document.createElement('span')
    valueOfContact.innerText = myObjectOfPeople['contact']
    card.appendChild(valueOfContact)

    loadingToSaveRegister.style.display = "none"
    saveRegisterButton.style.display = "block"
}

function handleSavePeople() {
    let name = document.querySelector('#name').value
    let ocupation = document.querySelector('#ocupation').value
    let contact = document.querySelector('#contact').value

    if (!name) {
        alert("Por gentileza, insira um nome válido!")
        return
    }

    if (!ocupation) {
        alert("Por gentileza, insira uma ocupação válida!")
        return
    }

    if (!contact) {
        alert("Por gentileza, insira um contato válido!")
        return
    }

    saveRegisterButton = document.querySelector('#saveRegisterButton')
    saveRegisterButton.style.display = "none"

    loadingToSaveRegister = document.querySelector('.loading')
    loadingToSaveRegister.style.display = "block"

    setTimeout(otherFunction, 1500);
}