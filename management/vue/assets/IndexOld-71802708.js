import{M as mt,c4 as T,c3 as ct,aa as ft,aM as b,aK as dt,c8 as d,q as y,aR as gt,aS as Bt,aE as l,u as z,I as vt,bx as yt,aQ as J,am as F,bc as i,af as ht,s as B,t as R,bz as _t,F as W,aP as Ct,cf as X,cd as Pt,c9 as At,ce as Y,bH as St}from"./index-346f95fe.js";import{_ as kt}from"./Index.vue_vue_type_script_setup_true_lang-f55d7293.js";import bt from"./Index-90bef514.js";import{_ as zt}from"./Pagination.vue_vue_type_script_setup_true_lang-01fa1961.js";import{d as Rt}from"./_config-a971499b.js";import{g as Et}from"./index-6d0323cd.js";import Dt from"./AvatarItem-7422f216.js";import Gt from"./AboutItem-c95940d2.js";import It from"./FaceItem-b9ed714a.js";import Ot from"./PhotoItem-7100c72d.js";import{a as wt}from"./_utils-8fdb241e.js";import{b as Mt,a as Lt,h as jt}from"./_utils-aee21659.js";import"./SetTable.vue_vue_type_script_setup_true_lang-33a097b7.js";import"./BaseTable-25ca9d4f.js";import"./Column.vue_vue_type_script_name_Column_setup_true_lang-c479b511.js";import"./GroupBtns-9cd08886.js";import"./cascader-cbb71516.js";import"./BaseRender.vue_vue_type_script_setup_true_lang-9d3c192b.js";import"./_utils-a8d3f342.js";import"./SetPrint-6f6cb011.js";import"./BatchBtns.vue_vue_type_script_setup_true_lang-d34dfe55.js";import"./QueryFields-7db98284.js";import"./QueryBtns.vue_vue_type_script_setup_true_lang-42b46820.js";import"./_utils-e1c645e6.js";import"./_config-c76f4e31.js";import"./BarsImg-e0a52ecb.js";const Ft={class:"card-crud f-fs-s-c"},qt={class:"list-box f-fs-fs-w f-1"},E="status",Kt=mt({__name:"IndexOld",props:{modelValue:{},formAttrs:{},pageAttrs:{default:()=>({pageSizes:[10,15,20,25,30]})},pagination:{type:[Boolean,Object],default:()=>({currPage:1,pageSize:15})},type:{default:"avatar-audit"},rowKey:{default:"id"},fields:{default:()=>[]},fetch:{},fetchSuccess:{},fetchFail:{},groupBtns:{},immediate:{type:Boolean,default:!0},extraBtns:{},reqMap:{default:T},resMap:{default:T},batchBtn:{type:Boolean,default:!1},extraParams:{},log:{type:Boolean,default:!ct},debug:{type:Boolean},isOmit:{type:Boolean,default:!0},changeFetch:{type:Boolean,default:!0},inputDebounce:{type:Boolean,default:!0},filterByAuth:{type:Function,default:C=>!0},colSpanAttrs:{default:Rt},isCompact:{type:Boolean,default:C=>C.colSpanAttrs.xl<6}},emits:["update:modelValue","extraBtn","groupBtn","selectionChange"],setup(C,{expose:Z,emit:$}){const q=ft("closePopup"),p=C,D=$,x=b(null),{immediate:tt,exportLimit:et,pagination:P,fetch:K,fetchSuccess:G,fetchFail:I,extraParams:at,log:V,debug:N}=p;let{reqMap:n,resMap:U}=p;const O=P?{[`${n.curr_page}`]:P.currPage,[`${n.page_size}`]:P.pageSize}:{},w={...O,...at},m=dt(d.cloneDeep(O)),h=b(!1),f=b([]);let _=y({get(){return p.modelValue},set(t){D("update:modelValue",t)}});const M=y(()=>f.value.filter((t,a)=>t[E]===2)),ot=y(()=>M.value.map(t=>t[p.rowKey])),v=y(()=>f.value.map((t,a)=>t[E]));let A=b(0),r=d.cloneDeep(w);const st=y(()=>{var t;return!((t=f.value)!=null&&t.length)}),Q=y(()=>{var t;return((t=p.extraBtns)==null?void 0:t.map(a=>{var u;const o=Et(a);return(u=Mt)!=null&&u.includes(o.name)&&(o.popconfirm=!1,o.attrs.disabled=!M.value.length),o}))||[]});function S(t,a){const{groupBtns:o}=p,u=Lt(t,a,o);return H(u)}function rt(t){const{text:a}=t;jt({btnObj:t,seledRows:M.value,seledKeys:ot.value,total:A.value,exportLimit:et,emits:D,next:(o=`${a||"操作"}成功`,u,e)=>{X(o),q(u),L(),e==null||e()}})}function k(t,a){const{name:o,text:u}=t,{$index:e}=a;D("groupBtn",o,a,(s=`${u||"操作"}成功！`,c,j)=>{X(s),q(c),L([e,{pass:0,reject:1}[o]]),j==null||j()},r)}function nt(){d.merge(m,O),r=d.cloneDeep(w),g(r)}function ut(t){r=d.merge({},r,{[`${n.curr_page}`]:1}),m[n.curr_page]=1,g(r)}function lt(t){m[n.curr_page]=1,d.merge(r,{[`${n.curr_page}`]:1,[`${n.page_size}`]:t}),g(r)}function pt(t){m[n.curr_page]=t,r=d.merge({},r,{[`${n.curr_page}`]:t}),g(r)}function it(t,a){if(t=Pt(t),a)d.merge(r,t),Object.assign(w,r);else{if(!p.changeFetch)return;Object.assign(r,t,{[`${n.curr_page}`]:1}),m[n.curr_page]=1}tt&&g(r)}function g(t=r,a){K&&(h.value=!0,p.isOmit&&(t=At(t)),!((V||N)&&(Y(t,"req"),N))&&K(t).then(o=>{const u=o[U.records];V&&Y(u,"res"),A.value=o[U.total_num],f.value=u,G==null||G(o),a==null||a()}).catch(o=>{I==null||I(o)}).finally(()=>{h.value=!1}))}function H(t=[]){const{filterByAuth:a}=p;return a?t.filter(({auth:o})=>o!=null&&o.length?a(o):!0):t}function L(t,a){const{type:o}=p;if(o==="avatar-audit"){if(t){const[e,s]=t;f.value[e][E]=s}!f.value.filter(e=>e[E]===2).length&&g(r,a)}else g(r,a)}return Z({refreshList:L}),(t,a)=>{const o=gt("BaseEmpty"),u=Bt("loading");return l(),z("div",Ft,[vt(bt,F({class:"f-0"},t.formAttrs,{fields:t.fields,modelValue:i(_),"onUpdate:modelValue":a[0]||(a[0]=e=>ht(_)?_.value=e:_=e),loading:h.value,inputDebounce:t.inputDebounce,colSpanAttrs:t.colSpanAttrs,isCompact:t.isCompact,onReset:nt,onSearch:ut,onChange:it}),{custom:yt(({field:e,form:s})=>[J(t.$slots,e.prop,{field:e,formData:s},void 0,!0)]),_:3},16,["fields","modelValue","loading","inputDebounce","colSpanAttrs","isCompact"]),J(t.$slots,"middle",{},void 0,!0),Q.value.length?(l(),B(kt,F({key:0,class:"mb-h f-0",btns:H(Q.value),isEmpty:st.value,onClick:rt,total:i(A),toolBtns:[]},x.value),null,16,["btns","isEmpty","total"])):R("",!0),_t((l(),z("div",qt,[(l(!0),z(W,null,Ct(f.value,(e,s)=>(l(),z(W,{key:s},[["avatar-audit","avatar-patrol"].includes(t.type)?(l(),B(Dt,{key:0,class:"item",row:i(wt)({...e,$index:s}),withMask:t.type==="avatar-audit"?[2,""].includes(i(_).status):!1,status:v.value[s],groupBtns:S(e,s),onGroupBtn:c=>k(c,{...e,$index:s}),isPatrol:t.type==="avatar-patrol"},null,8,["row","withMask","status","groupBtns","onGroupBtn","isPatrol"])):t.type==="about"?(l(),B(Gt,{key:1,class:"item",row:{...e,$index:s},status:v.value[s],groupBtns:S(e,s),onGroupBtn:c=>k(c,{...e,$index:s}),bottomBar:v.value[s]===1?e.reason||"~原因为空~":""},null,8,["row","status","groupBtns","onGroupBtn","bottomBar"])):t.type==="face"?(l(),B(It,{key:2,class:"item",row:{...e,$index:s},status:v.value[s],groupBtns:S(e,s),onGroupBtn:c=>k(c,{...e,$index:s}),bottomBar:v.value[s]===1?e.rejectReason||"~原因为空~":""},null,8,["row","status","groupBtns","onGroupBtn","bottomBar"])):t.type==="photo"?(l(),B(Ot,{key:3,class:"item",row:{...e,$index:s},status:v.value[s],groupBtns:S(e,s),onGroupBtn:c=>k(c,{...e,$index:s})},null,8,["row","status","groupBtns","onGroupBtn"])):R("",!0)],64))),128)),!h.value&&!f.value.length?(l(),B(o,{key:0})):R("",!0)])),[[u,h.value]]),i(P)?(l(),B(zt,F({key:1},t.pageAttrs,{currPage:m[i(n).curr_page],"onUpdate:currPage":a[1]||(a[1]=e=>m[i(n).curr_page]=e),pageSize:m[i(n).page_size],"onUpdate:pageSize":a[2]||(a[2]=e=>m[i(n).page_size]=e),total:i(A),onSizeChange:lt,onCurrentChange:pt}),null,16,["currPage","pageSize","total"])):R("",!0)])}}});const de=St(Kt,[["__scopeId","data-v-d64198d7"]]);export{de as default};
