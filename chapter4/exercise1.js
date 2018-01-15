(function() {
    range = function(start, end) {
        var result = [], thirdOptionalArgument = 0;
        
        if((typeof start == "undefined") || (typeof end == "undefined")) {
            console.log("You don't pass two needed arguments to function.");
            return result;
        } else if((typeof start != "number") || (typeof end != "number")) {
            console.log("You don't pass arguments to function type of number.");
            return result;
        } else if((typeof start == "number") && (typeof end == "number")) {
            
            if(arguments.length == 2){
                for( ; start <= end; start++) {
                    result.push(start);
                }
                return result;
            } else if(arguments.length == 3) {
                thirdOptionalArgument = arguments[2];
                
                if(typeof thirdOptionalArgument == "undefined") {
                    console.log("You don't pass value of third argument to function.");
                    return result;
                } else if(typeof thirdOptionalArgument != "number") {
                    console.log("You don't pass third argument to funcion type of number.");
                    return result;
                } else if(typeof thirdOptionalArgument == "number") {
                    
                    if(thirdOptionalArgument == 0){
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
            } else {
                console.log('You pass too much arguments to function. Limit is three.');
                return result;
            }
        }
    },
    sum = function(arrayOfNumbers) {
            var result = 0;
            console.log(arrayOfNumbers);
            
            for(var i = 0, lengthOfArray = arrayOfNumbers.length; i < lengthOfArray; i++) {
                result += arrayOfNumbers[i];
            }
            return result;
        };

    console.log(sum(range(5, -5, -3)));

}())