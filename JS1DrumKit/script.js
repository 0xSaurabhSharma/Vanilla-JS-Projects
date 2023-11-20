(function () {
    const keys = document.querySelectorAll(".key");
    let removeTransition = function (event) {
      console.log('remove transition');
      // when property that takes longest time to finish i.e. transform ends, it removes .playing class
      if (event.propertyName !== "transform") return;
      this.classList.remove("playing");
  
      // if (event.propertyName == "transform") {
      //   console.log("if");
      //   this.classList.remove("playing");
      // } else {
      //   console.log('else');
      //   return;
      // }
    };
    let playAudio = function (event) {
      const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
      const audio = document.querySelector(`audio[data-key='${event.keyCode}']`);
  
      // playing audio
      if (!audio) return; // stops function for another key
      audio.currentTime = 0; // rewinds
      audio.play();
  
      // adding .playing class for css effect
      key.classList.add("playing");
  
      /*     setTimeout(function(){
          // setting timeout fun and transition time in css usually run out of sync
          // we can fire transition end event
      }, 1) */
    };
  
    window.addEventListener("keydown", playAudio);
    keys.forEach((key) =>
      key.addEventListener("transitionend", removeTransition)
    );
  })();
  