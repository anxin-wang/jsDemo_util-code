/*<style type="text/css">
  p.fading { font-family: Arial, Helvetica, sans-serif; background: #ccc; padding: 3px 7px; }
</style>*/


  $(document).ready(function() {
    $("a").click(function(e) {
      e.preventDefault();
      alert("hey there!");
    });

    /* set opacity 30% */
    $("p.fading").css("opacity","0.3");
    $("p.fading").hover(function() {
      $(this).stop().animate({
        opacity: 1.0
      }, "slow");
    }, function () {
      $(this).stop().animate({
        opacity: 0.3
      }, "slow");
    });
  });

