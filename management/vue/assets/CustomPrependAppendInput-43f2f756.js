import{M as x,co as b,q as v,aR as p,aE as r,s as i,bx as d,I,bc as a,u as h,F as k,aP as y,H as C}from"./index-346f95fe.js";const B=x({__name:"CustomPrependAppendInput",props:{modelValue:{default:"/pages-system/auth/menu/Index.vue"},options:{default:()=>[]}},emits:["update:modelValue"],setup(c,{emit:V}){b();const _=c,f=V;let l=v({get(){var n;const[o,...t]=(n=_.modelValue)==null?void 0:n.slice(1,-4).split("/");return new Proxy({sel:"/"+o+"/",inp:t.join("/")},{set(s,m,e){const{sel:u,inp:g}=s;return e.startsWith("/")&&(e=e.slice(1)),f("update:modelValue",`${u}${e}.vue`),!0}})},set(o){}});return(o,t)=>{const n=p("el-option"),s=p("el-select"),m=p("el-input");return r(),i(m,{modelValue:a(l).inp,"onUpdate:modelValue":t[1]||(t[1]=e=>a(l).inp=e),placeholder:"请输入路径，例：/auth/menu/Index",clearable:""},{prepend:d(()=>[I(s,{modelValue:a(l).sel,"onUpdate:modelValue":t[0]||(t[0]=e=>a(l).sel=e),placeholder:"请选择",style:{width:"140px"}},{default:d(()=>[(r(!0),h(k,null,y(o.options,(e,u)=>(r(),i(n,{label:e.label,value:e.value,key:u},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),append:d(()=>[C(" .vue ")]),_:1},8,["modelValue"])}}});export{B as default};
