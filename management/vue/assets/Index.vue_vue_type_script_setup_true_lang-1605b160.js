import{M as r,aa as l,aR as m,aE as c,s as i,bc as _,cN as f}from"./index-95e659d0.js";import{P as t}from"./user-67406bfa.js";const u=r({__name:"Index",props:{_example_prop:{default:()=>({})}},setup(x){const a=l("openPopup"),p=[{prop:"tx",label:"头像",type:"BaseUpload"},{prop:"dhhm",label:"电话号码",valid:"phone",required:!0},{prop:"xm",label:"姓名",popover:"请注意输入真实姓名",attrs:{maxlength:6}},{prop:"zwjs",label:"自我介绍",attrs:{type:"textarea",maxlength:100,rows:3}}];function s(o,n,e){f({pass:()=>t().then(()=>e()),view:()=>a("第二个纯文本弹窗示例","你好！这是第二个纯文本弹窗示例")},o)}return(o,n)=>{const e=m("BaseForm");return c(),i(e,{style:{width:"500px"},fetch:_(t),fields:p,moreBtns:[{name:"pass",popconfirm:!1},{name:"view",text:"查看"}],onMoreBtns:s},null,8,["fetch"])}}});export{u as _};