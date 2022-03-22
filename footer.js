
$(window).load(function() {
    let width = screen.width;
    if (width <= 768) {
      $('.list-unstyled').hide();
      // $("#arrowspan").css("display","none")
    }
   });
$(window).on('resize', function(){
    let width = screen.width;
    if (width <= 768) {
      $('.list-unstyled').hide();
      // $("#arrowspan").css("display","none")
    } else {
      $('.list-unstyled').show();
      // $("#arrowspan").css("display","inline")
    }

  });
  $(".footerIcons").click(function () {
    
    $(this).parent().find('.list-unstyled').toggle('2000');
    $(this).toggleClass('fa-minus fa-plus');
  });

  $(".footer-mobile .tab-bar-icon ").click(function () {
    $(".footer-mobile").find(".active-menu").removeClass("active-menu")
    $(this).addClass("active-menu");
  })