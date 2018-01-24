    function Vector(x, y) {
        this.x = x;
        this.y = y;
    }

    Vector.prototype.plus = function(vector) {
        this.x += vector.x;
        this.y += vector.y;
    };
    Vector.prototype.minus = function(vector) {
        this.x -= vector.x;
        this.y -= vector.y;
    };

    Object.defineProperty(Vector.prototype, "length", {
        get: function() {
            var x = Math.pow(this.x, 2);
            var y = Math.pow(this.y, 2);

            return Math.sqrt(x + y);
        }
    });

    var vector1 = new Vector(3,4); 
    var vector2 = new Vector(3,-40);
    
    vector1.plus(vector2);
    console.log(vector1);
    vector1.minus(vector2);
    console.log(vector1);
    console.log(vector1.length);
