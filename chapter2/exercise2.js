    function displayDivisibilityNumbers() {
        var number = 1;
        var result = "";

        for( ; number <= 100; number++) {
            
            number % 3 === 0 ? (
                result += "Fizz",
                number % 5 === 0 ? (
                    result += "Buzz",
                    console.log(result)
                ) : (
                    console.log(result)
                )
            ) : 
            number % 5 === 0 ? (
                result += "Buzz",
                console.log(result)
            ) : (
                console.log(number)
            )

            result = "";
        }
    }

    displayDivisibilityNumbers();