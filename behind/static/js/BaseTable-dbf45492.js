import{l as e}from"./lodash-878142d8.js";import{d as t,aV as a,o as s,g as l,b as o,a as n,c as r,D as i,F as p,m as d,a3 as c,i as u,n as f,aZ as m,e as y,f as h}from"./rewrite-56f504a7.js";const x=t({__name:"BaseTable",props:{cols:{default:()=>[]},rows:{default:()=>[]},total:null,pageAttrs:null,index:{type:Boolean},selection:{type:Boolean},sortable:{type:Boolean}},setup(t){const x=t,b={align:"center",headerAlign:"center"},g=a(e.merge({},{border:!0,highlightCurrentRow:!0})),{index:w,cols:B,selection:$}=x;w&&B.unshift({prop:"$index",label:"序号",type:"index",fixed:"left",width:50}),$&&B.unshift({prop:"$selection",label:"选择",type:"selection",fixed:"left",width:50});const k=a(x.cols.map((t=>{const{prop:a}=t;let s={};return"cz"===a&&(s={fixed:"right",width:200}),t=e.merge(s,b,t)})));return(e,a)=>{const x=u("el-table-column"),b=u("BaseEmpty"),w=u("el-table");return k.length?(s(),l(w,d({key:0,class:"base-table",data:t.rows},g),{empty:o((()=>[n(b)])),default:o((()=>[(s(!0),r(p,null,i(k,((t,a)=>(s(),l(x,f(d({key:a},t)),{default:o((({row:a,column:l,$index:o})=>["custom"===t.type?m(e.$slots,t.prop,f(d({key:0},{row:a,column:l,$index:o}))):["xh","sel"].includes(l.property)?c("",!0):(s(),r(p,{key:1},[y(h(a[l.property]||"-"),1)],64))])),_:2},1040)))),128))])),_:3},16,["data"])):c("",!0)}}});export{x as default};