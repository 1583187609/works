(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-095561ae"],{"71f8":function(e,a,n){},9208:function(e,a,n){"use strict";n.r(a);var t=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("el-tabs",{attrs:{type:"border-card"},model:{value:e.currTab,callback:function(a){e.currTab=a},expression:"currTab"}},[n("el-tab-pane",{attrs:{label:"表格1",name:"1"}},[n("BaseTable",{attrs:{height:"100%",headBg:"none",cols:e.tab1.cols,rows:e.tab1.rows,total:e.tab1.total,currPage:e.tab1.currPage,pageSize:e.tab1.pageSize,index:""},scopedSlots:e._u([{key:"cz",fn:function(a){var t=a.row,s=a.index;return[n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){return e.onEdit(t,s)}}},[e._v("编辑")])]}}])})],1),n("el-tab-pane",{attrs:{label:"表格2",name:"2"}},[n("BaseTable",{attrs:{height:"100%",headBg:"none",cols:e.tab2.cols,rows:e.tab2.rows,total:e.tab2.total,currPage:e.tab2.currPage,pageSize:e.tab2.pageSize,index:""},scopedSlots:e._u([{key:"cz",fn:function(a){var t=a.row,s=a.index;return[n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){return e.onDelete(t,s)}}},[e._v("删除")])]}}])})],1),n("el-tab-pane",{attrs:{label:"表格3",name:"3"}},[n("BaseTable",{attrs:{height:"100%",headBg:"none",cols:e.tab3.cols,rows:e.tab3.rows,total:e.tab3.total,currPage:e.tab3.currPage,pageSize:e.tab3.pageSize,index:""},scopedSlots:e._u([{key:"cz",fn:function(a){var t=a.row,s=a.index;return[n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){return e.onLook(t,s)}}},[e._v("查看")])]}}])})],1),n("el-tab-pane",{attrs:{label:"表格4",name:"4"}},[n("BaseTable",{attrs:{cols:e.tab4.cols,rows:e.tab4.rows,total:e.tab4.total,currPage:e.tab4.currPage,pageSize:e.tab4.pageSize,index:""},scopedSlots:e._u([{key:"cz",fn:function(a){var t=a.row,s=a.index;return[n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){return e.onAdd(t,s)}}},[e._v("新增")])]}}])})],1)],1)},s=[],r={cols:[{prop:"name",label:"姓名"},{prop:"sex",label:"性别"},{prop:"age",label:"年龄"},{prop:"cz",label:"操作",type:"slot",width:80}],rows:[{name:"范力川",sex:"男",age:25},{name:"范力川",sex:"男",age:25},{name:"范力川",sex:"男",age:25},{name:"范力川",sex:"男",age:25},{name:"范力川",sex:"男",age:25},{name:"范力川",sex:"男",age:25},{name:"范力川",sex:"男",age:25},{name:"范力川",sex:"男",age:25},{name:"范力川",sex:"男",age:25},{name:"范力川",sex:"男",age:25},{name:"范力川",sex:"男",age:25},{name:"范力川",sex:"男",age:25},{name:"范力川",sex:"男",age:25},{name:"范力川",sex:"男",age:25},{name:"范力川",sex:"男",age:25},{name:"范力川",sex:"男",age:25},{name:"范力川",sex:"男",age:25},{name:"范力川",sex:"男",age:25},{name:"范力川",sex:"男",age:25},{name:"范力川",sex:"男",age:25},{name:"范力川",sex:"男",age:25},{name:"范力川",sex:"男",age:25},{name:"范力川",sex:"男",age:25},{name:"范力川",sex:"男",age:25},{name:"范力川",sex:"男",age:25},{name:"范力川",sex:"男",age:25},{name:"范力川",sex:"男",age:25},{name:"范力川",sex:"男",age:25},{name:"范力川",sex:"男",age:25},{name:"范力川",sex:"男",age:25},{name:"范力川",sex:"男",age:25},{name:"范力川",sex:"男",age:25},{name:"范力川",sex:"男",age:25},{name:"范力川",sex:"男",age:25},{name:"范力川",sex:"男",age:25},{name:"范力川",sex:"男",age:25}],total:36,currPage:1,pageSize:5},o={cols:[{prop:"name",label:"姓名"},{prop:"sex",label:"性别"},{prop:"age",label:"年龄"},{prop:"cz",label:"操作",type:"slot",width:80}],rows:[{name:"范力川",sex:"男",age:25},{name:"范力川",sex:"男",age:25},{name:"范力川",sex:"男",age:25},{name:"范力川",sex:"男",age:25},{name:"范力川",sex:"男",age:25},{name:"范力川",sex:"男",age:25}],total:70,currPage:1,pageSize:10},l={cols:[{prop:"name",label:"姓名"},{prop:"sex",label:"性别"},{prop:"age",label:"年龄"},{prop:"cz",label:"操作",type:"slot",width:80}],rows:[{name:"范力川",sex:"男",age:25},{name:"范力川",sex:"男",age:25},{name:"范力川",sex:"男",age:25}],total:80,currPage:1,pageSize:15},g={cols:[{prop:"name",label:"姓名"},{prop:"sex",label:"性别"},{prop:"age",label:"年龄"},{prop:"cz",label:"操作",type:"slot",width:80}],rows:[{name:"范力川",sex:"男",age:25},{name:"范力川",sex:"男",age:25},{name:"范力川",sex:"男",age:25},{name:"范力川",sex:"男",age:25},{name:"范力川",sex:"男",age:25},{name:"范力川",sex:"男",age:25},{name:"范力川",sex:"男",age:25},{name:"范力川",sex:"男",age:25},{name:"范力川",sex:"男",age:25},{name:"范力川",sex:"男",age:25},{name:"范力川",sex:"男",age:25},{name:"范力川",sex:"男",age:25}],total:100,currPage:1,pageSize:20},c={data:function(){return{currTab:"1",tab1:r,tab2:o,tab3:l,tab4:g}},methods:{onEdit:function(e,a){},onDelete:function(e,a){},onLook:function(e,a){},onAdd:function(e,a){}}},m=c,i=(n("c9c8"),n("2877")),p=Object(i["a"])(m,t,s,!1,null,"feb98772",null);a["default"]=p.exports},c9c8:function(e,a,n){"use strict";n("71f8")}}]);