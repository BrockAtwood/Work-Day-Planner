$(init);

function init() {
  $("#currentDay").text(moment().format("dddd, MMMM Do"));
}

function timeBlockColor() {
  var currentTime = moment().hour();
  console.log(currentTime);

  $(".time-block").each(function () {
    var pastHour = parseInt($(this).attr("id").replace("hour-", ""));
  });
}
