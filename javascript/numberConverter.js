const trillion = 1000000000000
const billion = 1000000000
const million = 1000000
const thousand = 1000

function GetConvertedNumber(number){
    if(number > trillion){
        return Convert(number, trillion, 'T')
    }
    else if(number > billion){
        return Convert(number, trillion, 'T')
    }
    else if(number > million){
        return Convert(number, trillion, 'T')
    }
    else if(number > thousand){
        return Convert(number, trillion, 'T')
    }
    else{
        return Convert(number, 1, '')
    }
}

function Convert(number, div, symbol){
    return (number / div).toString() + symbol
}