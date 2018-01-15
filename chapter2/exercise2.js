(function() {

    displayDivisibilityNumbers = function() {
        var numberDivideByThree = false, numberDivideByFive = false, number = 1, result = "";

        while(number < 100){
            if((number % 3) == 0) {
                numberDivideByThree = true;
            }
            if((number % 5) == 0) {
                numberDivideByFive = true;
            }

            if(numberDivideByThree && numberDivideByFive) {
                console.log('FizzBuzz');
            } else if(numberDivideByThree) {
                console.log('Fizz');
            } else if(numberDivideByFive) {
                console.log('Buzz');
            }

            numberDivideByThree = false;
            numberDivideByFive = false;
            number++;
        }
    }

    displayDivisibilityNumbers();
}())