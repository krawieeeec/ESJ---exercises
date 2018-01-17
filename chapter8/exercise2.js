(function() {

    var box = {
        locked: true,
        unlock: function() { this.locked = false; },
        lock: function() { this.locked = true; },
        _content: [],
        get content() {
          if (this.locked) {
              throw new Error("Locked!");
          }
          return this._content;
        }
      };

    function withBoxUnlocked(body) {
        if(!box.locked) {
            body();
        } else if(box.locked) {
            box.unlock();
            body();
            if(!box.locked) {
                box.lock();
            }
        }
    }
       
      try {
        // withBoxUnlocked(function() {
        //   throw new Error("Pirates on the horizon! Abort!");
        // });
        withBoxUnlocked(function() {
            box.content.push("gold piece");
          });
          
      } catch (e) {
        console.log("Error raised:", e);
      } finally {
          if(!box.locked) {
            box.lock();
          }
      }

      console.log(box.locked);
}())