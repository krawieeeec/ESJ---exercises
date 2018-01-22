    var array = [1, NaN, NaN];
    function some(array, predicate) {
        var result = false;
        array.forEach(element => {
            if(predicate(element)) {
                result = true;
            }
        });
        return result;
    }

    function every(array, predicate) {
        var result = true;
        array.forEach(element => {
            if(!predicate(element)) {
                result = false;
            }
        });
        return result;
    }
    
    function isNaN(element) {
        return Number.isNaN(element);
    }

    console.log(some(array, isNaN));
    console.log(every(array, isNaN));
