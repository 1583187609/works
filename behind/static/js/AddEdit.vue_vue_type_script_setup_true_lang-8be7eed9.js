import{d as e,r as s,i as l,o as t,g as a,u as r,bX as p}from"./rewrite-3b822c29.js";const o=e({__name:"AddEdit",props:{id:null},setup(e){const o=e,{id:u}=o,d=s({}),m=s([{prop:"xsxm",label:"介绍学生",required:!0,type:"select"},{prop:"sjhm",label:"被介绍学生",required:!0,type:"select"},{prop:"sjhm",label:"介绍时间",type:"date-picker",attrs:{type:"date"}},{prop:"sjhm",label:"优惠金额"}]);return u&&setTimeout((()=>{d.value={yhnc:"张三1",yhmc:"小巴兔1",mm:"flc123456",js:2,xb:1,zt:1,bz:"暂无备注内容"}}),300),(e,s)=>{const o=l("BaseForm");return t(),a(o,{style:{width:"600px"},modelValue:d.value,"onUpdate:modelValue":s[0]||(s[0]=e=>d.value=e),request:r(p),fields:m.value},null,8,["modelValue","request","fields"])}}});export{o as _};
