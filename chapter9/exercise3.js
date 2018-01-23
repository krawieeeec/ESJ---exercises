
    var numbers1 =  ["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4",
    "1e+12"];
    var numbers2 = ["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5",
    "."];
    var regEx = /^[+\-]?((\d+(\.\d*)?)|(\.\d+))(([eE][+\-]?)\d+)?$/;
    
    numbers1.forEach(function(element) {
        if(!regEx.test(element)) {
            console.log("Failed to match '" + element + "'");
        }
    })
