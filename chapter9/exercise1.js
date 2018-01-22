
    function verify(regexp, yes, no) {
        // Ignore unfinished exercises
        console.log(regexp.source);
        if (regexp.source == "...") return;
        yes.forEach(function(s) {
          if (!regexp.test(s))
            console.log("Failure to match '" + s + "'");
        });
        no.forEach(function(s) {
          if (regexp.test(s))
            console.log("Unexpected match for '" + s + "'");
        });
    }

    verify(/(car|cat)/,
        ["my car", "bad cats"],
        ["camper", "high art"]);
 
    verify(/(pop|prop)/,
        ["pop culture", "mad props"],
        ["plop"]);
 
    verify(/(ferret|ferry|ferrari)/,
        ["ferret", "ferry", "ferrari"],
        ["ferrum", "transfer A"]);
 
    verify(/(ious$)|(ious )/,
        ["how delicious", "spacious room"],
        ["ruinous", "consciousness"]);
 
    verify(/\s[.,:;]/,
        ["bad punctuation ."],
        ["escape the dot"]);
 
    verify(/\w{7}/,
        ["hottentottententen"],
        ["no", "hotten totten tenten"]);
 
    verify(/^(\w+[^e]+|[^e]+\w+)$/, 
        ["red platypus", "wobbling nest"],
        ["earth bed", "learning ape"]);
 
