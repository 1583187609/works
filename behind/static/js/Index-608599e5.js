import{d as e,at as r,r as p,i as l,o as t,g as a,u as o,E as s}from"./rewrite-3b822c29.js";import{G as u}from"./test-6cbf8a74.js";import{_ as b}from"./AddEdit.vue_vue_type_script_setup_true_lang-9c74989b.js";const i=e({__name:"Index",setup(e){const i=r("openPopup"),d=p([{prop:"kcmc",label:"课程名称",type:"select",required:!0},{prop:"bj",label:"班级名称",required:!0},{prop:"bj",label:"教师",type:"select",required:!0},{prop:"bj",label:"课程属性",type:"select",required:!0},{prop:"bj",label:"课时费",required:!0},{prop:"bj",label:"班级说明",attrs:{type:"textarea"}},{prop:"bj",label:"状态",type:"radio-group",options:[{label:"正常",value:0},{label:"禁用",value:1}],required:!0}]),n=p([{prop:"kcmc",label:"课程名称"},{prop:"kcsx",label:"课程属性"},{prop:"bj",label:"班级"},{prop:"js",label:"教师"},{prop:"ksf",label:"课时费"},{prop:"bjsm",label:"班级说明"},{prop:"zt",label:"状态"},{prop:"cjsj",label:"创建时间"},{prop:"cz",label:"操作",type:"operate"}]);function c(e,r){s("点击了"+e+"按钮"),i(e,"编辑班级",b,{id:r.id})}function j(e){s(`点击了${e}按钮`),i(e,"新增班级",b)}return(e,r)=>{const p=l("BaseCrud");return t(),a(p,{fields:d.value,cols:n.value,request:o(u),extraBtns:["add"],groupBtns:["edit"],onExtraBtn:j,onGroupBtn:c},null,8,["fields","cols","request"])}}});export{i as default};
