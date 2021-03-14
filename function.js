
function firstLetterName(v) {
    var FIRSTLETTEROFNAME = v[0]
    alert ("The name " + v +" starts with the letter " + FIRSTLETTEROFNAME)
}

function divisibleByTwo(num){
    if (num % 2 == 0){
        return true
    }
        return false

}

function largestNum(array){
    var compare = array[0];
    for(let i = 0; i <= array.length; i++){
        if (compare < array[i]){
            compare = array[i]
        }
    }
    return compare
}
