import{d as e,r as l,i as r,o as s,g as a,u as t,bX as u}from"./rewrite-3b822c29.js";const o=e({__name:"AddEdit",props:{id:null},setup(e){const o=e,{id:d}=o,i=l({}),p=l([{prop:"yhnc",label:"课程名称",required:!0},{prop:"kcsm",label:"课程说明",required:!0},{prop:"zt",label:"状态",required:!0}]);return d&&setTimeout((()=>{i.value={yhnc:"张三1",yhmc:"小巴兔1",mm:"flc123456",js:2,xb:1,zt:0,bz:"暂无备注内容"}}),300),(e,l)=>{const o=r("BaseForm");return s(),a(o,{request:t(u),modelValue:i.value,"onUpdate:modelValue":l[0]||(l[0]=e=>i.value=e),style:{width:"600px"},fields:p.value},null,8,["request","modelValue","fields"])}}});export{o as _};
