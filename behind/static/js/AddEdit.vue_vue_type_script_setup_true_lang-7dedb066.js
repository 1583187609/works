import{d as e,r as a,i as l,o as t,g as s,b as r,a as o,u as p,bX as u}from"./rewrite-3b822c29.js";const d=e({__name:"AddEdit",props:{id:null},setup(e){const d=e,{id:i}=d,m=a({}),b=a([{prop:"jsmc",label:"角色名称",required:!0},{prop:"jsz",label:"角色值",required:!0},{prop:"zt",label:"状态",type:"radio-group",options:[{label:"启用",value:0},{label:"停用",value:1}],attrs:{type:"button"},value:0},{prop:"bz",label:"备注",attrs:{type:"textarea"}},{prop:"cdfp",label:"菜单分配",type:"custom"}]);return i&&setTimeout((()=>{m.value={yhnc:"张三1",yhmc:"小巴兔1",mm:"flc123456",js:2,xb:1,zt:0,bz:"暂无备注内容"}}),300),(e,a)=>{const d=l("BaseTree"),i=l("BaseForm");return t(),s(i,{request:p(u),modelValue:m.value,"onUpdate:modelValue":a[0]||(a[0]=e=>m.value=e),style:{width:"600px"},fields:b.value},{cdfp:r((({form:e})=>[o(d)])),_:1},8,["request","modelValue","fields"])}}});export{d as _};
