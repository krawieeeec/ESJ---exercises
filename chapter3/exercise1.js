(function() {

   var min = function(firstNumber, secondNumber) {
        var result;

        if((typeof firstNumber == "undefined") || (typeof secondNumber == "undefined")) {
            result = "You don't pass two needed arguments to function.";
            return result;
            
        } else if(((typeof firstNumber == "number") || (firstNumber instanceof Number)) && 
        ((typeof secondNumber == "number") || (secondNumber instanceof Number))) {
            if(firstNumber < secondNumber) {
                result = firstNumber;
                return result;
            } else if (secondNumber < firstNumber) {
                result = secondNumber;
                return result;
            } else if (firstNumber == secondNumber) {
                result = firstNumber;
                return result;
            }
        } else {
            result = "You don't pass arguments to function as type of number.";
            return result;
        }
    }

   console.log(min(3,1));

}())