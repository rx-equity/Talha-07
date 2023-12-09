/**
 
 * @link    http://dense.rah.pw
 * @license MIT
 */

/**
 * @name jQuery
 * @class
 */

/**
 * @name fn
 * @class
 * @memberOf jQuery
 */

(function(factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else {
        factory(window.jQuery || window.Zepto);
    }
}(function($) {
    'use strict';



    var pathStack = [],

        /**
         * Methods.
         */

        methods = {},


        regexHasProtocol = /^([a-z]:)?\/\//i,


        regexSuffix = /\.\w+$/,

        /**
         * Device pixel ratio.
         */

        devicePixelRatio;

    /**
     * @param {Object} [options={}] Options
     * @param {Boolean} [options.ping=null] Check image existence. If the default <code>NULL</code> checks local images, <code>FALSE</code> disables checking and <code>TRUE</code> checks even external images cross-domain
     * @param {String} [options.dimensions=preserve] What to do with the image's <code>width</code> and <code>height</code> attributes. Either <code>update</code>, <code>remove</code> or <code>preserve</code>
     * @param {String} [options.glue=_] String that glues the retina "nx" suffix to the image. This option can be used to change the naming convention between the two commonly used practices, <code>image@2x.jpg</code> and <code>image_2x.jpg</code>
     * @param {Array} [options.skipExtensions=['svg']] Skipped image file extensions. There might be situations where you might want to exclude vector image formats
     * @return {Object} this
     * @method init
     * @memberof jQuery.fn.dense
     * @fires jQuery.fn.dense#denseRetinaReady.dense
     * @example
     * $('img').dense({
     *  ping: false,
     *  dimension: 'update'
     * });
     */

    methods.init = function(options) {
        options = $.extend({
            ping: null,
            dimensions: 'preserve',
            glue: '_',
            skipExtensions: ['svg']
        }, options);

        this.each(function() {
            var $this = $(this);

            if (!$this.is('img') || $this.hasClass('dense-image')) {
                return;
            }

            $this.addClass('dense-image dense-loading');

            var image = methods.getImageAttribute.call(this),
                originalImage = $this.attr('src'),
                ping = false,
                updateImage;

            if (!image) {
                if (!originalImage || devicePixelRatio === 1 || $.inArray(originalImage.split('.').pop().split(/[\?\#]/).shift(), options.skipExtensions) !== -1) {
                    $this.removeClass('dense-image dense-loading');
                    return;
                }

                image = originalImage.replace(regexSuffix, function(extension) {
                    return options.glue + devicePixelRatio + 'x' + extension;
                });

                ping = options.ping !== false && $.inArray(image, pathStack) === -1 && (options.ping === true || !regexHasProtocol.test(image) || image.indexOf('//' + document.domain) === 0 || image.indexOf(document.location.protocol + '//' + document.domain) === 0);
            }

            updateImage = function() {
                var readyImage = function() {
                    $this.removeClass('dense-loading').addClass('dense-ready').trigger('denseRetinaReady.dense');
                };

                $this.attr('src', image);

                if (options.dimensions === 'update') {
                    $this.dense('updateDimensions').one('denseDimensionChanged', readyImage);
                } else {
                    if (options.dimensions === 'remove') {
                        $this.removeAttr('width height');
                    }

                    readyImage();
                }
            };

            if (ping) {
                $.ajax({
                        url: image,
                        type: 'HEAD'
                    })
                    .done(function(data, textStatus, jqXHR) {
                        var type = jqXHR.getResponseHeader('Content-type');

                        if (!type || type.indexOf('image/') === 0) {
                            pathStack.push(image);
                            updateImage();
                        }
                    });
            } else {
                updateImage();
            }
        });

        return this;
    };

    /**
      to detect when the action is done.
     *
     * @return {Object} this
     * @method updateDimensions
     * @memberof jQuery.fn.dense
     * @fires jQuery.fn.dense#denseDimensionChanged.dense
     * @example
     * var image = $('img').dense('updateDimensions');
     */

    methods.updateDimensions = function() {
        return this.each(function() {
            var img, $this = $(this),
                src = $this.attr('src');

            if (src) {
                img = new Image();
                img.src = src;

                $(img).on('load.dense', function() {
                    $this.attr({
                        width: img.width,
                        height: img.height
                    }).trigger('denseDimensionChanged.dense');
                });
            }
        });
    };

    /**
     * Gets device pixel ratio rounded up to the closest integer.
     *
     * @return {Integer} The pixel ratio
     * @method devicePixelRatio
     * @memberof jQuery.fn.dense
     * @example
     * var ratio = $(window).dense('devicePixelRatio');
     * alert(ratio);
     */

    methods.devicePixelRatio = function() {
        var pixelRatio = 1;

        if ($.type(window.devicePixelRatio) !== 'undefined') {
            pixelRatio = window.devicePixelRatio;
        } else if ($.type(window.matchMedia) !== 'undefined') {
            $.each([1.3, 2, 3, 4, 5, 6], function(key, ratio) {
                var mediaQuery = [
                    '(-webkit-min-device-pixel-ratio: ' + ratio + ')',
                    '(min-resolution: ' + Math.floor(ratio * 96) + 'dpi)',
                    '(min-resolution: ' + ratio + 'dppx)'
                ].join(',');

                if (!window.matchMedia(mediaQuery).matches) {
                    return false;
                }

                pixelRatio = ratio;
            });
        }

        return Math.ceil(pixelRatio);
    };

    /**
     * @return {String|Boolean} The attribute value
     * @method getImageAttribute
     * @memberof jQuery.fn.dense
     * @example
     * var image = $('<div data-1x="image.jpg" data-2x="image_2x.jpg" />').dense('getImageAttribute');
     * $('body').css('background-image', 'url(' + image + ')');
     */

    methods.getImageAttribute = function() {
        var $this = $(this).eq(0),
            image = false,
            url;

        for (var i = 1; i <= devicePixelRatio; i++) {
            url = $this.attr('data-' + i + 'x');

            if (url) {
                image = url;
            }
        }

        return image;
    };

    devicePixelRatio = methods.devicePixelRatio();

    /**
     * Dense offers few methods and options that can be used to both customize the
     * plugin's functionality and return resulting values. All interaction is done through
     * the <code>$.fn.dense()</code> method, that accepts a called method and its options
     * object as its arguments. Both arguments are optional, and either one can be omitted.
     *
     * @param {String} [method=init] The called method
     * @param {Object} [options={}] Options passed to the method
     * @class dense
     * @memberof jQuery.fn
     */

    $.fn.dense = function(method, options) {
        if ($.type(method) !== 'string' || $.type(methods[method]) !== 'function') {
            options = method;
            method = 'init';
        }

        return methods[method].call(this, options);
    };

    /**
     * Initialize automatically when document is ready.
     *
     * Dense is initialized automatically if the body element
     * has a <code>dense-retina</code> class.
     */

    $(function() {
        $('body.dense-retina img').dense();
    });

    /**
     * This event is invoked when a retina image has finished loading.
     *
     * @event jQuery.fn.dense#denseRetinaReady.dense
     * @type {Object}
     */

    /**
     * This event is invoked when an image's dimension values
     * have been updated by the <code>updateDimensions</code>
     * method.
     *
     * @event jQuery.fn.dense#denseDimensionChanged.dense
     * @type {Object}
     */
}));