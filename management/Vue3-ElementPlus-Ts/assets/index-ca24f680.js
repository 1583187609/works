import"./index-1a9ed3b5.js";import{e as B}from"./user-760da63c.js";import{_ as v}from"./AddEdit.vue_vue_type_script_setup_true_lang-5ec6ce50.js";import{_ as C}from"./FormPopup.vue_vue_type_script_setup_true_lang-a4adf796.js";import{u as E}from"./all-tags-eaeb4056.js";import{ay as m}from"./index-79ac556c.js";import{q as M,Q as O,O as P,r as V,a6 as u,t as k,D as A,E as I,x as p,L,u as c,k as S}from"./runtime-core.esm-bundler-95bf9971.js";import"./common-f4827de9.js";import"./index-a0dfeff6.js";import"./UploadAvatar-ed051a4e.js";import"./avatar-810e7140.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./SectionForm-c721db42.js";import"./system-a8d5b9ab.js";import"./_utils-eb832563.js";import"./FooterBtns-f1b9b194.js";import"./index-4a03ead4.js";import"./index-d2b43e08.js";import"./storage-f5c2149e.js";import"./pinia-680d6f3f.js";const T={class:"f-sb-s",style:{"text-align":"left",padding:"0 8px"}},N=p("div",{class:"f-1"},[p("div",{class:"nickname line-1"}," 用户昵称用户昵称用户昵称用户昵称用户昵称 "),p("div",{class:"f-sb-c"},[p("div",null,"24岁"),p("div",null,"四川成都")]),p("div",null,"1531231132")],-1),ot=M({__name:"index",setup(U){const{getOpts:i}=E(),f=i("Sex"),_=i("UserType"),b=i("Enable"),l=O("openPopup");let a=P({age:[20,30]});const h=V([{prop:"id",label:"用户ID"},{prop:"name",label:"用户姓名"},{prop:"age",label:"年龄",type:"BaseNumberRange"},{prop:"sex",label:"性别",type:"select",options:f},{prop:"type",label:"用户类型",type:"select",options:_},{prop:"status",label:"账号状态",type:"select",options:b}]),g=[{prop:"user_info",label:"用户信息",width:250,type:"custom"},{prop:"name",label:"用户姓名",width:90},{prop:"sex_text",label:"性别",width:90,sortable:!0},{prop:"age",label:"年龄",width:90,sortable:!0},{prop:"address_text",label:"地址",minWidth:250},{prop:"phone",label:"电话",minWidth:120},{prop:"type_text",label:"用户类型",minWidth:90},{prop:"status",label:"状态",type:"BaseTag"}];function x(t,e,s){const o={add:()=>n(null,s)};o[t]?o[t]():m(`点击了${t}按钮`)}function y(t,e,s){const o={edit:()=>n(e,s),plus:()=>r(t,e,s),minus:()=>r(t,e,s)};o[t]?o[t]():m(`点击了${t}按钮`)}function n(t,e){l(t?"编辑":"新增",{component:v,attrs:{id:t==null?void 0:t.id,refreshList:e}})}function r(t,e,s){l({plus:"增加当日次数",minus:"减少当日次数"}[t],{component:C,attrs:{id:e==null?void 0:e.id,refreshList:s}},"dialog")}return(t,e)=>{const s=u("BaseImg"),o=u("BaseCrud");return k(),A(o,{cols:g,modelValue:c(a),"onUpdate:modelValue":e[0]||(e[0]=d=>S(a)?a.value=d:a=d),fields:h.value,fetch:c(B),extraBtns:["add"],groupBtns:["edit",{name:"plus",text:"增加当日次数",attrs:{icon:"Plus",type:"success"}},{name:"minus",text:"减少当日次数",attrs:{icon:"Minus",type:"danger"}}],onExtraBtn:x,onGroupBtn:y,tableAttrs:{showSummary:!0},groupBtnsAttrs:{vertical:!0}},{user_info:I(()=>[p("div",T,[L(s,{class:"f-0 mr-h"}),N])]),_:1},8,["modelValue","fields","fetch"])}}});export{ot as default};
