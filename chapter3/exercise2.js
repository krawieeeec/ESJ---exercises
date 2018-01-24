    function isEven(number) {
        
        if (number < 0) {
            number *= (-1);
        }
        
        return number === 0 ? true 
        : (
            number === 1 ? (
                false 
            ) : isEven(number - 2)
        )
    }
    
    console.log(isEven(-444));