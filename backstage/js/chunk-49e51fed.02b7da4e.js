(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49e51fed"],{"3e66":function(e,t,o){},"78c1":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"test"},[o("div",{staticClass:"section father f-sb-c"},[o("el-button",{attrs:{type:"primary"},on:{click:e.setCookie}},[e._v("设置cookie")]),o("el-button",{attrs:{type:"primary"},on:{click:e.getCookie}},[e._v("获取cookie")]),o("el-button",{attrs:{type:"primary"},on:{click:e.removeCookie}},[e._v("删除cookie")]),o("el-button",{attrs:{type:"primary"},on:{click:e.clearCookie}},[e._v("清除cookie")])],1)])},c=[],a=(o("ac1f"),o("00b4"),o("b0c0"),o("5f1b")),i={data:function(){return{themes:[{name:"coolBlack",text:"炫酷黑",bgColor:"black",textColor:"#fff"},{name:"plainBlue",text:"淡雅蓝",bgColor:"lightblue",textColor:"#fff"},{name:"freshGreen",text:"清新绿",bgColor:"lightgreen",textColor:"#fff"},{name:"sakuraPink",text:"樱语粉",bgColor:"pink",textColor:"#fff"}],inpVal:"测试输入框的值",cols:[{prop:"name",label:"姓名"},{prop:"sex",label:"性别"},{prop:"age",label:"年龄"}],rows:[{name:"范力川",sex:"男",age:"25"},{name:"彭春辉",sex:"女",age:"25"}],currTab:0}},computed:{currTheme:function(){return this.$store.state.theme}},mounted:function(){this.test(["测试1","测试2"])},methods:{changeTheme:function(e){var t=e.name;this.$store.commit("update",{theme:t})},changeColor:function(){document.getElementsByTagName("body")[0].style.setProperty("--color-test","purple")},changeTab:function(e){this.currTab=e},setCookie:function(){a["a"].setItem("test","测试cookie","cookie"),a["a"].setItem("user",{name:"范力川",age:25,sex:"男"},"cookie")},getCookie:function(){a["a"].getItem("test","cookie")},removeCookie:function(){a["a"].removeItem("test","cookie")},clearCookie:function(){a["a"].clear("cookie")},onDebounceBtn:function(){},onThrottleBtn:function(){},test:function(e){}}},r=i,s=(o("e44d"),o("2877")),l=Object(s["a"])(r,n,c,!1,null,"e9e1033e",null);t["default"]=l.exports},e44d:function(e,t,o){"use strict";o("3e66")}}]);