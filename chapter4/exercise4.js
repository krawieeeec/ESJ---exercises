    function deepEqual(firstArgument, secondArgument) {
        var result;
        var elementNotFound = -1;
                    
        if((typeof firstArgument !== "object") && (typeof secondArgument !== "object")) {
            return (firstArgument === secondArgument);
        } else if((typeof firstArgument === "object") && (typeof secondArgument === "object")) {
            if(firstArgument === null && secondArgument === null) {
                return true;
            } else if(firstArgument !== null && secondArgument !== null) {
                if (Object.keys(firstArgument).length !== Object.keys(secondArgument).length) { 
                    return false; 
                } else {
                    for(var propertyFirstArgument in firstArgument) {
                        for(var propertySecondArgument in secondArgument) {
                            if(propertyFirstArgument === propertySecondArgument) {
                                if((typeof firstArgument[propertyFirstArgument] === "object") && (typeof secondArgument[propertySecondArgument] === "object")) {
                                    if((firstArgument[propertyFirstArgument] !== null) && (secondArgument[propertyFirstArgument] !== null)) {
                                        result = deepEqual(firstArgument[propertyFirstArgument], secondArgument[propertySecondArgument]);
                                        if(!result) {
                                            return result;
                                        }
                                    }
                                } else {
                                    if(firstArgument[propertyFirstArgument] === secondArgument[propertySecondArgument]) {
                                        result = true;
                                    }else {
                                        return false;
                                    }
                                }
                            }
                        }
                    }
                    return result;
                }
            } else {
                return false;
            }       
        } else {
            return false;
        }
    };

    var firstObject = {
        p: {
            table: [1,2],
            h: {
                g: 'tab'
            }
        }, 
        house: 'Warsaw',
        ania: 'dawid'
       },
       secondObject = {
        ania: 'dawid',
        house: 'Warsaw',
        p: {
            table: [1,2],
            h: {
                g: 'tab'
            }
        }
    }

    console.log(deepEqual(firstObject, secondObject));
