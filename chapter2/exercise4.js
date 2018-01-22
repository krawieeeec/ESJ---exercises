    function displayFlexChessBoard(widthChessBoard, heightChessBoard) {
        var lineOfChessBoard = "", subStringLineOfChessBoard = "";

            for(var positionInString = 0; positionInString < widthChessBoard; positionInString++) {
                if((positionInString % 2) == 0) {
                    lineOfChessBoard += " ";
                } else {
                    lineOfChessBoard += "#";
            }
            
            for(var rowOfChessBoard = 0; rowOfChessBoard < heightChessBoard; rowOfChessBoard++){           
                if(rowOfChessBoard == 0){
                    console.log(lineOfChessBoard);
                } else if((rowOfChessBoard != 0) && ((rowOfChessBoard % 2) == 0)) {
                    subStringLineOfChessBoard = lineOfChessBoard.substring(0, lineOfChessBoard.length - 1);
                    lineOfChessBoard = " ";
                    lineOfChessBoard += subStringLineOfChessBoard;
                    console.log(lineOfChessBoard);
                } else if ((rowOfChessBoard != 0) && ((rowOfChessBoard % 2) != 0)) {
                    subStringLineOfChessBoard = lineOfChessBoard.substring(0, lineOfChessBoard.length - 1);
                    lineOfChessBoard = "#";
                    lineOfChessBoard += subStringLineOfChessBoard;
                    console.log(lineOfChessBoard);
                }
                
            }
        }
    }

    displayFlexChessBoard(11,9);
