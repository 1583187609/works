import{M as p,aR as r,aE as j,s,bc as l}from"./index-31bd5f7b.js";const t=p({__name:"EvaluateList",props:{type:{default:1}},setup(p){const t=p,a=[{prop:"pjr",label:"评价人",width:100},{prop:"pjlx",label:"评价类型",width:80},{prop:"pjnr",label:"评价内容",width:250},{prop:"pjsj",label:"评价时间",width:110}],e=[{pjr:"李一",pjsj:"2023-07-26",pjnr:"有礼貌",pjlx:"否"},{pjr:"李二",pjsj:"2023-07-26",pjnr:"没礼貌",pjlx:"是"},{pjr:"李三",pjsj:"2023-07-26",pjnr:"有礼貌",pjlx:"否"},{pjr:"李四",pjsj:"2023-07-26",pjnr:"没礼貌",pjlx:"否"}].filter(((p,r)=>1===t.type?r%2==0:r%2==1));return(p,t)=>{const o=r("BaseTable");return j(),s(o,{cols:a,rows:l(e),class:"report-list"},null,8,["rows"])}}});export{t as _};
