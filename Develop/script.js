// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var today = dayjs().format('MMMM, d, YYYY');

var time = dayjs().hour()

console.log(time);

$('#currentDay').text(today);



$(function () {
if (time === 5) {
   console.log("yes")
 } else {
  console.log("no")
 } 


} );

$(document).ready(function () {
  var box = $("#hour-9");
  var boxTime = 9;

  if (boxTime === time) {
    $(box).addClass("row time-block present");
  } else if (boxTime < time) {
    $(box).addClass("row time-block past");
  } else {
    $(box).addClass("row time-block future");
  }
});


$(document).ready(function () {
  var box = $("#hour-10");
  var boxTime = 10;

  if (boxTime === time) {
    $(box).addClass("row time-block present");
  } else if (boxTime < time) {
    $(box).addClass("row time-block past");
  } else {
    $(box).addClass("row time-block future");
  }
});

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
