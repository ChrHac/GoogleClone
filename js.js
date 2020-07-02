$(document).ready(function(){
  $("#apps").click(function(){
    $("#main").toggle();
  });
});

$(document).on('click', function (e) {
  if ($(e.target).closest("#apps").length === 0) {
      $("#main").hide();
  };
});

$(document).ready(function(){
  $("input").click(function(){
    document.getElementById("search-bar").style.height = "400px";
    document.getElementById("buttons").style.marginTop ="-75px";
  });
});

$(document).on('click', function (e) {
  if ($(e.target).closest("#input").length === 0) {
    document.getElementById("search-bar").style.height = "45px";
    document.getElementById("buttons").style.marginTop ="11px";
  };
});