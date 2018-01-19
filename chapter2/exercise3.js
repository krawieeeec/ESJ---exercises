(function() {

    function displayFixedChessBoard() {
        var lineOfChessBoard = "";

        for(var rowOfChessBoard = 1; rowOfChessBoard <= 8; rowOfChessBoard++) {
            if((rowOfChessBoard % 2) != 0) {
                lineOfChessBoard = " # # # #";
                console.log(lineOfChessBoard);
            } else {
                lineOfChessBoard = "# # # # ";
                console.log(lineOfChessBoard);
            }
        }
    }
    displayFixedChessBoard();
}())