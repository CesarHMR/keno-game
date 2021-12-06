let selectedNumbers = []
let drawnNumbers = []

function Play(){
    if(selectedNumbers.length < 10){
        selectedNumbers = GetRandomNumbersFromPool(10)
    }

    drawnNumbers = GetRandomNumbersFromPool(10)
    MarkCard()
}

function GetRandomNumbersFromPool(amount){
    let selected = []
    let pool = GetNumberPool()
    
    for (let index = 0; index < amount; index++) {
        let rand = GetRandomIntFromInterval(pool[0], pool[pool.length - 1])
        pool.slice(rand, rand + 1)
        selected[index] = rand
    }

    return selected
}

function GetNumberPool(){
    let pool = []

    for (let index = 0; index < 100; index++) {
        pool[index] = index;        
    }

    return pool
}

function GetRandomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function GetWinNumbers(numbers){
    let win = selectedNumbers.filter(x => numbers.includes(x))
    return win
}

function MarkCard(){
    let showNumbers = []
    let aaa = []

    let index = 0
    numbersGrid.forEach(element => {
        element.classList.remove('number-selected')
        element.classList.remove('number-hit')

        if(selectedNumbers.filter(x => x == index).length > 0){
            element.classList.add('number-selected')
        }
    
        if(drawnNumbers.filter(x => x == index).length > 0){
            showNumbers.push(element)
        }
        index++
    });

    for (let i = 0; i < showNumbers.length; i++) {

        timeOutFunc = setTimeout(function () {
    
            showNumbers[i].classList.add('number-hit')
            aaa.push(parseInt(showNumbers[i].textContent))
            console.log(aaa)
            MarkPaytable(aaa)
    
        }, (i + 1) * 200)
        
    }
}