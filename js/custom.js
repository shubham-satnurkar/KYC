$(document).ready(function () {
    // Small Progress bar Timing 
    var delay = 500;
    $(".progress-bar").each(function (i) {
        $(this).delay(delay * i).animate({
            width: $(this).attr('aria-valuenow') + '%'
        }, delay)

    });

    $(".progress-box").each(function (i) {
        $(this).delay(delay * i).animate({
            width: $(this).attr('aria-valuenow') + '%'
        }, delay)

    });

    // Onclick Profile cards check and unchecked
    $('.profile .card').click(function(){
        $(this).toggleClass('check');
    });


    // Bottom to top scroll back button animation
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('#scrollTop-btn').fadeIn(200);    // Fade in the arrow
        } else {
            $('#scrollTop-btn').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('#scrollTop-btn').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 1000);
    });
    


});


// Small Progress bar count
function start() {
    var duration = 5000; // it should finish in 5 seconds !
    $("#box1").stop().css("width", 0).animate({
        width: 100
    }, {
        duration: duration,
        progress: function (promise, progress, ms) {
            $(this).text(Math.round(progress * 60) + '%');
        }
    });

    $("#box2").stop().css("width", 0).animate({
        width: 100
    }, {
        duration: duration,
        progress: function (promise, progress, ms) {
            $(this).text(Math.round(progress * 60) + '%');
        }
    });

    $("#box3").stop().css("width", 0).animate({
        width: 100
    }, {
        duration: duration,
        progress: function (promise, progress, ms) {
            $(this).text(Math.round(progress * 60) + '%');
        }
    });
}

start()




// SideBar Menu

var state = "expanded";
//Check if navbar is expanded or minimized and handle 
$('#navbar-toggle').click(function() {
    if (state == "expanded" ) {
        $('.sidebar').css('width', '300px');
        $('.sidebar .form-control, .sidebar .dropdown-menu').css({'display': 'block', 'transition': '3s'});
        $('.sidebar .form-inline').css({
            'position': 'absolute', 'left': '0',
        });
        state = "minimized";

        
    } else {
        if (state == "minimized" ) {
            $('.sidebar').css('width', '80px');
            $('.sidebar .form-control, .sidebar .dropdown-menu').css({'display': 'none', 'transition': '3s'});
            state = "expanded";

            
        }
    }

    if (window.matchMedia('(max-width: 1024px)').matches)
    {   
        $('.sidebar').css('width', '100%');
        $('.sidebar .form-inline').css({
            'position': 'absolute', 'left': 'unset',

        });
    }

})



// $('.navbar-toggler').click(function() {
//     if (state == "expanded" ) {
//         $('.sidebar').css('width', '300px');
//         $('.sidebar .form-control, .sidebar .dropdown-menu').css({'display': 'block', 'transition': '3s'});
//         $('.sidebar .form-inline').css({
//             'position': 'absolute', 'left': '0',
//         });
//         state = "minimized";

        
//     } else {
//         if (state == "minimized" ) {
//             $('.sidebar').css('width', '80px');
//             $('.sidebar .form-control, .sidebar .dropdown-menu').css({'display': 'none', 'transition': '3s'});
//             state = "expanded";

//             state = "expanded";

            
//         }
//     }
//     if (window.matchMedia('(max-width: 1024px)').matches)
//     {   
//         $('.sidebar').css('width', '100%');
//         $('.sidebar .form-inline').css({
//             'position': 'absolute', 'left': 'unset',

//         });
//     }
// })



