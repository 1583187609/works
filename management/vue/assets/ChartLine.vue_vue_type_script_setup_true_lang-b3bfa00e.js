import"./index-c56431f8.js";import{t as y,L as C,g as n,C as x,a as p}from"./Chart-e61ec04a.js";import{M as w,q as b,c8 as L,aE as S,s as _}from"./index-346f95fe.js";const z=w({__name:"ChartLine",props:{theme:{},height:{},width:{},title:{},unit:{},data:{default:()=>[["product","2015","2016","2017"],["示例1",43.3,85.8,93.7],["示例2",83.1,73.4,55.1],["示例3",86.4,65.2,82.5],["示例4",72.4,53.9,39.1]]},smooth:{type:Boolean,default:!1},symbolSize:{default:6},option:{default:()=>({})}},setup(c){const h={legend:{},tooltip:{trigger:"axis"},xAxis:{type:"category",...p},yAxis:{type:"value",...p},grid:{left:0,top:40,right:0,bottom:0,containLabel:!0}},m=c,u=b(()=>{var s;const{data:t,option:a,unit:i,title:r,symbolSize:d,smooth:f}=m,e=t[0]||["product"],g=((s=e==null?void 0:e.slice(1))==null?void 0:s.map((A,l)=>({type:"line",symbolSize:d,smooth:f,lineStyle:{color:o(l)},itemStyle:{color:o(l)}})))||[];return L.merge({},h,{...r&&{title:{text:r,...y}},...i&&{yAxis:{name:i}},dataset:{source:t},series:g},a)});function o(t){return new C(0,0,0,1,[{offset:0,color:n[t][0]},{offset:1,color:n[t][0]}])}return(t,a)=>(S(),_(x,{class:"chart-line",option:u.value,height:t.height,width:t.width,theme:t.theme},null,8,["option","height","width","theme"]))}});export{z as _};
