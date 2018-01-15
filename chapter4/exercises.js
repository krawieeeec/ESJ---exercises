(function() {

    var MYAPP = MYAPP || {};

    if(!("namespace" in MYAPP)) {
        MYAPP.namespace = function(nameOfNewNamespace) {
            var partsOfNamespace = nameOfNewNamespace.split('.'),
                module = MYAPP;
    
                if(partsOfNamespace[0] === "MYAPP") {
                    partsOfNamespace = partsOfNamespace.slice(1);
                }
    
                for(var i = 0, amountOfSubNamespaces = partsOfNamespace.length; i < amountOfSubNamespaces; i++) {
                    if(typeof module[partsOfNamespace[i]] == "undefined") {
                        module[partsOfNamespace[i]] = {};
                    }
                    module = module[partsOfNamespace[i]];
                }
            return module;
        }
    }
    
    MYAPP.namespace('math');
    MYAPP.namespace('array');
    MYAPP.namespace('list');
    MYAPP.namespace('operators');

    MYAPP.math = (function() {
        var range = function(start, end) {
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

        return {
            range: range,
            sum: sum    
        }
    }());

    MYAPP.array = (function() {
        var reverseArray = function(unturnedArray) {
            var reversedArray = [];

            if(typeof unturnedArray == "undefined") {
                console.log("You don't pass argument to function.");
                return unturnedArray;
            }else if(!(Array.isArray(unturnedArray))) {
                console.log("You don't pass argument to function type of array.");
                return unturnedArray;
            }else if(Array.isArray(unturnedArray)){
                for(var i = (unturnedArray.length - 1), beginningArray = 0; i >= beginningArray; i--) {
                    reversedArray.push(unturnedArray[i]);
                }
                return reversedArray;
            }
        },
        
        reverseArrayInPlace = function(array) {
            var temporaryStorageValue = 0, leftIndex = 0, rightIndex = 0;

            if(typeof array == "undefined") {
                console.log("You don't pass argument to function.");
                return array;
            } else if(!(Array.isArray(array))) {
                console.log("You don't pass argument to function type of array.");
                return array;
            } else if(Array.isArray(array)) {
                rightIndex = (array.length - 1);

                while(leftIndex < rightIndex) {
                    temporaryStorageValue = array[rightIndex];
                    array[rightIndex] = array[leftIndex];
                    array[leftIndex] = temporaryStorageValue;
    
                    leftIndex++;
                    rightIndex--;
                }
                return array;
            }
        };
        

        return {
            reverseArray : reverseArray,
            reverseArrayInPlace: reverseArrayInPlace
        }
    }());    
    
    MYAPP.list = (function() {
        var arrayToList = function(array) {
            var list = {
                value: null,
                rest: null
            }, referenceToAllList = list;

            if(typeof array == "undefined") {
                console.log("You don't pass argument to function.");
                return list;
            } else if(!(Array.isArray(array))) {
                console.log("You don't pass argument to function type of array.");
                return list;
            } else if(Array.isArray(array)) {
                for(var i = 0, lengthOfArray = array.length; i < lengthOfArray; i++) {
                    list.value = array[i];
                    
                    if(i < (lengthOfArray - 1)) {
                        list.rest = {
                            value: null,
                            rest: null
                        };
                        list = list.rest;
                    } else if(i == (lengthOfArray - 1)) {
                        list.rest = null;
                    }
                }
                return referenceToAllList;                   
            }
        },

        listToArray = function(list) {
            var array = [], deepingList = true;

            if(typeof list == "undefined") {
                console.log("You don't pass argument to function.");
            } else if(typeof list != "object") {
                console.log("You don't pass arguemnt to function type of object.");
            } else if(typeof list == "object") {
                do{
                    if(list.value != null) {
                        array.push(list.value);
                        if(list.rest != null) {
                            list = list.rest;
                        } else {
                            deepingList = false;
                        }
                    }
                } while(deepingList);
            }
            return array;
        },

        prepend = function(element, list) {
            var resultingList = {
                value: null,
                rest: null
            }
            if((typeof element == "undefined") || (typeof list == "undefined")) {
                console.log("You don't pass needed arguments to function.");
                return resultingList;
            } else if((typeof element != "undefined") && (typeof list != "undefined")) {
                resultingList.value = element;
                resultingList.rest = list;
                return resultingList;
            }
        },

        nth = function(list, positionOnList) {
            var foundElement, deepingList = true;

            if((typeof positionOnList == "undefined") || (typeof list == "undefined")) {
                console.log("You don't pass needed arguments to function.");
                return foundElement;
            } else if((typeof positionOnList != "undefined") || (typeof list != "undefined")) {
                for(var i = 1; i <= positionOnList; i++){
                    if(i == positionOnList) {
                        foundElement = list.value;
                    } else if(list.rest == null){
                        break;
                    } else {
                        list = list.rest;
                    } 
                }
                return foundElement;
            }
        };

        return {
            arrayToList : arrayToList,
            listToArray : listToArray,
            prepend : prepend,
            nth : nth
        }
    }());

    MYAPP.operators = (function(){
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

        return {
            deepEqual : deepEqual
        }
    }())
    // console.log(MYAPP.math.sum(MYAPP.math.range(5, -5, -3)));
    // console.log(MYAPP.array.reverseArray([22,23,24,25,111]));
    // console.log(MYAPP.array.reverseArrayInPlace([1,2,3,4,5,6]));
    // console.log(MYAPP.list.arrayToList([1,2,3]));
    // console.log(MYAPP.list.listToArray({value: 1, rest: {value: 2, rest: {value: 123123, rest: null}}}))
    // console.log(MYAPP.list.listToArray(MYAPP.list.arrayToList([1,2,3])));
    // console.log(MYAPP.list.prepend(123, {value: 1, rest: null}));
    // console.log(MYAPP.list.nth({value:1, rest:{value:2, rest: null}}, 2))
    // var firstObject = {
    //     p: {
    //         table: [1,2],
    //         h: {
    //             g: 'tab'
    //         }
    //     }, 
    //     house: 'Warsaw',
    //     ania: 'dawid'
    //    }
    // var secondObject = {
    //     ania: 'dawid',
    //     house: 'Warsaw',
    //     p: {
    //         table: [1,2],
    //         h: {
    //             g: 'tab'
    //         }
    //     }
        
    // }
    // console.log(MYAPP.operators.deepEqual(firstObject, secondObject));
}())