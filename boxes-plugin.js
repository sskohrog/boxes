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
            var edge = getEdge(e);
            $(e.target).removeClass("off-".concat(edge)).addClass("on-".concat(edge));
        },  off = function(e) {
            var edge = getEdge(e);
            $(e.target).removeClass("on-".concat(edge)).addClass("off-".concat(edge));
        };
        $( '.box' ).hover(on,off);
    });
})(jQuery);

