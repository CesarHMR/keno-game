let grid = document.querySelector('#grid')

for (let index = 0; index < 100; index++) {
    
    let square = document.createElement('div')
    square.textContent = index + 1
    grid.appendChild(square)
}