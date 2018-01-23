    function displayFlexChessBoard(widthChessBoard, heightChessBoard) {
        var lineOfChessBoard = "", subStringLineOfChessBoard = "";

        for(var i = 0; i < widthChessBoard; i++) {
            if(i % 2 == 0) {
                lineOfChessBoard += " ";
            } else {
                lineOfChessBoard += "#";
            }
        }
        
        for(var i = 1; i <= heightChessBoard; i++) {
            console.log(lineOfChessBoard);
            if(i % 2 == 0) {
                subStringLineOfChessBoard = lineOfChessBoard.slice(0, lineOfChessBoard.length - 1);
                lineOfChessBoard = (" " + subStringLineOfChessBoard);
            } else {
                subStringLineOfChessBoard = lineOfChessBoard.slice(0, lineOfChessBoard.length - 1);
                lineOfChessBoard = ("#" + subStringLineOfChessBoard);  
            }
        }
        
    }

    displayFlexChessBoard(11,9);
