import{l as e}from"./lodash-8dc1f9dc.js";import{P as s,x as t}from"./@element-plus-91223246.js";import"./dayjs-21617033.js";import{_ as o}from"./index-8cf28f90.js";import{d as a,b as l}from"./_config-0a862e30.js";import{E as i}from"./element-plus-6dad9269.js";import{d as r,B as p,e as d,_ as n,f as m,ah as u,ap as c,o as f,O as j,P as v,L as y,V as b,c as x,F as h,a8 as g,ac as k,aa as w,a as _,S as B,T as $,U as q,I as P,u as T,Q as C,J as E}from"./@vue-022d9836.js";import"./call-bind-ada3a9fc.js";import"./get-intrinsic-176af07e.js";import"./es-errors-c8ed318b.js";import"./has-symbols-456daba2.js";import"./has-proto-c2a23985.js";import"./function-bind-afbcd6f2.js";import"./hasown-c3b72c9b.js";import"./set-function-length-968dc075.js";import"./define-data-property-9d7bf764.js";import"./es-define-property-c2edbfb6.js";import"./gopd-16a4ddf0.js";import"./has-property-descriptors-52e43c9d.js";import"./xlsx-c1bdd32b.js";import"./qs-fd29a741.js";import"./side-channel-5a41c40a.js";import"./object-inspect-0d550a97.js";import"./axios-86de682d.js";import"./pinia-f80f4126.js";import"./mock-ada1f893.js";import"./mockjs-217213d3.js";import"./vue-router-e17d6507.js";import"./nprogress-b5e58671.js";import"./vite-plugin-mock-6db8ade2.js";import"./path-to-regexp-83a43451.js";import"./lodash-es-d4f5f48c.js";import"./@vueuse-c70f8764.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-3c499e77.js";const V={key:0,class:"required"},z={key:1,class:"f-c-c"},A={key:2,class:"f-c-c f-0 pt-h pb-h",style:{width:"100%"}},F=o(r({name:"EditTable",__name:"EditTable",props:{cols:{default:()=>[]},rows:{default:()=>[]},footer:{type:Boolean,default:!0},text:{type:Boolean,default:!1},request:{},total:{},currPage:{},pageSize:{},pageAttrs:{},submitText:{default:"提交"},resetText:{default:"重置"},index:{type:Boolean},extraParams:{},autoAddRow:{type:Boolean,default:!1},submitCb:{}},emits:["submit","update:rows"],setup(o,{expose:r,emit:F}){const I=o,O=F,R=p("closePopup"),L=d(null),U=d(!1),J=d(I.rows),{extraParams:S,submitText:D,submitCb:G,index:H,cols:N}=I,Q=n(e.merge({maxHeight:"calc(100% + 36px)"},a));H&&(N.slice(0,2).find((e=>"index"===e.type))||N.unshift({prop:"$index",label:"序号",type:"index",fixed:"left",width:58,index:1}));const K=n(N.map((s=>{const{type:t}=(null==s?void 0:s.field)||{};let o={};return"operate"===t&&(o={prop:"$operate",fixed:"right",width:80}),s=e.merge(o,l,s)})));function M(e,s){const{field:t,label:o,prop:a="",...l}=e,i=`${s}[${a}]`;return t.prop=i,t}m(J,((e=[])=>{if(!e.length&&I.autoAddRow){if(!Object.values(e.slice(-1)[0]).every((e=>""===e))){const s={};Object.keys(e.slice(-1)[0]).forEach((e=>{s[e]=""})),e.push(s)}}O("update:rows",e)}),{immediate:!0,deep:!0});const W=()=>{const e=L.value;e&&e.validate(((e,s)=>{if(e){const e=J.value.slice(0,-1);(null==I?void 0:I.request)?(U.value=!0,I.request(e).then((e=>{i.success(D+"成功"),G?G():R()})).finally((()=>{U.value=!1}))):O("submit",e)}else{const e=Object.values(s)[0][0];i.error(e.message)}}))},X=()=>{const e=L.value;e&&e.resetFields()};return r({formRef:L}),(e,o)=>{const a=u("el-button"),l=u("BaseFormItem"),i=u("el-table-column"),r=u("BaseEmpty"),p=u("el-table"),d=u("BaseIcon"),n=u("el-form"),m=c("debounce");return f(),j(n,{ref_key:"formRef",ref:L,class:"edit-table f-fs-s-c",model:J.value},{default:v((()=>[K.length?(f(),j(p,y({key:0,data:J.value},Q,{class:"table"}),{empty:v((()=>[b(r)])),default:v((()=>[(f(!0),x(h,null,g(K,((t,o)=>(f(),j(i,k(y({key:o},t)),w({header:v((({row:e,colum:s,$index:o})=>[_("span",null,[t.required?(f(),x("span",V,"*")):B("",!0),$(" "+q(t.label),1)])])),_:2},[t.field?{name:"default",fn:v((({row:o,column:i,$index:r})=>{var p,d;return["custom"===(null==(p=null==t?void 0:t.field)?void 0:p.type)?P(e.$slots,t.prop,k(y({key:0},{row:o,col:t,$index:r})),void 0,!0):"operate"===(null==(d=null==t?void 0:t.field)?void 0:d.type)?(f(),x(h,{key:1},[r<J.value.length-1?(f(),j(a,{key:0,icon:T(s),type:"danger",link:"",onClick:e=>{return s=r,void J.value.splice(s,1);var s}},{default:v((()=>[$("删除")])),_:2},1032,["icon","onClick"])):(f(),x(h,{key:1},[$("-")],64))],64)):(f(),j(l,{key:2,field:M(t,r),modelValue:o[t.prop],"onUpdate:modelValue":e=>o[t.prop]=e},null,8,["field","modelValue","onUpdate:modelValue"]))]})),key:"0"}:void 0]),1040)))),128))])),_:3},16,["data"])):(f(),x("div",z,"空空如也~")),!e.text&&e.footer?(f(),x("div",A,[C((f(),j(a,{type:"primary",disabled:U.value},{icon:v((()=>[b(d,{class:E({rotate:U.value}),name:U.value?"Loading":"Promotion"},null,8,["class","name"])])),default:v((()=>[$(" "+q(T(D)),1)])),_:1},8,["disabled"])),[[m,W,void 0,{immediate:!0}]]),b(a,{icon:T(t),onClick:X,disabled:U.value},{default:v((()=>[$(q(e.resetText),1)])),_:1},8,["icon","disabled"])])):B("",!0)])),_:3},8,["model"])}}}),[["__scopeId","data-v-eaf8231e"]]);export{F as default};