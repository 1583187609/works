var s,o,t;import{k as e}from"./@element-plus-91223246.js";import{a}from"./vue-router-e17d6507.js";import"./dayjs-21617033.js";import{C as r,c as i,y as m,s as l,_ as p}from"./index-8cf28f90.js";import{g as n}from"./index-0a44dd7a.js";import{d as c,bd as u,j as d,o as j,c as v,F as f,a8 as y,O as g,P as h,u as k,S as x,T as b,U as B,J as _,B as w,ah as N,L as C,V as z}from"./@vue-022d9836.js";import"./call-bind-ada3a9fc.js";import"./get-intrinsic-176af07e.js";import"./es-errors-c8ed318b.js";import"./has-symbols-456daba2.js";import"./has-proto-c2a23985.js";import"./function-bind-afbcd6f2.js";import"./hasown-c3b72c9b.js";import"./set-function-length-968dc075.js";import"./define-data-property-9d7bf764.js";import"./es-define-property-c2edbfb6.js";import"./gopd-16a4ddf0.js";import"./has-property-descriptors-52e43c9d.js";import"./lodash-8dc1f9dc.js";import"./xlsx-c1bdd32b.js";import"./element-plus-6dad9269.js";import"./lodash-es-d4f5f48c.js";import"./@vueuse-c70f8764.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-3c499e77.js";import"./qs-fd29a741.js";import"./side-channel-5a41c40a.js";import"./object-inspect-0d550a97.js";import"./axios-86de682d.js";import"./pinia-f80f4126.js";import"./mock-ada1f893.js";import"./mockjs-217213d3.js";import"./nprogress-b5e58671.js";import"./vite-plugin-mock-6db8ade2.js";import"./path-to-regexp-83a43451.js";const G=p(c({name:"GroupBtns",__name:"GroupBtns",props:u({btns:{},row:{},maxNum:{},vertical:{type:Boolean},emptyStr:{},compact:{type:Boolean},small:{type:Boolean}},Object.assign({btns:()=>[],maxNum:r,emptyStr:"-"},null==(t=null==(o=null==(s=i)?void 0:s.BaseCrud)?void 0:o._components)?void 0:t.GroupBtns)),emits:["click"],setup(s,{emit:o}){const t={size:"small",plain:!0,text:!0,style:"padding: 0"},r=a(),i=w("closePopup"),p=s,c=o;let u=!1;const G=d((()=>{var s;return(null==(s=p.btns)?void 0:s.length)>p.maxNum})),S=d((()=>{var s;const{maxNum:o}=p,t=(null==(s=p.btns)?void 0:s.map((s=>n(s))))||[];return m(t),u=!t.slice(o-1).some((s=>s.popconfirm)),t}));function q(s){const{name:o,text:t,to:e}=s;e?r.push(e):c("click",s,((s=`${t||"操作"}成功！`,o,e)=>{l(s),i(o),null==e||e()}))}return(s,o)=>{const a=N("BaseBtn"),r=N("el-button"),i=N("el-dropdown-item"),m=N("el-dropdown-menu"),l=N("el-dropdown");return j(),v("div",{class:_(["group-btns",[s.vertical?"f-c-c-c":"f-c-c"]])},[(j(!0),v(f,null,y(S.value.slice(0,G.value?s.maxNum-1:s.maxNum),((o,e)=>(j(),g(a,C({class:{"ml-0-i":s.vertical},name:o,data:s.row,onClick:s=>q(o)},t,{key:e}),null,16,["class","name","data","onClick"])))),128)),G.value?(j(),g(l,{key:0,trigger:k(u)?"hover":"click","hide-on-click":k(u)},{dropdown:h((()=>[z(m,null,{default:h((()=>[(j(!0),v(f,null,y(S.value.slice(s.maxNum-1),((o,e)=>(j(),g(i,{key:e},{default:h((()=>[z(a,C({name:o,data:s.row,onClick:s=>q(o)},t),null,16,["name","data","onClick"])])),_:2},1024)))),128))])),_:1})])),default:h((()=>[z(r,C({class:["ml-12",[s.vertical?"ml-0-i":""]],icon:k(e),type:"primary"},t),{default:h((()=>[b(" 更多 ")])),_:1},16,["class","icon"])])),_:1},8,["trigger","hide-on-click"])):x("",!0),S.value.length?x("",!0):(j(),v(f,{key:1},[b(B(s.emptyStr),1)],64))],2)}}}),[["__scopeId","data-v-fbb106d9"]]);export{G as default};