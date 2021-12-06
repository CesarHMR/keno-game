function clamp(number, min, max){
    if(number < min){
        return min
    }
    else if(number > max){
        return max
    }
    else{
        return number;
    }
}