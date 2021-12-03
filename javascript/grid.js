let grid = document.querySelector('#grid')
let numbersGrid = []

for (let index = 0; index < 100; index++) {
    
    let square = document.createElement('div')
    square.textContent = index
    square.classList.add('grid-number')
    grid.appendChild(square)
    numbersGrid[index] = square;
}