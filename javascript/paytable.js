let paytable = []
index = 0;
let p = document.getElementsByClassName('paytable')
Array.from(p).forEach(element => {
    paytable[index] = element
    index++
});
paytable.reverse()

function MarkPaytable(){
    let win = GetWinNumbers().length

    
    for (let index = 0; index < paytable.length; index++) {
        
        paytable[index].classList.remove('win')
    }
    
    if(win == 0){
        return
    }else{
        win--
    }
    
    paytable[win].classList.add('win')
}