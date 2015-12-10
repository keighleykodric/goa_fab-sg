/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	// A $( document ).ready() block.

	'use strict';

	var showFilter = 'True';
	var initOpen = false;
	if (showFilter == 'True') {
	    initOpen = true;
	}

	(function () {

	    var slideout = $('#slideout');

	    $("#click").toggle(function () {
	        slideout.animate({
	            left: '-210px'
	        }, {
	            queue: false,
	            duration: 500
	        });
	    }, function () {
	        slideout.animate({
	            left: '0px'
	        }, {
	            queue: false,
	            duration: 500
	        });
	    });

	    var s = $("#timeline-embed");
	    var f = $("#slideout");
	    var c = $("#slideContainer");
	    var j = $("#journey");
	    var pos = s.position();
	    $(window).scroll(function () {
	        var windowpos = $(window).scrollTop();
	        if (windowpos >= pos.top + 68) {
	            s.addClass("stick");
	            f.addClass("filterStick");
	            c.addClass("filterSlide");
	            j.addClass("journeyStick");
	            if ($("#expandTimeline").length == 0) {
	                $("#timeline-embed").append("<div id='expandTimeline'></div>");
	                $("#expandTimeline").click(function () {
	                    $("#timeline-embed").toggleClass("sticky");
	                    $("#slideout.filterStick").toggleClass("sideSticky");
	                    $("#journey.journeyStick").toggleClass("sideSticky");
	                });
	            }
	        } else {
	            s.removeClass("stick");
	            f.removeClass("filterStick");
	            c.removeClass("filterSlide");
	            j.removeClass("journeyStick");
	            $("#expandTimeline").remove();
	        }
	    });

	    $("#expandTimeline").click(function () {
	        $("#timeline-embed").toggleClass("sticky");
	    });
	});

	(function () {
	    $("#listView").click(function () {
	        $(".tileContent").addClass("listDisplay");
	        $("#listView").removeClass("view-inactive");
	        $("#tileView").addClass("view-inactive");
	    });
	});

	(function () {
	    $("#tileView").click(function () {
	        $(".tileContent").removeClass("listDisplay");
	        $("#listView").addClass("view-inactive");
	        $("#tileView").removeClass("view-inactive");
	    });
	});

	(function () {
	    $('.toggleBtn').click(function (event) {
	        event.preventDefault();
	        $('img:visible', this).hide().siblings().show();
	    });
	});

	(function () {
	    $("#timeline-embed").delegate(".tl-timemarker", "click", function () {

	        //console.log($(this).find("div.nodeId"));
	        var nodeIdElement = $(this).find("div.nodeId");
	        var nodeId = nodeIdElement.text();
	        var scopeElement = document.getElementById('currentNodeId');
	        var $scope = angular.element(scopeElement).scope();
	        $scope.TimelineItemSelect(nodeId);
	        $scope.$apply();
	    });
	});

	//document.querySelector('#p1').addEventListener('mdl-componentupgraded', function () {
	//    //console.log('test');
	//    this.MaterialProgress.setProgress(44);
	//});

	(function () {
	    $(window).bind('scroll', function () {
	        if ($(window).scrollTop() > 20) {
	            $('.mini-footer').hide();
	        } else {
	            $('.mini-footer').show();
	        }
	    });
	});

	(function (window, undefined) {

	    // normally variables & functions start with a lowercase letter but with modules, that is not the case.
	    // The general tradition is to start them with a capital letter instead.
	    function MyModule() {

	        // `this` refers to the instance of `MyModule` when created
	        this.myMethod = function myMethod() {
	            //alert( 'my method' );
	            console.log("Window loaded. Hurray!!!");

	            (function () {
	                $("#viewSelector").click(function () {
	                    $(".tileContent").removeClass("listDisplay");
	                    $("#listView").addClass("view-inactive");
	                    $("#tileView").removeClass("view-inactive");
	                });
	            });

	            (function () {
	                $('.toggleBtn').click(function (event) {
	                    event.preventDefault();
	                    $('img:visible', this).hide().siblings().show();
	                });
	            });
	        };

	        // note that we still use a function declaration even when using a function expression.
	        // for more information on why, check out: http://kangax.github.io/nfe/
	        this.myOtherMethod = function myOtherMethod() {
	            //alert( 'my other method' );
	        };
	    }

	    // expose access to the constructor
	    window.MyModule = MyModule;
	})(window);

	// example usage
	var myModule = new MyModule();

	myModule.myMethod(); // alerts "my method"
	myModule.myOtherMethod(); // alerts "my other method"

	var Module = (function () {

	    var _privateMethod = function _privateMethod() {
	        // private stuff
	    };

	    var publicMethod = function publicMethod() {
	        _privateMethod();
	    };

	    return {
	        publicMethod: publicMethod
	    };
	})();

/***/ }
/******/ ]);