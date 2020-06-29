$(document).ready(function(){
    $("#apps").click(function(){
      $("#main").toggle();
    });
  });

  $(document).on('click', function (e) {
    if ($(e.target).closest("#apps").length === 0) {
        $("#main").hide();
    }
});