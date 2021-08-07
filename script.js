$(init);

function init() {
  $("#currentDay").text(moment().format("dddd, MMMM Do"));
}
