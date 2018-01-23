    function displayDivisibilityNumbers() {
        var number = 1;
        var result = "";

        while(number < 100){
            if((number % 3) == 0) {
                result = "Fizz";
            }
            if((number % 5) == 0) {
                if(result == "") {
                    result = "Buzz"
                } else {
                    result += "Buzz";
                }
            }
            if(result != "") {
                console.log(result);
                console.log(number);    
            }
            result = "";
            number++;
        }
    }

    displayDivisibilityNumbers();