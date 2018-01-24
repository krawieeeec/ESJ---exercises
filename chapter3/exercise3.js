function countBs(sequenceCharacters) {
    var counter = 0;
        
    for(var i = 0; i < sequenceCharacters.length; i++) {
        if(sequenceCharacters[i] === "B"){
            counter += 1;
        }
    }
    return counter; 
}

console.log(countBs("BBasdasdadbbbbB"));
