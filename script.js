$(document).ready(function () {
  $("#currentDay").text(moment().format("MMMM Do YYYY"));

  $(".saveBtn").on("click", function () {
    var noteWrote = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    console.log(time, noteWrote);
    localStorage.setItem(time, noteWrote);
  });

  $("#9 .description").val(localStorage.getItem("9"));

  function backgroundColor() {
    var currentTime = moment().hours();

    $(".time-block").each(function () {
      var timeId = $(this).attr("id");
      if (timeId < currentTime) {
        $(this).addClass("past");
      } else if (timeId === currentTime) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }

  $("#10 .description").val(localStorage.getItem("10"));

  function backgroundColor() {
    var currentTime = moment().hours();

    $(".time-block").each(function () {
      var timeId = $(this).attr("id");
      if (timeId < currentTime) {
        $(this).addClass("past");
      } else if (timeId === currentTime) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }

  $("#11 .description").val(localStorage.getItem("11"));

  function backgroundColor() {
    var currentTime = moment().hours();

    $(".time-block").each(function () {
      var timeId = $(this).attr("id");
      if (timeId < currentTime) {
        $(this).addClass("past");
      } else if (timeId === currentTime) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }

  $("#12 .description").val(localStorage.getItem("12"));

  function backgroundColor() {
    var currentTime = moment().hours();

    $(".time-block").each(function () {
      var timeId = $(this).attr("id");
      if (timeId < currentTime) {
        $(this).addClass("past");
      } else if (timeId === currentTime) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }

  $("#13 .description").val(localStorage.getItem("13"));

  function backgroundColor() {
    var currentTime = moment().hours();

    $(".time-block").each(function () {
      var timeId = $(this).attr("id");
      if (timeId < currentTime) {
        $(this).addClass("past");
      } else if (timeId === currentTime) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }

  $("#14 .description").val(localStorage.getItem("14"));

  function backgroundColor() {
    var currentTime = moment().hours();

    $(".time-block").each(function () {
      var timeId = $(this).attr("id");
      if (timeId < currentTime) {
        $(this).addClass("past");
      } else if (timeId === currentTime) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }

  $("#15 .description").val(localStorage.getItem("15"));

  function backgroundColor() {
    var currentTime = moment().hours();

    $(".time-block").each(function () {
      var timeId = $(this).attr("id");
      if (timeId < currentTime) {
        $(this).addClass("past");
      } else if (timeId === currentTime) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }

  $("#16 .description").val(localStorage.getItem("16"));

  function backgroundColor() {
    var currentTime = moment().hours();

    $(".time-block").each(function () {
      var timeId = $(this).attr("id");
      if (timeId < currentTime) {
        $(this).addClass("past");
      } else if (timeId === currentTime) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }

  $("#17 .description").val(localStorage.getItem("17"));

  function backgroundColor() {
    var currentTime = moment().hours();

    $(".time-block").each(function () {
      var timeId = $(this).attr("id");

      if (timeId < currentTime) {
        $(this).addClass("past");
      } else if (timeId == currentTime) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }

  backgroundColor();
});
