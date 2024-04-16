import{_ as e}from"./index-8cf28f90.js";import{P as s}from"./auth-9cacae95.js";import{C as t}from"./Chart-cecd1307.js";import{_ as a}from"./ChartLine.vue_vue_type_script_setup_true_lang-29b5e48d.js";import{_ as l}from"./ChartBar.vue_vue_type_script_setup_true_lang-ff7a0470.js";import{_ as o}from"./ChartPie.vue_vue_type_script_setup_true_lang-2434bebb.js";import{_ as i}from"./ChartBars.vue_vue_type_script_setup_true_lang-5125de6f.js";import{d as r,e as p,ah as m,o as c,c as n,a as u,V as f,P as j,F as _,a8 as d,O as b,S as v,U as h,bm as g,bk as y}from"./@vue-022d9836.js";import"./dayjs-21617033.js";import"./call-bind-ada3a9fc.js";import"./get-intrinsic-176af07e.js";import"./es-errors-c8ed318b.js";import"./has-symbols-456daba2.js";import"./has-proto-c2a23985.js";import"./function-bind-afbcd6f2.js";import"./hasown-c3b72c9b.js";import"./set-function-length-968dc075.js";import"./define-data-property-9d7bf764.js";import"./es-define-property-c2edbfb6.js";import"./gopd-16a4ddf0.js";import"./has-property-descriptors-52e43c9d.js";import"./lodash-8dc1f9dc.js";import"./xlsx-c1bdd32b.js";import"./element-plus-6dad9269.js";import"./lodash-es-d4f5f48c.js";import"./@vueuse-c70f8764.js";import"./@element-plus-91223246.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-3c499e77.js";import"./qs-fd29a741.js";import"./side-channel-5a41c40a.js";import"./object-inspect-0d550a97.js";import"./axios-86de682d.js";import"./pinia-f80f4126.js";import"./mock-ada1f893.js";import"./mockjs-217213d3.js";import"./vue-router-e17d6507.js";import"./nprogress-b5e58671.js";import"./vite-plugin-mock-6db8ade2.js";import"./path-to-regexp-83a43451.js";import"./echarts-911d2a7f.js";import"./zrender-3442365c.js";import"./tslib-a4e99503.js";const C={class:"page"},x={class:"row f-sb-s"},w={key:0,class:"notices all-hide-scroll"},k={class:"f-1"},z={class:"line-1"},B=(e=>(g("data-v-9c3e2efb"),e=e(),y(),e))((()=>u("time",{class:"time f-0 ml-half"},"2023-06-19",-1))),S={class:"row"},A={class:"row f-sb-s"},P={class:"row f-sb-s"},F=e(r({name:"TestFive",__name:"index",setup(e){const r=[{label:"我的待办",value:1,cols:[{prop:"follow",label:"关注"},{prop:"title",label:"标题"},{prop:"from_unit",label:"来文单位"},{prop:"accept_time",label:"接受时间"}],api:s},{label:"我的待阅",value:2,cols:[{prop:"follow",label:"关注1"},{prop:"title",label:"标题1"},{prop:"from_unit",label:"来文单位1"},{prop:"accept_time",label:"接受时间1"}],api:s},{label:"我的已办",value:3,cols:[{prop:"follow",label:"关注2"},{prop:"title",label:"标题2"},{prop:"from_unit",label:"来文单位2"},{prop:"accept_time",label:"接受时间2"}],api:s},{label:"我发起的",value:4,cols:[{prop:"follow",label:"关注3"},{prop:"title",label:"标题3"},{prop:"from_unit",label:"来文单位3"},{prop:"accept_time",label:"接受时间3"}],api:s}],g={xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[150,230,224,218,135,147,260],type:"line"}]},y=p(1);return(e,s)=>{const p=m("BaseCrud"),F=m("el-tab-pane"),T=m("el-tabs"),V=m("BaseSection");return c(),n("div",C,[u("div",x,[f(V,{class:"section f-2",title:"待办事项",badge:"10"},{default:j((()=>[f(T,{modelValue:y.value,"onUpdate:modelValue":s[0]||(s[0]=e=>y.value=e),onTabClick:s[1]||(s[1]=e=>y.value=e.paneName),type:"border-card"},{default:j((()=>[(c(),n(_,null,d(r,((e,s)=>f(F,{label:e.label,name:e.value,key:s},{default:j((()=>[y.value===e.value?(c(),b(p,{key:0,cols:e.cols,fetch:e.api,tableAttrs:{size:"small",maxHeight:200},pageAttrs:{small:!0,pageSizes:[5,10,15,20,25]},pagination:{currPage:1,pageSize:5}},null,8,["cols","fetch"])):v("",!0)])),_:2},1032,["label","name"]))),64))])),_:1},8,["modelValue"])])),_:1}),f(V,{class:"section f-1",title:"消息通知",badge:"120"},{default:j((()=>[(c(),n("ul",w,[(c(),n(_,null,d(20,((e,s)=>u("li",{class:"item f-sb-c",key:s},[u("div",k,[u("span",z,"这是第"+h(s+1)+"条消息",1)]),B]))),64))]))])),_:1})]),u("div",S,[f(V,{class:"section f-1",title:"通图图表 - 折线图"},{default:j((()=>[f(a)])),_:1})]),u("div",A,[f(V,{class:"section f-1",title:"基础万能图 - Chart"},{default:j((()=>[f(t)])),_:1}),f(V,{class:"section f-1",title:"饼图 - ChartPie"},{default:j((()=>[f(o)])),_:1})]),u("div",P,[f(V,{class:"section f-1",title:"自定义option - Chart"},{default:j((()=>[f(t,{option:g})])),_:1}),f(V,{class:"section f-1",title:"折线图 - ChartLine"},{default:j((()=>[f(a)])),_:1}),f(V,{class:"section f-1",title:"柱状图 - ChartBar（多维度）"},{default:j((()=>[f(l)])),_:1}),f(V,{class:"section f-1",title:"柱状图 - ChartBars（多个）"},{default:j((()=>[f(i)])),_:1})])])}}}),[["__scopeId","data-v-9c3e2efb"]]);export{F as default};
