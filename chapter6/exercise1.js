(function() {

    function Dawid() {
        
        this.polak = function() {
            return polak;
        }
    }
    var dawid = new Dawid();
    console.log(dawid);
    Dawid.prototype.ania = "love";
    console.log(dawid.polak());
}())