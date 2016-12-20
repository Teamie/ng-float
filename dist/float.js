!function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={exports:{},id:n,loaded:!1};return t[n].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var i={};return e.m=t,e.c=i,e.p="/",e(0)}(function(t){for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e))switch(typeof t[e]){case"function":break;case"object":t[e]=function(e){var i=e.slice(1),n=t[e[0]];return function(t,e,r){n.apply(this,[t,e,r].concat(i))}}(t[e]);break;default:t[e]=t[t[e]]}return t}([function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=i(1),o=n(r),a=i(2),s=n(a),u=i(6),l=n(u),h=i(12),f=n(h);i(13),e["default"]=o["default"].module("float",[]).directive("flContainer",s["default"]).directive("flItem",l["default"]).factory("Mapper",f["default"])},function(t,e){t.exports=angular},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();e["default"]=function(){return{restrict:"A",bindToController:{options:"=flContainer",isEditable:"="},controllerAs:"flContainer",controller:["Mapper","$element",function(){function t(e,i){r(this,t),this.flItems=[],this.container=new l["default"]([]),this.mapper=new e(this.options),this.$element=i,this.$element.css("width",this.mapper.width),this.setDefaultStyles()}return o(t,[{key:"initItem",value:function(t){this.container.addItem(t.item),this.flItems.push(t),this.render()}},{key:"render",value:function(){var t=this;this.container.removeGaps(),this.$element.css("height",this.mapper.height2px(this.container.getMaxHeight())+100),this.flItems.forEach(function(e){return e.render(t.mapper.layout2px(e.item))})}},{key:"onItemEditStart",value:function(){this.$element.css("height",this.$element.height()+1e3)}},{key:"onItemEditEnd",value:function(t,e){this.container.editItem(t,e),this.render()}},{key:"onItemRemove",value:function(t){this.container.removeItem(t),this.render()}},{key:"setDefaultStyles",value:function(){(0,s["default"])("<style>\n            .fl-item > *:not(.ui-resizable-handle) {\n              margin: "+this.mapper.dragBuffer+"px;\n              width: calc(100% - "+2*this.mapper.dragBuffer+"px);\n              height: calc(100% - "+2*this.mapper.dragBuffer+"px);\n            }\n          </style>").appendTo("head")}}]),t}()]}};var a=i(3),s=n(a),u=i(4),l=n(u)},function(t,e){t.exports=jQuery},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){var i=[],n=!0,r=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done)&&(i.push(a.value),!e||i.length!==e);n=!0);}catch(u){r=!0,o=u}finally{try{!n&&s["return"]&&s["return"]()}finally{if(r)throw o}}return i}return function(e,i){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(5),u=n(s),l=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];r(this,t),this.rows=this.itemsToRows(e)}return a(t,[{key:"itemsToRows",value:function(t){var e=this,i={};return t.forEach(function(t){t.top in i?i[t.top].push(t):i[t.top]=[t]}),Object.entries(i).map(function(t){var i=o(t,2),n=i[0],r=i[1];return new u["default"](r,Number(n),e)}).sort(function(t,e){return t.top-e.top})}},{key:"addItem",value:function(t){var e=void 0,i=void 0;for(e=0;e<this.rows.length;e++){if(!(this.rows[e].top<t.top)){this.rows[e].top===t.top&&(i=this.rows[e]);break}t.top+=this.rows[e].getOverlap(t,!1)}i&&!i.getOverlap(t,!0)?i.addItem(t):this.rows.splice(e,0,new u["default"]([t],t.top,this));for(var n=e+1;n<this.rows.length;n++)this.shiftRows(this.rows.slice(n),this.rows[n].getOverlap(t,!0))}},{key:"editItem",value:function(t,e){this.removeItem(t),this.addItem(Object.assign(t,e))}},{key:"removeItem",value:function(t){var e=t.row;e.removeItem(t),0===e.items.length&&this.rows.splice(this.rows.indexOf(e),1)}},{key:"shiftRows",value:function(t,e){t.forEach(function(t){return t.setTop(t.top+e)})}},{key:"removeGaps",value:function(){if(0!==this.rows.length){0!==this.rows[0].top&&this.shiftRows(this.rows,-this.rows[0].top);for(var t=0,e=1;e<this.rows.length;e++){t=Math.max(t,this.rows[e-1].top+this.rows[e-1].getHeight());var i=this.rows[e].top-t;i>0&&this.shiftRows(this.rows.slice(e),-i)}}}},{key:"getMaxHeight",value:function(){return this.rows.reduce(function(t,e){return Math.max.apply(void 0,[t].concat(e.items.map(function(t){return t.top+t.height})))},0)}}]),t}();e["default"]=l},function(t,e){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=function(){function t(e,n){var r=this;i(this,t),this.top=n,this.items=e,e.forEach(function(t){return t.row=r})}return n(t,[{key:"addItem",value:function(t){this.items.push(t),t.row=this}},{key:"removeItem",value:function(t){var e=this.items.indexOf(t);t.row=null,this.items.splice(e,1)}},{key:"setTop",value:function(t){var e=this;this.top=t,this.items.forEach(function(t){return t.top=e.top})}},{key:"getHeight",value:function(){return this.items.reduce(function(t,e){return Math.max(t,e.height)},0)}},{key:"getOverlap",value:function(t,e){var i=0;return this.items.forEach(function(n){n.doesOverlap(t)&&(i=e?Math.max(i,t.top+t.height-n.top):Math.max(i,n.top+n.height-t.top))}),i}}]),t}();e["default"]=r},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){var i=[],n=!0,r=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done)&&(i.push(a.value),!e||i.length!==e);n=!0);}catch(u){r=!0,o=u}finally{try{!n&&s["return"]&&s["return"]()}finally{if(r)throw o}}return i}return function(e,i){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();e["default"]=function(){return{restrict:"A",require:["^flContainer","flItem"],bindToController:{layout:"=flItem",resizable:"=flResizable",getHeight:"=flGetHeight"},controllerAs:"flItem",controller:["$element",function(){function t(e){r(this,t),this.$element=e,this.item=new h["default"](this.layout.left,this.layout.top,this.layout.width,this.layout.height)}return a(t,[{key:"render",value:function(t){this.$element.css(t)}}]),t}()],link:function(t,e,i,n){function r(){var t=(0,u["default"])("<div>").addClass("fl-drag-indicator fl-item"),i=(0,u["default"])("<div>").addClass("fl-drag-clone");i.append(t);var n={};e.draggable({cursor:"move",cancel:"[fl-item] > *",helper:function(){return i},start:function(){n.width=e.outerWidth(),n.height=e.outerHeight(),i.css(h.mapper.layout2px(f.item)),t.css(h.mapper.layout2px(f.item)),e.children().clone().appendTo(t),h.onItemEditStart()},drag:function(e,i){var r=h.mapper.layout2px(h.mapper.getClosestPosition(Object.assign(n,i.position)));t.css({left:r.left-i.position.left,top:r.top-i.position.top})},stop:function(e,i){t.empty(),h.onItemEditEnd(f.item,h.mapper.getClosestPosition(Object.assign(n,i.position)))}})}function a(){function t(t){var i=h.mapper.getClosestSize(Object.assign(t.position,t.size),e.data("ui-resizable").axis.includes("w"));return s(i)}var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2;if(i){var n=void 0;e.resizable({handles:1===i?"e, w":"e, se, s, sw, w",classes:{"ui-resizable-handle":"fl-resizable","ui-resizable-se":""},start:function(){n=(0,u["default"])("<div>").addClass("fl-resize-indicator fl-item"),e.children().clone().appendTo(n),n.css(h.mapper.layout2px(f.item)),n.appendTo("[fl-container]"),h.onItemEditStart()},resize:function(e,i){n.css(h.mapper.layout2px(t(i)))},stop:function(e,i){n.remove(),h.onItemEditEnd(f.item,t(i))}})}}function s(t){if(f.getHeight){var i=h.mapper.layout2px(t),n=f.getHeight(e,i.width);if(1===f.resizable||n>i.height)return i.height=n,h.mapper.px2layout(i)}return t}var l=o(n,2),h=l[0],f=l[1];e.addClass("fl-item"),r(),a(f.resizable),h.initItem(f),t.$on("$destroy",function(){h.onItemRemove(f.item)}),t.$on("flItemChanged",function(){var t=s(f.item);t.height!==f.item.height&&h.onItemEditEnd(f.item,t)})}}};var s=i(3),u=n(s),l=i(7),h=n(l);i(8)},function(t,e){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=function(){function t(e,n,r,o){i(this,t),this.left=e,this.top=n,this.width=r,this.height=o,this.row=null}return n(t,[{key:"doesOverlap",value:function(t){return!(this.left+this.width<=t.left||t.left+t.width<=this.left||this.top+this.height<=t.top||t.top+t.height<=this.top)}}]),t}();e["default"]=r},function(t,e){},,,,function(t,e){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(){return o}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();e["default"]=n;var o=function(){function t(e){var n=e.width,r=void 0===n?768:n,o=e.rowHeight,a=void 0===o?15:o,s=e.numColumns,u=void 0===s?60:s,l=e.buffer,h=void 0===l?4:l,f=e.minHeight,c=void 0===f?4:f,p=e.minWidth,d=void 0===p?10:p,m=e.dragBuffer,v=void 0===m?5:m;i(this,t),this.width=r,this.numColumns=u,this.buffer=h,this.rowHeight=a,this.minHeight=c,this.minWidth=d,this.dragBuffer=v,this.colWidth=(r-(u-1)*h)/u+h}return r(t,[{key:"px2layout",value:function(t){var e=this._closestMultiple(t.left,this.colWidth),i=this._closestMultiple(t.top,this.rowHeight),n=Math.ceil((this.left2px(e)+t.width)/this.colWidth),r=Math.ceil((this.top2px(i)+t.height)/this.rowHeight);return{left:e,top:i,width:n-e,height:r-i}}},{key:"layout2px",value:function(t){var e=t.left,i=t.top,n=t.width,r=t.height;return{left:this.left2px(e),top:this.top2px(i),width:this.width2px(n),height:this.height2px(r)}}},{key:"left2px",value:function(t){return t*this.colWidth}},{key:"top2px",value:function(t){return t*this.rowHeight}},{key:"width2px",value:function(t){return t*this.colWidth-this.buffer}},{key:"height2px",value:function(t){return t*this.rowHeight-this.buffer}},{key:"getClosestPosition",value:function(t){return this.checkPositionConstraints(this.px2layout(t))}},{key:"getClosestSize",value:function(t,e){return this.checkSizeConstraints(this.px2layout(t),e)}},{key:"checkPositionConstraints",value:function(t){var e=t.width,i=t.height,n=t.left,r=t.top;return n+e>this.numColumns&&(n=this.numColumns-e),n<0&&(n=0),r<0&&(r=0),{left:n,top:r,width:e,height:i}}},{key:"checkSizeConstraints",value:function(t,e){var i=t.width,n=t.height,r=t.left,o=t.top;if(r+i>this.numColumns&&(i=this.numColumns-r),r<0){var a=r+i;r=0,i=a-r}return i<this.minWidth&&(e&&(r-=this.minWidth-i),i=this.minWidth),n<this.minHeight&&(n=this.minHeight),{left:r,top:o,width:i,height:n}}},{key:"_closestMultiple",value:function(t,e){var i=t/e,n=Math.floor(i),r=Math.ceil(i);return i-n>r-i?r:n}}]),t}()},8]));