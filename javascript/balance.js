let balance = 100000
const balanceText = document.querySelector('#balance-text')

function ChangeBalanceByAmount(amount){
    balance += amount
    UpdateBalanceText()
}

function UpdateBalanceText(){
    balanceText.textContent = balance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}