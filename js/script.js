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


    $(window).on('scroll',function(){
      var headerBottomOffset = $('.header_bottom').offset().top,
          sidebarOffset = $('.main_content_left').offset().top,
          rightBottomOffset = $('#main_content_right_bottom').offset().top,
          sidebarHeight = $('#sidebar').height(),
          windowScrollTop = $(window).scrollTop(),
          sidebarStatic = rightBottomOffset-sidebarHeight-60,
          sidebarPadding = rightBottomOffset-sidebarOffset-sidebarHeight,
          sidebarFixed = windowScrollTop + 60;
      if(headerBottomOffset<=windowScrollTop){
        $('#nav').addClass('active');
        $('#sidebar').css({
          'padding-top': 0
        });
      }
      else{
        $('#nav').removeClass('active');
      }
      if(sidebarOffset<=sidebarFixed && windowScrollTop<=sidebarStatic){
        $('#sidebar').addClass('active');
      }
      else if(sidebarStatic<=windowScrollTop){
        $('#sidebar').removeClass('active');
        $('#sidebar').css({
          'padding-top': sidebarPadding
        });
      }
      else{
        $('#sidebar').removeClass('active');
        $('#sidebar').css({
          'padding-top': 0
        })
      }
    });


    // gallery
    $("a[rel=gallery_group]").fancybox({
      'padding' :40
    });


    // flaxslider
    $('.flexslider').flexslider({
      animation: "slide"
    });


    // anhor
    $('.anhor').on('click',function () {
      var elementClick = $(this).attr("href"),
          destination = $(elementClick).offset().top;
      $(this).parent().addClass('current').siblings('.sidebar_list_item').removeClass('current');
      if($.browser.safari){
      $('body').animate( { scrollTop: destination }, 1100 );
      }else{
      $('html,body').animate( { scrollTop: destination - 56}, 1100 );
      }
      return false;
    });

    // current class scroll 
    $(window).scroll(function(){
      $(".nav_content").each(function () {
        var _this = $(this);
        var window_top = $(window).scrollTop();
        var div_ = $(this).attr('id');
        var div_top = $(this).offset().top;
        var div_1 = "#"+div_;
          if (window_top > div_top -100){
              $('.nav_content').removeClass('active');
              $(_this).addClass('active');
              $('.sidebar_list_link').parent().removeClass('current');
              $('.sidebar_list_link[href="'+div_1+'"]').parent().addClass('current');
          }
          else{
              $('.sidebar_list_link[href="'+div_1+'"]').removeClass('current');
              };
      });
    });

    // modal
    $('.popup_open').on('click',function(){
      var modal = $(this).data("modal");
      $(modal).arcticmodal();
    });
  });
