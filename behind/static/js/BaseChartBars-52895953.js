import{a as t,L as e,g as o}from"./public-d95d73f7.js";import{l as a}from"./lodash-54c2f325.js";import{d as i,aV as s,o as l,g as n,i as r}from"./rewrite-3b822c29.js";const h=i({__name:"BaseChartBars",props:{theme:null,height:null,width:null,titles:{default:()=>[]},units:{default:()=>[]},datas:{default:()=>[[["name","国内","国外"],["示例1",30,22],["示例2",14,42],["示例3",18,23]],[["name","国内","国外"],["示例1",23,62],["示例2",65,88],["示例3",66,48]]]},option:{default:()=>({})}},setup(i){const h=i,{datas:d,option:p,titles:u,units:c}=h;let[f,m,b,g,x]=[[],[],[],[],[]];d.forEach(((a,i)=>{const s=u[i]||"XXX标题",l=c[i]||"元";m.push({gridIndex:i,left:0==i?"25%":"75%",bottom:0,textAlign:"center",text:`{label|${s}}  {amount|${y(a.slice(1))}${l}}`,textStyle:{rich:{label:{fontSize:14,fontWeight:"bold",color:"#666"},amount:{color:"#333",fontSize:15,fontWeight:"bold"}}}}),g.push({type:"category",gridIndex:i,...t}),x.push({type:"value",gridIndex:i,name:l,...t}),f.push({source:a});const n=a[0];for(let t=0;t<n.length-1;t++)b.push({type:"bar",xAxisIndex:i,yAxisIndex:i,datasetIndex:i,itemStyle:{color:new e(0,0,0,1,[{offset:0,color:o[t][0]},{offset:1,color:o[t][1]}]),borderRadius:[6,6,0,0]},label:{show:!0,position:"top",color:"#666",fontSize:14}})}));const w=s(a.merge({},{tooltip:{trigger:"item"},barWidth:12,barGap:"50%",grid:[{left:0,width:"47%",bottom:30,top:40,containLabel:!0},{right:0,width:"47%",bottom:30,top:40,containLabel:!0}]},{title:m,grid:[{left:0,width:"47%",bottom:30,top:40,containLabel:!0},{right:0,width:"47%",bottom:30,top:40,containLabel:!0}],xAxis:g,yAxis:x,dataset:f,series:b}));function y(t){let e=0;return t.forEach((t=>{for(let o=1;o<t.length;o++)e+=Number(t[o])})),e}return(t,e)=>{const o=r("BaseChart");return l(),n(o,{class:"base-chart-bars",option:w,height:i.height,width:i.width,theme:i.theme},null,8,["option","height","width","theme"])}}});export{h as default};
