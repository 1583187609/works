import{i as y,t as B}from"./common-f4827de9.js";import{d as C,j as V}from"./system-a8d5b9ab.js";import{q as h,e as k,a6 as i,t as o,v as N,x as t,D as f,I as m,K as d,u as s,E as b,L as g,a3 as j,V as z,z as l,A,y as I,J as K}from"./runtime-core.esm-bundler-95bf9971.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";import"./index-79ac556c.js";import"./index-4a03ead4.js";const P={class:"f-1"},S=h({__name:"BaseKeyVal",props:{icon:{},colon:{type:Boolean,default:!0},label:{},value:{},line:{default:0},labelWidth:{},valClass:{},optsName:{},popover:{},joinChar:{default:"，"},vertical:{type:Boolean}},setup(u){const a=u,{optsName:$,popover:v}=a,n=C(v),r=k(()=>{const{value:e,joinChar:c}=a;return B(e)==="Array"?e.join(c):e});return(e,c)=>{const p=i("BaseIcon"),_=i("el-popover");return o(),N("div",{class:l(["base-key-val f-fs-s",[e.vertical?"f-c-c-c":"f-fs-fs"]])},[t("div",{class:l(["key f-0 f-fs-fs",{colon:e.colon}]),style:A({width:s(y)(e.labelWidth)})},[e.icon?(o(),f(p,{key:0,class:"mr-4",name:e.icon},null,8,["name"])):m("",!0),t("span",P,d(e.label),1),s(n)?(o(),f(_,j(z({key:1},s(n))),{reference:b(()=>[g(p,{class:"m-2 tips-icon",name:"QuestionFilled"})]),_:1},16)):m("",!0)],6),t("div",{class:l(["val f-1 f-fs-fs-w",{[`line-${a.line}`]:!!a.line,[`${a.valClass}`]:!!a.valClass}])},[I(e.$slots,"default",{},()=>[K(d(s(V).includes(r.value)?"-":r.value),1)],!0)],2)],2)}}});const F=w(S,[["__scopeId","data-v-0811dfa5"]]);export{F as default};