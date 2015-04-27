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
                console.log("GETEDGE");
                console.log("offset:" + offset);
                console.log("offsetX:" + offsetX);
                console.log("offsetY:" + offsetY);
                console.log("side:" + side);
                console.log("mouseX:" + mouseX);
                console.log("mouseY:" + mouseY);
                console.log("x:" + x);
                console.log("y:" + y);
                console.log("target:" + e.target);
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
                target = target.parents('.box')[0];
            }
            $(target).find(".title").removeClass("left-slide").removeClass("right-slide").removeClass("top-slide").removeClass("bottom-slide");
            $(target).find(".title").removeClass("off-left").removeClass("off-right").removeClass("off-top").removeClass("off-bottom");
            $(target).find(".title").addClass(edge).addClass("on");

            console.log("ON");
            console.log("edge:" + edge);
            console.log("target:" + target);

        },  off = function(e) {
            var edge = getEdge(e),
            target = e.target;
            if(!$(target).is(".box")) {
                target = target.parents('.box')[0];
            }

            $(target).find(".title").removeClass("left").removeClass("right").removeClass("top").removeClass("bottom");
            $(target).find(".title").removeClass("on").addClass(edge+"-slide").addClass("off-"+edge);

            console.log("OFF");
            console.log("edge:" + edge);
            console.log("target:" + target);
        };
        $( '.box' ).hover(on,off);
    });
})(jQuery);

