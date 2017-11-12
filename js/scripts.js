$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carousel-button").click(function(){
        if($(this).children("span").hasClass("fa-pause")){
            $("#mycarousel").carousel('pause');
            $(this).children("span").removeClass("fa-pause")
            $(this).children("span").addClass("fa-play")
        }
        else if($(this).children("span").hasClass("fa-play")){
            $("#mycarousel").carousel('cycle');
            $(this).children("span").removeClass("fa-play")
            $(this).children("span").addClass("fa-pause")
        }
    });
    $("#reserveButton").click(function(){
      $('#reservationModal').modal('show');
    });
    $("#loginButton").click(function(){
      $("#loginModal").modal('show');
    });
});
