$(document).ready(function() {

  // $(".container").width($(window).width());

  getLocationOfMouse();

});

// Y positions of lines ~ 0.47 - 0.61
// Below positions are enlarged to be easier to click

// Button positions
// red:   X start at 0.470 - 0.515    Y  0.43 - 0.64
// green: X start at 0.515 - 0.560    Y  0.43 - 0.64
// blue:  X start at 0.560 - 0.610    Y  0.43 - 0.64

var getLocationOfMouse = function() {
    // $('body').on('click', function(event){
  $('body').mousemove(function(event){

    var mousePositionX = (event.pageX / $('body').width());
    var mousePositionY = (event.pageY / $('body').height());

    checkForButtons(mousePositionX, mousePositionY);

  });
};

//
//
var checkForButtons = function(mousePositionX, mousePositionY) {
  if(mousePositionY >= 0.43 && mousePositionY <= 0.64){
    if (mousePositionX >= 0.470 && mousePositionX < 0.515){
      var color = "red"
      checkforclick(color);

    } else if (mousePositionX >= 0.515 && mousePositionX < 0.560){
      var color = "green"
      checkforclick(color);

    } else if (mousePositionX >= 0.560 && mousePositionX < 0.610){
      var color = "blue"
      checkforclick(color);

    } else {
      var color = "nothingX"
      checkforclick(color);
    };

  } else {
    var color = "nothingY"
    checkforclick(color);
  };

  mouseHoverOnButton(color);
};


var checkforclick = function(color) {
  $('body').on('click', function(event){
    if (color === "red"){
      console.log("Roastbeef")
    } else if (color === "green"){
      console.log("Gundamwing")
    } else if (color === "blue"){
      console.log("Beansprout")
    } else {
      console.log("void")
    };

  });
};


var mouseHoverOnButton = function(color){
  console.log(color)
  // case statement
  // if (color === "red"){
    // then
  // }
}



// var getLocationOfMouse = function(){
//   $('.container').on('click', function(event){
//   // $('body').on('click', function(event){
//     event.preventDefault();

//     // var buttonContainer =  610, 349  -  720, 443
//     // if ((event.pageX >= 610 && event.pageX <= 720) && (event.pageY >= 349 && event.pageY <= 443)){
//     //   function

//     // }else{

//     // };


//     console.log("Hello");
//     // console.log(event.pageX, event.pageY)

//   });
// };


// document.body.width
// document.body.height
// .container.width
// .container.height
