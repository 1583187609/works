import{d as e,r as l,i as a,o as s,c as t,a as m,B as p,u as r,bX as o,F as i}from"./rewrite-56f504a7.js";import{_ as b}from"./_plugin-vue_export-helper-1b428a4d.js";const u={class:"key-vals f-sb-fs-w mt-t mb-t"},d=b(e({__name:"AddEdit",props:{id:null},setup(e){const b=e,{id:d}=b,c=l({prop:"gzyf",label:"工资月份",type:"date-picker"}),n=l({}),v=l([{prop:"mm",label:"招生提成"},{prop:"sjhm",label:"奖金补助"},{prop:"zt",label:"考勤扣款"},{prop:"bz",label:"社保扣款"},{prop:"bz",label:"其他扣款"}]);return d&&setTimeout((()=>{n.value={yhnc:"张三1",yhmc:"小巴兔1",mm:"flc123456",js:2,xb:1,zt:0,bz:"暂无备注内容"}}),300),(e,l)=>{const b=a("BaseFormItem"),d=a("BaseKeyVal"),f=a("BaseForm");return s(),t(i,null,[m(b,{field:c.value},null,8,["field"]),p("div",u,[m(d,{label:"教师姓名",class:"item"}),m(d,{label:"1v1课时数",class:"item"}),m(d,{label:"基础工资",class:"item"}),m(d,{label:"1v1课程提成",class:"item"}),m(d,{label:"免费课时数",class:"item"}),m(d,{label:"1v多课时数",class:"item"}),m(d,{label:"撤销课扣款",class:"item"}),m(d,{label:"1v多课程提成",class:"item"})]),m(f,{request:r(o),modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=e=>n.value=e),style:{width:"600px"},fields:v.value},null,8,["request","modelValue","fields"])],64)}}}),[["__scopeId","data-v-a8132b51"]]);export{d as default};