let grid = document.querySelector('#grid')
let numbersGrid = []

for (let index = 0; index < 100; index++) {
    
    let square = document.createElement('div')
    square.textContent = index
    square.classList.add('grid-number')
    grid.appendChild(square)
    numbersGrid[index] = square;
}

numbersGrid.forEach(element => {
    element.addEventListener('click', function(){

        let index = selectedNumbers.indexOf(parseInt(element.textContent));
        
        if(index != -1) {
            selectedNumbers.splice(index, 1);
        }
        else{
            if(selectedNumbers.length < 10){
                selectedNumbers.push(parseInt(element.textContent))
            }    
        }

        MarkCard()
    })
});