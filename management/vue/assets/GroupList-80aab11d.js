import B from"./AddDelBtn-a1433b04.js";import{M as w,q as F,aK as I,aM as P,bs as p,aR as b,aE as u,u as m,aP as _,F as v,s as L,am as T,I as C,c8 as d,bN as D,cb as N,bH as A}from"./index-346f95fe.js";import{g as G,h as M}from"./_utils-e1c645e6.js";const O=w({__name:"GroupList",props:{modelValue:{},parentProp:{default:""},fields:{default:()=>[]},pureText:{type:Boolean}},emits:["update:modelValue","change"],setup(g,{emit:x}){const l=g,c=x,V=G(l.fields),a=F({get(){return l.modelValue},set(e){c("update:modelValue",e)}}),n=I({}),i=P([]);p(()=>l.fields,e=>{const{modelValue:o}=l,r=M(e,c,o),{data:f,fields:t}=r;d.merge(n,f),i.value=t},{immediate:!0}),p(()=>l.modelValue,e=>{d.merge(n,e)},{immediate:!1,deep:!0}),p(n,e=>{d.merge(l.modelValue,e)},{immediate:!1,deep:!0});function h(){const e=Object.values(a.value.slice(-1)[0]);return e.length?e.some(r=>N.includes(r)):!0}function y(e,o){if(e==="add"){if(h()){D.error("请将最后一项填写完毕后，再新增！");return}a.value.push(JSON.parse(JSON.stringify(V)))}else if(e==="del")a.value.splice(o,1);else throw new Error(`暂不支持${e}类型`)}return(e,o)=>{const r=b("BaseFormItem");return u(!0),m(v,null,_(a.value,(f,t)=>(u(),m("div",{class:"group-item f-fs-fs-w",key:t},[(u(!0),m(v,null,_(i.value,(s,E)=>(u(),L(r,T({prefixProp:`${e.parentProp}[${t}].`,field:s,pureText:s.pureText||e.pureText,modelValue:a.value[t][s.prop],"onUpdate:modelValue":k=>a.value[t][s.prop]=k},s,{key:E}),null,16,["prefixProp","field","pureText","modelValue","onUpdate:modelValue"]))),128)),C(B,{onClick:s=>y(s,t),type:t<a.value.length-1?"del":"add"},null,8,["onClick","type"])]))),128)}}});const U=A(O,[["__scopeId","data-v-4dae5fe8"]]);export{U as default};
