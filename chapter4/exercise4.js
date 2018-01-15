(function() {

    var deepEqual = function(firstArgument, secondArgument) {
        var result, checkedProperties = [], amountOfPropertiesFirstArgument = 0, amountOfPropertiesSecondArgument = 0, elementNotFound = -1;
                    
        if((typeof firstArgument == "undefined") || (typeof secondArgument == "undefined")) {
            return result;
        } else if((typeof firstArgument != "object") && (typeof secondArgument != "object")) {
            if(firstArgument === secondArgument) {
                result = true
                return result;
            } else {
                result = false;
                return result;
            }
        } else if((typeof firstArgument == "object") && (typeof secondArgument == "object")) {
            if(firstArgument == null && secondArgument == null) {
                result = true;
                return result;
            } else if(firstArgument != null && secondArgument != null) {
                amountOfPropertiesFirstArgument = Object.keys(firstArgument).length;
                amountOfPropertiesSecondArgument = Object.keys(secondArgument).length;
                if(amountOfPropertiesFirstArgument != amountOfPropertiesSecondArgument) {
                    result = false;
                    return result;
                } else {
                    for(var propertyFirstArgument in firstArgument) {
                        for(var propertySecondArgument in secondArgument) {
                            if(propertyFirstArgument === propertySecondArgument) {
                                if((typeof firstArgument[propertyFirstArgument] == "object") && (typeof secondArgument[propertySecondArgument] == "object")) {
                                    if((firstArgument[propertyFirstArgument] != null) && (secondArgument[propertyFirstArgument] != null)) {
                                        checkedProperties.push(propertyFirstArgument);
                                        result = deepEqual(firstArgument[propertyFirstArgument], secondArgument[propertySecondArgument]);
                                        if(!result) {
                                            return result;
                                        }
                                    }
                                } else {
                                    if(firstArgument[propertyFirstArgument] === secondArgument[propertySecondArgument]) {
                                        checkedProperties.push(propertyFirstArgument);
                                        result = true;
                                    }else {
                                        result = false;
                                        return result;
                                    }
                                }
                            }
                        }
                        if(checkedProperties.indexOf(propertyFirstArgument) == elementNotFound) {
                            return false;
                        }
                    }
                    return result;
                }
            } else {
                result = false;
                return result;
            }       
        } else {
            result = false;
            return result;
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
       }
    var secondObject = {
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
}())