var e;import{d as s,bd as t,e as a,j as i,o,c as r,V as l,P as p,J as n,U as c,S as u,ah as m,bD as d,u as j,F as v,O as h,a3 as f,bm as g,bk as b,a as y}from"./@vue-022d9836.js";import"./dayjs-21617033.js";import{c as w,u as z,_ as k}from"./index-8cf28f90.js";import"./lodash-8dc1f9dc.js";import{c as F,E as x,u as B}from"./element-plus-6dad9269.js";import"./call-bind-ada3a9fc.js";import"./get-intrinsic-176af07e.js";import"./es-errors-c8ed318b.js";import"./has-symbols-456daba2.js";import"./has-proto-c2a23985.js";import"./function-bind-afbcd6f2.js";import"./hasown-c3b72c9b.js";import"./set-function-length-968dc075.js";import"./define-data-property-9d7bf764.js";import"./es-define-property-c2edbfb6.js";import"./gopd-16a4ddf0.js";import"./has-property-descriptors-52e43c9d.js";import"./xlsx-c1bdd32b.js";import"./qs-fd29a741.js";import"./side-channel-5a41c40a.js";import"./object-inspect-0d550a97.js";import"./axios-86de682d.js";import"./pinia-f80f4126.js";import"./mock-ada1f893.js";import"./mockjs-217213d3.js";import"./vue-router-e17d6507.js";import"./nprogress-b5e58671.js";import"./vite-plugin-mock-6db8ade2.js";import"./path-to-regexp-83a43451.js";import"./lodash-es-d4f5f48c.js";import"./@vueuse-c70f8764.js";import"./@element-plus-91223246.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-3c499e77.js";const S={class:"base-upload"},L={key:0,class:"f-c-c-c upload-err-mask"},U=(e=>(g("data-v-8833d987"),e=e(),b(),e))((()=>y("div",null,"上传失败",-1))),$={key:0,class:"tips"},_=k(s({name:"BaseUpload",__name:"BaseUpload",props:t({modelValue:{},size:{},fit:{},showFileList:{type:Boolean},drag:{type:Boolean},accept:{},limitSize:{},headers:{},action:{},showTips:{type:Boolean},handleSuccessResponse:{type:Function}},Object.assign({size:100,fit:"cover",showFileList:!1,showTips:!0,accept:"image/png,image/jpg,image/jpeg",limitSize:10485760},null==(e=w)?void 0:e.BaseUpload)),emits:["update:modelValue","change"],setup(e,{emit:s}){d((e=>({db7a05d2:j(k)})));const t=e,g=s,b=a(0),{formItem:y}=B(),w=a(F().value),k=z(t.size),_=a(""),I=i({get:()=>t.modelValue||"",set(e){g("update:modelValue",e),null==y||y.validate("blur")}}),V=i((()=>{const{accept:e,limitSize:s}=t;return`仅支持${q(e)}，不超过${D(s)}`})),C=e=>{const{limitSize:s,accept:a}=t,{type:i,size:o}=e,r=function(e,s){let t="";const a=e.split(",");a.includes(s)||(t=`仅支持上传${q(e)}格式的图片`);return t}(a,i)||function(e,s){return s>e?`图片大小不能超过${D(e)}`:""}(s,o);return!r||(x.error(r),!1)},R=e=>{const{loaded:s,total:t}=e;b.value=Math.floor(s/t*100)},O=(e,s)=>{t.handleSuccessResponse(e,s).then((e=>{I.value=e,g("change",e)})).catch((e=>{x.error(e)}))},P=(e,s,t)=>{x.error("文件上传失败"),_.value=URL.createObjectURL(s.raw)};function T(){w.value||(I.value="")}function q(e){return e.split(",").map((e=>e.split("/")[1])).join("，")}function D(e){let s=e/1024,t="";return s<1024?t=`${s.toFixed(1)}kb`:(s/=1024,t=`${s.toFixed(1)}Mb`),t}return(e,s)=>{const t=m("BaseIcon"),a=m("BaseImg"),i=m("el-progress"),d=m("el-upload");return o(),r("div",S,[l(d,{class:n(["upload f-c-c",{disabled:w.value}]),action:e.action,"show-file-list":e.showFileList,"before-upload":C,"on-progress":R,"on-success":O,"on-error":P,headers:e.headers},{default:p((()=>[_.value?(o(),r("div",L,[l(t,{size:"26",name:"Picture"}),U])):u("",!0),I.value||_.value?(o(),r(v,{key:1},[w.value||_.value?u("",!0):(o(),h(t,{key:0,onClick:f(T,["stop"]),class:n(["icon-del",{disabled:w.value}]),size:"24",name:"CircleCloseFilled"},null,8,["class"])),l(a,{class:"img",src:I.value||_.value,fit:e.fit,preview:w.value},null,8,["src","fit","preview"])],64)):(o(),r(v,{key:2},[b.value>0&&b.value<100?(o(),h(i,{key:0,type:"circle",width:.8*parseInt(e.size.toString()),percentage:b.value,"stroke-width":4},null,8,["width","percentage"])):(o(),h(t,{key:1,class:"icon-add",size:parseFloat(j(k).toString())/4,name:"Plus"},null,8,["size"]))],64))])),_:1},8,["class","action","show-file-list","headers"]),e.showTips?(o(),r("div",$,c(V.value),1)):u("",!0)])}}}),[["__scopeId","data-v-8833d987"]]);export{_ as default};
