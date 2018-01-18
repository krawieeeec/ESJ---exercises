(function() {

    countBs = function(sequenceCharacters) {
        var counter = 0, result;
        
        for(var i = 0, lengthOfSequence = sequenceCharacters.length; i < lengthOfSequence; i++) {
            if(sequenceCharacters[i] == "B"){
                counter += 1;
            }
        }
        result = counter;
        return result; 
    }

    console.log(countBs("BBasdasdadbbbbB"));
}())