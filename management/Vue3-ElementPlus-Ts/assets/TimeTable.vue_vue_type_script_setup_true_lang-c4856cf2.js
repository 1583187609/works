import{ay as y}from"./index-79ac556c.js";import{q as x,O as B,a6 as o,t as a,D as m,E as t,v as d,L as n,J as c,F as p,x as u,I as j,a0 as C,K as N}from"./runtime-core.esm-bundler-95bf9971.js";const U={key:0,class:"f-c-c"},T={class:"f-c-c"},w=u("span",{class:"f-0 ml-q"},"次（含）",-1),D=u("span",{class:"f-0 ml-q"},"以上",-1),W=x({__name:"TimeTable",props:{_example_prop:{default:()=>({})}},setup(E){const f=[{label:"扣款",value:1},{label:"旷工",value:2}],g=[{prop:"qj",label:"区间（分钟）",type:"custom",minWidth:120},{prop:"gz",label:"规则",type:"custom",minWidth:300},{prop:"cz",label:"cz",type:"custom",width:100}],r=B([{qj:10,gz:{type:1,val:10}},{qj:30,gz:{type:2,val:10}}]);function V(){y.info("点击了添加按钮")}function h(){y.info("点击了删除按钮")}return(F,L)=>{const i=o("BaseNumberRange"),_=o("el-input-number"),z=o("el-radio-button"),v=o("el-radio-group"),b=o("el-button"),k=o("BaseTable");return a(),m(k,{cols:g,rows:r},{qj:t(({row:l,$index:s})=>[s===0?(a(),d("div",U,[n(i,{style:{width:"200px"}}),c("（含）")])):(a(),d(p,{key:1},[n(_,{modelValue:l.qj,"onUpdate:modelValue":e=>l.qj=e,class:"mr-q",min:0},null,8,["modelValue","onUpdate:modelValue"]),c("以上 ")],64))]),gz:t(({row:l,$index:s})=>[u("div",T,[s===0?(a(),d(p,{key:0},[n(i,{style:{width:"200px"}}),w],64)):j("",!0),n(v,{class:"mr-o ml-o f-0",modelValue:l.gz.type,"onUpdate:modelValue":e=>l.gz.type=e},{default:t(()=>[(a(),d(p,null,C(f,(e,q)=>n(z,{disabled:e.disabled,label:e.value,key:q},{default:t(()=>[c(N(e.label),1)]),_:2},1032,["disabled","label"])),64))]),_:2},1032,["modelValue","onUpdate:modelValue"]),n(_,{modelValue:l.gz.val,"onUpdate:modelValue":e=>l.gz.val=e,min:0},null,8,["modelValue","onUpdate:modelValue"]),D])]),cz:t(({row:l,$index:s})=>[s===r.length-1?(a(),m(b,{key:0,onClick:V,type:"primary",size:"small"},{default:t(()=>[c("添加")]),_:1})):(a(),m(b,{key:1,onClick:h,type:"danger",size:"small"},{default:t(()=>[c("删除")]),_:1}))]),_:1},8,["rows"])}}});export{W as _};