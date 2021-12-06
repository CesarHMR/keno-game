let paytableElements = []
let paytableTextValue = []
const paytableMultiplier = [0.1, 0.5, 6, 17, 25, 35, 50, 250, 500, 10000]

let p = document.querySelectorAll('.paytable')
let pt = document.querySelectorAll('.paytable .paytable-prize')

for (let index = 0; index < 10; index++) {
    paytableElements[index] = p[index]
    paytableTextValue[index] = pt[index]
}
paytableElements.reverse()
paytableTextValue.reverse()

function MarkPaytable(showNumbers){
    let win = GetWinNumbers(showNumbers).length
    //console.log(win)

    for (let index = 0; index < paytableElements.length; index++) {
        
        paytableElements[index].classList.remove('win')
    }
    
    if(win == 0){
        return
    }else{
        win--
    }
    
    paytableElements[win].classList.add('win')
}

function UpdatePaytableValue(){
    for (let index = 0; index < 10; index++) {
        
        paytableTextValue[index].textContent = (betAmount * paytableMultiplier[index]).toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

    }
}

UpdatePaytableValue()