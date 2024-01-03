// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var today = dayjs().format('MMMM, d, YYYY');

var time = dayjs().hour()


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

$(document).ready(function () {
  var box = $("#hour-11");
  var boxTime = 11;

  if (boxTime === time) {
    $(box).addClass("row time-block present");
  } else if (boxTime < time) {
    $(box).addClass("row time-block past");
  } else {
    $(box).addClass("row time-block future");
  }
});


$(document).ready(function () {
  var box = $("#hour-12");
  var boxTime = 12;

  if (boxTime === time) {
    $(box).addClass("row time-block present");
  } else if (boxTime < time) {
    $(box).addClass("row time-block past");
  } else {
    $(box).addClass("row time-block future");
  }
});


$(document).ready(function () {
  var box = $("#hour-1");
  var boxTime = 13;

  if (boxTime === time) {
    $(box).addClass("row time-block present");
  } else if (boxTime < time) {
    $(box).addClass("row time-block past");
  } else {
    $(box).addClass("row time-block future");
  }
});


$(document).ready(function () {
  var box = $("#hour-2");
  var boxTime = 14;

  if (boxTime === time) {
    $(box).addClass("row time-block present");
  } else if (boxTime < time) {
    $(box).addClass("row time-block past");
  } else {
    $(box).addClass("row time-block future");
  }
});



$(document).ready(function () {
  var box = $("#hour-3");
  var boxTime = 15;

  if (boxTime === time) {
    $(box).addClass("row time-block present");
  } else if (boxTime < time) {
    $(box).addClass("row time-block past");
  } else {
    $(box).addClass("row time-block future");
  }
});


$(document).ready(function () {
  var box = $("#hour-4");
  var boxTime = 16;

  if (boxTime === time) {
    $(box).addClass("row time-block present");
  } else if (boxTime < time) {
    $(box).addClass("row time-block past");
  } else {
    $(box).addClass("row time-block future");
  }
});



$(document).ready(function () {
  var box = $("#hour-5");
  var boxTime = 17;

  if (boxTime === time) {
    $(box).addClass("row time-block present");
  } else if (boxTime < time) {
    $(box).addClass("row time-block past");
  } else {
    $(box).addClass("row time-block future");
  }
});



$(document).ready(function() {
  $('.description').each(function() {
    var key = `textareaValue_${$(this).parent().attr('id')}`;
    var savedValue = localStorage.getItem(key);
    
    if (savedValue) {
           var textareaValue = JSON.parse(savedValue);
      
      $(this).val(textareaValue);
    }
  });
});


$('.saveBtn').on('click', function() {
  var textarea = $(this).prev('.description');
  var textareaValue = textarea.val();
  var textValue = JSON.stringify(textareaValue);
  var key = `textareaValue_${textarea.parent().attr('id')}`;
  
    localStorage.setItem(key, textValue);
});

