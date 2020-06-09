// Business Logic
function leapYear(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) |)  {
    return true;
  } else  {
    return false;
  }
}

// User Interface Logic
$(document).ready(function() {
  $("form#leap-year").submit(funciton(event)  {
    event.preventDefault();
    const year = parseInt($("input#year").val());
    const result = leapYear(year);
    $("#result").text(result);
  });
});