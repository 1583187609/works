import{d as e,r as l,i as r,o as s,g as t,u as a,bX as p}from"./rewrite-56f504a7.js";const u=e({__name:"AddEdit",props:{id:null},setup(e){const u=e,{id:d}=u,o=l({}),i=l([{prop:"yhnc",label:"课程名称",required:!0},{prop:"yhmc",label:"课程属性",required:!0,type:"select"},{prop:"sjhm",label:"班级",required:!0,type:"select"},{prop:"sjhm",label:"教师",required:!0,type:"select"},{prop:"sjhm",label:"上课方式",required:!0,type:"select"},{prop:"sjhm",label:"上课时间",required:!0,type:"date-picker"}]);return d&&setTimeout((()=>{o.value={yhnc:"张三1",yhmc:"小巴兔1",mm:"flc123456",js:2,xb:1,zt:0,bz:"暂无备注内容"}}),300),(e,l)=>{const u=r("BaseForm");return s(),t(u,{request:a(p),modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=e=>o.value=e),style:{width:"600px"},fields:i.value},null,8,["request","modelValue","fields"])}}});export{u as _};