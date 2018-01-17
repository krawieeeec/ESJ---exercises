(function() {

    function MultiplicatorUnitFailure(message) {
        this.message = message;
    }

    function primitiveMultiply(a, b) {
        if (Math.random() < 0.5)
          return a * b;
        else
          throw new MultiplicatorUnitFailure("Occurrence error during muliplication.");
    }

    function reliableMultiply(a, b) {
        var result;  
        for(; ;) {
            try {
                result = primitiveMultiply(a,b);
                break;
            } catch(error) {
                if(error instanceof MultiplicatorUnitFailure) {
                    console.log(error.message);
                }
            }
        }
        return result;
    }      
      console.log(reliableMultiply(8, 8));
}())