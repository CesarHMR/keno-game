const trillion = 1000000000000
const billion = 1000000000
const million = 1000000
const thousand = 1000

function GetConvertedNumber(number){
    if(number > trillion){
        return Convert(number, trillion, 'T')
    }
    else if(number > billion){
        return Convert(number, billion, 'B')
    }
    else if(number > million){
        return Convert(number, million, 'M')
    }
    else if(number > thousand){
        return Convert(number, thousand, 'K')
    }
    else{
        return Convert(number, 1, '')
    }
}

function Convert(number, div, symbol){
    return (number / div).toString() + symbol
}