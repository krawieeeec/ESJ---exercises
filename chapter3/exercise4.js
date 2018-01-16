(function() {

    var countChar = function(sequenceCharacters, selectedChar) {
        var counter = 0, result;

        if((typeof sequenceCharacters == "undefined") || (typeof selectedChar == "undefined")) {
            result = "You don't pass two needed arguments to function.";
            return result;
        } else if(((typeof sequenceCharacters == "string") || (sequenceCharacters instanceof String)) &&
        ((typeof selectedChar == "string") || (selectedChar instanceof String))) {
            for(var i = 0, lengthOfSequence = sequenceCharacters.length; i < lengthOfSequence; i++) {
                if(sequenceCharacters[i] == selectedChar){
                    counter += 1;
                }
            }
            result = counter;
            return result;
        } else {
            result = "You don't pass arguments to function type of string.";
            return result;
        }
    };

    console.log(countChar("Dadasdddasddwid", "a"));

}())