    function displayFlexChessBoard(width, height) {
        var line = "";
        var subLine = "";

        for (var i = 0; i < width; i++) {

            i % 2 === 0 ? (
                line += " "
            ) : (
                line += "#"
            )
        }
        
        for (var i = 1; i <= height; i++) {
            console.log(line);
            subLine = line.slice(0, line.length - 1)
            
            i % 2 === 0 ? (
                line = (" " + subLine)
            ) : (
                line = ("#" + subLine)
            )
        }
    }

    displayFlexChessBoard(11,9);
