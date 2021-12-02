soundsData = [
    {
        id: 'click',
        src: './sounds/default_button.mp3',
        amount: 4
    },
    {
        id: 'hover',
        src: './sounds/volume_bar_rise.mp3',
        amount: 15
    }
]

class AudioManager {

    soundsLibrary
    currentVolume = 80
    oldVolume = 80

    consoleOn = false

    PlaySound(id) {
        let soundArray = this.soundsLibrary.find(element => element.id == id).list
        let audio = soundArray.shift()
        soundArray.push(audio)
        audio.volume = this.currentVolume / 100
        audio.play()

        if (this.consoleOn)
            console.log(`Playing ${id} audio!`)
    }

    Mute() {

        if (this.currentVolume == 0) {

            if (this.oldVolume == 0) {
                this.oldVolume = 50
            }

            this.currentVolume = this.oldVolume
            this.oldVolume = 0
        }
        else {

            this.oldVolume = this.currentVolume
            this.currentVolume = 0

        }
    }

    SetVolume(value) {
        value = clamp(value, 0, 100)
        this.currentVolume = value
    }

    SetConsole(on){
        this.consoleOn = on
        console.log(`Audio Manager console: ${on}`)
    }

    constructor(soundsData, amount) {
        this.soundsLibrary = soundsData.map(function (data) {

            let sounds = []

            for (let index = 0; index < data.amount; index++) {
                let audio = new Audio(data.src)
                audio.load()
                sounds.push(audio)
            }

            let obj = {
                id: data.id,
                list: sounds
            }

            return obj
        })
    }
}

let audioManager = new AudioManager(soundsData)