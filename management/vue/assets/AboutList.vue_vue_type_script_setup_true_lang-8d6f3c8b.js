import{M as t,aR as s,aE as a,s as r,bc as e}from"./index-31bd5f7b.js";const o=t({__name:"AboutList",props:{type:{default:1}},setup(t){const o=t,l=[{prop:"tjsj",label:"提交时间",width:110},{prop:"nr",label:"内容",width:300},{prop:"zt",label:"状态",width:60,type:"BaseTag"}],p=[{tjsj:"2023-07-26",nr:"这是关于你的提交内容",zt:"通过"},{tjsj:"2023-07-26",nr:"...这是关于我的提交内容...",zt:"驳回"},{tjsj:"2023-07-26",nr:"这是关于你的提交内容",zt:"通过"},{tjsj:"2023-07-26",nr:"...这是关于我的提交内容...",zt:"驳回"}].filter(((t,s)=>1===o.type?s%2==0:s%2==1));return(t,o)=>{const n=s("BaseTable");return a(),r(n,{cols:l,rows:e(p),class:"about-list"},null,8,["rows"])}}});export{o as _};
