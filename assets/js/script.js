// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(document).ready(function () {
  var currentTime = dayjs();
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $('.saveBtn').on('click', function() {

    
    var value = $(this).siblings('.description').val();
    var schedule = $(this).parent().attr('id'); localStorage.setItem(schedule, value);
    var saveInput = localStorage.getItem(schedule, value);
    var myTime = parseInt($(this).attr("id").split("-")[1]);
    myTime.value = saveInput;
  });
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  function timeChange() {
    var currentHour = dayjs().hour()
    $(".time-block").each(function(){
      var myTime = parseInt($(this).attr("id").split("-")[1]);
      console.log(myTime);
      console.log(currentHour);
      if (myTime < currentHour) {
        $(this).addClass("past");
      } else if(myTime === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    }); 
  };
  timeChange();
  setInterval(timeChange, 10000);
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  var headerDay = currentTime.format ("dddd, MMMM, D");
  $("#currentDay").text(headerDay + "th");

    console.log(localStorage.schedule);
});