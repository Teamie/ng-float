"use strict";var t=require("angular"),e=require("lodash");function i(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}require("jquery"),require("jquery-ui/ui/widgets/draggable"),require("jquery-ui/ui/widgets/resizable"),require("jquery-ui/themes/base/draggable.css"),require("jquery-ui/themes/base/resizable.css");var o=i(t);function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,i){return e&&r(t.prototype,e),i&&r(t,i),t}function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==i)return;var o,n,r=[],s=!0,a=!1;try{for(i=i.call(t);!(s=(o=i.next()).done)&&(r.push(o.value),!e||r.length!==e);s=!0);}catch(t){a=!0,n=t}finally{try{s||null==i.return||i.return()}finally{if(a)throw n}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return l(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}var h=function(){function t(e,i){var o=this;n(this,t),this.top=i,this.items=e,e.forEach((function(t){return t.row=o}))}return s(t,[{key:"addItem",value:function(t){this.items.push(t),t.row=this}},{key:"removeItem",value:function(t){var e=this.items.indexOf(t);t.row=null,this.items.splice(e,1)}},{key:"setTop",value:function(t){var e=this;this.top=t,this.items.forEach((function(t){return t.top=e.top}))}},{key:"getHeight",value:function(){return this.items.reduce((function(t,e){return Math.max(t,e.height)}),0)}},{key:"getOverlap",value:function(t,e){var i=0;return this.items.forEach((function(o){o.doesOverlap(t)&&(i=e?Math.max(i,t.top+t.height-o.top):Math.max(i,o.top+o.height-t.top))})),i}}]),t}(),u=function(){function t(){var e,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];n(this,t);do{i.sort((function(t,e){return 1e4*(t.top-e.top)+t.left-e.left})),e=this.positionItems(i)}while(e);this.rows=this.itemsToRows(i)}return s(t,[{key:"positionItems",value:function(t){for(var e=!1,i=0;i<t.length;i++)for(var o=i+1;o<t.length;o++)t[i].doesOverlap(t[o])&&(t[i].top<=t[o].top?t[o].top=t[i].top+t[i].height:t[i].top>t[o].top&&(t[i].top=t[o].top+t[o].height),e=!0,console.warn(t[i],"".concat(i," overlaps ").concat(o),t[o]));return e}},{key:"itemsToRows",value:function(t){var e=this,i={};return t.forEach((function(t){t.top in i?i[t.top].push(t):i[t.top]=[t]})),Object.entries(i).map((function(t){var i=a(t,2),o=i[0],n=i[1];return new h(n,Number(o),e)})).sort((function(t,e){return t.top-e.top}))}},{key:"addItem",value:function(t){var e,i;for(e=0;e<this.rows.length;e++){if(!(this.rows[e].top<t.top)){this.rows[e].top===t.top&&(i=this.rows[e]);break}t.top+=this.rows[e].getOverlap(t,!1)}i&&!i.getOverlap(t,!0)?i.addItem(t):this.rows.splice(e,0,new h([t],t.top,this));for(var o=e+1;o<this.rows.length;o++)this.shiftRows(this.rows.slice(o),this.rows[o].getOverlap(t,!0))}},{key:"editItem",value:function(t,e){this.removeItem(t),this.addItem(Object.assign(t,e))}},{key:"removeItem",value:function(t){var e=t.row;e.removeItem(t),0===e.items.length&&this.rows.splice(this.rows.indexOf(e),1)}},{key:"shiftRows",value:function(t,e){t.forEach((function(t){return t.setTop(t.top+e)}))}},{key:"removeGaps",value:function(){if(0!==this.rows.length){0!==this.rows[0].top&&this.shiftRows(this.rows,-this.rows[0].top);for(var t=0,e=1;e<this.rows.length;e++){t=Math.max(t,this.rows[e-1].top+this.rows[e-1].getHeight());var i=this.rows[e].top-t;i>0&&this.shiftRows(this.rows.slice(e),-i)}}}},{key:"getMaxHeight",value:function(){return this.rows.reduce((function(t,e){return Math.max.apply(void 0,[t].concat(e.items.map((function(t){return t.top+t.height}))))}),0)}},{key:"getClosestTop",value:function(t){if(0===this.rows.length)t.top=0;else for(var e=this.rows.length-1;e>=0;e--)if(this.rows[e].top<t.top){t.top=this.rows[e].top,t.top+=this.rows[e].getOverlap(t,!1);break}return t}},{key:"getWidthAtPos",value:function(t){var e=t.left,i=t.top,o=0,n=1/0;return this.rows.forEach((function(t){if(t.top>=i)return!1;t.items.forEach((function(t){t.top+t.height>i&&(t.left<e?o=Math.max(o,t.left+t.width):n=Math.min(n,t.left))}))})),{left:o,width:n-o}}}]),t}();var c=function(){function t(e,i,o,r){n(this,t),this.left=e,this.top=i,this.width=o,this.height=r,this.row=null}return s(t,[{key:"doesOverlap",value:function(t){return!(this.left+this.width<=t.left||t.left+t.width<=this.left||this.top+this.height<=t.top||t.top+t.height<=this.top)}}]),t}();function f(t,e){void 0===e&&(e={});var i=e.insertAt;if(t&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===i&&o.firstChild?o.insertBefore(n,o.firstChild):o.appendChild(n),n.styleSheet?n.styleSheet.cssText=t:n.appendChild(document.createTextNode(t))}}f(":root{--float-body-color:blue;--float-handle-size:8px}.fl-touch{--float-handle-size:20px}.fl-edit.ui-resizable-resizing{display:none}.fl-resize-indicator{background-color:blue;background-color:var(--float-body-color);border:1px solid blue;border:1px solid var(--float-body-color);opacity:.5;z-index:8}.fl-edit:not(:hover):not(.fl-item-selected) .fl-resizable{display:none!important}.fl-resizable{background-color:blue;background-color:var(--float-body-color);border-radius:50%;height:8px;height:var(--float-handle-size);position:absolute;width:8px;width:var(--float-handle-size);z-index:8!important}.fl-resizable.ui-resizable-e{cursor:e-resize;right:-4px;right:calc(var(--float-handle-size)*-1/2);top:calc(50% - 4px);top:calc(50% - var(--float-handle-size)/2)}.fl-resizable.ui-resizable-se{bottom:-4px;bottom:calc(var(--float-handle-size)*-1/2);cursor:se-resize;right:-4px;right:calc(var(--float-handle-size)*-1/2)}.fl-resizable.ui-resizable-s{bottom:-4px;bottom:calc(var(--float-handle-size)*-1/2);cursor:s-resize;left:calc(50% - 4px);left:calc(50% - var(--float-handle-size)/2)}.fl-resizable.ui-resizable-sw{bottom:-4px;bottom:calc(var(--float-handle-size)*-1/2);cursor:sw-resize;left:-4px;left:calc(var(--float-handle-size)*-1/2)}.fl-resizable.ui-resizable-w{cursor:w-resize;left:-4px;left:calc(var(--float-handle-size)*-1/2);top:calc(50% - 4px);top:calc(50% - var(--float-handle-size)/2)}.fl-resizable-helper{border:2px solid green;position:absolute}");f(".ui-draggable.ui-draggable-handle{cursor:move}.fl-drag-clone{position:absolute}.fl-drag-clone .fl-drag-indicator{background-color:#add8e6;opacity:.5}");var p=function(){function t(e){var i=e.width,o=void 0===i?768:i,r=e.rowHeight,s=void 0===r?15:r,a=e.numColumns,l=void 0===a?60:a,h=e.buffer,u=void 0===h?4:h,c=e.minHeight,f=void 0===c?4:c,p=e.minWidth,d=void 0===p?10:p;n(this,t),this.width=o,this.numColumns=l,this.buffer=u,this.rowHeight=s,this.minHeight=f,this.minWidth=d,this.colWidth=(o-(l-1)*u)/l+u}return s(t,[{key:"px2layout",value:function(t){var e=t.left,i=t.top,o=t.width,n=t.height,r=this.px2pos({left:e,top:i}),s=Math.ceil((this.left2px(r.left)+o)/this.colWidth),a=Math.ceil((this.top2px(r.top)+n+this.buffer)/this.rowHeight);return{left:r.left,top:r.top,width:s-r.left,height:a-r.top}}},{key:"layout2px",value:function(t){var e=t.left,i=t.top,o=t.width,n=t.height;return{left:this.left2px(e),top:this.top2px(i),width:this.width2px(o),height:this.height2px(n)}}},{key:"px2pos",value:function(t){var e=t.left,i=t.top;return{left:this._closestMultiple(e,this.colWidth),top:this._closestMultiple(i,this.rowHeight)}}},{key:"left2px",value:function(t){return t*this.colWidth}},{key:"top2px",value:function(t){return t*this.rowHeight}},{key:"width2px",value:function(t){return t*this.colWidth-this.buffer}},{key:"height2px",value:function(t){return t*this.rowHeight-this.buffer}},{key:"getClosestPosition",value:function(t){return this.checkPositionConstraints(this.px2layout(t))}},{key:"getClosestSize",value:function(t,e){return this.checkSizeConstraints(this.px2layout(t),e)}},{key:"checkPositionConstraints",value:function(t){var e=t.width,i=t.height,o=t.left,n=t.top;return o+e>this.numColumns&&(o=this.numColumns-e),o<0&&(o=0),n<0&&(n=0),{left:o,top:n,width:e,height:i}}},{key:"checkSizeConstraints",value:function(t,e){var i=t.width,o=t.height,n=t.left,r=t.top;(n+i>this.numColumns&&(i=this.numColumns-n),n<0)&&(i=n+i-(n=0));return i<this.minWidth&&(e&&(n-=this.minWidth-i),i=this.minWidth),o<this.minHeight&&(o=this.minHeight),{left:n,top:r,width:i,height:o}}},{key:"px2dimension",value:function(t){var e=t.left,i=t.top,o=t.height,n=t.width;return"string"==typeof e&&e.includes("px")&&(e=this._closestMultiple(parseInt(e),this.colWidth)),"string"==typeof i&&i.includes("px")&&(i=this._closestMultiple(parseInt(i),this.rowHeight)),"string"==typeof o&&o.includes("px")&&(o=this._closestMultiple(parseInt(o),this.rowHeight)),"string"==typeof n&&n.includes("px")&&(n=this._closestMultiple(parseInt(n),this.colWidth)),{left:e,top:i,height:o,width:n}}},{key:"_closestMultiple",value:function(t,e){var i=t/e,o=Math.floor(i),n=Math.ceil(i);return i-o>n-i?n:o}}]),t}();f(":root{--float-body-color:blue}[fl-container]{box-sizing:content-box;position:relative}.fl-item{position:absolute}.fl-edit [fl-drag-cancel]{cursor:auto}.fl-edit{border:1px solid transparent}.fl-edit.fl-item-selected,.fl-edit:hover{border-color:blue;border-color:var(--float-body-color)}.fl-drop-indicator{background-color:blue;background-color:var(--float-body-color);border-radius:2px;height:5px;pointer-events:none;position:absolute}");var d=o.default.module("float",[]).directive("flContainer",(function(){return{restrict:"A",bindToController:{options:"=flContainer",isEditable:"=flEditable",createElementsAtPosition:"&flCreateElementsAtPosition"},controllerAs:"flContainer",controller:["Mapper","$element","$document","$scope","$timeout",function(){function t(e,i,o,r,s){n(this,t),this.flItems=[],this.Mapper=e,this.$element=i,this.$document=o,this.$scope=r,this.$timeout=s}return s(t,[{key:"$onInit",value:function(){var t=this;this.mapper=new this.Mapper(this.options),this.$element.css("width",this.mapper.width),this.isTouchDevice()&&this.$element.addClass("fl-touch"),this.isEditable&&(this.setupDropListeners(),this.setupVisitListeners(this.$document,this.$scope)),this.$timeout((function(){t.container||0!==t.flItems.length||(t.container=new u,t.render())}),500)}},{key:"initItem",value:function(t){var e=this;this.flItems.push(t),this.container?(this.container.addItem(t.item),this.render()):t.lastRepeat&&(this.container=new u(this.flItems.map((function(t){return t.item}))),this.$timeout((function(){e.render()})))}},{key:"render",value:function(){var t=this;this.container.removeGaps(),this.$element.css("height",this.mapper.height2px(this.container.getMaxHeight())+(this.isEditable?100:0)),this.flItems.forEach((function(e){return e.render(t.mapper.layout2px(e.item),{left:e.item.left,top:e.item.top,width:e.item.width,height:e.item.height})}))}},{key:"onItemEditStart",value:function(){this.$element.addClass("fl-container-editing"),this.$element.css("height",this.$element.height()+1e3)}},{key:"onItemEditEnd",value:function(t,e){this.$element.removeClass("fl-container-editing"),this.container.editItem(t,e),this.render()}},{key:"onItemRemove",value:function(t){this.flItems=this.flItems.filter((function(e){return e!==t})),this.container.removeItem(t.item),this.render()}},{key:"getNewItemDimensions",value:function(t){return this.container.getClosestTop(this.mapper.getClosestPosition(t))}},{key:"setupDropListeners",value:function(){var t=this;function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1e4,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1e4,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;n.css({marginLeft:t,marginTop:e,width:i})}var n=o.default.element("<div>").addClass("fl-drop-indicator").appendTo(this.$element);i();var r=e.throttle((function(e){if(o.default.element(e.target).is(t.$element)){var n=t.mapper.px2pos({left:e.offsetX,top:e.offsetY}),r=Object.assign(n,t.container.getWidthAtPos(n));if(r.height=t.mapper.minHeight,r.width=Math.min(r.width,t.mapper.numColumns-r.left),r.width<t.mapper.minWidth)i();else{var s=t.mapper.layout2px(t.mapper.checkPositionConstraints(r));i(s.left,s.top,s.width)}}else i()}),50);this.$element.on("dragover",(function(t){t.preventDefault(),t.stopPropagation(),r(t)})),this.$element.on("dragleave",(function(t){t.preventDefault(),t.stopPropagation(),r.cancel(),i()})),this.$element.on("drop",(function(e){if(e.preventDefault(),e.stopPropagation(),r.cancel(),i(),o.default.element(e.target).is(t.$element)){var n=t.mapper.px2pos({left:e.offsetX,top:e.offsetY}),s=Object.assign(n,t.container.getWidthAtPos(n));if(s.height=t.mapper.minHeight,s.width>=t.mapper.minWidth){s.width=Math.min(s.width,t.mapper.numColumns-s.left);var a=t.mapper.checkPositionConstraints(s);t.createElementsAtPosition({event:e,dimensions:a})}}}))}},{key:"setupVisitListeners",value:function(t,e){function i(t){var e=o.default.element(t.target).closest("[fl-item]").eq(0);e&&e.addClass("fl-item-selected"),o.default.element("[fl-item]").not(e).removeClass("fl-item-selected")}t.on("click",i),e.$on("$destroy",(function(){t.off("click",i)}))}},{key:"isTouchDevice",value:function(){return"ontouchstart"in window||navigator.MaxTouchPoints>0||navigator.msMaxTouchPoints>0}}]),t}()]}})).directive("flItem",(function(){return{restrict:"A",require:["^flContainer","flItem"],bindToController:{layout:"=flItem",resizable:"=flResizable",getHeight:"=flGetHeight",lastRepeat:"=flLastRepeat",isEditable:"=flEditable"},controllerAs:"flItem",controller:["$element","$scope",function(){function t(e,i){n(this,t),this.$element=e,this.$scope=i}return s(t,[{key:"$onInit",value:function(){var t=this.$scope.flContainer.mapper.px2dimension(this.layout);this.item=new c(t.left,t.top,t.width,t.height)}},{key:"render",value:function(t,e){this.$element.css(t),Object.assign(this.layout,e)}}]),t}()],link:function(t,e,i,n){var r,s=a(n,2),l=s[0],h=s[1],u=h.resizable;function c(){e.resizable("option","handles",1===u?"e, w":"e, se, s, sw, w")}function f(t,i){if(h.getHeight){var o=l.mapper.layout2px(t),n=h.getHeight(e,o.width,i);if(n>0&&(u<2||n>o.height))return o.height=n,l.mapper.px2layout(o)}return t}t.flContainer=l,l.initItem(h),e.addClass("fl-item"),l.isEditable&&(e.addClass("fl-edit"),t.$on("$destroy",(function(){l.onItemRemove(h)})),h.isEditable&&(function(){var i=o.default.element("<"+e[0].nodeName.toLowerCase()+">").addClass("fl-drag-indicator fl-item"),n=o.default.element("<div>").addClass("fl-drag-clone");n.append(i);var r={};e.draggable({cursor:"move",cancel:"[fl-drag-cancel]",helper:function(){return n},start:function(o){r.width=e.outerWidth(),r.height=e.outerHeight(),n.css(l.mapper.layout2px(h.item)),i.css(l.mapper.layout2px(h.item)),e.children().clone().appendTo(i),l.onItemEditStart(),t.$broadcast("flDragStart",o)},drag:function(t,e){var o=l.mapper.layout2px(l.mapper.getClosestPosition(Object.assign(r,e.position)));i.css({left:o.left-e.position.left,top:o.top-e.position.top})},stop:function(e,o){i.empty(),l.onItemEditEnd(h.item,l.mapper.getClosestPosition(Object.assign(r,o.position))),t.$broadcast("flDragStop",e)}})}(),function(){if(!u)return;var i;function n(t){return f(l.mapper.getClosestSize(Object.assign(t.position,t.size),e.data("ui-resizable").axis.includes("w")),!0)}e.resizable({classes:{"ui-resizable-handle":"fl-resizable","ui-resizable-se":""},start:function(e){(i=o.default.element("<div>").addClass("fl-resize-indicator fl-item")).css(l.mapper.layout2px(h.item)),i.appendTo("[fl-container]"),l.onItemEditStart(),t.$broadcast("flResizeStart",e)},resize:function(t,e){i.css(l.mapper.layout2px(n(e)))},stop:function(e,o){i.remove(),l.onItemEditEnd(h.item,n(o)),t.$broadcast("flResizeStop",e)}}),c()}())),r=h.isEditable,t.$on("flItemChanged",(function(){var t=f(h.item,!1);t.height!==h.item.height&&l.onItemEditEnd(h.item,t)})),r&&t.$on("flResizeChanged",(function(t,e){u=e,c()}))}}})).service("Mapper",(function(){return p})).name;module.exports=d;
