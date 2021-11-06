/**
 * @file
 * Municode base theme main script.
 */
// eslint-disable-next-line func-names
(function ($) {
    Drupal.behaviors.homePage = {
      attach(context) {
        $('body', context).once('home-page').each(() => {
          if ($('body').is('.path-frontpage')) {
              
            /**
             * Configures slideshow and adds toggle pause button
             */
            const carasoul = $('.section-4 .field--name-field-carousel-');
            console.log(carasoul);
            let slider = '';
  
            if (carasoul.length > 0) {
                console.log('inside')
                carasoul.slick({
                    infinite: true,
                    speed: 1000,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3,
                            }
                        },
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]
                });
            }

        }
    });
    },
};
}(jQuery));