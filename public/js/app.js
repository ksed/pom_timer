// var age = prompt("How old are you?");
(function() {
  //initialize variables
  var startButton = $('#start');
  var seconds = $('#seconds');

  //main functionality
  startButton.on('click', countdown);

  //function definitions
  function countdown(){
    var secondsText = seconds.text();
    var secondsTextAsNumber = parseInt(secondsText);
    if (secondsTextAsNumber === 0) {
      // then change seconds text to 59 otherwise keep going
      seconds.text("59");
    } else {
      var decreaseSecondsAsNumberByOne = secondsTextAsNumber - 1;
      var padSecondsTextAsNumber = pad(decreaseSecondsAsNumberByOne);
      seconds.text(padSecondsTextAsNumber);
    }
    // var secondsValue = parseInt(seconds.text());
    // seconds.text( pad( secondsValue - 1 ) );

  }

  function pad(num) {
    if (num < 10) {
      // spit out the number with a leading zero
      return "0" + num;
    } else {
      // spit out the original number
      return num;
    }
  }
}());
