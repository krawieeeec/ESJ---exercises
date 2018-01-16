(function() {
    
    //Custom types of objects.
    function ArraySeq(array) {
        if(!(this instanceof ArraySeq)) {
            return new ArraySeq();
        }
        this.array = array;
    }

    function RangeSeq(from, to) {
        if(!(this instanceof RangeSeq)) {
            return new RangeSeq();
        }
        this.array = [];
        if(from != undefined && to != undefined) {
            for(;from <= to; from++){
                this.array.push(from);
            }
        }
    }

    //declaration of objects
    var x = {
        y:4,
        x:5,
        z: [1,2,3,4,5],
        h:{
            h:1,
            i:[1,2,3,4]
        },
        dawid: 'Poznań'
    },
    y =[
        1,2,3,4,5,{x:1,y:2}
    ],
    z = [1,2,3],
    arraySeq = new ArraySeq([1,50,45,33,33,22]),
    rangeSeq = new RangeSeq(1, 100);
    
    //Interface for iterate objects
    function logFive(object) {
        var result = [], currentPropValue;
        function iterate(object) {
            var array = [];
            function fetchValue(property) {
                var value;
                if(object.hasOwnProperty(property)) {
                    value = object[property];
                    return value;
                }else {
                    value = ""
                    return value;
                }
            }
    
            if((typeof object != "object" )||( object == null) || (object == undefined)) {
                return array;
            }else {
                for(prop in object) {
                    if(typeof object[prop] == "object") {
                        array = array.concat(iterate(object[prop]));
                    }else {
                        currentPropValue = fetchValue(prop);
                        if(currentPropValue != "") {
                            array.push(currentPropValue);
                        }
                    }
                }
            }
            return array;
        }
        result = iterate(object);
        if(result.length > 5) {
            result = result.slice(0,5);
        }
        return result;    
    }
    
    console.log(rangeSeq);
    console.log(logFive(rangeSeq));
}())