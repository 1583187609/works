import{M as e,aR as t,aE as s,s as b,bx as r,I as j,H as l,b3 as p}from"./index-31bd5f7b.js";const a=e({__name:"ReportList",props:{type:{default:1}},setup(e){const a={yes:{text:"已处理",type:"success"},no:{text:"未处理",type:"info"}},o=e,n=[...1===o.type?[{prop:"bjbr",label:"被举报人",width:100}]:[],...2===o.type?[{prop:"jbr",label:"举报人",width:100}]:[],{prop:"jblx",label:"举报类型"},{prop:"jbsj",label:"举报时间",width:110},{prop:"jbnr",label:"举报内容",width:250},{prop:"cljg",label:"处理结果",type:"custom",width:80}],c=[{jbr:"张三",bjbr:"李四",jblx:"虚假资料",jbsj:"2023-07-26",jbnr:"盗用网图",cljg:"未处理"},{jbr:"张三",bjbr:"李四",jblx:"虚假资料",jbsj:"2023-07-26",jbnr:"盗用网图",cljg:"已处理"},{jbr:"张三",bjbr:"李四",jblx:"虚假资料",jbsj:"2023-07-26",jbnr:"盗用网图",cljg:"未处理"}];return(e,o)=>{const y=t("el-tag"),i=t("BaseTable");return s(),b(i,{cols:n,rows:c,class:"report-list"},{cljg:r((({row:e,$index:t})=>[j(y,{type:a[t%2==0?"yes":"no"].type},{default:r((()=>[l(p(a[t%2==0?"yes":"no"].text),1)])),_:2},1032,["type"])])),_:1})}}});export{a as _};
