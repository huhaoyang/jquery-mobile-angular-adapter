define(['jquery'], function($) {
    // Button wraps the actual button into another div that is stored in the
    // "slider" property.
    var fn = $.mobile.slider.prototype;
    var oldDestroy = fn.destroy;
    fn.destroy = function() {
        // Destroy the widget instance first to prevent
        // a stack overflow.
        oldDestroy.apply(this, arguments);
        this.slider.remove();
    };
});