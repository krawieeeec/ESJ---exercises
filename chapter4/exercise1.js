    function range(start, end) {
        var result = [];
        var thirdOptionalArgument = 0;
        
        if(arguments.length === 2){
            for( ; start <= end; start++) {
                result.push(start);
            }
            return result;
        } else if(arguments.length === 3) {
            thirdOptionalArgument = arguments[2];
                    
            if(thirdOptionalArgument === 0){
                for( ; start <= end; start++) {
                    result.push(start);
                }
                return result;
            } else if(thirdOptionalArgument > 0) {
                for( ; start <= end; start += thirdOptionalArgument) {
                    result.push(start);
                }
                return result;
            } else if(thirdOptionalArgument < 0) {
                for( ; start >= end; start -= (-thirdOptionalArgument)) {
                    result.push(start);
                }
                return result;
            }
        } 
    }
    function sum(arrayOfNumbers) {
            var result = 0;
            console.log(arrayOfNumbers);
            
            for(var i = 0, lengthOfArray = arrayOfNumbers.length; i < lengthOfArray; i++) {
                result += arrayOfNumbers[i];
            }
            return result;
        };

    console.log(sum(range(5, -5, -3)));
