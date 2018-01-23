function countBs(sequenceCharacters) {
    var counter = 0;
        
    for(var i = 0, lengthOfSequence = sequenceCharacters.length; i < lengthOfSequence; i++) {
        if(sequenceCharacters[i] == "B"){
            counter += 1;
        }
    }
    return counter; 
}

console.log(countBs("BBasdasdadbbbbB"));
