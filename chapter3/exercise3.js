(function() {

    countBs = function(sequenceCharacters) {
        var counter = 0, result;
        
        if(typeof sequenceCharacters == "undefined") {
            result = "You don't pass argument to function.";
            return console.log(result);
        } else if((typeof sequenceCharacters == "string") || (sequenceCharacters instanceof String)) {
            for(var i = 0, lengthOfSequence = sequenceCharacters.length; i < lengthOfSequence; i++) {
                if(sequenceCharacters[i] == "B"){
                    counter += 1;
                }
            }
            result = counter;
            return console.log(result);
        } else {
            result = "You don't pass argument to function as type of string.";
            return console.log(result);
        }
    }

    countBs("BBasdasdadbbbbB");
}())