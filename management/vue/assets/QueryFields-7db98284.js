import{M as f,q as _,aR as t,aE as y,s as V,bx as n,I as b,aQ as g,bc as d,bH as v}from"./index-346f95fe.js";const B=f({__name:"QueryFields",props:{modelValue:{default:()=>({})},field:{},size:{},className:{},inputDebounce:{type:Boolean}},emits:["update:modelValue","change"],setup(u,{emit:m}){const p=u,l=m;let a=_({get(){return p.modelValue},set(e){l("update:modelValue",e)}});return(e,s)=>{const i=t("BaseFormItem"),r=t("el-col");return y(),V(r,{class:"query-fields"},{default:n(()=>[b(i,{style:{width:"100%"},className:e.className,field:e.field,inputDebounce:e.inputDebounce,size:e.size,onChange:s[0]||(s[0]=(o,c)=>l("change",o,c)),modelValue:d(a)[e.field.prop],"onUpdate:modelValue":s[1]||(s[1]=o=>d(a)[e.field.prop]=o)},{custom:n(({field:o})=>[g(e.$slots,"custom",{field:o},void 0,!0)]),_:3},8,["className","field","inputDebounce","size","modelValue"])]),_:3})}}});const N=v(B,[["__scopeId","data-v-626d6534"]]);export{N as default};