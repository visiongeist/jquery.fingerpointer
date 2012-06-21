/*
 * Fingerpointer jQuery plugin
 * version 0.5
 * author: Damien Antipa
 * http://github.com/dantipa/jquery.fingerpointer
 */
(function( $ ){
    var isTouch = 'ontouchstart' in window;

    /**
     *
     * @param types
     * @param selector
     * @param data
     * @param fn
     * @param one
     * @return {*}
     */
    $.fn.finger = function ( types, selector, data, fn, /*INTERNAL*/ one ) {
        if (isTouch) {
            this.on( types, selector, data, fn, one );
        }
        return this;
    };

    /**
     *
     * @param types
     * @param selector
     * @param data
     * @param fn
     * @param one
     * @return {*}
     */
    $.fn.pointer = function ( types, selector, data, fn, /*INTERNAL*/ one ) {
        if (!isTouch) {
            this.on( types, selector, data, fn, one );
        }
        return this;
    };

    /**
     *
     * @param typesFinger
     * @param typesPointer
     * @param selector
     * @param data
     * @param fn
     * @param one
     * @return {*}
     */
    $.fn.fipo = function ( typesFinger, typesPointer, selector, data, fn, /*INTERNAL*/ one ) {
        if (isTouch) {
            this.on( typesFinger, selector, data, fn, one );
        } else {
            this.on( typesPointer, selector, data, fn, one );
        }
        return this;
    };
})( jQuery );
