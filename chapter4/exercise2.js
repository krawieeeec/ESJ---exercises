(function() {

    function reverseArray(unturnedArray) {
        var reversedArray = [];

        for(var i = (unturnedArray.length - 1), beginningArray = 0; i >= beginningArray; i--) {
            reversedArray.push(unturnedArray[i]);
        }
        return reversedArray;
    }
    
    function reverseArrayInPlace(array) {
        var temporaryStorageValue = 0, leftIndex = 0, rightIndex = 0;

        rightIndex = (array.length - 1);

        while(leftIndex < rightIndex) {
            temporaryStorageValue = array[rightIndex];
            array[rightIndex] = array[leftIndex];
            array[leftIndex] = temporaryStorageValue;

            leftIndex++;
            rightIndex--;
        }
        return array;
    };

    console.log(reverseArray([22,23,24,25,111]));
    console.log(reverseArrayInPlace([1,2,3,4,5,6]));
    
}())