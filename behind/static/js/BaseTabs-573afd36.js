import{d as a,r as e,o as l,g as s,b as t,c as u,D as n,F as m,i as o}from"./rewrite-3b822c29.js";const d=a({__name:"BaseTabs",props:{modelValue:null,tabs:{default:()=>[]}},emits:["update:modelValue"],setup(a,{emit:d}){const b=e(a.tabs[0].name);function p(a){b.value=a.paneName,d("update:modelValue",a.paneName)}return(e,d)=>{const r=o("el-tab-pane"),c=o("el-tabs");return l(),s(c,{modelValue:b.value,"onUpdate:modelValue":d[0]||(d[0]=a=>b.value=a),class:"type-tabs",onTabClick:p},{default:t((()=>[(l(!0),u(m,null,n(a.tabs,((a,e)=>(l(),s(r,{label:a.label,name:a.name,key:e},null,8,["label","name"])))),128))])),_:1},8,["modelValue"])}}});export{d as default};
