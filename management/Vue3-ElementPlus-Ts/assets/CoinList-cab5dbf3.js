import{q as o,O as l,a6 as n,t as d,D as p,E as r,x as _,z as c,K as i}from"./runtime-core.esm-bundler-95bf9971.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";const j=o({__name:"CoinList",props:{data:{default:()=>({})}},setup(m){const s=[{prop:"lx",label:"类型",width:200},{prop:"bdsj",label:"变动时间",width:120},{prop:"bdje",label:"变动金额",width:100,type:"custom"},{prop:"ye",label:"余额",width:100}],t=l([{lx:"完善资料",bdsj:"2023-07-26",bdje:"+100",ye:400},{lx:"邀请注册",bdsj:"2023-07-26",bdje:"+100",ye:400},{lx:"解锁更多嘉宾",bdsj:"2023-07-26",bdje:"-100",ye:400}]);return(x,u)=>{const a=n("BaseTable");return d(),p(a,{cols:s,rows:t,class:"coin-list"},{bdje:r(({row:e})=>[_("div",{class:c(e.bdje.startsWith("-")?"green":"red")},i(e.bdje),3)]),_:1},8,["rows"])}}});const h=b(j,[["__scopeId","data-v-b0055194"]]);export{h as default};
