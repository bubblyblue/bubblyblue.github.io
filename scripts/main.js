var viewPortHeight = $(window).height(),
  imagesDescription = [{
    title: 'Chinese New Year',
    location: 'Seattle, WA',
    fullViewObject: {
      w: 1280,
      h: 960,
      title: 'First time seeing and spending time with parents for Chinese New Year after 2010',
      src: 'images/gallery/original/gallery-0.jpg'
    }
  }, {
    title: 'Glimpse of Golden Bridge',
    location: 'San Francisco, CA',
    fullViewObject: {
      w: 2448,
      h: 3264,
      title: 'Glimpse of Golden Bridge from lands end',
      src: 'images/gallery/original/gallery-1.jpg'
    }
  }, {
    title: 'SF Street View',
    location: 'San Francisco, CA',
    fullViewObject: {
      w: 2448,
      h: 3264,
      title: 'Curvy street view in San Francisco',
      src: 'images/gallery/original/gallery-2.jpg'
    }
  }, {
    title: 'Staring from Twin peaks',
    location: 'San Francisco, CA',
    fullViewObject: {
      w: 3264,
      h: 2448,
      title: 'On top of Twin Peaks staring into San Francisco',
      src: 'images/gallery/original/gallery-3.jpg'
    }
  }, {
    title: 'Best coffee in SF',
    location: 'San Francisco, CA',
    fullViewObject: {
      w: 2448,
      h: 3264,
      title: 'This is probably one of the best coffee I have ever tried',
      src: 'images/gallery/original/gallery-4.jpg'
    }
  }, {
    title: 'Blanca lake with John',
    location: 'Blanca Lake, WA',
    fullViewObject: {
      w: 960,
      h: 720,
      title: 'Stunning view of Blanca lake with childish John and me',
      src: 'images/gallery/original/gallery-5.jpg'
    }
  }, {
    title: 'Hike to Blanca Lake',
    location: 'Mt Baker, WA',
    fullViewObject: {
      w: 3264,
      h: 2448,
      title: 'Hiking all the way to Blanca lake. It was beautiful all the way',
      src: 'images/gallery/original/gallery-6.jpg'
    }
  }, {
    title: 'Hidden beauty',
    location: 'Blanca Lake, WA',
    fullViewObject: {
      w: 2448,
      h: 3264,
      title: 'When I finally saw the lake after 4-hour hike, I was thrilled',
      src: 'images/gallery/original/gallery-7.jpg'
    }
  }, {
    title: 'On top of Mt Si',
    location: 'Mount Si, WA',
    fullViewObject: {
      w: 720,
      h: 960,
      title: 'Sam took a picture of me when I was chilling on top of Mount Si',
      src: 'images/gallery/original/gallery-8.jpg'
    }
  }, {
    title: 'First time bouldering',
    location: 'Seattle, WA',
    fullViewObject: {
      w: 720,
      h: 960,
      title: 'First time trying out bouldering in Seattle. I have to say it is hard!',
      src: 'images/gallery/original/gallery-9.jpg'
    }
  }, {
    title: 'Seattle FC game',
    location: 'Seattle, WA',
    fullViewObject: {
      w: 3264,
      h: 2448,
      title: 'First time watching a soccer game live!',
      src: 'images/gallery/original/gallery-10.jpg'
    }
  }, {
    title: 'First time fajitas',
    location: 'Seattle, WA',
    fullViewObject: {
      w: 1920,
      h: 1080,
      title: 'First time having fajitas. John kept pronouncing it "Faghita"',
      src: 'images/gallery/original/gallery-11.jpg'
    }
  }, {
    title: 'Tacoma UW campus',
    location: 'Tacoma, WA',
    fullViewObject: {
      w: 2448,
      h: 3264,
      title: 'Strolling in Tacoma and walked into University of Washington Tacoma campus',
      src: 'images/gallery/original/gallery-12.jpg'
    }
  }, {
    title: 'First hiking in WA',
    location: 'Mt Tiger, WA',
    fullViewObject: {
      w: 2448,
      h: 3264,
      title: 'This is the first mountain I hiked near Seattle: Tiger mountain',
      src: 'images/gallery/original/gallery-13.jpg'
    }
  }, {
    title: 'Seattle night view',
    location: 'Lake Union, WA',
    fullViewObject: {
      w: 3264,
      h: 2448,
      title: 'Lake union is a beautiful place during the day or at night',
      src: 'images/gallery/original/gallery-14.jpg'
    }
  }, {
    title: 'The great wheel',
    location: 'Seattle, WA',
    fullViewObject: {
      w: 2448,
      h: 3264,
      title: 'Seattle great wheel, which I still havn\'t been on yet',
      src: 'images/gallery/original/gallery-15.jpg'
    }
  }, {
    title: 'Occasional lunch spot',
    location: 'Belltown, WA',
    fullViewObject: {
      w: 2448,
      h: 3264,
      title: 'Olympic Sculpture park near my office. I sometimes have lunch there',
      src: 'images/gallery/original/gallery-16.jpg'
    }
  }, {
    title: 'Lost in the view',
    location: 'Niagara Falls, ON',
    fullViewObject: {
      w: 2448,
      h: 3264,
      title: 'Staring at Niagara Falls in the hotel',
      src: 'images/gallery/original/gallery-17.jpg'
    }
  }, {
    title: 'Wheel in the rain',
    location: 'Niagara Falls, ON',
    fullViewObject: {
      w: 2448,
      h: 3264,
      title: 'Riding the wheel in a windy night was actually scarry',
      src: 'images/gallery/original/gallery-18.jpg'
    }
  }, {
    title: 'Beautiful fall',
    location: 'Waterloo, ON',
    fullViewObject: {
      w: 2448,
      h: 3264,
      title: 'We say a lot of bad things about Waterloo. It can be beautiful sometimes',
      src: 'images/gallery/original/gallery-19.jpg'
    }
  }, {
    title: 'Summer time happiness',
    location: 'Toronto, ON',
    fullViewObject: {
      w: 3264,
      h: 2448,
      title: 'Summer time is really enjoyable in Toronto',
      src: 'images/gallery/original/gallery-20.jpg'
    }
  }, {
    title: 'Beach with Doris',
    location: 'Toronto, ON',
    fullViewObject: {
      w: 2448,
      h: 3264,
      title: 'Having fun on the beach in Toronto',
      src: 'images/gallery/original/gallery-21.jpg'
    }
  }, {
    title: 'First time g-glass',
    location: 'Markham, ON',
    fullViewObject: {
      w: 2448,
      h: 3264,
      title: 'First time trying out Google glass in Genesys',
      src: 'images/gallery/original/gallery-22.jpg'
    }
  }, {
    title: 'Chinese friends',
    location: 'Waterloo, ON',
    fullViewObject: {
      w: 3264,
      h: 2448,
      title: 'Everyone in the photo is from the same high school I am from in China. Yep, small world',
      src: 'images/gallery/original/gallery-23.jpg'
    }
  }, {
    title: 'Snowy winter',
    location: 'Waterloo, ON',
    fullViewObject: {
      w: 2448,
      h: 3264,
      title: 'Winter in Waterloo can be snowy and brutal',
      src: 'images/gallery/original/gallery-24.jpg'
    }
  }, {
    title: 'Castle at night',
    location: 'Quebec City, QC',
    fullViewObject: {
      w: 3264,
      h: 2448,
      title: 'Castle at night in Quebec City',
      src: 'images/gallery/original/gallery-25.jpg'
    }
  }, {
    title: 'City night view',
    location: 'Montreal, QC',
    fullViewObject: {
      w: 3264,
      h: 2448,
      title: 'City night view in Montreal',
      src: 'images/gallery/original/gallery-26.jpg'
    }
  }, {
    title: 'Being a tourist',
    location: 'Montreal, QC',
    fullViewObject: {
      w: 2448,
      h: 3264,
      title: 'Just being another tourist in Montreal. It is a beautiful city',
      src: 'images/gallery/original/gallery-27.jpg'
    }
  }];

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

  var initHoverDir = function() {
    $('.photo-wrapper').each(function() {
      $(this).hoverdir({
        hoverDelay : 0
      });
    });
  };

  var loadGalleryPhotos = function() {
    var container = $('#gallery-photos');

    for (var i = 0; i < imagesDescription.length; i++) {
      container.append('<div class="photo-wrapper" photo-index="' + i + '">\
        <img src="images/gallery/thumbnails/gallery-' + i + '.jpg"/>\
        <div class="hover-description">\
          <div><i class="mdi-action-search"></i></div>\
          <div class="hover-title">' + imagesDescription[i].title + '</div>\
          <span>' + imagesDescription[i].location + '</span>\
        </div>\
      </div>');
    }
  };

  var initPhotoViewer = function() {
    $('.photo-wrapper').click(function() {
      var pswpElement = document.querySelectorAll('.pswp')[0],
        imageItems = [];

        imagesDescription.forEach(function(image) {
          imageItems.push(image.fullViewObject);
        });

      var options = { index: parseInt($(this).attr('photo-index')) },
        gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, imageItems, options);

      gallery.init();
    });
  };

  var init = function() {
    loadDogPhotos();
    loadGalleryPhotos();
    initHoverDir();
    initPhotoViewer();
  };

  init();
})();

(function navHandler() {

  var setNavPosition = function() {
    $(document).scroll(function() {
      var scrollAmount = $(window).scrollTop();
      if (scrollAmount >= viewPortHeight/3) {
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

var fadeInCards = function() {
  var delay = 0;
  $('#about-me .card').each(function() {
    $(this).delay(delay).animate({left: 0});
    delay += 150;
  });
};

var fadeInProfile = function() {
  $('.profile').eq(0).animate({
    opacity: 1
  });
};

var fadeInGallery = function() {
  var delay = 0;
  $('.photo-wrapper').each(function() {
    $(this).delay(delay).animate({opacity: 1});
    delay += 75;
  })
};

(function scrollFire() {

  var fadeMainTitles = function() {
    var delayTime = 350;
    $('#main-cover .content-container').children().each(function() {
      $(this).delay(delayTime).animate({opacity: 1}, 1000, 'easeInOutQuart');
      delayTime += 250;
    });
  };

  var options = [{
    selector: '.panel.active',
    offset: 400,
    callback: 'fadeInCards()'
  }, {
    selector: '.profile',
    offset: 200,
    callback: 'fadeInProfile()'
  }, {
    selector: '#gallery-photos',
    offset: 200,
    callback: 'fadeInGallery()'
  }];

  $(document).ready(function() {
    Materialize.scrollFire(options);
  });

  $(window).load(function() {
    $('.loading-screen').eq(0).addClass('hidden');
    $('.page-container').eq(0).addClass('active');
    fadeMainTitles();
    $(window).scrollTop($(window).scrollTop() + 1);
  });

})();
