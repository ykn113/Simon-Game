var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];


function nextSequence(){
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}

// var green_audio = new Audio('sounds/green.mp3');
// $("#green").click(function(){
//   $("#green").fadeOut(100).fadeIn(100);
//   green_audio.play();
// })
//
// var red_audio = new Audio('sounds/red.mp3');
// $("#red").click(function(){
//   $("#red").fadeOut(100).fadeIn(100);
//   red_audio.play();
// })
//
// var yellow_audio = new Audio('sounds/yellow.mp3');
// $("#yellow").click(function(){
//   $("#yellow").fadeOut(100).fadeIn(100);
//   yellow_audio.play();
// })
//
// var blue_audio = new Audio('sounds/blue.mp3');
// $("#blue").click(function(){
//   $("#blue").fadeOut(100).fadeIn(100);
//   blue_audio.play();
// })
