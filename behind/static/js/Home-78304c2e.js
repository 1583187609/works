import{d as s,bE as e,r as a,o as t,c as r,B as o,f as n,u as c,a as u,i}from"./rewrite-56f504a7.js";import{_ as l}from"./_plugin-vue_export-helper-1b428a4d.js";const m={class:"home f-c-c-c"},p={class:"welcome"},d=l(s({__name:"Home",setup(s){const{user:l}=e(),d=a(function(){const s=(new Date).getHours();let e="";e=s<2?"凌晨":s<8?"清晨":s<11?"上午":s<13?"中午":s<18?"下午":s<20?"傍晚":s<23?"晚上":"深夜";return e}());return(s,e)=>{var a;const f=i("BaseEmpty");return t(),r("div",m,[o("div",p,n(d.value)+"好，"+n(null==(a=c(l))?void 0:a.name),1),u(f,{tips:"请点击左侧菜单"})])}}}),[["__scopeId","data-v-fe24b778"]]);export{d as default};