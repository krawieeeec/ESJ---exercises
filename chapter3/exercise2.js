(function() {

    var isEven = function isEven(number) {
        var result;
        
        if(number == 0) {
            result = true;
            return result;
        } else if ((number == 1) || (number == -1)){
            result = false;
            return result;
        }
//Hint: "RangeError: Maximum call stack size exceeded" - during writing first version of isEven function.
        if(number > 0){
            return isEven(number - 2);
        } else {
            return isEven(number + 2);
        }
    }
    
    console.log(isEven(-444));
}())