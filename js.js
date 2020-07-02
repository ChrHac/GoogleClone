$(document).ready(function(){
  $("#apps").click(function(){
    $("#main").toggle();
  });

  $("input").click(function(){
    document.getElementById("search-bar").style.height = "400px";
    document.getElementById("search-bar").style.borderRadius = "22px";
    document.getElementById("buttons").style.marginTop ="-75px";
  });
});

$(document).on('click', function (e) {
  if ($(e.target).closest("#apps").length === 0) {
      $("#main").hide();
  };
});

$(document).on('click', function (e) {
  if ($(e.target).closest("#search-bar").length === 0) {
    document.getElementById("search-bar").style.height = "45px";
    document.getElementById("search-bar").style.borderRadius = "30px";
    document.getElementById("buttons").style.marginTop ="11px";
  };
});

$(".remove").click((e) => {
  $(e.target).parents(".option").hide();
});