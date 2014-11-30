 $(document).ready(function() {
    
    // wow
    var wow = new WOW(
      {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0          // default
      }
    )
    wow.init();


   

    // flaxslider
    if ($('.flexslider').length){
      $('.flexslider').flexslider({
        animation: "slide"
      });
    }
      
    // anhor
    $('.anhor').on('click',function () {
      var elementClick = $(this).attr("href"),
          destination = $(elementClick).offset().top;
      $(this).parent().addClass('current').siblings('.sidebar_list_item').removeClass('current');
      if($.browser.safari){
      $('body').animate( { scrollTop: destination }, 1100 );
      }else{
      $('html,body').animate( { scrollTop: destination - 80}, 1100 );
      }
      return false;
    });

    // modal
    $('.popup_open').on('click',function(){
      var modal = $(this).data("modal");
      $(modal).arcticmodal();
    });

    // gallery
    $("a[rel=gallery_group]").fancybox({
      'padding' :40
    });

  });
