import{M as e,aa as p,aK as a,aR as s,aE as t,s as l,bc as o,cR as r}from"./index-31bd5f7b.js";import{P as n}from"./user-3e3a0c56.js";const c=e({__name:"Index",props:{_example_prop:{default:()=>({})}},setup(e){const c=p("openPopup"),i=a([{prop:"xm",label:"姓名"},{prop:"jg",label:"籍贯",type:"cascader",options:[]},{prop:"nl",label:"年龄",type:"BaseNumberRange"},{prop:"zt",label:"账号状态",type:"select",options:[]},{prop:"zcsj",label:"注册时间",type:"date-picker"}]),m=[{type:"UserInfo",label:"举报人"},{type:"UserInfo",label:"被举报人",popover:"这里使用simple属性，所以显示信息少了",attrs:{simple:!0}},{prop:"xm",label:"姓名"},{prop:"status",label:"账号状态",type:"BaseTag"},{prop:"cjsj",label:"创建时间"},{prop:"xgsj",label:"修改时间"}];function x(e,p,a,s,t){r({open:()=>c("纯文本弹窗","Hello！这是一个纯文本内容的弹窗示例")},e)}return(e,p)=>{const a=s("BaseCrud");return t(),l(a,{style:{"max-width":"1400px"},fetch:o(n),fields:i,cols:m,extraBtns:[{name:"open",text:"打开弹窗",attrs:{type:"primary",icon:"Notification"}}],onExtraBtn:x,colSpanAttrs:{xs:12,sm:12,md:8,lg:4,xl:3},size:"small"},null,8,["fetch","fields"])}}});export{c as _};
