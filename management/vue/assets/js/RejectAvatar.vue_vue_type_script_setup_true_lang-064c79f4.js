import{d as e,_ as a,ah as t,o as l,O as s,u as o,D as r}from"./@vue-022d9836.js";const u=e({name:"SystemUserDetailBaseInfo_componentsRejectAvatar",__name:"RejectAvatar",props:{data:{default:()=>({})}},setup(e){let u=a({bhly:1});const p=[{prop:"bhly",label:"驳回理由",type:"radio-group",options:[{label:"不够严肃",value:1},{label:"形象不佳",value:2},{label:"卡通图片",value:3}],attrs:{type:"button"}},{prop:"qt",label:"前台",type:"select",required:!0}];return(e,a)=>{const n=t("BaseForm");return l(),s(n,{modelValue:o(u),"onUpdate:modelValue":a[0]||(a[0]=e=>r(u)?u.value=e:u=e),fields:p,class:"reject-avatar"},null,8,["modelValue"])}}});export{u as _};
