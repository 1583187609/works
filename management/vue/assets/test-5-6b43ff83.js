import{M as w,aM as x,aR as n,aE as o,u as _,v as l,I as e,bx as t,F as d,aP as m,s as B,t as S,b3 as k,aI as V,aF as I,bH as N}from"./index-346f95fe.js";import{P as f}from"./user-7f5e5957.js";import{C as u}from"./Chart-e61ec04a.js";import{_ as b}from"./ChartLine.vue_vue_type_script_setup_true_lang-b3bfa00e.js";import{_ as P}from"./ChartBar.vue_vue_type_script_setup_true_lang-b5d2028a.js";import{_ as A}from"./ChartPie.vue_vue_type_script_setup_true_lang-8e5e47fc.js";import{_ as F}from"./ChartBars.vue_vue_type_script_setup_true_lang-da0a6ebc.js";import"./index-c56431f8.js";const $=c=>(V("data-v-21117f22"),c=c(),I(),c),z={class:"page"},L={class:"row f-sb-s"},M={key:0,class:"notices all-hide-scroll"},T={class:"f-1"},E={class:"line-1"},H=$(()=>l("time",{class:"time f-0 ml-half"},"2023-06-19",-1)),U={class:"row"},D={class:"row f-sb-s"},O={class:"row f-sb-s"},R=w({__name:"test-5",setup(c){const v=[{label:"我的待办",value:1,cols:[{prop:"follow",label:"关注"},{prop:"title",label:"标题"},{prop:"from_unit",label:"来文单位"},{prop:"accept_time",label:"接受时间"}],api:f},{label:"我的待阅",value:2,cols:[{prop:"follow",label:"关注1"},{prop:"title",label:"标题1"},{prop:"from_unit",label:"来文单位1"},{prop:"accept_time",label:"接受时间1"}],api:f},{label:"我的已办",value:3,cols:[{prop:"follow",label:"关注2"},{prop:"title",label:"标题2"},{prop:"from_unit",label:"来文单位2"},{prop:"accept_time",label:"接受时间2"}],api:f},{label:"我发起的",value:4,cols:[{prop:"follow",label:"关注3"},{prop:"title",label:"标题3"},{prop:"from_unit",label:"来文单位3"},{prop:"accept_time",label:"接受时间3"}],api:f}],h={xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[150,230,224,218,135,147,260],type:"line"}]},i=x(1);return(W,p)=>{const C=n("BaseCrud"),g=n("el-tab-pane"),y=n("el-tabs"),s=n("BaseSection");return o(),_("div",z,[l("div",L,[e(s,{class:"section f-2",title:"待办事项",badge:"10"},{default:t(()=>[e(y,{modelValue:i.value,"onUpdate:modelValue":p[0]||(p[0]=a=>i.value=a),onTabClick:p[1]||(p[1]=a=>i.value=a.paneName),type:"border-card"},{default:t(()=>[(o(),_(d,null,m(v,(a,r)=>e(g,{label:a.label,name:a.value,key:r},{default:t(()=>[i.value===a.value?(o(),B(C,{key:0,cols:a.cols,fetch:a.api,tableAttrs:{size:"small",maxHeight:200},pageAttrs:{small:!0,pageSizes:[5,10,15,20,25]},pagination:{currPage:1,pageSize:5}},null,8,["cols","fetch"])):S("",!0)]),_:2},1032,["label","name"])),64))]),_:1},8,["modelValue"])]),_:1}),e(s,{class:"section f-1",title:"消息通知",badge:"120"},{default:t(()=>[(o(),_("ul",M,[(o(),_(d,null,m(20,(a,r)=>l("li",{class:"item f-sb-c",key:r},[l("div",T,[l("span",E,"这是第"+k(r+1)+"条消息",1)]),H])),64))]))]),_:1})]),l("div",U,[e(s,{class:"section f-1",title:"通图图表 - 折线图"},{default:t(()=>[e(b)]),_:1})]),l("div",D,[e(s,{class:"section f-1",title:"基础万能图 - Chart"},{default:t(()=>[e(u)]),_:1}),e(s,{class:"section f-1",title:"饼图 - ChartPie"},{default:t(()=>[e(A)]),_:1})]),l("div",O,[e(s,{class:"section f-1",title:"自定义option - Chart"},{default:t(()=>[e(u,{option:h})]),_:1}),e(s,{class:"section f-1",title:"折线图 - ChartLine"},{default:t(()=>[e(b)]),_:1}),e(s,{class:"section f-1",title:"柱状图 - ChartBar（多维度）"},{default:t(()=>[e(P)]),_:1}),e(s,{class:"section f-1",title:"柱状图 - ChartBars（多个）"},{default:t(()=>[e(F)]),_:1})])])}}});const Z=N(R,[["__scopeId","data-v-21117f22"]]);export{Z as default};
