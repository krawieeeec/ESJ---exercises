   function min(firstNumber, secondNumber) {
        var result;

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
         
    }

   console.log(min(3,1));

