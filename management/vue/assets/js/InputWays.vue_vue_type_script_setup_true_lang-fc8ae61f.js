import{d as e,j as a,ah as l,o as s,O as u,P as t,c as d,F as o,a8 as n,T as p,U as i}from"./@vue-022d9836.js";const m=e({name:"CodeVisualization_componentsInputWays",__name:"InputWays",props:{modelValue:{default:0},excepts:{}},emits:["update:modelValue"],setup(e,{emit:m}){const r=e,b=a((()=>{const{excepts:e}=r;return[{label:"JSON",value:0},{label:"动态添加",value:1},{label:"请求获取",value:2,disabled:!0}].filter((a=>!e||e.includes(opt.value)))})),c=m,v=a({get:()=>r.modelValue,set(e){c("update:modelValue",e)}});return(e,a)=>{const m=l("el-radio"),r=l("el-radio-group");return s(),u(r,{class:"input-ways",modelValue:v.value,"onUpdate:modelValue":a[0]||(a[0]=e=>v.value=e)},{default:t((()=>[(s(!0),d(o,null,n(b.value,((e,a)=>(s(),u(m,{label:e.value,key:a,disabled:e.disabled},{default:t((()=>[p(i(e.label),1)])),_:2},1032,["label","disabled"])))),128))])),_:1},8,["modelValue"])}}});export{m as _};
