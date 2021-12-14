const playButton = document.querySelector('#play-button')
const randomButton = document.querySelector('#random-button')
const clearButton = document.querySelector('#clear-button')
const playIcon = document.querySelector('#play-button img')

playButton.addEventListener('click', function(){

    if(cardsAmount == 0){
        buyPopup.classList.remove("hide")
    }
    else{
        PlayButton()
    }

    playIcon.src = isPlaying ? './images/stop_icon.png' : './images/play_icon.png'
})

randomButton.addEventListener('click', function(){
    if(isPlaying)
    return

    selectedNumbers = GetRandomNumbersFromPool(10)
    drawnNumbers = []
    MarkCard()
    MarkPaytable()
})

clearButton.addEventListener('click', function(){
    if(isPlaying)
    return

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