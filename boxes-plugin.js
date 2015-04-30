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

            $(".box").addClass("click-other-box");
            $(target).addClass("click-box");
            $(target).find(".title").removeClass("left").removeClass("right").removeClass("top").removeClass("bottom");
            $(target).find(".img").addClass("img-off");
            $(target).find(".title").addClass("eye").removeClass("title").removeClass("thumbnail");
            $(target).find(".info").removeClass("info-off").addClass("info-box");
            $(target).find("p").addClass("p-off");

        },
            clickoff = function(e) {
            var target = $(e.target).parentsUntil(".end", ".box");
            console.log("TARGET: " + target);

            $(".box").removeClass("click-other-box");
            $(target).removeClass("click-box");
            $(target).find(".img").removeClass("img-off");
            $(target).find(".title").removeClass("eye").addClass("title").addClass("thumbnail");
            $(target).find(".info").addClass("info-off").removeClass("info-box");
            $(target).find("p").removeClass("p-off");
        };

        $(".title").on("click", clickon); 
        $(".on").off("click", clickoff); 
    });
})(jQuery);

