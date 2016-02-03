$( function() {
        var endDate = "June 25, 2016 17:00:25";

        $('.countdown.simple').countdown({ date: endDate });

        $('.countdown.styled').countdown({
          date: endDate,
          render: function(data) {
            $(this.el).html("<div>" + this.leadingZeros(data.days, 3) + " <span>days</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>hrs</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>min</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>sec</span></div>");
          }
        });

        $('.countdown.callback').countdown({
          date: +(new Date) + 10000,
          render: function(data) {
            $(this.el).text(this.leadingZeros(data.sec, 2) + " sec");
          },
          onEnd: function() {
            $(this.el).addClass('ended');
          }
        }).on("click", function() {
          $(this).removeClass('ended').data('countdown').update(+(new Date) + 10000).start();
        });



});


var customScripts = {

    onePageNav: function () {

        $('.cbp-spmenu').onePageNav({
            currentClass: 'active',
            changeHash: false,
            scrollSpeed: 950,
            scrollThreshold: 0.2,
            filter: '',
            easing: 'swing',
            begin: function () {},
            end: function () {
                   //I get fired when the animation is ending
				if(!$('#main-nav ul li:first-child').hasClass('active')){
					$('.header').addClass('addBg');
				}else{
						$('.header').removeClass('addBg');
				}

            },
            scrollChange: function ($currentListItem) {
                //I get fired when you enter a section and I pass the list item of the section
				if(!$('#main-nav ul li:first-child').hasClass('active')){
					$('.header').addClass('addBg');
				}else{
						$('.header').removeClass('addBg');
				}
			}
        });

		$("a[href='#top']").click(function () {
                $("html, body").animate({ scrollTop: 0 }, "slow");
                return false;
            });
			$("a[href='#basics']").click(function () {
                $("html, body").animate({ scrollTop: $('#weddingInfo').offset().top}, "slow");
                return false;
            });
    },
	waySlide: function(){
		  	/* Waypoints Animations
		   ------------------------------------------------------ */
      $('#welcome').waypoint(function() {
        $('#welcome .col-md-12').addClass( 'animated fadeInUp show' );
 			}, { offset: 800});
 			$('#aboutUs').waypoint(function() {
 			  $('#aboutUs').addClass( 'animated fadeInUp show' );
 			}, { offset: 800});
      $('#weddingInfo').waypoint(function() {
			  $('#weddingInfo').addClass( 'animated fadeInUp show' );
			}, { offset: 800});
			$('#contact').waypoint(function() {
			  $('#contact .parlex-back').addClass( 'animated fadeInUp show' );
			}, { offset: 800});

		},
    init: function () {
        customScripts.onePageNav();
        customScripts.waySlide();
    }
}

// Audio playback
$('audio').on('canplay', function() {
    this.play();
});

//form validations
function validateForm() {
  var form = document.forms["contactUs"];

  var name = form["name"].value;
  var nameRegex = /^[\\p{L} .'-]+$/;
  if (nameRegex.test(name) || name.trim().length<5) {
    alert("Please enter your name (at least 5 characters)");
    form["name"].focus();
    return false;
  }

  var email = form["email"].value;
  var emailRegex = /^[^ @]+@[^ @]+.[a-z]+$/
  console.log("email");
  if(!emailRegex.test(email)) {
    console.log("caught it");
    alert("Please enter a valid email address.")
    form["email"].focus();
  }
  console.log("fail");
  return false;
};

$('document').ready(function () {
   $.backstretch([
      "images/img1.png"
    , "images/img2.png"
    , "images/img3.png"
  ], {duration: 3000, fade: 1250});

  customScripts.init();

  $('#welcome .welcome-color, #aboutUs, #weddingInfo, #features, #clients, #portfolio, #plans, #contact .parlex-back').css('opacity','0');
  $( "#menuToggle" ).toggle(function() {
  $(this).find('i').removeClass('fa-bars').addClass('fa-remove');
   $('#mainNav').animate({"right":"0px"}, "slow");
  }, function() {
    $('#mainNav').animate({"right":"-200px"}, "slow");
    $(this).find('i').removeClass('fa-remove').addClass('fa-bars');
  });
  var linksContainer = $('#links');
  var baseUrl;
  // Add the demo images as links with thumbnails to the page:

  $.each([{name: "dr"}], function (index, photo) {
      baseUrl = 'images/' + photo.name;
      $('<a/>')
          .append($('<img>').prop('src', baseUrl + "-thumb.jpg").prop('class', "photos img-responsive img-thumbnail"))
          .prop('href', baseUrl + ".jpg")
          .prop('title', photo.title)
          .attr('data-gallery', '')
          .appendTo(linksContainer);
  });
});
