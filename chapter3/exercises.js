(function() {
    function Output() {

        if(!(this instanceof Output)) {
            return new Output();
        }

        this.min = function(firstNumber, secondNumber) {
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

        this.isEven = function isEven(number) {
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

        this.countBs = function(sequenceCharacters) {
            var counter = 0, result;
            
            if(typeof sequenceCharacters == "undefined") {
                result = "You don't pass argument to function.";
                return console.log(result);
            } else if((typeof sequenceCharacters == "string") || (sequenceCharacters instanceof String)) {
                for(var i = 0, lengthOfSequence = sequenceCharacters.length; i < lengthOfSequence; i++) {
                    if(sequenceCharacters[i] == "B"){
                        counter += 1;
                    }
                }
                result = counter;
                return console.log(result);
            } else {
                result = "You don't pass argument to function as type of string.";
                return console.log(result);
            }
        }
        
        this.countChar = function(sequenceCharacters, selectedChar) {
            var counter = 0, result;

            if((typeof sequenceCharacters == "undefined") || (typeof selectedChar == "undefined")) {
                result = "You don't pass two needed arguments to function.";
                return console.log(result);
            } else if(((typeof sequenceCharacters == "string") || (sequenceCharacters instanceof String)) &&
            ((typeof selectedChar == "string") || (selectedChar instanceof String))) {
                for(var i = 0, lengthOfSequence = sequenceCharacters.length; i < lengthOfSequence; i++) {
                    if(sequenceCharacters[i] == selectedChar){
                        counter += 1;
                    }
                }
                result = counter;
                return console.log(result);
            } else {
                result = "You don't pass arguments to function type of string.";
                return console.log(result);
            }
        }
    }

    var output = new Output();
    output.min(3,1);
    output.isEven(-444);
    output.countBs("BBasdasdadbbbbB");
    output.countChar("Dadasdddasddwid", "a");

    //ToDO(optional) With description of excercise result that second argument should be length of one.

}())