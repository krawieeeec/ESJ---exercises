(function() {

   var min = function(firstNumber, secondNumber) {
        var result;

        if((typeof firstNumber == "undefined") || (typeof secondNumber == "undefined")) {
            result = "You don't pass two needed arguments to function.";
            return console.log(result);
            
        } else if(((typeof firstNumber == "number") || (firstNumber instanceof Number)) && 
        ((typeof secondNumber == "number") || (secondNumber instanceof Number))) {
            if(firstNumber < secondNumber) {
                result = firstNumber;
                return console.log(result);
            } else if (secondNumber < firstNumber) {
                result = secondNumber;
                return console.log(result);
            } else if (firstNumber == secondNumber) {
                result = firstNumber;
                return console.log(result);
            }
        } else {
            result = "You don't pass arguments to function as type of number.";
            return console.log(result);
        }
    }

    min(3,1);

}())