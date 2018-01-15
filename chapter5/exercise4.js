(function() {

    var array = [1, NaN, NaN],
    some = function(array, predicate) {
        var result = false;
        array.forEach(element => {
            if(predicate(element)) {
                result = true;
            }
        });
        return result;
    },
    every = function(array, predicate) {
        var result = true;
        array.forEach(element => {
            if(!predicate(element)) {
                result = false;
            }
        });
        return result;
    };

    var isNaN = function(element) {
        return Number.isNaN(element);
    }
    console.log(some(array, isNaN));
    console.log(every(array, isNaN));
}())