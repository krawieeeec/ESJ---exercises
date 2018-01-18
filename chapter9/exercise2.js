(function() {

    var text = "'I'm the cook,' he said, 'it's my job.'";

    var result = text.replace(/'(?!s)(?!m)/g,'"');
    console.log(result);
}())
