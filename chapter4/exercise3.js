(function() {

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

    console.log(arrayToList([1,2,3]));
    console.log(listToArray({value: 1, rest: {value: 2, rest: {value: 123123, rest: null}}}))
    console.log(listToArray(arrayToList([1,2,3])));
    console.log(prepend(123, {value: 1, rest: null}));
    console.log(nth({value:1, rest:{value:2, rest: null}}, 2))

}())