!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function i(t){var n="function"==typeof Map?new Map:void 0;return(i=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return u(t,arguments,l(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,t)})(t)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function u(t,n,e){return(u=c()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&a(o,e.prototype),o}).apply(null,arguments)}function a(t,n){return(a=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var f=document.createElement("template");f.innerHTML='\n<div class="container">\n\t<div class="clock">\n\t\t<img id="hourHand" class="hands" src="images/hour_hand.png" alt="">\n\t\t<img id="minuteHand" class="hands" src="images/minute_hand.png" alt="">\n\t\t<img id="secondHand" class="hands" src="images/second_hand.png" alt="">\n\t\t</div>\n</div>\n<style>\n.container {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n.clock {\n\tposition: relative;\n\twidth: 400px;\n\theight: 400px;\n\tbackground: url(images/clock_face.jpg);\n}\n.clock:after {\n\tposition: absolute;\n\tcontent: \'\';\n\tbackground: #000;\n\twidth: 30px;\n\theight: 30px;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translateX(-50%) translateY(-50%);\n\tborder-radius: 50%;\n}\n.hands {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n}\n</style>\n';var s=function(t){function n(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),o(this,l(n).call(this))}var e,i,c;return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&a(t,n)}(n,t),e=n,(i=[{key:"connectedCallback",value:function(t){function n(){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(){var t=this.attachShadow({mode:"open"});t.appendChild(f.content.cloneNode(!0));var n=new Date,e=n.getHours()%12,r=n.getMinutes(),o=n.getSeconds(),i=30*e+.5*r,c=6*r+.1*o,u=6*o;t.getElementById("hourHand").style.transform="rotate("+i+"deg)",t.getElementById("minuteHand").style.transform="rotate("+c+"deg)",t.getElementById("secondHand").style.transform="rotate("+u+"deg)",setTimeout(connectedCallback,1e3)}))}])&&r(e.prototype,i),c&&r(e,c),n}(i(HTMLElement));window.customElements.define("clock-analog",s)}]);