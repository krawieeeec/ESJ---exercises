    function countChar(sequenceCharacters, selectedChar) {
        var counter = 0;

        for(var i = 0, lengthOfSequence = sequenceCharacters.length; i < lengthOfSequence; i++) {
            if(sequenceCharacters[i] == selectedChar){
                counter += 1;
            }
        }
        
        return counter; 
    };

    console.log(countChar("Dadasdddasddwid", "a"));
