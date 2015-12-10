

        var showFilter = 'True';
        var initOpen = false;
        if (showFilter == 'True') {
            initOpen = true;
        }

        $(document).ready(function() {

            var slideout = $('#slideout');

            $("#click").toggle(function() {
                slideout.animate({
                    left: '-210px'
                }, {
                    queue: false,
                    duration: 500
                });
            }, function() {
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
            $(window).scroll(function() {
                var windowpos = $(window).scrollTop();
                if (windowpos >= pos.top + 68) {
                    s.addClass("stick");
                    f.addClass("filterStick");
                    c.addClass("filterSlide");
                    j.addClass("journeyStick");
                    if ($("#expandTimeline").length == 0) {
                        $("#timeline-embed").append("<div id='expandTimeline'></div>");
                        $("#expandTimeline").click(function() {
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

            $("#expandTimeline").click(function() {
                $("#timeline-embed").toggleClass("sticky");
            });


        });


        $("#listView").click(function() {
            $(".tileContent").addClass("listDisplay");
            $("#listView").removeClass("view-inactive");
            $("#tileView").addClass("view-inactive");
        });

        $("#tileView").click(function() {
            $(".tileContent").removeClass("listDisplay");
            $("#listView").addClass("view-inactive");
            $("#tileView").removeClass("view-inactive");
        });

        $(function() {
            $('.toggleBtn').click(function(event) {
                event.preventDefault();
                $('img:visible', this).hide().siblings().show();
            });
        });

        $("#timeline-embed").delegate(".tl-timemarker", "click", function () {

            //console.log($(this).find("div.nodeId"));
            var nodeIdElement = $(this).find("div.nodeId");
            var nodeId = nodeIdElement.text();
            var scopeElement = document.getElementById('currentNodeId');
            var $scope = angular.element(scopeElement).scope();
            $scope.TimelineItemSelect(nodeId);
            $scope.$apply();
        });


        //document.querySelector('#p1').addEventListener('mdl-componentupgraded', function () {
        //    //console.log('test');
        //    this.MaterialProgress.setProgress(44);
        //});

        $(window).bind('scroll', function () {
            if ($(window).scrollTop() > 20) {
                $('.mini-footer').hide();
            }
            else {
                $('.mini-footer').show();
            }
        });

       
