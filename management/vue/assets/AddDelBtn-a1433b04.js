import{M as _,bf as p,aR as r,aE as a,s as d,bc as n,cJ as u,cK as f,t as m,cn as y,bH as b}from"./index-346f95fe.js";const k=_({__name:"AddDelBtn",props:{type:{default:"add"},size:{default:26}},emits:["click"],setup(C,{emit:o}){p(e=>({"6d5eb4eb":n(y)(e.size)}));const c=o;function s(e){c("click",e)}return(e,t)=>{const l=r("el-button");return e.type==="add"?(a(),d(l,{key:0,class:"add-del-btn f-0",type:"primary",text:"",icon:n(u),onClick:t[0]||(t[0]=i=>s("add"))},null,8,["icon"])):e.type==="del"?(a(),d(l,{key:1,class:"add-del-btn f-0",type:"danger",text:"",icon:n(f),onClick:t[1]||(t[1]=i=>s("del"))},null,8,["icon"])):m("",!0)}}});const B=b(k,[["__scopeId","data-v-ca931665"]]);export{B as default};