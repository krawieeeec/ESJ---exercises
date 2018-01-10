(function() {
    function Output() {

        if(!(this instanceof Output)) {
            return new Output();
        }
    
        this.displayTriangle = function() {
            var triangle = '#';
    
            for(var i = 0, amountOfTriangle = 7; i < 7; i++) {
                console.log(triangle);
                triangle += '#';
            }
        }
    
        this.displayDivisibilityNumbers = function() {
            var numberDivideByThree = false, numberDivideByFive = false, number = 1, result = "";
    
            while(number < 100){
                if((number % 3) == 0) {
                    numberDivideByThree = true;
                }
                if((number % 5) == 0) {
                    numberDivideByFive = true;
                }
    
                if(numberDivideByThree && numberDivideByFive) {
                    console.log('FizzBuzz');
                } else if(numberDivideByThree) {
                    console.log('Fizz');
                } else if(numberDivideByFive) {
                    console.log('Buzz');
                }
    
                numberDivideByThree = false;
                numberDivideByFive = false;
                number++;
            }
        }
    
        this.displayFixedChessBoard = function() {
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
    
        this.displayFlexChessBoard = function(widthChessBoard, heightChessBoard) {
            var lineOfChessBoard = "", subStringLineOfChessBoard = "";
    
            if((typeof widthChessBoard == "undefined") || (typeof heightChessBoard == "undefined")){
                return console.log("You don't pass needed arguments to fucntion.");
            } else {
                for(var positionInString = 0; positionInString < widthChessBoard; positionInString++) {
                    if((positionInString % 2) == 0) {
                        lineOfChessBoard += " ";
                    } else {
                        lineOfChessBoard += "#";
                    }
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
    
    }
    
    var output = new Output();
    output.displayTriangle();
    output.displayDivisibilityNumbers();
    output.displayFixedChessBoard();
    output.displayFlexChessBoard(11,9);
}())