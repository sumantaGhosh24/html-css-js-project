var numberOfButtons = document.querySelectorAll(".button").length;

for (var j = 0; j < numberOfButtons; j++) {
  document
    .querySelectorAll(".button")
    [j].addEventListener("click", function () {
      var buttonStyle = this.innerHTML;
      sound(buttonStyle);
      animation(buttonStyle);
    });
}

document.addEventListener("keypress", function (event) {
  sound(event.key);
  animation(event.key);
});

function sound(key) {
  switch (key) {
    case "w":
      var sound1 = new Audio(
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
      );
      sound1.play();
      break;

    case "a":
      var sound2 = new Audio(
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
      );
      sound2.play();
      break;

    case "s":
      var sound3 = new Audio(
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
      );
      sound3.play();
      break;

    case "d":
      var sound4 = new Audio(
        "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
      );
      sound4.play();
      break;

    case "j":
      var sound5 = new Audio(
        "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
      );
      sound5.play();
      break;

    case "k":
      var sound6 = new Audio(
        "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
      );
      sound6.play();
      break;

    case "l":
      var sound7 = new Audio(
        "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
      );
      sound7.play();
      break;

    default:
      console.log(key);
  }
}

function animation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("animation");

  setTimeout(function () {
    activeButton.classList.remove("animation");
  }, 100);
}
