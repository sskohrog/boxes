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
            target = e.target;
            if($(target).is(".on")) {
                $(target).removeClass("on").addClass("eye").addClass("text");
            }
        },
            clickoff = function(e) {
            target = e.target;
            if($(target).is(".eye")) {
                $(target).addClass("on").removeClass("eye").removeClass("text");
            }
        };

        $(".on").on("click", clickon); 
        $(".eye").off("click", clickon); 
    });
})(jQuery);

