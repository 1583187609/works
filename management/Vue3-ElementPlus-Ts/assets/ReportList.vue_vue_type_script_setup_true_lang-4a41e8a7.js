import{q as n,a6 as s,t as c,D as _,E as p,L as i,J as y,K as x}from"./runtime-core.esm-bundler-95bf9971.js";const w=n({__name:"ReportList",props:{type:{default:1}},setup(r){const t={yes:{text:"已处理",type:"success"},no:{text:"未处理",type:"info"}},e=r,a=[...e.type===1?[{prop:"bjbr",label:"被举报人",width:100}]:[],...e.type===2?[{prop:"jbr",label:"举报人",width:100}]:[],{prop:"jblx",label:"举报类型"},{prop:"jbsj",label:"举报时间",width:110},{prop:"jbnr",label:"举报内容",width:250},{prop:"cljg",label:"处理结果",type:"custom",width:80}],l=[{jbr:"张三",bjbr:"李四",jblx:"虚假资料",jbsj:"2023-07-26",jbnr:"盗用网图",cljg:"未处理"},{jbr:"张三",bjbr:"李四",jblx:"虚假资料",jbsj:"2023-07-26",jbnr:"盗用网图",cljg:"已处理"},{jbr:"张三",bjbr:"李四",jblx:"虚假资料",jbsj:"2023-07-26",jbnr:"盗用网图",cljg:"未处理"}];return(d,m)=>{const b=s("el-tag"),j=s("BaseTable");return c(),_(j,{cols:a,rows:l,class:"report-list"},{cljg:p(({row:g,$index:o})=>[i(b,{type:t[o%2==0?"yes":"no"].type},{default:p(()=>[y(x(t[o%2==0?"yes":"no"].text),1)]),_:2},1032,["type"])]),_:1})}}});export{w as _};
