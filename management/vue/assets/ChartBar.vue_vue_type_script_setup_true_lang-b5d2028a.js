import"./index-c56431f8.js";import{t as m,L as c,g as n,C as g,a as p}from"./Chart-e61ec04a.js";import{M as b,q as w,c8 as y,c2 as C,aE as x,s as W}from"./index-346f95fe.js";const O=b({__name:"ChartBar",props:{theme:{},height:{},width:{},title:{},unit:{},data:{default:()=>[["product","2015","2016","2017"],["示例1",43.3,85.8,93.7],["示例2",83.1,73.4,55.1],["示例3",86.4,65.2,82.5],["示例4",72.4,53.9,39.1]]},option:{default:()=>({})}},setup(l){const s={legend:{},barWidth:16,barGap:"50%",tooltip:{trigger:"item"},xAxis:{type:"category",...p},yAxis:{type:"value",...p},grid:{left:0,top:30,right:0,bottom:0,containLabel:!0}},i=l,d=w(()=>{const{option:t,data:e,title:o,unit:r}=i;return y.merge({},s,{...o&&{title:{text:o,...m}},...r&&{yAxis:{name:r}},dataset:{source:e},series:h()},t)});function h(){var r,a;const{data:t,option:e}=i,o=e.barWidth||s.barWidth;return((a=(r=t[0])==null?void 0:r.slice(1))==null?void 0:a.map((_,u)=>({type:"bar",itemStyle:{borderRadius:[o/2,o/2,0,0],color:f(u)},label:{show:!0,position:"top",color:"#666",fontSize:14}})))||[]}function f(t,e){const{data:o}=i;return e=C(e)==="Undefined"?o[0].length>2:e,e?new c(0,0,0,1,[{offset:0,color:n[t][0]},{offset:1,color:n[t][1]}]):r=>{const a=r.dataIndex;return new c(0,0,0,1,[{offset:0,color:n[a][0]},{offset:1,color:n[a][1]}])}}return(t,e)=>(x(),W(g,{class:"chart-bar",option:d.value,height:t.height,width:t.width,theme:t.theme},null,8,["option","height","width","theme"]))}});export{O as _};