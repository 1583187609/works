import{t as e,L as t,g as o}from"./public-d95d73f7.js";import{l}from"./lodash-54c2f325.js";import{d as i,aV as r,o as a,g as n,i as s}from"./rewrite-3b822c29.js";const h=i({__name:"BaseChartPie",props:{theme:null,height:null,width:null,title:null,unit:null,data:{default:()=>[["主要负责人用车",150],["其他公务用车",149],["经营和业务保险专用车",150]]},hollow:{type:Boolean,default:!0},radius:{default:()=>[72,93]},center:{default:()=>["75%","50%"]},option:{default:()=>({})}},setup(i){const h=i,{data:d,option:u,unit:c,title:f,radius:p,center:m,hollow:g}=h,b=r(l.merge({},{tooltip:{},legend:{itemGap:20,itemHeight:12,itemWidth:12,color:"#999",fontSize:14,rich:{label:{width:150},value:{color:"#333",fontWeight:"bold",width:100}}}},{...f&&{title:{text:f,...e}},...g?{legend:{x:"5%",y:"center",orient:"vertical"}}:{},dataset:{source:d},series:[{type:"pie",...g?function(){let e=0;return d.forEach((t=>{e+=Number(t[1])})),{radius:p,center:m,label:{show:!0,position:"center",color:"#4c4a4a",formatter:`{value|${e}}\n\r{label|车辆总数${c?`(${c})`:""}}`,rich:{value:{color:"#333",fontSize:24,lineHeight:24,fontWeight:"bold"},label:{color:"#999",fontSize:14,lineHeight:24,fontWeight:"bold"}},emphasis:{show:!0}}}}():{},itemStyle:{borderColor:"#fff",borderWidth:2,color:e=>{const l=e.dataIndex;return new t(0,0,0,1,[{offset:0,color:o[l][0]},{offset:1,color:o[l][1]}])}}}]},u));return(e,t)=>{const o=s("BaseChart");return a(),n(o,{class:"base-chart-pie",option:b,height:i.height,width:i.width,theme:i.theme},null,8,["option","height","width","theme"])}}});export{h as default};
