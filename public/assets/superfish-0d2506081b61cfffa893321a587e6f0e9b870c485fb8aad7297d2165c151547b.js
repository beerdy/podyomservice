!function(e){"use strict";var s=function(){var s={bcClass:"sf-breadcrumb",menuClass:"sf-js-enabled",anchorClass:"sf-with-ul",menuArrowClass:"sf-arrows"},n=function(){var s=/iPhone|iPad|iPod/i.test(navigator.userAgent);return s&&e(window).load(function(){e("body").children().on("click",e.noop)}),s}(),o=function(){var e=document.documentElement.style;return"behavior"in e&&"fill"in e&&/iemobile/i.test(navigator.userAgent)}(),t=function(e,n){var o=s.menuClass;n.cssArrows&&(o+=" "+s.menuArrowClass),e.toggleClass(o)},i=function(n,o){return n.find("li."+o.pathClass).slice(0,o.pathLevels).addClass(o.hoverClass+" "+s.bcClass).filter(function(){return e(this).children(o.popUpSelector).hide().show().length}).removeClass(o.pathClass)},r=function(e){e.children("a").toggleClass(s.anchorClass)},a=function(e){var s=e.css("ms-touch-action");s="pan-y"===s?"auto":"pan-y",e.css("ms-touch-action",s)},h=function(s,t){var i="li:has("+t.popUpSelector+")";e.fn.hoverIntent&&!t.disableHI?s.hoverIntent(u,p,i):s.on("mouseenter.superfish",i,u).on("mouseleave.superfish",i,p);var r="MSPointerDown.superfish";n||(r+=" touchend.superfish"),o&&(r+=" mousedown.superfish"),s.on("focusin.superfish","li",u).on("focusout.superfish","li",p).on(r,"a",t,l)},l=function(s){var n=e(this),o=n.siblings(s.data.popUpSelector);o.length>0&&o.is(":hidden")&&(n.one("click.superfish",!1),"MSPointerDown"===s.type?n.trigger("focus"):e.proxy(u,n.parent("li"))())},u=function(){var s=e(this),n=d(s);clearTimeout(n.sfTimer),s.siblings().superfish("hide").end().superfish("show")},p=function(){var s=e(this),o=d(s);n?e.proxy(f,s,o)():(clearTimeout(o.sfTimer),o.sfTimer=setTimeout(e.proxy(f,s,o),o.delay))},f=function(s){s.retainPath=e.inArray(this[0],s.$path)>-1,this.superfish("hide"),this.parents("."+s.hoverClass).length||(s.onIdle.call(c(this)),s.$path.length&&e.proxy(u,s.$path)())},c=function(e){return e.closest("."+s.menuClass)},d=function(e){return c(e).data("sf-options")};return{hide:function(s){if(this.length){var n=this,o=d(n);if(!o)return this;var t=o.retainPath===!0?o.$path:"",i=n.find("li."+o.hoverClass).add(this).not(t).removeClass(o.hoverClass).children(o.popUpSelector),r=o.speedOut;s&&(i.show(),r=0),o.retainPath=!1,o.onBeforeHide.call(i),i.stop(!0,!0).animate(o.animationOut,r,function(){var s=e(this);o.onHide.call(s)})}return this},show:function(){var e=d(this);if(!e)return this;var s=this.addClass(e.hoverClass),n=s.children(e.popUpSelector);return e.onBeforeShow.call(n),n.stop(!0,!0).animate(e.animation,e.speed,function(){e.onShow.call(n)}),this},destroy:function(){return this.each(function(){var n,o=e(this),i=o.data("sf-options");return!!i&&(n=o.find(i.popUpSelector).parent("li"),clearTimeout(i.sfTimer),t(o,i),r(n),a(o),o.off(".superfish").off(".hoverIntent"),n.children(i.popUpSelector).attr("style",function(e,s){return s.replace(/display[^;]+;?/g,"")}),i.$path.removeClass(i.hoverClass+" "+s.bcClass).addClass(i.pathClass),o.find("."+i.hoverClass).removeClass(i.hoverClass),i.onDestroy.call(o),void o.removeData("sf-options"))})},init:function(n){return this.each(function(){var o=e(this);if(o.data("sf-options"))return!1;var l=e.extend({},e.fn.superfish.defaults,n),u=o.find(l.popUpSelector).parent("li");l.$path=i(o,l),o.data("sf-options",l),t(o,l),r(u),a(o),h(o,l),u.not("."+s.bcClass).superfish("hide",!0),l.onInit.call(this)})}}}();e.fn.superfish=function(n){return s[n]?s[n].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof n&&n?e.error("Method "+n+" does not exist on jQuery.fn.superfish"):s.init.apply(this,arguments)},e.fn.superfish.defaults={popUpSelector:"ul,.sf-mega",hoverClass:"sfHover",pathClass:"overrideThisToUse",pathLevels:1,delay:800,animation:{height:"show"},animationOut:{height:"hide"},speed:"normal",speedOut:"fast",cssArrows:!0,disableHI:!1,onInit:e.noop,onBeforeShow:e.noop,onShow:e.noop,onBeforeHide:e.noop,onHide:e.noop,onIdle:e.noop,onDestroy:e.noop},e.fn.extend({hideSuperfishUl:s.hide,showSuperfishUl:s.show})}(jQuery),$(window).load(function(){$(".sf-menu").superfish()});