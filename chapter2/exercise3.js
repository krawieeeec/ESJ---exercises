    function displayFixedChessBoard() {
        var line = "";

        for(var row = 1; row <= 8; row++) {

            row % 2 !== 0 ? (
                line = " # # # #"
            ) : (
                line = "# # # # "
            )
            console.log(line);
        }
    }
    displayFixedChessBoard();
