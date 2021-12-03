const playButton = document.querySelector('#play-button')
const randomButton = document.querySelector('#random-button')

playButton.addEventListener('click', function(){
    PlayButton()
})

randomButton.addEventListener('click', function(){
    selectedNumbers = GetRandomNumbersFromPool(10)
    drawnNumbers = []
    MarkCard()
    MarkPaytable()
})