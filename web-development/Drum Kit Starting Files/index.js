
var x = document.querySelectorAll(".drum").length;

// Event listener for button clicks
for (var i = 0; i < x; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// Event listener for keydown clicks
document.addEventListener("keydown", function(event) {
  playSound(event.key);
  buttonAnimation(event.key);
});

// playSound function -> passed into event listeners
function playSound(key) {
  switch (key) {
    case "w":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      playSound();
      break;

    case "a":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "s":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "d":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "j":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "k":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    default:
  }
}

// Button highlight on click
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
