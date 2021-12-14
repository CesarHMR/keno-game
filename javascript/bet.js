let betAmount = 1
const betText = document.querySelector('#bet-text')
const plusButton = document.querySelector('#plus-button')
const minusButton = document.querySelector('#minus-button')

function ChangeBetByAmount(amount){
    if(isPlaying)
    return
    
    betAmount += amount
    betAmount = clamp(betAmount, 1, 50)
    UpdateBetText()
    UpdatePaytableValue()
}

function UpdateBetText(){
    betText.textContent = betAmount.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}

plusButton.addEventListener('click', function(){
    ChangeBetByAmount(1)
})
minusButton.addEventListener('click', function(){
    ChangeBetByAmount(-1)
})