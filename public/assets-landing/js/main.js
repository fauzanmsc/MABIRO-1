(function($) {
    "use strict";

    $(document).ready(function() {


        /* ==================================================
            # Wow Init
         ===============================================*/
        var wow = new WOW({
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0, // distance to the element when triggering the animation (default is 0)
            mobile: true, // trigger animations on mobile devices (default is true)
            live: true // act on asynchronously loaded content (default is true)
        });
        wow.init();
        

        /* ==================================================
            # Banner Animation
        ===============================================*/
        function doAnimations(elems) {
            //Cache the animationend event in a variable
            var animEndEv = 'webkitAnimationEnd animationend';
            elems.each(function() {
                var $this = $(this),
                    $animationType = $this.data('animation');
                $this.addClass($animationType).one(animEndEv, function() {
                    $this.removeClass($animationType);
                });
            });
        }

        //Variables on page load
        var $immortalCarousel = $('.animate_text'),
            $firstAnimatingElems = $immortalCarousel.find('.item:first').find("[data-animation ^= 'animated']");
        //Initialize carousel
        $immortalCarousel.carousel();
        //Animate captions in first slide on page load
        doAnimations($firstAnimatingElems);
        //Other slides to be animated on carousel slide event
        $immortalCarousel.on('slide.bs.carousel', function(e) {
            var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
            doAnimations($animatingElems);
        });


        /* ==================================================
            # Youtube Video Init
         ===============================================*/
        $('.player').mb_YTPlayer();


        /* ==================================================
            # imagesLoaded active
        ===============================================*/
        $('#portfolio-grid,.blog-masonry').imagesLoaded(function() {

            /* Filter menu */
            $('.mix-item-menu').on('click', 'button', function() {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });

            /* filter menu active class  */
            $('.mix-item-menu button').on('click', function(event) {
                $(this).siblings('.active').removeClass('active');
                $(this).addClass('active');
                event.preventDefault();
            });

            /* Filter active */
            var $grid = $('#portfolio-grid').isotope({
                itemSelector: '.pf-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.pf-item',
                }
            });

            /* Filter active */
            $('.blog-masonry').isotope({
                itemSelector: '.blog-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.blog-item',
                }
            });

        });


         /* ==================================================
            # Fun Factor Init
        ===============================================*/
        $('.timer').countTo();
        $('.fun-fact').appear(function() {
            $('.timer').countTo();
        }, {
            accY: -100
        });


        /* ==================================================
            # Magnific popup init
         ===============================================*/
        $(".popup-link").magnificPopup({
            type: 'image',
            // other options
        });

        $(".popup-gallery").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
            // other options
        });

        $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        $('.magnific-mix-gallery').each(function() {
            var $container = $(this);
            var $imageLinks = $container.find('.item');

            var items = [];
            $imageLinks.each(function() {
                var $item = $(this);
                var type = 'image';
                if ($item.hasClass('magnific-iframe')) {
                    type = 'iframe';
                }
                var magItem = {
                    src: $item.attr('href'),
                    type: type
                };
                magItem.title = $item.data('title');
                items.push(magItem);
            });

            $imageLinks.magnificPopup({
                mainClass: 'mfp-fade',
                items: items,
                gallery: {
                    enabled: true,
                    tPrev: $(this).data('prev-text'),
                    tNext: $(this).data('next-text')
                },
                type: 'image',
                callbacks: {
                    beforeOpen: function() {
                        var index = $imageLinks.index(this.st.el);
                        if (-1 !== index) {
                            this.goTo(index);
                        }
                    }
                }
            });
        });


        /* ==================================================
            # Testimonial Carousel
         ===============================================*/
        $('.testimonials-carousel').owlCarousel({
            loop: false,
            margin: 50,
            nav: true,
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
            dots: false,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                800: {
                    items: 2
                }
            }
        });


        /* ==================================================
            # Team Carousel
         ===============================================*/
        $('.team-carousel').owlCarousel({
            loop: false,
            margin: 50,
            nav: false,
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
            dots: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                800: {
                    items: 2
                },
                1000: {
                    items: 3
                },
                1400: {
                    items: 4
                }
            }
        });


        /* ==================================================
            # Clients Carousel
         ===============================================*/
        $('.clients-carousel').owlCarousel({
            loop: false,
            margin: 80,
            nav: false,
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
            dots: false,
            autoplay: true,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });

        /* ==================================================
            # Clients Carousel
         ===============================================*/
        $('.clients-carousel-3-col').owlCarousel({
            loop: false,
            margin: 30,
            nav: false,
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
            dots: false,
            autoplay: true,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 3,
                    margin: 80,
                }
            }
        });


        /* ==================================================
            # Case Carousel
         ===============================================*/
        $('.case-carousel').owlCarousel({
            loop: true,
            center: true,
            margin: 30,
            nav: true,
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
            dots: false,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                1000: {
                    items: 2
                },
                1200: {
                    items: 2,
                    stagePadding: 200
                }
            }
        });



        /* ==================================================
            Nice Select Init
         ===============================================*/
        $('select').niceSelect();


        /* ==================================================
            Contact Form Validations
        ================================================== */
        $('.contact-form').each(function() {
            var formInstance = $(this);
            formInstance.submit(function() {

                var action = $(this).attr('action');

                $("#message").slideUp(750, function() {
                    $('#message').hide();

                    $('#submit')
                        .after('<img src="assets/img/ajax-loader.gif" class="loader" />')
                        .attr('disabled', 'disabled');

                    $.post(action, {
                            name: $('#name').val(),
                            email: $('#email').val(),
                            phone: $('#phone').val(),
                            comments: $('#comments').val()
                        },
                        function(data) {
                            document.getElementById('message').innerHTML = data;
                            $('#message').slideDown('slow');
                            $('.contact-form img.loader').fadeOut('slow', function() {
                                $(this).remove()
                            });
                            $('#submit').removeAttr('disabled');
                        }
                    );
                });
                return false;
            });
        });

    }); // end document ready function

    /* ==================================================
        Preloader Init
        ===============================================*/
    $(window).on('load', function() {
    setTimeout(function() {
        $(".se-pre-con").fadeOut("slow");
    }, 3000); // 3000 ms = 3 detik
    });

})(jQuery); // End jQuery



//Dark Mode ==============================================
let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
  document.body.classList.remove('darkmode')
  localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem('darkmode')
  darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})
///==========

  // On page load, restore mode
  window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
      darkIcon.classList.remove('fa-moon');
      darkIcon.classList.add('fa-sun');
    }
  });




  //LOADER MABIRO

  window.addEventListener('load', () => {
    // Delay 1.2 detik sebelum splash screen menghilang
    setTimeout(() => {
      const splash = document.getElementById('app-splash');
      splash.classList.add('hidden');
    }, 2000); // 1200ms = 1.2 detik
  });
