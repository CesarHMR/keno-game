function MarkCard(){
    let index = 0
    numbersGrid.forEach(element => {
        element.classList.remove('number-selected')
        element.classList.remove('number-hit')

        if(selectedNumbers.filter(x => x == index).length > 0){
            element.classList.add('number-selected')
        }
    
        if(drawnNumbers.filter(x => x == index).length > 0){
            
            timeOutFunc = setTimeout(function () {

                element.classList.add('number-hit')

            }, (index + 1) * 100)
        }
        index++
    });
}
