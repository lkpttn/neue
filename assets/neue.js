window.NEUE=window.NEUE||{},window.NEUE.ExampleModule=function(){"use strict";function a(){}function b(){}function c(a){var b={configurationOption:!1};f="undefined"!=typeof a&&null!==a?$.extend({},b,a):b,e=!0}function d(){return e?(a(),b(),"We're ready to go!"):void 0}var e=!1,f={};return{initialize:c,getStatus:d}}(),$(document).ready(function(){"use strict";function a(){b.each(function(a,b){b=$(b),b.realVisible(!0)&&b.addClass("come-in")})}var b=$(".js-fade-up-on-scroll");a(),$(window).scroll(a)}),$(document).ready(function(){"use strict";$(".js-jump-scroll").on("click",function(a){a.preventDefault();var b=$(this).attr("href");$("html,body").animate({scrollTop:$(a.target.hash).offset().top},"slow",function(){window.location.hash=b})})}),_.templateSettings={evaluate:/\{\{=(.+?)\}\}/g,interpolate:/\{\{(.+?)\}\}/g,escape:/\{\{-(.+?)\}\}/g},window.NEUE=window.NEUE||{},window.NEUE.LocationFinder=function(){"use strict";function a(a,c){f=a,j="undefined"!=typeof c&&null!==c?$.extend({},k,c):k,g=$("<div/>",{className:"locfinder-form"}),h=$("<div/>",{className:"locfinder-results"}),$(document).ready(function(){f.html(""),m.searchFormGeo=_.template($("#template--locfinder-geo").html()),m.searchFormZip=_.template($("#template--locfinder-zip").html()),m.locationResult=_.template($("#template--locfinder-result").html()),g.appendTo(f),h.appendTo(f),Modernizr.geolocation?(g.html(m.searchFormGeo),l.mode="geo"):(g.html(m.searchFormZip),l.mode="zip"),b(window.NEUE.LocationFinder),i=!0})}function b(a){_.each(n,function(b,c){var d=c.split(" ")[0],e=c.split(" ")[1];f.on(e,d,function(c){c.preventDefault(),a[b]()}),console.log(d+" :: "+e+" --> "+b)})}function c(){"zip"===l.mode?(l.mode="geo",g.html(m.searchFormGeo)):(l.mode="zip",g.html(m.searchFormZip))}function d(){if(i)if("zip"===l.mode)query.match(j.validation)&&(console.log("Searchin zip"),$.get("example-data.json?zip="+zip,function(a){e(a)}));else{console.log("Searchin geostuff");var a=70.52,b=50.12;$.get(j.url+"?lat="+a+"&long="+b,function(a){e(a)})}}function e(a){h.html("Results:"),_.each(a.results,function(a){h.append(m.locationResult(a))})}var f,g,h,i=!1,j={},k={url:"/example-data.json"},l={},m={},n={".js-location-finder-toggle-form click":"toggleFormType",".js-location-finder-submit click":"findLocation",".js-location-finder-form submit":"findLocation"};return{initialize:a,findLocation:d,toggleFormType:c}}(),$(document).ready(function(){"use strict";$(".js-menu-toggle").on("click",function(){$(".main-menu").toggleClass("is-visible-mobile")}),$('.search form input[type="search"]').on("focus",function(){$(".utility-link").addClass("is-hidden-on-phones")}),$('.search form input[type="search"]').on("blur",function(){$(".utility-link").removeClass("is-hidden-on-phones")})}),$(document).ready(function(){"use strict";$(".js-close-modal").on("click",function(a){a.preventDefault();var b=$(a.target.hash);$("body").addClass("modal-open"),$(b).show(),$(".js-close-modal").on("click",function(a){a.preventDefault(),$(this).closest(".modal").hide(),$("body").removeClass("modal-open")})})}),window.NEUE=window.NEUE||{},window.NEUE.pinToTop=function(){"use strict";var a=$("#js-pin-to-top-anchor").offset().top,b=function(){$(window).scrollTop()>a?$(".js-pin-to-top").addClass("is-stuck"):$(".js-pin-to-top").removeClass("is-stuck")};$(window).on("scroll",b),b()},function(a){a.fn.visible=function(b){var c=a(this),d=a(window),e=d.scrollTop(),f=e+d.height(),g=c.offset().top,h=g+c.height(),i=b===!0?h:g,j=b===!0?g:h;return f>=j&&i>=e},a.fn.realVisible=function(b){var c=a(this),d=a(window),e=d.scrollTop(),f=e+.85*d.height(),g=c.offset().top,h=g+c.height(),i=b===!0?h:g,j=b===!0?g:h;return f>=j&&i>=e}}(jQuery),window.Modernizr=function(a,b,c){function d(a){n.cssText=a}function e(a,b){return typeof a===b}var f,g,h,i="2.6.3",j={},k=b.documentElement,l="modernizr",m=b.createElement(l),n=m.style,o=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),p={},q=[],r=q.slice,s=function(a,c,d,e){var f,g,h,i,j=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))for(;d--;)h=b.createElement("div"),h.id=e?e[d]:l+(d+1),j.appendChild(h);return f=["&#173;",'<style id="s',l,'">',a,"</style>"].join(""),j.id=l,(m?j:n).innerHTML+=f,n.appendChild(j),m||(n.style.background="",n.style.overflow="hidden",i=k.style.overflow,k.style.overflow="hidden",k.appendChild(n)),g=c(j,a),m?j.parentNode.removeChild(j):(n.parentNode.removeChild(n),k.style.overflow=i),!!g},t={}.hasOwnProperty;h=e(t,"undefined")||e(t.call,"undefined")?function(a,b){return b in a&&e(a.constructor.prototype[b],"undefined")}:function(a,b){return t.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=r.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(r.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(r.call(arguments)))};return d}),p.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:s(["@media (",o.join("touch-enabled),("),l,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=9===a.offsetTop}),c},p.geolocation=function(){return"geolocation"in navigator};for(var u in p)h(p,u)&&(g=u.toLowerCase(),j[g]=p[u](),q.push((j[g]?"":"no-")+g));return j.addTest=function(a,b){if("object"==typeof a)for(var d in a)h(a,d)&&j.addTest(d,a[d]);else{if(a=a.toLowerCase(),j[a]!==c)return j;b="function"==typeof b?b():b,"undefined"!=typeof enableClasses&&enableClasses&&(k.className+=" "+(b?"":"no-")+a),j[a]=b}return j},d(""),m=f=null,j._version=i,j._prefixes=o,j.testStyles=s,j}(this,this.document);