import{d as e,r,i as t,o as l,g as a,u as s,bX as p}from"./rewrite-3b822c29.js";const u=e({__name:"AddEdit",props:{id:null},setup(e){const u=e,{id:c}=u,d=r({}),o=r([{prop:"kcmc",label:"支出项目",required:!0,type:"select"},{prop:"kcmc",label:"支出金额",required:!0,type:"input-number"},{prop:"kcmc",label:"支出时间",required:!0,type:"date-picker",attrs:{type:"date"}},{prop:"kcmc",label:"支出人",required:!0,type:"select"},{prop:"kcmc",label:"用途",required:!0,type:"select"}]);return c&&setTimeout((()=>{d.value={yhnc:"张三1",yhmc:"小巴兔1",mm:"flc123456",js:2,xb:1,zt:0,bz:"暂无备注内容"}}),300),(e,r)=>{const u=t("BaseForm");return l(),a(u,{request:s(p),modelValue:d.value,"onUpdate:modelValue":r[0]||(r[0]=e=>d.value=e),style:{width:"600px"},fields:o.value},null,8,["request","modelValue","fields"])}}});export{u as _};