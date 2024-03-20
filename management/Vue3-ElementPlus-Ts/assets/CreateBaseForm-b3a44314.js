import{u as k}from"./all-tags-eaeb4056.js";import{e as n,C as S}from"./Config-79338e5f.js";import{S as N}from"./SectionForm-c721db42.js";import{t as w}from"./common-f4827de9.js";import{o as B}from"./system-a8d5b9ab.js";import{q as F,Q as V,O as P,r as f,e as j,w as q,a6 as v,t as I,v as J,L as c,u as T,k as E,x as u,bn as $,bl as z}from"./runtime-core.esm-bundler-95bf9971.js";import{_ as A}from"./_plugin-vue_export-helper-c27b6911.js";import"./storage-f5c2149e.js";import"./pinia-680d6f3f.js";import"./InputWays.vue_vue_type_script_setup_true_lang-eecd1af2.js";import"./index-79ac556c.js";import"./index-4a03ead4.js";import"./_utils-eb832563.js";import"./FooterBtns-f1b9b194.js";import"./index-d2b43e08.js";const _=r=>($("data-v-9addfd66"),r=r(),z(),r),W={class:"f-sb-fs",style:{height:"200px"}},H={class:"ml-t f-1 f-fs-s-c"},L=_(()=>u("h1",{class:"title f-0"},"预览",-1)),M=_(()=>u("h1",{class:"title mt-t f-0"},"JSON",-1)),Q=F({__name:"CreateBaseForm",props:{_example_prop:{default:()=>({})}},setup(r){const h=V("openPopup"),y=[{label:"输入框",value:"input"},{label:"数字输入框",value:"input-number"},{label:"选择框",value:"select"},{label:"级联",value:"cascader"},{label:"多选框",value:"checkbox"},{label:"自定义",value:"custom"}],x=[{label:"电话号码",value:"phone"},{label:"身份证号",value:"identity"},{label:"密码",value:"password"},{label:"邮箱",value:"identity"},{label:"年龄",value:"age"}];let a=P(Object.assign({}));k();const i=[{label:"是",value:!0},{label:"否",value:!1}],d=f([]),m=f(""),C=[{prop:"xm",label:"姓名"},{prop:"xb",label:"性别"},{prop:"nl",label:"年龄"},{prop:"dh",label:"电话"}],g=j(()=>{const e=b();return C.map((t,l)=>{const{prop:o,label:s}=t;return setTimeout(()=>{a[o].prop=o,a[o].label=s}),{prop:o,title:`${s||"-"}(${o||"-"})`,fields:e}})});q(a,e=>{e=B(e);const t=Object.values(e);t.some(l=>JSON.stringify(l)==="{}")||(d.value=t,m.value=JSON.stringify(t))},{deep:!0});function b(e=!1){const t=["select","cascader","checkbox-group"].includes(a.type);return[{prop:"label",label:"标签名",span:6,required:!1},{prop:"prop",label:"属性名",span:6,required:!1},{prop:"type",label:"控件类型",type:"select",span:6,popover:"表单控件类型",options:y},{prop:"required",label:"是否必填",type:"select",span:6,options:i},{prop:"defaultValue",label:"默认值",span:6,popover:"默认值"},{prop:"example",label:"例如文案",span:6,popover:"placeholder中的文字，会直接拼在placeholder文字后面"},{prop:"valid",label:"校验类型",type:"select",span:6,popover:"内置的几种常用校验类型，含表单校验规则、属性等",options:x},{prop:"span",label:"列宽占位",type:"input-number",span:6,popover:"每个表单项占位宽度，最小为1，最大,为24",attrs:{style:"width:100%;",min:1,max:24}},{prop:"pureText",label:"是否纯文本",type:"select",span:6,popover:"展示时，将不会看到输入框等边框，而是以纯文本展示",options:i},{prop:"labelWidth",label:"标签宽度",span:6,popover:"手动指定标签宽度",example:n.labelWidth},{prop:"labelHide",label:"隐藏标签",type:"select",span:6,popover:"手动指定标签宽度",options:i},t&&{prop:"options",label:"下拉项",attrs:{type:"textarea",readonly:!0,onClick:()=>p("options")},example:n.options},{prop:"attrs",label:"属性集",span:12,attrs:{type:"textarea",readonly:!0,onClick:()=>p("attrs")},example:n.attrs,popover:"属性参见ElementPlus官方文档：https://element-plus.org/zh-CN/component/button.html"},{prop:"rules",label:"规则集",span:12,attrs:{type:"textarea",readonly:!0,onClick:()=>p("rules")},popover:"属性参见ElementPlus官方文档：https://element-plus.org/zh-CN/component/form.html#form-attributes",example:n.rules},{prop:"tips",label:"提示文案",span:12,popover:"控价下方的提示性文字"},{prop:"tips",label:"疑问文案",span:12,popover:"鼠标放到标签文字右侧问号图标上时，出现的提示性文字"},{prop:"before",label:"前置元素",span:12,popover:"每个表单项前面的元素，可以是文本或自定义组件",attrs:{type:"textarea",readonly:!0,rows:1,onClick:()=>p("before")}},{prop:"after",label:"后置元素",span:12,popover:"每个表单项后面的元素，可以是文本或自定义组件",attrs:{type:"textarea",readonly:!0,rows:1,onClick:()=>p("after")}},{prop:"children",label:"子级元素",popover:"表单项后面的子元素",attrs:{type:"textarea",readonly:!0,onClick:()=>p("children")}}].filter(l=>w(l)==="Object")}function p(e=""){var l;const t=(l=b().find(o=>o.prop===e))==null?void 0:l.label;h(`编辑${t||""}(${e})`,{component:S,attrs:{type:e}})}function O(e){}return(e,t)=>{const l=v("BaseForm"),o=v("el-input");return I(),J("div",W,[c(N,{class:"create-base-form f-3",modelValue:T(a),"onUpdate:modelValue":t[0]||(t[0]=s=>E(a)?a.value=s:a=s),sections:g.value,debug:""},null,8,["modelValue","sections"]),u("div",H,[L,c(l,{class:"f-1 ml-o",fields:d.value,disabled:""},null,8,["fields"]),M,c(o,{class:"f-0",type:"textarea",onChange:O,modelValue:m.value,rows:4,placeholder:"表单字段项，JSON",readonly:"",clearable:""},null,8,["modelValue"])])])}}});const re=A(Q,[["__scopeId","data-v-9addfd66"]]);export{re as default};