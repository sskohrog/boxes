(function($) {
    $(function() {
        var getEdge = function(e) {
            var edge,
                offset = $(e.target).offset(),
                offsetX = offset.left,
                offsetY = offset.top,
                side = $(e.target).width(),
                mouseX = e.pageX,
                mouseY = e.pageY,
                x = mouseX - offsetX,
                y = mouseY - offsetY;
                
            if(x > y) {
                //top/right
                if(y > side - x) {
                    return "right";
                }
                else {
                    return "top";
                }
            } 
            else {
                //bottom/left
                if(y > side - x) {
                    return "bottom";
                }
                else {
                    return "left";
                }
            }   
        }
        var on = function(e) {
          var edge = getEdge(e),
                target = e.target;
 
            if(!$(target).is(".box")) {
                target = $(e.target).parentsUntil(".end", ".box");
            }

            $(target).find(".title").removeClass("off").removeClass("left-slide").removeClass("right-slide").removeClass("top-slide").removeClass("bottom-slide");
            $(target).find(".title").addClass(edge).addClass("on");

        },  off = function(e) {
            var edge = getEdge(e),
            target = e.target;

            if(!$(target).is(".box")) {
                target = $(e.target).parentsUntil(".end", ".box");
            }

            $(target).find(".title").removeClass("left").removeClass("right").removeClass("top").removeClass("bottom");
            $(target).find(".title").removeClass("on").addClass(edge+"-slide");

        };
        $( '.box' ).hover(on,off);

        var clickon = function(e) {
            var target = $(e.target).parentsUntil(".end", ".box");
            console.log("TARGET: " + target);
            $(".title-box").addClass("off").removeClass("bottom-slide").removeClass("top-slide").removeClass("right-slide").removeClass("left-slide");


            if( ( $(target).is("div.box:nth-child(1)" ) || $(target).is("div.box:nth-child(2)") ) || ( $(target).is("div.box:nth-child(3)") || $(target).is("div.box:nth-child(4)") ) ) {
                $("div.box:nth-child(1)").toggleClass("click-box");
                $("div.box:nth-child(2)").toggleClass("click-box");
                $("div.box:nth-child(3)").toggleClass("click-box");
                $("div.box:nth-child(4)").toggleClass("click-box");
            }

            $(".box").toggleClass("click-other-box");
            $(".title-box").toggleClass("title");
            $(target).find(".img").toggleClass("img-off");
            $(target).find(".title-box").toggleClass("eye").toggleClass("thumbnail");
            $(target).find(".info").toggleClass("info-off").toggleClass("info-box");
            $(target).find("p").toggleClass("p-off");

        };
            /*clickoff = function(e) {
            var target = $(e.target).parentsUntil(".end", ".box");
            console.log("TARGET: " + target);

            $(".box").removeClass("click-other-box");
            $(target).removeClass("click-box");
            $(target).find(".img").removeClass("img-off");
            $(target).find(".title-box").removeClass("eye").addClass("title").addClass("thumbnail");
            $(target).find(".info").addClass("info-off").removeClass("info-box");
            $(target).find("p").removeClass("p-off");
        };*/

        $(".title-box").on("click", clickon); 
    });
})(jQuery);

