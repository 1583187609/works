import{M as b,bO as u,aM as i,aR as a,aE as f,s as d,bx as t,I as s,bc as _}from"./index-346f95fe.js";import{P as x}from"./user-7f5e5957.js";import h from"./SectionForm-6d1819a5.js";const g=b({__name:"FormPopup",props:{data:{},refreshList:{}},setup(p){const{getOpts:l}=u();l("Enable"),i(p.data);const r=[{title:"代理账户",fields:[{prop:"zfbxm",label:"支付宝姓名",span:12},{prop:"zfbzh",label:"支付宝账户",span:12}]},{title:"基本信息",fields:[{prop:"gsr",label:"归属人",type:"select"},{prop:"bz",label:"备注",attrs:{type:"textarea",maxlength:30}}]},{name:"yebd",title:"余额变动",type:"custom"}],n=[{prop:"bd",label:"变动",type:"custom"},{prop:"je",label:"金额",type:"custom"},{prop:"lx",label:"类型"},{prop:"ye",label:"余额"},{prop:"sj",label:"时间"}];return(B,v)=>{const o=a("BaseNum"),c=a("BaseCrud");return f(),d(h,{style:{width:"800px"},sections:r},{yebd:t(()=>[s(c,{fetch:_(x),cols:n,tableAttrs:{size:"small"},pageAttrs:{small:!0}},{bd:t(({row:m,index:e})=>[s(o,{value:(e%2===0?1:-1)*20,showText:""},null,8,["value"])]),je:t(({row:m,index:e})=>[s(o,{value:(e%2===0?1:-1)*20},null,8,["value"])]),_:1},8,["fetch"])]),_:1})}}});export{g as _};
