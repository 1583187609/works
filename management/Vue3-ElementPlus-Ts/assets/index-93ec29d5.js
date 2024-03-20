import"./index-1a9ed3b5.js";import{e as B,D as y,f as E,c as D}from"./user-760da63c.js";import{_ as d}from"./AddEdit.vue_vue_type_script_setup_true_lang-a425c95c.js";import{u as T}from"./all-tags-eaeb4056.js";import"./common-f4827de9.js";import{k as U}from"./system-a8d5b9ab.js";import{ay as u}from"./index-79ac556c.js";import{q as P,Q as v,r as C,a6 as L,t as O,D as S,u as $}from"./runtime-core.esm-bundler-95bf9971.js";import"./index-a0dfeff6.js";import"./UploadAvatar-ed051a4e.js";import"./avatar-810e7140.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./storage-f5c2149e.js";import"./pinia-680d6f3f.js";import"./index-4a03ead4.js";const X=P({__name:"index",setup(k){const{getOpts:p}=T(),c=p("Sex"),m=p("UserType"),f=p("Enable"),a=v("openPopup"),b=C([{prop:"id",label:"用户ID"},{prop:"name",label:"用户姓名"},{prop:"age",label:"年龄",type:"BaseNumberRange"},{prop:"sex",label:"性别",type:"select",options:c},{prop:"type",label:"用户类型",type:"select",options:m},{prop:"status",label:"账号状态",type:"select",options:f}]),n=[{prop:"id",label:"用户ID",width:70},{prop:"name",label:"用户姓名",width:90},{prop:"sex_text",label:"性别",width:90,sortable:!0},{prop:"age",label:"年龄",width:90,sortable:!0},{prop:"address_text",label:"地址",minWidth:250},{prop:"phone",label:"电话",minWidth:120},{prop:"type_text",label:"用户类型",minWidth:90},{prop:"status",label:"状态",type:"BaseTag"}];function h(e,t,s){const o={edit:()=>r(t,s),view:()=>_(t),delete:()=>i([t.id],s),forbid:()=>l(t,s),enable:()=>l(t,s)};o[e]?o[e]():u(`点击了${e}按钮`)}function x(e,t,s){const o={add:()=>r(null,s),delete:()=>i(t,s),export:()=>g(t,s)};o[e]?o[e]():u(`点击了${e}按钮`)}function r(e,t){a(e?"编辑":"新增",{component:d,attrs:{id:e==null?void 0:e.id,refreshList:t}})}function _(e){a("查看",{component:d,attrs:{id:e.id,pureText:!0}})}function i(e,t){y({ids:e}).then(s=>{t()})}function g(e,t){E({ids:e,cols:n}).then(s=>{U(s,"用户列表"),t()})}function l(e,t){const{status:s,id:o}=e;D({id:o,status:s===1?2:1}).then(W=>{t()})}return(e,t)=>{const s=L("BaseCrud");return O(),S(s,{cols:n,fields:b.value,fetch:$(B),extraBtns:["add",{name:"add",text:"新增（url)",to:"/user/account/detail"},,"delete","import","export"],groupBtns:["edit",{name:"edit",text:"编辑（url)",to:o=>`/user/account/detail?id=${o.id}`},"delete",o=>(o==null?void 0:o.status)===1?"forbid":"enable","view"],onExtraBtn:x,onGroupBtn:h,selection:"",index:"",sort:""},null,8,["fields","fetch","groupBtns"])}}});export{X as default};