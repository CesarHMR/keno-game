const playButton = document.querySelector('#play-button')
const randomButton = document.querySelector('#random-button')
const clearButton = document.querySelector('#clear-button')

playButton.addEventListener('click', function(){

    if(cardsAmount == 0){
        buyPopup.classList.remove("hide")
    }
    else{
        PlayButton()
    }
})

randomButton.addEventListener('click', function(){
    selectedNumbers = GetRandomNumbersFromPool(10)
    drawnNumbers = []
    MarkCard()
    MarkPaytable()
})

clearButton.addEventListener('click', function(){
    selectedNumbers = []
    drawnNumbers = []
    MarkCard()
    MarkPaytable()
})

function PlayGames(){
    if(selectedNumbers.length == 0)
        selectedNumbers = GetRandomNumbersFromPool(10)

    drawnNumbers = GetRandomNumbersFromPool(10)
    MarkCard()
    MarkPaytable()
}