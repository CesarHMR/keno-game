const buyPopup = document.querySelector('#fade-popup')
const cardText = document.querySelector('#cards-amount')
const playAmount = [1, 5, 20, 50]
const totalPrice = [1, 5, 19, 45]
let buyButtons = []
let cardsAmount = 0

b = document.querySelectorAll('#buy-buttons .buy-button')
for (let index = 0; index < 4; index++) {
    buyButtons[index] = b[index]
    buyButtons[index].addEventListener('click', function(){
        BuyButton(index)
    })
}

function BuyButton(index){
    BuyCards(index)
    UpdateBalanceText()
    UpdateCardText()
    buyPopup.classList.add('hide')
}

function BuyCards(index){
    balance -= totalPrice[index]
    cardsAmount = playAmount[index]
}

function UpdateCardText(){
    cardText.textContent = cardsAmount > 0 ? cardsAmount : ''
}