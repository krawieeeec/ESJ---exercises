(function() {

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

    console.log(reverseArray([22,23,24,25,111]));
    console.log(reverseArrayInPlace([1,2,3,4,5,6]));
    
}())