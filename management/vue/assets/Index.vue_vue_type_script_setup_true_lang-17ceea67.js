import d from"./ImportTips-f3bebd4f.js";import{M as b,aa as h,aR as o,aE as _,s as u,bx as p,I as a,H as l,bc as x,bN as f}from"./index-8b36bd1b.js";import{e as W}from"./user-0406c028.js";const j=b({__name:"Index",props:{_example_prop:{default:()=>({})}},setup(B){const r=h("openPopup"),s=[{label:"收入",children:[{prop:"xx",label:"下限（不含）",minWidth:150},{prop:"sx",label:"上限（含）",minWidth:150}]},{label:"免税标准",children:[{prop:"gdz",label:"固定值",minWidth:150},{prop:"bl",label:"比例",minWidth:150}]},{label:"应纳税所得额（元）",children:[{prop:"ynsxx",label:"下限（不含）",minWidth:150},{prop:"ynssx",label:"上限（含）",minWidth:150}]},{prop:"sl",label:"税率",minWidth:150},{prop:"sskcs",label:"速算扣除数",minWidth:150},{label:"修改人",type:"update"}];function i(e,m,t){const n={import:()=>r({title:"导入",confirm(){c(t)}},d,"dialog",!0)};n[e]?n[e]():f.warning(`点击了${e}按钮`)}function c(e){e()}return(e,m)=>{const t=o("el-input-number"),n=o("BaseCrud");return _(),u(n,{cols:s,fetch:x(W),extraBtns:[{name:"import",text:"导入个税"}],onExtraBtn:i},{jnjs:p(()=>[a(t,{min:0,placeholder:"缴纳基数"}),l(" 元 ")]),grjcbl:p(()=>[a(t,{min:0,placeholder:"缴存比例"}),l(" % ")]),_:1},8,["fetch"])}}});export{j as _};
