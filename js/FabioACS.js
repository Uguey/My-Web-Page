"use strict";

/* constants */
var constants = {};

	/* Times for showing up */
	Object.defineProperty(constants, "TIME_FOR_SHOWING_UP_NAVBAR_SECTIONS", {
		value: 2000,
		writable: false
	});
	Object.defineProperty(constants, "TIME_FOR_SHOWING_UP_CS_SUBTITLE", {
		value: 800,
		writable: false
	});
	Object.defineProperty(constants, "TIME_FOR_SHOWING_UP_AND_SUBTITLE", {
		value: 1200,
		writable: false
	});
	Object.defineProperty(constants, "TIME_FOR_SHOWING_UP_BUSINESS_SUBTITLE", {
		value: 1600,
		writable: false
	});

	/* Times for fading in */
	Object.defineProperty(constants, "TIME_FOR_FADING_IN_NAVBAR_SECTIONS", {
		value: 5000,
		writable: false
	});
	Object.defineProperty(constants, "TIME_FOR_FADING_SUBTITLES", {
		value: 3000,
		writable: false
	});

	/* Sizes */
	Object.defineProperty(constants, "SIZE_OF_SCROLL_BAR", {
		value: 17,
		writable: false
	});
	Object.defineProperty(constants, "SIZE_NAVBAR_BROADLY", {
		value: 1015,
		writable: false
	});
	Object.defineProperty(constants, "SIZE_NAVBAR_NARROWLY", {
		value: 984,
		writable: false
	});

	// Fixed name and subtitles
	Object.defineProperty(constants, "SIZE_SCREEN_TITLE_MIN_FIXED", {
		value: 450,
		writable: false
	});
	Object.defineProperty(constants, "SIZE_SCREEN_SUBTITLE_MIN_FIXED", {
		value: 631,
		writable: false
	});
	Object.defineProperty(constants, "SIZE_SCREEN_TITLE_MAX_FIXED", {
		value: 1366,
		writable: false
	});
	Object.defineProperty(constants, "SIZE_SCREEN_SUBTITLE_MAX_FIXED", {
		value: 1250,
		writable: false
	});

	// Sizing name and subtitles
	Object.defineProperty(constants, "PROPORTION_SCREEN_MYNAME", {
		value: 130,
		writable: false
	});
	Object.defineProperty(constants, "PROPORTION_SCREEN_SUBTITLES", {
		value: 378.78,
		writable: false
	});
	Object.defineProperty(constants, "MIN_SIZE_MYNAME", {
		value: 3.46153,
		writable: false
	});
	Object.defineProperty(constants, "MIN_SIZE_SUBTITLES", {
		value: 1.6667,
		writable: false
	});
	Object.defineProperty(constants, "MAX_SIZE_MYNAME", {
		value: 10.50769,
		writable: false
	});
	Object.defineProperty(constants, "MAX_SIZE_SUBTITLES", {
		value: 3.3,
		writable: false
	});
	Object.defineProperty(constants, "SIZE_MYNAME", {
		value: 1000,
		writable: false
	});

	/* Position of name and subtitles */
	Object.defineProperty(constants, "PROPORTION_HEIGHT_WIDTH", {
		value: 1.22,
		writable: false
	});

	/* Mobile width */
	Object.defineProperty(constants, "MOBILE_WIDTH", {
		value: 768,
		writable: false
	});


/* Global variables */
var landscapeBefore = false;


/* When the document is ready */
$(document).ready(function(){

	// Tweak the container Up
	var width = window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;

	var height = window.innerHeight
	|| document.documentElement.clientHeight
	|| document.body.clientHeight;

	tweakContainerUp(width, height);


	/* Solve problems with different browsers */
	var userAgent = navigator.userAgent.toLowerCase();
	var isAndroid = userAgent.indexOf("android") > -1;

	// Show the Nav Bar and the sections when is not an Android Phone
	if (isAndroid == false) {
		setTimeout(everythingShowUp, constants.TIME_FOR_SHOWING_UP_NAVBAR_SECTIONS);

		setTimeout(CSShowUp, constants.TIME_FOR_SHOWING_UP_CS_SUBTITLE);
		setTimeout(andShowUp, constants.TIME_FOR_SHOWING_UP_AND_SUBTITLE);
		setTimeout(businessShowUp, constants.TIME_FOR_SHOWING_UP_BUSINESS_SUBTITLE);
	}

	// Show the Nav Bar and the sections when is an Android Phone
	else showEverything();


	// Place the Navbar in the middle of the screen and make it responsive
	navBarResponsive(width);

	// Tweak the text on the screen
	resizeTitle(width);
	resizeSubtitle(width);
	placeText(width);

	$(window).resize(function(){

		width = window.innerWidth
		|| document.documentElement.clientWidth
		|| document.body.clientWidth;

		height = window.innerHeight
		|| document.documentElement.clientHeight
		|| document.body.clientHeight;

		tweakContainerUp(width, height);
		navBarResponsive(width);
		resizeTitle(width);
		resizeSubtitle(width);
		placeText(width);	

	});

	// Show the NavBar when the user scrolls
	$(window).scroll(showNavBar);

	// Show the NavBar when the user clicks on the elements
	$("#navbarIconA").click(function(){setTagNavBarActive(0);});
	$("#navbarProfileA").click(function(){setTagNavBarActive(1);});
	$("#navbarAboutMeA").click(function(){setTagNavBarActive(2);});
	$("#navbarSkillsCVA").click(function(){setTagNavBarActive(3);});
	$("#navbarContactMeA").click(function(){setTagNavBarActive(4);});
	$("#navBarButtonCollapse").click(function(){setTagNavBarActive(5);});

	// Solve the problem with background images of chrome Android
	$(window).on("orientationchange", function () {
		if (isAndroid==true) reloadWindow();
	});

});


	/* Function definitions */

	// Showing Up
	function CSShowUp () {
		$("#CSUp").fadeTo(constants.TIME_FOR_FADING_SUBTITLES,1);
		$("#CSUp").css("display", "inline");
	}

	function andShowUp () {
		$("#andUp").fadeTo(constants.TIME_FOR_FADING_SUBTITLES,1);
		$("#andUp").css("display", "inline");
	}

	function businessShowUp () {
		$("#businessUp").fadeTo(constants.TIME_FOR_FADING_SUBTITLES,1);
		$("#businessUp").css("display", "inline");
	}

	function everythingShowUp () {
		$("#navBarShowUp").fadeTo(constants.TIME_FOR_FADING_IN_NAVBAR_SECTIONS,1);
		$("#navBarShowUp").css("display", "block");

		$("#profile").fadeTo(constants.TIME_FOR_FADING_IN_NAVBAR_SECTIONS,1);
		$("#profile").css("display", "block");
		$("#aboutMe").fadeTo(constants.TIME_FOR_FADING_IN_NAVBAR_SECTIONS,1);
		$("#aboutMe").css("display", "block");
		$("#skillsCV").fadeTo(constants.TIME_FOR_FADING_IN_NAVBAR_SECTIONS,1);
		$("#skillsCV").css("display", "block");
		$("#contactMe").fadeTo(constants.TIME_FOR_FADING_IN_NAVBAR_SECTIONS,1);
		$("#contactMe").css("display", "block");
		$("footer").fadeTo(constants.TIME_FOR_FADING_IN_NAVBAR_SECTIONS,1);
		$("footer").css("display", "block");
	}

	function showEverything	() {
		$("#CSUp").css("display", "inline");
		$("#andUp").css("display", "inline");
		$("#businessUp").css("display", "inline");
		$("#navBarShowUp").css("display", "block");
		$("#profile").css("display", "block");
		$("#aboutMe").css("display", "block");
		$("#skillsCV").css("display", "block");
		$("#contactMe").css("display", "block");
		$("footer").css("display", "block");
	}


	// Section Up

	// Container
	function tweakContainerUp (width, height){
		$("#up").css({
			"width": (width-constants.SIZE_OF_SCROLL_BAR),
			"height": height
		});
	}

	// NavBar
	function showNavBar () {
		$("#navBarShowUp").stop(false, true);
		$("#navBarShowUp").css("display", "block");
	}

	function setTagNavBarActive (tag) {
		switch (tag) {
			case 0:
				$("#navbarProfileLi").removeClass("active");
				$("#navbarAboutMeLi").removeClass("active");
				$("#navbarSkillsCVLi").removeClass("active");
				$("#navbarContactMeLi").removeClass("active");
				$("#navbarIconLi").addClass("active");	

				$("#navBarShowUp").stop(false, true);
				$("#navBarShowUp").css("display", "block");
				break;
			case 1:
				$("#navbarAboutMeLi").removeClass("active");
				$("#navbarSkillsCVLi").removeClass("active");
				$("#navbarContactMeLi").removeClass("active");
				$("#navbarIconLi").removeClass("active");	
				$("#navbarProfileLi").addClass("active");

				$("#navBarShowUp").stop(false, true);	
				$("#navBarShowUp").css("display", "block");
				break;
			case 2:
				$("#navbarProfileLi").removeClass("active");
				$("#navbarSkillsCVLi").removeClass("active");
				$("#navbarContactMeLi").removeClass("active");
				$("#navbarIconLi").removeClass("active");
				$("#navbarAboutMeLi").addClass("active");	

				$("#navBarShowUp").stop(false, true);
				$("#navBarShowUp").css("display", "block");						
				break;
			case 3:
				$("#navbarProfileLi").removeClass("active");
				$("#navbarAboutMeLi").removeClass("active");
				$("#navbarContactMeLi").removeClass("active");
				$("#navbarIconLi").removeClass("active");
				$("#navbarSkillsCVLi").addClass("active");

				$("#navBarShowUp").stop(false, true);
				$("#navBarShowUp").css("display", "block");
				break;
			case 4:
				$("#navbarProfileLi").removeClass("active");
				$("#navbarAboutMeLi").removeClass("active");
				$("#navbarSkillsCVLi").removeClass("active");
				$("#navbarIconLi").removeClass("active");				
				$("#navbarContactMeLi").addClass("active");

				$("#navBarShowUp").stop(false, true);
				$("#navBarShowUp").css("display", "block");
				break;
			case 5:
				$("#navBarShowUp").stop(false, true);
				$("#navBarShowUp").css("display", "block");
				break;
		}
	}

	function navBarResponsive (width) {
		if (width < constants.SIZE_NAVBAR_BROADLY) {
			$("#fixNavBarAndAddTransparency").css("width", "100%");
			$("#fixNavBarAndAddTransparency").css("left", "0px");
		}
		else {
			$("#fixNavBarAndAddTransparency").css("width", constants.SIZE_NAVBAR_NARROWLY);
			var middle = (width-constants.SIZE_NAVBAR_NARROWLY)/2;
			$("#fixNavBarAndAddTransparency").css("left", middle);
		}
	}	

	// Text
	function resizeTitle (width) {

		if (width > constants.SIZE_SCREEN_TITLE_MAX_FIXED)
			$("#myNameUp").css("font-size", constants.MAX_SIZE_MYNAME+"em");

		else if ((width <= constants.SIZE_SCREEN_TITLE_MAX_FIXED) 
			&& (width > constants.SIZE_SCREEN_TITLE_MIN_FIXED)) {
				var emsTitle = width/constants.PROPORTION_SCREEN_MYNAME;
				$("#myNameUp").css("font-size", emsTitle+"em");
		}

		else $("#myNameUp").css("font-size", constants.MIN_SIZE_MYNAME+"em");
	}

	function resizeSubtitle (width) {

		if (width > constants.SIZE_SCREEN_SUBTITLE_MAX_FIXED)
			$(".subtitlesUp").css("font-size", constants.MAX_SIZE_SUBTITLES+"em");

		else if ((width <= constants.SIZE_SCREEN_SUBTITLE_MAX_FIXED) 
			&& (width > constants.SIZE_SCREEN_SUBTITLE_MIN_FIXED)) {
				var emsSubtitles = width/constants.PROPORTION_SCREEN_SUBTITLES;
				$(".subtitlesUp").css("font-size", emsSubtitles+"em");
		}

		else
			$(".subtitlesUp").css("font-size", constants.MIN_SIZE_SUBTITLES+"em");
	}

	function placeText (width) {
		if (width > constants.SIZE_SCREEN_TITLE_MAX_FIXED) {
			var middle = (width-constants.SIZE_MYNAME)/2;
			$(".textUp").css("left", middle);
			$(".textUp").css("top", "33%");
		}
		else {
			$(".textUp").css("left", "14%");
			var left = $(".textUp").css("left");
			left = Number(left.slice(0, left.indexOf("px")));
			var positionTop = constants.PROPORTION_HEIGHT_WIDTH*left;
			$(".textUp").css("top", positionTop);
		}
	}


	// Solving problems in some browsers

	// Android
	function reloadWindow () {

		// Portrait
		if ((window.orientation == 0) && (landscapeBefore == true)){
			location.reload();
			landscapeBefore = false;
		}

		// Landscape
		else {
			landscapeBefore = true;
		}
	}