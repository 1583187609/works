(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49f0473a"],{2628:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"start-test"},[e("div",{staticClass:"f-fs-c btns-box"},[e("el-button",{attrs:{type:"primary"},on:{click:t.startTest}},[t._v("开始测试")]),e("el-button",{attrs:{type:"primary"},on:{click:t.stopTest}},[t._v("停止测试")]),e("el-button",{attrs:{type:"primary"},on:{click:t.showRealTimeChart}},[t._v("实时图表")]),e("el-button",{attrs:{type:"primary"},on:{click:t.reMakeData}},[t._v("重新生成模糊数据")])],1),e("div",{staticClass:"data-box f-sb-s gap"},[e("section",{staticClass:"section f-1"},[e("header",{staticClass:"head"},[t._v("发送")]),t.sendList.length?e("ul",{staticClass:"body"},t._l(t.sendList,(function(s,a){return e("li",{key:a,staticClass:"item"},[t._v(" "+t._s(s)+" ")])})),0):e("div",{staticClass:"body f-c-c"},[t._v("请点击开始测试按钮~")])]),e("section",{staticClass:"section f-1"},[e("header",{staticClass:"head"},[t._v("接收")]),t.acceptList.length?e("ul",{staticClass:"body"},t._l(t.acceptList,(function(s,a){return e("li",{key:a,staticClass:"item"},[t._v(" "+t._s(s)+" ")])})),0):e("div",{staticClass:"body f-c-c"},[t._v("暂未接收到数据哦~")])])]),e("div",{staticClass:"f-fs-c"},[e("b",{staticClass:"f-0"},[t._v("测试进度")]),e("el-progress",{staticClass:"f-1",attrs:{"text-inside":!0,"stroke-width":20,percentage:t.progress}})],1),e("el-dialog",{attrs:{title:"实时图表",visible:t.showDialog,width:"90%",top:"1em",center:""},on:{"update:visible":function(s){t.showDialog=s}},scopedSlots:t._u([{key:"footer",fn:function(){return[e("el-button",{attrs:{type:"primary"},on:{click:function(s){t.showDialog=!1}}},[t._v("关闭")])]},proxy:!0}])},[e("RealTimeChart")],1)],1)},i=[],n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"real-time-charts"},[e("div",{staticClass:"head f-sb-fs f-g"},[e("ul",{staticClass:"key-val f-1"},t._l(t.baseInfos,(function(s,a){return e("li",{key:a,staticClass:"item"},[e("span",{staticClass:"key"},[t._v(t._s(s.key))]),e("b",{staticClass:"val"},[t._v(t._s(s.val))])])})),0),e("div",[e("el-progress",{attrs:{type:"circle",percentage:t.progress,"stroke-width":20,width:150,status:100===t.progress?"success":void 0}}),e("div",{staticClass:"f-c-c"},[t._v(" "+t._s(100===t.progress?"已完成":"测试中....")+" ")])],1)]),e("el-divider"),e("ul",{staticClass:"key-val"},t._l(t.statusInfos,(function(s,a){return e("li",{key:a,staticClass:"item"},[e("span",{staticClass:"key"},[t._v(t._s(s.key))]),e("b",{staticClass:"val"},[t._v(t._s(s.val))])])})),0)],1)},c=[],o={data:function(){return{progress:60,baseInfos:[{key:"被测协议",val:"XXX被测协议"},{key:"开始时间",val:"2022-03-13"},{key:"测试ID",val:"XXX-XXX-XXX-ID"}],statusInfos:[{key:"执行状态",val:"XXXX状态"},{key:"进行中",val:"。。。。"},{key:"发送",val:"1 1 1 1 1 1 1 1"},{key:"接收",val:"2 2 2 2 2 2 2 2"}]}},created:function(){},methods:{}},l=o,r=(e("72a6"),e("2877")),u=Object(r["a"])(l,n,c,!1,null,"db643ebe",null),f=u.exports,v=e("880a"),d={components:{RealTimeChart:f},data:function(){return{sendList:[],acceptList:[],progress:0,showDialog:!1}},created:function(){},methods:{getRows:function(t){var s=this;Object(v["e"])({name:t}).then((function(e){s[t]=e}))},startTest:function(){var t=this;setTimeout((function(){t.$confirm("心跳检测异常，请手动对被测设备复位","心跳检测异常",{confirmButtonText:"已复位，继续当前测试",cancelButtonText:"关闭",type:"warning"}).then((function(){t.startUsingLoading=!1,t.getRows("sendList"),setTimeout((function(){t.getRows("acceptList"),t.progress=100}),1e3)})).catch((function(){}))}),1e3)},stopTest:function(){this.$message("暂未实现停止测试逻辑功能~")},showRealTimeChart:function(){this.showDialog=!0},reMakeData:function(){this.$router.push("/home/executeTest/makeData")}},mounted:function(){}},p=d,h=(e("56aa"),Object(r["a"])(p,a,i,!1,null,"215e3516",null));s["default"]=h.exports},"56aa":function(t,s,e){"use strict";e("c820")},"72a6":function(t,s,e){"use strict";e("9aa8")},"9aa8":function(t,s,e){},c820:function(t,s,e){}}]);