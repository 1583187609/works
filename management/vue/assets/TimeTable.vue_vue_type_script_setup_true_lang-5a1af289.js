import{M as e,aK as l,aR as a,aE as s,s as o,bx as t,u as d,I as n,H as u,F as p,v as m,t as i,aP as r,b3 as c,bN as b}from"./index-31bd5f7b.js";const y={key:0,class:"f-c-c"},f={class:"f-c-c"},z=m("span",{class:"f-0 ml-q"},"次（含）",-1),g=m("span",{class:"f-0 ml-q"},"以上",-1),v=e({__name:"TimeTable",props:{_example_prop:{default:()=>({})}},setup(e){const v=[{label:"扣款",value:1},{label:"旷工",value:2}],V=[{prop:"qj",label:"区间（分钟）",type:"custom",minWidth:120},{prop:"gz",label:"规则",type:"custom",minWidth:300},{prop:"cz",label:"cz",type:"custom",width:100}],_=l([{qj:10,gz:{type:1,val:10}},{qj:30,gz:{type:2,val:10}}]);function q(){b.info("点击了添加按钮")}function x(){b.info("点击了删除按钮")}return(e,l)=>{const b=a("BaseNumberRange"),k=a("el-input-number"),w=a("el-radio-button"),j=a("el-radio-group"),h=a("el-button"),U=a("BaseTable");return s(),o(U,{cols:V,rows:_},{qj:t((({row:e,$index:l})=>[0===l?(s(),d("div",y,[n(b,{style:{width:"200px"}}),u("（含）")])):(s(),d(p,{key:1},[n(k,{modelValue:e.qj,"onUpdate:modelValue":l=>e.qj=l,class:"mr-q",min:0},null,8,["modelValue","onUpdate:modelValue"]),u("以上 ")],64))])),gz:t((({row:e,$index:l})=>[m("div",f,[0===l?(s(),d(p,{key:0},[n(b,{style:{width:"200px"}}),z],64)):i("",!0),n(j,{class:"mr-o ml-o f-0",modelValue:e.gz.type,"onUpdate:modelValue":l=>e.gz.type=l},{default:t((()=>[(s(),d(p,null,r(v,((e,l)=>n(w,{disabled:e.disabled,value:e.value,key:l},{default:t((()=>[u(c(e.label),1)])),_:2},1032,["disabled","value"]))),64))])),_:2},1032,["modelValue","onUpdate:modelValue"]),n(k,{modelValue:e.gz.val,"onUpdate:modelValue":l=>e.gz.val=l,min:0},null,8,["modelValue","onUpdate:modelValue"]),g])])),cz:t((({row:e,$index:l})=>[l===_.length-1?(s(),o(h,{key:0,onClick:q,type:"primary",size:"small"},{default:t((()=>[u("添加")])),_:1})):(s(),o(h,{key:1,onClick:x,type:"danger",size:"small"},{default:t((()=>[u("删除")])),_:1}))])),_:1},8,["rows"])}}});export{v as _};
