var viewPortHeight = $(window).height(),
  hashTagActive = '';

(function sizeHandler() {

  var setMainCoverHeight = function() {
    viewPortHeight = $(window).height()
    $('#main-cover').height(viewPortHeight);
    $('#main-backdrop').height(viewPortHeight);
  };

  var resizeHandler = function() {
    $(window).resize(function() {
      setMainCoverHeight();
    });
  };

  var init = function() {
    setMainCoverHeight();
    resizeHandler();
  };

  init();
})();

(function imagesLoader() {

  var loadDogPhotos = function() {
    var container = $('#puppies-photos'),
      totalPhotos = 11;

    for (var i = 0; i < totalPhotos; i++) {
      container.append('<div class="dog"><img src="images/dogs/dog-'
        + (i + 1) + '.png"/></div>');
    }
  };

  var init = function() {
    loadDogPhotos();
  };

  init();
})();

(function navHandler() {

  var setNavPosition = function() {
    $(document).scroll(function() {
      var scrollAmount = $(window).scrollTop();
      if (scrollAmount >= viewPortHeight/2) {
        $('nav').addClass('hidden');
      } else {
        $('nav').removeClass('hidden');
      }
    });
  };

  var init = function() {
    setNavPosition();
  };

  init();
})();

(function materialHandler() {

  var init = function() {
    $(".button-collapse").sideNav();
  };

  init();
})();

(function smoothScrolling() {

  $('nav ul a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 700);
        return false;
      }
    }
  });

})();

(function sideTab() {

  var setIndicator = function(fromIndex, toIndex) {
    var tabHeight = $('.side-tab').eq(0).outerHeight(),
      animateDuration = 150, first, second;

    if (toIndex > fromIndex) {
      $('.indicator-cover.bottom').css('margin-top',
        tabHeight * (toIndex + 1) + 'px');

      setTimeout(function() {
        $('.indicator-cover.top').css('margin-top',
          '-' + (tabHeight * 4 - tabHeight * toIndex) + 'px');
      }, animateDuration);
    } else {
      $('.indicator-cover.top').css('margin-top',
        '-' + (tabHeight * 4 - tabHeight * toIndex) + 'px');

      setTimeout(function() {
        $('.indicator-cover.bottom').css('margin-top',
          tabHeight * (toIndex + 1) + 'px');
      }, animateDuration);
    }
  };

  var setResponsiveSideTab = function() {
    if ($(window).width() <= 600) {
      $('.panel.fade').each(function() {
        $(this).addClass('in');
      });
    } else {
      var panelList = $('.panel.fade');
      panelList.not('.active').each(function() {
        $(this).removeClass('in');
        $(this).removeAttr('style');
      });
      panelList.each(function() {
        $(this).removeAttr('style');
      })
    }
  };

  var tabsInit = function() {
    $('.side-tabs .side-tab a').click(function(e) {
      e.preventDefault();
      if ($(this).hasClass('active')) {
        return;
      }
      var activeTab = $('.side-tabs .side-tab a.active'),
        activeTabPanel = $('.tabs-contents .panel.active'),
        targetTab = $(this),
        targetTabPanel = $(targetTab.attr('href'));

      setIndicator(parseInt(activeTab.attr('tab-index')),
        parseInt(targetTab.attr('tab-index')));

      activeTab.removeClass('active');
      targetTab.addClass('active');

      activeTabPanel.removeClass('in');
      setTimeout(function() {
        $('.tabs-contents').scrollTop(0);
        activeTabPanel.removeClass('active');
        targetTabPanel.addClass('active');
        targetTabPanel.addClass('in');
      }, 350);

    });

    $(window).resize(function() {
      setResponsiveSideTab();
    });
  };

  $(document).ready(function(){
    tabsInit();
    setResponsiveSideTab();
  });

})();
