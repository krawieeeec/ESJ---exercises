(function() {

    function countChar(sequenceCharacters, selectedChar) {
        var counter = 0, result;

        for(var i = 0, lengthOfSequence = sequenceCharacters.length; i < lengthOfSequence; i++) {
            if(sequenceCharacters[i] == selectedChar){
                counter += 1;
            }
        }
        result = counter;
        return result; 
    };

    console.log(countChar("Dadasdddasddwid", "a"));

}())