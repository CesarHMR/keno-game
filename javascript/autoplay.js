let playTime = 3000;
let isPlaying = false
let timeOutFunc

function PlayButton() {

    isPlaying ? StopPlay() : StartPlay()
}

function StartPlay() {
    Play()
    isPlaying = true

    if(cardsAmount > 0){

        cardsAmount--
        UpdateCardText()
    }
    
    
    timeOutFunc = setTimeout(function () {

        if (cardsAmount > 0){
            
            StartPlay()   
        }
        else {

            isPlaying = false
        }

    }, playTime)
}

function StopPlay() {

    isPlaying = false
    clearTimeout(timeOutFunc)
}

function SetPlayButtonSprite() {
    playImage.style.display = isPlaying ? "none" : "block"
    stopImage.style.display = isPlaying ? "block" : "none"
}