
    function arrayToList(array) {
        var list = {
            value: null,
            rest: null
        }, referenceToAllList = list;

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

    function listToArray(list) {
        var array = [], deepingList = true;

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
    
        return array;
    }

    function prepend(element, list) {
        var resultingList = {
            value: null,
            rest: null
        };

        resultingList.value = element;
        resultingList.rest = list;
        
        return resultingList;
    }

    function nth(list, positionOnList) {
        var foundElement, deepingList = true;

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

    };

    console.log(arrayToList([1,2,3]));
    console.log(listToArray({value: 1, rest: {value: 2, rest: {value: 123123, rest: null}}}))
    console.log(listToArray(arrayToList([1,2,3])));
    console.log(prepend(123, {value: 1, rest: null}));
    console.log(nth({value:1, rest:{value:2, rest: null}}, 2))
