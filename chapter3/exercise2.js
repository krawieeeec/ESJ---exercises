(function() {

    var isEven = function isEven(number) {
        var result;
        
        if(typeof number == "undefined") {
            result = "You don't pass argument to function."
            return console.log(result);
        } else if((typeof number == "number") || (number instanceof Number)) {
            if(number == 0) {
                result = true;
                return console.log(result);
            } else if ((number == 1) || (number == -1)){
                result = false;
                return console.log(result);
            }
            //Hint: "RangeError: Maximum call stack size exceeded" - during writing first version of isEven function.
            if(number > 0){
                return isEven(number - 2);
            } else {
                return isEven(number + 2);
            }
        } else {
            result = "You don't pass argument to function as type of number.";
            return console.log(result);
        }
    }
    
    isEven(-444);
}())