/* When document has finished loading. */
$(document).ready(function () {

    //******************* WOW ANIMATION REVEAL ******************
    //***********************************************************
    /* This activate wow.js for: Reveal Animations When You Scroll*/
    let wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function (box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null, // optional scroll container selector, otherwise use window,
        resetAnimation: true, // reset animation on end (default is true)
    });
    wow.init();
    //******************* END WOW ANIMATION REVEAL ******************
    //***************************************************************



    //******************* MODAL FOR PROJECTS ******************
    //*********************************************************
    const projects = [{
            "name": "Weekly Meal Plan",
            "descriptions": ["A Web Application that allows you to plan meals for a set period of time and helps you keep track of your household's plan program.", "Some key features include being able to create your own meals and categories, as well as upload pictures of your plates."],
            "techs": ["HTML5", "Bootstrap4", "CSS3", "JQuery", "JavaScript", "Node/Express JS", "MongoDB"],
            "url": "http://www.ourmealplans.com/",
            "pictures": ["./img/portfolio/0-details1.gif", "./img/portfolio/0-details2.webp", "./img/portfolio/meal-plan-display.webp"]
                },
        {
            "name": "Papaman Quest",
            "descriptions": ["A mobile platforming game featuring a character of my own design.", "All assets were designed and implemented by me using tools such as Adobe Flash.","LibGDX is a Java framework that allows to export games for Android, IOS and Desktop."],
            "techs": ["Java", "LibGDX", "Android Studio"],
            "pictures": ["./img/portfolio/1-details1.gif", "./img/portfolio/1-details2.webp", "./img/portfolio/1-details3.webp"]
                },
        {
            "name": "Landing Page",
            "descriptions": ["Simple but effective landing page created to advertise my HTML5 Pokemon Card Game."],
            "techs": ["HTML5", "Bootstrap4","CSS3", "JavaScript", "JQuery"],
            "url": "https://pokefangame.jlreategui.com/",
            "pictures": ["./img/portfolio/2-details1.gif", "./img/portfolio/landing-page-display.webp"]
                },
        {
            "name": "Diet Assistant",
            "descriptions": ["Mobile App used to help track eating and exercising habits to encourage a healthier lifestyle.", "Some key features include registering different meals for breakfast, lunch and dinner based on healthy or unhealthy categories."],
            "techs": ["Java", "LibGDX", "Android Studio"],
            "pictures": ["./img/portfolio/3-details1.gif", "./img/portfolio/3-details2.webp"]
                },
        {
            "name": "Password Manager",
            "descriptions": ["A Web Application that allows you to register and maintain your accounts and passwords for various applications and websites.", "One key feature includes being able to create your own categories."],
            "techs": ["HTML5", "Bootstrap4", "CSS3", "JQuery", "JavaScript", "Node/Express JS", "MySQL"],
            "pictures": ["./img/portfolio/password-manager-display.webp", "./img/portfolio/4-details1.webp"]
                },
        {
            "name": "Pokemon Card Game Mobile",
            "descriptions": ["A Pokemon based fan mobile game designed for fans of Pokemon and card games! Build your team and defeat other players online!", "Some key features include challenging other players online and the AI."],
            "techs": ["Java", "LibGDX", "Node/Express JS", "JavaScript", "Socket IO", "Android Studio"],
            "pictures": ["./img/portfolio/5-details1.gif"]
                },
        {
            "name": "Pokemon Card Web",
            "descriptions": ["A Pokemon based fan Web game designed for fans of Pokemon and card games! Build your team and defeat other players online!", "Some key features include challenging other players online and the AI.", "This HTML5 version supports responsive design that allows players to interact from their preferred device."],
            "techs": ["HTML5", "CSS3", "JavaScript", "JQuery", "Node/Express JS", "Socket IO"],
            "url": "https://pokefangame.jlreategui.com/game.html",
            "pictures": ["./img/portfolio/6-details1.gif","./img/portfolio/6-details2.webp"]
                },
        {
            "name": "Warrior's Soul - Coming Soon!",
            "descriptions": ["A mobile online board game that uses the rock paper scissor concept to create a dynamic mechanic.", "All assets are being designed and implemented by me using tools such as Adobe Flash.","LibGDX is a Java framework that allows to export games for Android, IOS and Desktop."],
            "techs": ["Java", "LibGDX", "Node/Express JS", "JavaScript", "Socket IO", "Android Studio"],
            "pictures": ["./img/portfolio/7-details1.gif"]
                }
            ]

    /* Get labels of modal to replace per project. */
    let $modalTitle = $("#section_portfolio #portfolio_modal .modal-content .modal-title");
    let $modalDescription = $("#section_portfolio #portfolio_modal .modal-content .modal-description");
    let $modalTechs = $("#section_portfolio #portfolio_modal .modal-content .modal-techs");
    let $modalUrl = $("#section_portfolio #portfolio_modal .modal-content .modal-url");
    let $modalPictures = $("#section_portfolio #portfolio_modal .modal-content .modal-pictures");

    /* Get all project from the portfolio */
    let $projects = $("#section_portfolio .portfolio_grid div");

    /* One project is clicked. */
    $projects.click(function (e) {

        //Open Modal.
        $("#portfolio_modal").modal("toggle");

        //Assign the selected project from the list.
        let selectedProject = projects[$(this).attr("data-project-index")];

        //Set the project data into the modal labels.
        $modalTitle.text(selectedProject.name);

        $modalDescription.empty();
        for (const description of selectedProject.descriptions) {
            $modalDescription.append(`<p>${description}</p>`);
        }

        $modalTechs.empty();
        for (const tech of selectedProject.techs) {
            $modalTechs.append(`<li><span class="rounded">${tech}</span></li>`);
        }

        $modalUrl.addClass("d-none");
        if (selectedProject.url) {
            $modalUrl.attr("href", selectedProject.url);
            $modalUrl.removeClass("d-none");
        }

        $modalPictures.empty();
        for (const picture of selectedProject.pictures) {
            $modalPictures.append(`<img src="${picture}" alt="${selectedProject.name}" class="img-fluid pb-3">`);
        }

        return false;
    });
    //******************* END MODAL FOR PROJECTS ******************
    //*************************************************************


    //******************* FIXED MENU ******************
    //*************************************************
    /* Menu fixed on scroll. */
    let nav_offset_top = $("#section_header").height() + 50;

    function navbarFixed() {
        if ($("#section_header").length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $("#section_header .container .navbar").addClass("navbar_fixed");
                } else {
                    $("#section_header .container .navbar").removeClass("navbar_fixed");
                }
            });
        }
    }
    navbarFixed();
    //******************* END FIXED MENU ******************
    //*****************************************************
    
    
    //******************* SMOOTH SCROLL EFFECT ******************
    //***********************************************************
    /* This function allows the scrolling effect triggered by the menu (navbar) and the contact button in the section interested .*/
    $(".navbar-brand, .nav-link, #section_interested .btn").on("click", function (e) {
        e.preventDefault(); //prevent click default behaviour
        var hash = this.hash;

        $("html, body").animate({
            scrollTop: $(hash).offset().top
        }, 1000, function () {
            window.location.hash = hash;
        });

        //Collapse Menu
        $("#navbarNav").collapse("hide");

    });

    /* When Navbar is being shown */
    $("#navbarNav").on("show.bs.collapse", function () {
        //This fix is so that if the menu is in mobile version it always adds the background when opening.
        if (!$("#section_header .container .navbar").hasClass("navbar_fixed")) {
            $("#section_header .container .navbar").addClass("navbar_fixed");
        }
    });

    /* When Navbar is being hidden */
    $("#navbarNav").on("hide.bs.collapse", function () {

        //This fix is so that if the menu is in mobile version, it only removes the background if im in home.
        if ($("#section_header .container .navbar").hasClass("navbar_fixed") && $(window).scrollTop() == 0) {
            $("#section_header .container .navbar").removeClass("navbar_fixed");
        }
    });
    //******************* END SCROLL EFFECT ******************
    //***********************************************************


    //******************* ISOTOPE ******************
    //**********************************************
    /* JQuery variable: get all buttons (li) and portfolio container */
    let $btns = $("#section_portfolio .portfolio-nav ul li");
    let $portfolioContainer = $("#section_portfolio .portfolio_grid");

    //Init default Isotope: All
    $portfolioContainer.isotope({
        "filter": "*"
    });

    /* When click on any of the filter buttons. */
    $btns.click(function (e) {

        //remove active class from all buttons.
        $btns.removeClass("active");

        //Add active class to the current clicked button.
        $(this).addClass("active");
        //Another way: e.target.classList.add("active");

        //getting the attribute  data filter       
        let selector = $(e.target).attr("data-filter");

        //Apply filtering in the grid.
        $portfolioContainer.isotope({
            "filter": selector
        });

        return false;
    });
    
    //******************* END ISOTOPE ******************
    //**************************************************

});


window.onload = function() {
    
    //To automatically call the all button from the beginning so that the .all button starts with the layout of the plugin.
    //This was added so that it fixes the alignment after all the loads.
    $("#section_portfolio .portfolio-nav ul li.active").trigger("click");
}