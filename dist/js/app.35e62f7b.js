(function(e){function t(t){for(var r,a,n=t[0],i=t[1],u=t[2],p=0,c=[];p<n.length;p++)a=n[p],o[a]&&c.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(c.length)c.shift()();return s.push.apply(s,u||[]),l()}function l(){for(var e,t=0;t<s.length;t++){for(var l=s[t],r=!0,n=1;n<l.length;n++){var i=l[n];0!==o[i]&&(r=!1)}r&&(s.splice(t--,1),e=a(a.s=l[0]))}return e}var r={},o={app:0},s=[];function a(t){if(r[t])return r[t].exports;var l=r[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,a),l.l=!0,l.exports}a.m=e,a.c=r,a.d=function(e,t,l){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(a.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(l,r,function(t){return e[t]}.bind(null,r));return l},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],i=n.push.bind(n);n.push=t,n=n.slice();for(var u=0;u<n.length;u++)t(n[u]);var d=i;s.push([0,"chunk-vendors"]),l()})({0:function(e,t,l){e.exports=l("56d7")},"034f":function(e,t,l){"use strict";var r=l("64a9"),o=l.n(r);o.a},1:function(e,t){},2:function(e,t){},4745:function(e,t,l){},"56d7":function(e,t,l){"use strict";l.r(t);l("cadf"),l("551c"),l("097d");var r=l("2b0e"),o=l("5c96"),s=l.n(o),a=(l("0fae"),function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{attrs:{id:"app"}},[l("Shape")],1)}),n=[],i=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-container",[l("el-header",{staticClass:"header"},[l("span",{staticClass:"headertitle"},[e._v("Shape4Android..")])]),l("el-container",[l("el-aside",{attrs:{width:"600px"}},[l("el-col",{attrs:{span:16}},[l("el-radio-group",{staticStyle:{"margin-top":"30px"},model:{value:e.tabPosition,callback:function(t){e.tabPosition=t},expression:"tabPosition"}},[l("el-radio-button",{attrs:{label:"unable"}},[e._v("unable")]),l("el-radio-button",{attrs:{label:"normal"}},[e._v("normal")]),l("el-radio-button",{attrs:{label:"pressed"}},[e._v("pressed")])],1)],1),l("div",{staticClass:"result",style:{background:e.realColor,"border-radius":e.realRound+"px",border:e.result.border_width+"px solid "+e.result.border_color,"border-top-left-radius":e.realRoundTL+"px","border-top-right-radius":e.realRoundTR+"px","border-bottom-left-radius":e.realRoundBL+"px","border-bottom-right-radius":e.realRoundBR+"px"}})],1),l("el-main",[l("el-container",[l("el-main",[l("div",[l("div",{staticStyle:{margin:"20px"}}),l("el-form",{attrs:{"label-position":e.labelPosition,model:e.result}},[l("el-form-item",[l("el-col",{attrs:{span:3}},[l("el-checkbox",{attrs:{checked:"",disabled:""}},[e._v("normal")])],1)],1),l("el-form-item",{attrs:{label:""}},[l("el-col",{attrs:{span:3}},[e._v("形状")]),l("el-col",{attrs:{span:5}},[l("el-select",{attrs:{placeholder:"请选择"},model:{value:e.result.shape,callback:function(t){e.$set(e.result,"shape",t)},expression:"result.shape"}},e._l(e.options,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),l("el-col",{attrs:{span:3}},[e._v("颜色：")]),l("el-col",{attrs:{span:1}},[l("el-color-picker",{model:{value:e.result.color,callback:function(t){e.$set(e.result,"color",t)},expression:"result.color"}})],1)],1),l("el-form-item",[l("el-col",{attrs:{span:3}},[e._v("角度")]),l("el-col",{attrs:{span:5}},[l("el-input",{attrs:{disabled:!e.simpleRound},model:{value:e.result.round,callback:function(t){e.$set(e.result,"round",t)},expression:"result.round"}},[l("template",{slot:"append"},[e._v("dp")])],2)],1),l("el-col",{attrs:{span:3}},[l("el-button",{attrs:{type:"text"},on:{click:function(t){e.simpleRound=!e.simpleRound}}},[e._v("["+e._s(e.simpleRound?"advanced":"simple")+"]")])],1)],1),l("el-form-item",[l("el-form-item",[l("el-col",[l("el-collapse-transition",[l("div",{directives:[{name:"show",rawName:"v-show",value:!e.simpleRound,expression:"!simpleRound"}]},[l("el-col",{attrs:{span:3}},[e._v("左上角")]),l("el-col",{attrs:{span:5}},[l("el-input",{model:{value:e.result.round_tl,callback:function(t){e.$set(e.result,"round_tl",t)},expression:"result.round_tl"}},[l("template",{slot:"append"},[e._v("dp")])],2)],1),l("el-col",{attrs:{span:3}},[e._v("左下角")]),l("el-col",{attrs:{span:5}},[l("el-input",{model:{value:e.result.round_tr,callback:function(t){e.$set(e.result,"round_tr",t)},expression:"result.round_tr"}},[l("template",{slot:"append"},[e._v("dp")])],2)],1),l("el-col",[l("el-col",{attrs:{span:3}},[e._v("右上角")]),l("el-col",{attrs:{span:5}},[l("el-input",{model:{value:e.result.round_bl,callback:function(t){e.$set(e.result,"round_bl",t)},expression:"result.round_bl"}},[l("template",{slot:"append"},[e._v("dp")])],2)],1),l("el-col",{attrs:{span:3}},[e._v("右下角")]),l("el-col",{attrs:{span:5}},[l("el-input",{model:{value:e.result.round_br,callback:function(t){e.$set(e.result,"round_br",t)},expression:"result.round_br"}},[l("template",{slot:"append"},[e._v("dp")])],2)],1)],1)],1)])],1)],1)],1),l("el-form-item",{attrs:{label:""}},[l("el-col",{attrs:{span:3}},[e._v("边框")]),l("el-col",{attrs:{span:5}},[l("el-input",{model:{value:e.result.border_width,callback:function(t){e.$set(e.result,"border_width",t)},expression:"result.border_width"}},[l("template",{slot:"append"},[e._v("dp")])],2)],1),l("el-col",{staticClass:"line",attrs:{span:3}},[e._v("边框颜色：")]),l("el-col",{attrs:{span:1}},[l("el-color-picker",{model:{value:e.result.border_color,callback:function(t){e.$set(e.result,"border_color",t)},expression:"result.border_color"}})],1)],1),l("el-form-item",[l("el-col",{attrs:{span:3}},[l("el-checkbox",{model:{value:e.needPresse,callback:function(t){e.needPresse=t},expression:"needPresse"}},[e._v("pressed")])],1)],1),l("el-form-item",[l("el-col",[l("el-collapse-transition",[l("div",{directives:[{name:"show",rawName:"v-show",value:e.needPresse,expression:"needPresse"}]},[l("el-col",{attrs:{span:3}},[e._v("颜色")]),l("el-col",{attrs:{span:1}},[l("el-color-picker",{model:{value:e.pressed.color,callback:function(t){e.$set(e.pressed,"color",t)},expression:"pressed.color"}})],1)],1)])],1)],1),l("el-form-item",[l("el-col",{attrs:{span:3}},[l("el-checkbox",{model:{value:e.needUnable,callback:function(t){e.needUnable=t},expression:"needUnable"}},[e._v("unable")])],1)],1),l("el-form-item",[l("el-col",[l("el-collapse-transition",[l("div",{directives:[{name:"show",rawName:"v-show",value:e.needUnable,expression:"needUnable"}]},[l("el-col",{attrs:{span:3}},[e._v("颜色")]),l("el-col",{attrs:{span:1}},[l("el-color-picker",{model:{value:e.unable.color,callback:function(t){e.$set(e.unable,"color",t)},expression:"unable.color"}})],1)],1)])],1)],1),l("el-form-item",[l("el-col",{attrs:{span:"3"}},[l("el-button",{attrs:{type:"primary",icon:"el-icon-download"},on:{click:e.saveAsXml}},[e._v("下载")])],1)],1),l("el-form-item",{attrs:{label:"命名规则"}}),l("el-form-item",{attrs:{label:"shape:","label-width":"100px"}},[l("el-col",{attrs:{span:"5"}},[e._v("shape_type_color_roundTL_roundTR_roundBL_roundBR_borderWidth_borderColor.xml")])],1),l("el-form-item",{attrs:{label:"selector:","label-width":"100px"}},[l("el-col",{attrs:{span:"5",top:""}},[e._v("selector_shape_n_color_p_pressedColor_u_unableColor.xml")])],1),l("el-form-item",[l("el-col",{attrs:{span:"3"}},[l("span",[e._v("made by\n                    "),l("a",{attrs:{href:"https://github.com/ditclear",target:"_blank"}},[e._v("ditclear")])])])],1)],1)],1)])],1)],1)],1)],1)},u=[],d=l("21a6"),p={name:"Shape",data:function(){return{labelPosition:"left",tabPosition:"normal",needPresse:!1,needUnable:!1,simpleRound:!0,options:[{value:"rectangle",label:"rectangle"},{value:"oval",label:"oval"}],shapeXml:"",result:{shape:"rectangle",round:"0",round_tl:"0",round_tr:"0",round_bl:"0",round_br:"0",border_width:"0",border_color:"#409EFF",color:"#409EFF",state:"点击前"},pressed:{clicked:!1,color:"#409EFF"},unable:{color:"#409EFF"}}},mounted:function(){var e=this;this.$refs.range.oninput=function(t){var l=t.target.value;e.width="".concat(60+.4*l,"%")}},computed:{realRound:function(){return"oval"==this.result.shape?100:this.result.round},realRoundTL:function(){return"oval"==this.result.shape?100:this.simpleRound?this.result.round:this.result.round_tl},realRoundTR:function(){return"oval"==this.result.shape?100:this.simpleRound?this.result.round:this.result.round_tr},realRoundBL:function(){return"oval"==this.result.shape?100:this.simpleRound?this.result.round:this.result.round_bl},realRoundBR:function(){return"oval"==this.result.shape?100:this.simpleRound?this.result.round:this.result.round_br},realColor:function(){return"pressed"==this.tabPosition&&this.needPresse?this.pressed.color:"unable"==this.tabPosition&&this.needUnable?this.unable.color:this.result.color}},methods:{provideXmlTemplate:function(e,t){var l="<?xml version="+this.wrapWithQuote("1.0")+" encoding="+this.wrapWithQuote("utf-8")+'?>\n<shape xmlns:android="http://schemas.android.com/apk/res/android"\nandroid:shape='+this.wrapWithQuote(this.result.shape)+">\n<solid android:color="+this.wrapWithQuote(t)+"/>\n<stroke android:color="+this.wrapWithQuote(this.result.border_color)+" android:width="+this.wrapWithQuote(this.result.border_width+"dp")+"/>\n";"oval"!=this.result.shape&&(l+="<corners android:topLeftRadius="+this.wrapWithQuote(this.realRoundTL+"dp")+"\nandroid:topRightRadius="+this.wrapWithQuote(this.realRoundTR+"dp")+"\nandroid:bottomLeftRadius="+this.wrapWithQuote(this.realRoundBL+"dp")+"\nandroid:bottomRightRadius="+this.wrapWithQuote(this.realRoundBR+"dp")+"\n/>\n"),l+="</shape>";var r=this.result.shape+"_"+e+"_"+t.slice(1,7)+"_"+this.realRoundTL+"_"+this.realRoundTR+"_"+this.realRoundBL+"_"+this.realRoundBR+"_"+this.result.border_width+"_"+this.result.border_color.slice(1,7);return{fileName:r,xml:l}},provideSelecter:function(){var e=l("7c39"),t=new e,r=this.provideXmlTemplate("normal",this.result.color),o=r.fileName,s=r.xml;if(t.file(o+".xml",s),this.needPresse){var a=this.provideXmlTemplate("pressed",this.pressed.color),n=a.fileName,i=a.xml;t.file(n+".xml",i)}if(this.needUnable){var u=this.provideXmlTemplate("unable",this.unable.color),p=u.fileName,c=u.xml;t.file(p+".xml",c)}var h="<?xml version="+this.wrapWithQuote("1.0")+" encoding="+this.wrapWithQuote("utf-8")+"?>\n<selector xmlns:android="+this.wrapWithQuote("http://schemas.android.com/apk/res/android")+">\n<item android:drawable="+this.wrapWithQuote("@drawable/"+o)+"\n android:state_enabled="+this.wrapWithQuote("true")+" android:state_pressed="+this.wrapWithQuote("false")+"/>\n",m="selector_"+this.result.shape+"_n_"+this.result.color.slice(1,7);this.needPresse&&(h+="<item android:drawable="+this.wrapWithQuote("@drawable/"+n)+"\n  android:state_enabled="+this.wrapWithQuote("true")+" android:state_pressed="+this.wrapWithQuote("true")+"/>\n",m+="_p_"+this.pressed.color.slice(1,7)),this.needUnable&&(h+="<item android:drawable="+this.wrapWithQuote("@drawable/"+p)+"\n android:state_enabled="+this.wrapWithQuote("false")+"/>\n",m+="_u_"+this.unable.color.slice(1,7)),h+="</selector>",t.file(m+".xml",h),t.generateAsync({type:"blob"}).then(function(e){Object(d["saveAs"])(e,m+".zip")})},generateXml:function(){if(this.needPresse||this.needUnable)this.provideSelecter();else{var e=this.provideXmlTemplate("normal",this.result.color),t=e.fileName,l=e.xml,r=new Blob([l],{type:"text/plain;charset=utf-8"});Object(d["saveAs"])(r,t+".xml")}},saveAsXml:function(){this.generateXml(),this.open3("下载成功")},wrapWithQuote:function(e){return'"'+e+'"'},open3:function(e){this.$notify({title:"成功",message:e,type:"success"})}}},c=p,h=(l("d1a3"),l("2877")),m=Object(h["a"])(c,i,u,!1,null,null,null);m.options.__file="Shape.vue";var b=m.exports,f={name:"app",components:{Shape:b}},v=f,_=(l("034f"),Object(h["a"])(v,a,n,!1,null,null,null));_.options.__file="App.vue";var w=_.exports;r["default"].use(s.a),r["default"].config.productionTip=!1,new r["default"]({el:"#app",render:function(e){return e(w)}}).$mount("#app")},"64a9":function(e,t,l){},d1a3:function(e,t,l){"use strict";var r=l("4745"),o=l.n(r);o.a}});
//# sourceMappingURL=app.35e62f7b.js.map