import{_ as f}from"./AddEdit.vue_vue_type_script_setup_true_lang-7255b7f6.js";import _ from"./DelTips-e53d4ce2.js";import{M as x,aa as p,aR as h,aE as b,s as g,bc as B,bN as a}from"./index-95e659d0.js";import{P}from"./user-67406bfa.js";const A=x({__name:"Index",props:{_example_prop:{default:()=>({})}},setup(y){const s=p("openPopup"),r=p("closePopup"),c=[{prop:"mbmc",label:"模板名称"}],l=[{prop:"mbmc",label:"模板名称",minWidth:250},{prop:"mbcy",label:"模板成员",minWidth:250},{prop:"cjr",label:"创建人",minWidth:250},{prop:"gxrq",label:"更新日期",minWidth:250},{prop:"status",label:"状态",type:"BaseTag",attrs:{name:"$AuditStatus"}}];function d(t,e,n){const o={add:()=>i(null,n)};o[t]?o[t]():a.warning(`点击了${t}按钮`)}function m(t,e,n){const o={edit:()=>i(e,n),view:()=>(e.id,void 0),audit:()=>(e.id,void 0),delete:()=>{s({title:"温馨提示",confirm(){u(e.id)}},_,"dialog",!0)}};o[t]?o[t]():a.warning(`点击了${t}按钮`)}function i(t,e){s(t?"编辑":"新增",{component:f,attrs:{data:t,refreshList:e}})}function w(t,e){}function C(t,e){}function u(t,e){r("dialog"),a.success("删除成功！")}return(t,e)=>{const n=h("BaseCrud");return b(),g(n,{cols:l,fields:c,fetch:B(P),extraBtns:[{name:"add",text:"添加模板"}],groupBtns:["edit","view","audit",{name:"delete",popconfirm:!1},{name:"design",text:"工资单设计",attrs:{type:"info",icon:"Operation"}},{name:"grant",text:"工资单发放",attrs:{type:"info",icon:"Money"}}],onExtraBtn:d,onGroupBtn:m},null,8,["fetch"])}}});export{A as _};
