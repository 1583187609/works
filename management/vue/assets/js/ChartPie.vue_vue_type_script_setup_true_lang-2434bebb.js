import"./echarts-911d2a7f.js";import{C as t,t as e,g as o}from"./Chart-cecd1307.js";import{l as r}from"./lodash-8dc1f9dc.js";import{d as i,j as a,o as l,O as n}from"./@vue-022d9836.js";import{V as h}from"./zrender-3442365c.js";const s=i({name:"ChartPie",__name:"ChartPie",props:{theme:{},height:{},width:{},title:{},unit:{},data:{default:()=>[["主要负责人用车",150],["其他公务用车",149],["经营和业务保险专用车",150]]},hollow:{type:Boolean,default:!0},radius:{default:()=>[72,93]},center:{default:()=>["75%","50%"]},option:{default:()=>({})}},setup(i){const s={tooltip:{},legend:{itemGap:20,itemHeight:12,itemWidth:12,color:"#999",fontSize:14,rich:{label:{width:150},value:{color:"#333",fontWeight:"bold",width:100}}}},d=i,c=a((()=>{const{title:t,hollow:i,unit:a,data:l,option:n}=d;return r.merge({},s,{...t&&{title:{text:t,...e}},...i?{legend:{x:"5%",y:"center",orient:"vertical"}}:{},dataset:{source:l},series:[{type:"pie",...i?f():{},itemStyle:{borderColor:"#fff",borderWidth:2,color:t=>{const e=t.dataIndex;return new h(0,0,0,1,[{offset:0,color:o[e][0]},{offset:1,color:o[e][1]}])}}}]},n)}));function f(){let t=0;const{radius:e,center:o,data:r,unit:i}=d;return r.forEach((e=>{t+=Number(e[1])})),{radius:e,center:o,label:{show:!0,position:"center",color:"#4c4a4a",formatter:`{value|${t}}\n\r{label|车辆总数${i?`(${i})`:""}}`,rich:{value:{color:"#333",fontSize:24,lineHeight:24,fontWeight:"bold"},label:{color:"#999",fontSize:14,lineHeight:24,fontWeight:"bold"}}}}}return(e,o)=>(l(),n(t,{class:"chart-pie",option:c.value,height:e.height,width:e.width,theme:e.theme},null,8,["option","height","width","theme"]))}});export{s as _};