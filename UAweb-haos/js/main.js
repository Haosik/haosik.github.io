$(document).ready(function() {

    $("#owl-step1").owlCarousel({

        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        navigationText: ['<img src="img/prev.png">', '<img src="img/next.png">'],
        pagination: false,


        // "singleItem:true" is a shortcut for:
        // items : 1, 
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });

    $("#owl-step2").owlCarousel({

        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        navigationText: ['<img src="img/prev.png">', '<img src="img/next.png">'],
        pagination: false
            // "singleItem:true" is a shortcut for:
            // items : 1, 
            // itemsDesktop : false,
            // itemsDesktopSmall : false,
            // itemsTablet: false,
            // itemsMobile : false

    });
    $("#owl-step2").trigger('owl.next');

    $("#owl-step3").owlCarousel({

        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        navigationText: ['<img src="img/prev.png">', '<img src="img/next.png">'],
        pagination: false
            // "singleItem:true" is a shortcut for:
            // items : 1, 
            // itemsDesktop : false,
            // itemsDesktopSmall : false,
            // itemsTablet: false,
            // itemsMobile : false

    });

    $("#owl-step3").trigger('owl.next');
    $("#owl-step3").trigger('owl.next');
});
