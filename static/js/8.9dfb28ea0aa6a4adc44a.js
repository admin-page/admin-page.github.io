webpackJsonp([8],{WBHA:function(t,e,a){var i;i=function(){return function(t){function e(i){if(a[i])return a[i].exports;var n=a[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var a={};return e.m=t,e.c=a,e.i=function(t){return t},e.d=function(t,a,i){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,a){var i=a(4)(a(1),a(5),null,null);t.exports=i.exports},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(3);e.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,e,a,i){return a*(1-Math.pow(2,-10*t/i))*1024/1023+e}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,i.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,i.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,i.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,i.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=(0,i.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals);var e=(t+="").split("."),a=e[0],i=e.length>1?this.decimal+e[1]:"",n=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;n.test(a);)a=a.replace(n,"$1"+this.separator+"$2");return this.prefix+a+i+this.suffix}},destroyed:function(){(0,i.cancelAnimationFrame)(this.rAF)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){return t&&t.__esModule?t:{default:t}}(a(0));e.default=i.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",i.default)},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=0,n="webkit moz ms o".split(" "),s=void 0,r=void 0;if("undefined"==typeof window)e.requestAnimationFrame=s=function(){},e.cancelAnimationFrame=r=function(){};else{e.requestAnimationFrame=s=window.requestAnimationFrame,e.cancelAnimationFrame=r=window.cancelAnimationFrame;for(var l=void 0,o=0;o<n.length&&(!s||!r);o++)l=n[o],e.requestAnimationFrame=s=s||window[l+"RequestAnimationFrame"],e.cancelAnimationFrame=r=r||window[l+"CancelAnimationFrame"]||window[l+"CancelRequestAnimationFrame"];s&&r||(e.requestAnimationFrame=s=function(t){var e=(new Date).getTime(),a=Math.max(0,16-(e-i)),n=window.setTimeout(function(){t(e+a)},a);return i=e+a,n},e.cancelAnimationFrame=r=function(t){window.clearTimeout(t)})}e.requestAnimationFrame=s,e.cancelAnimationFrame=r},function(t,e){t.exports=function(t,e,a,i){var n,s=t=t||{},r=typeof t.default;"object"!==r&&"function"!==r||(n=t,s=t.default);var l="function"==typeof s?s.options:s;if(e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns),a&&(l._scopeId=a),i){var o=Object.create(l.computed||null);Object.keys(i).forEach(function(t){var e=i[t];o[t]=function(){return e}}),l.computed=o}return{esModule:n,exports:s,options:l}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])},t.exports=i()},fnFH:function(t,e){},q0B3:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("LacG"),n=a("WBHA"),s=a.n(n),r={name:"CountToPage",components:{Hints:i.a,CountTo:s.a},data:function(){return{startVal:0,endVal:2020,duration:4e3,decimals:0,separator:",",prefix:"￥ ",suffix:" rmb"}},methods:{handleStart:function(){this.$refs.countBox.start()},handlePause:function(){this.$refs.countBox.pauseResume()}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"count-to-page"},[a("Hints",[a("template",{slot:"hintName"},[t._v("数字滚动组件")]),t._v(" "),a("template",{slot:"hintInfo"},[a("p",[t._v("vue-countTo:一个无依赖、轻量级的vue数字滚动插件，可以通过你自己的方式轻松编写")]),t._v(" "),a("p",[t._v("github地址：访问 "),a("el-link",{attrs:{type:"success",href:"https://github.com/PanJiaChen/vue-countTo",target:"_blank"}},[t._v("vue-countTo")])],1)])],2),t._v(" "),a("el-row",{staticClass:"count-to-box",attrs:{gutter:20}},[a("el-col",{attrs:{span:6}},[a("el-card",{attrs:{shadow:"always","body-style":{padding:"0px"}}},[a("div",{staticClass:"title",attrs:{slot:"header"},slot:"header"},[t._v("正向增加")]),t._v(" "),a("div",{staticClass:"box-cont add"},[a("CountTo",{attrs:{startVal:0,endVal:2020,duration:4e3}})],1)])],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-card",{attrs:{shadow:"always","body-style":{padding:"0px"}}},[a("div",{staticClass:"title",attrs:{slot:"header"},slot:"header"},[t._v("自定义配置")]),t._v(" "),a("div",{staticClass:"cont-wrapper"},[a("div",{staticClass:"cont-set-data"},[a("CountTo",{ref:"countBox",attrs:{"start-val":t.startVal,"end-val":t.endVal,duration:t.duration,decimals:t.decimals,separator:t.separator,prefix:t.prefix,suffix:t.suffix,autoplay:!1}})],1),t._v(" "),a("div",{staticClass:"box-cont-set"},[a("div",{staticClass:"cont-set-item"},[a("label",[t._v("startVal：")]),a("el-input",{model:{value:t.startVal,callback:function(e){t.startVal=e},expression:"startVal"}})],1),t._v(" "),a("div",{staticClass:"cont-set-item"},[a("label",[t._v("endVal：")]),a("el-input",{model:{value:t.endVal,callback:function(e){t.endVal=e},expression:"endVal"}})],1),t._v(" "),a("div",{staticClass:"cont-set-item"},[a("label",[t._v("duration：")]),a("el-input",{model:{value:t.duration,callback:function(e){t.duration=e},expression:"duration"}})],1),t._v(" "),a("div",{staticClass:"cont-set-item"},[a("label",[t._v("decimals：")]),a("el-input",{model:{value:t.decimals,callback:function(e){t.decimals=e},expression:"decimals"}})],1),t._v(" "),a("div",{staticClass:"cont-set-item"},[a("label",[t._v("separator：")]),a("el-input",{model:{value:t.separator,callback:function(e){t.separator=e},expression:"separator"}})],1),t._v(" "),a("div",{staticClass:"cont-set-item"},[a("label",[t._v("prefix：")]),a("el-input",{model:{value:t.prefix,callback:function(e){t.prefix=e},expression:"prefix"}})],1),t._v(" "),a("div",{staticClass:"cont-set-item"},[a("label",[t._v("suffix：")]),a("el-input",{model:{value:t.suffix,callback:function(e){t.suffix=e},expression:"suffix"}})],1),t._v(" "),a("div",{staticClass:"cont-set-item"},[a("el-button",{attrs:{type:"primary"},on:{click:t.handleStart}},[t._v("开始")]),t._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:t.handlePause}},[t._v("暂停/恢复")])],1)])])])],1),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-card",{attrs:{shadow:"always","body-style":{padding:"0px"}}},[a("div",{staticClass:"title",attrs:{slot:"header"},slot:"header"},[t._v("反向减少")]),t._v(" "),a("div",{staticClass:"box-cont"},[a("CountTo",{attrs:{startVal:2020,endVal:0,duration:4e3}})],1)])],1)],1)],1)},staticRenderFns:[]};var o=a("VU/8")(r,l,!1,function(t){a("fnFH")},null,null);e.default=o.exports}});
//# sourceMappingURL=8.9dfb28ea0aa6a4adc44a.js.map