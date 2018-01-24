    function countChar(sequenceCharacters, selectedChar) {
        var counter = 0;

        for (var i = 0; i < sequenceCharacters.length; i++) {
            if (sequenceCharacters[i] === selectedChar){
                counter += 1;
            }
        }
        
        return counter; 
    };

    console.log(countChar("Dadasdddasddwid", "a"));
