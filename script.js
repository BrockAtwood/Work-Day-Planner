$(init);

function init() {
  $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

  timeBlockColor();
  setInterval(timeBlockColor, 5000);

  $("#.time-block").each(function () {
    var noId = $(this).attr("id");

    $("#" + noId + " textarea").text(
      localStorage.getItem(moment().format("Do, h:mm:ss a'") + noId)
    );
  });

  $(".saveBtn").on("click", function () {
    var timeId = $(this).parent().attr("id");
    var noteWrote = $(this).siblings(".discription").val();
    localStorage.setItem(timeId, noteWrote);
  });
}

$("#9 .description").val(localStorage.getItem("9"));

function timeBlockColor() {
  var currentHour = moment().hour();
  var pastHour = $(this).attr("id)");

  $(".time-block").each(function () {
    if (pastHour < currentHour) {
      $(this).addClass("past");
    } else if (pastHour == currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
}
