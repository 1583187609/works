import e from"./ImportTips-e4f93943.js";import{M as a,aa as l,aR as n,aE as p,s as t,bx as r,I as s,H as i,bc as o,bN as m}from"./index-31bd5f7b.js";import{P as d}from"./user-3e3a0c56.js";const b=a({__name:"Index",props:{_example_prop:{default:()=>({})}},setup(a){const b=l("openPopup"),c=[{label:"收入",children:[{prop:"xx",label:"下限（不含）",minWidth:150},{prop:"sx",label:"上限（含）",minWidth:150}]},{label:"免税标准",children:[{prop:"gdz",label:"固定值",minWidth:150},{prop:"bl",label:"比例",minWidth:150}]},{label:"应纳税所得额（元）",children:[{prop:"ynsxx",label:"下限（不含）",minWidth:150},{prop:"ynssx",label:"上限（含）",minWidth:150}]},{prop:"sl",label:"税率",minWidth:150},{prop:"sskcs",label:"速算扣除数",minWidth:150},{label:"修改人",type:"update"}];function h(a,l,n){const p={import:()=>b({title:"导入",confirm(){!function(e){e()}(n)}},e,"dialog",!0)};p[a]?p[a]():m.warning(`点击了${a}按钮`)}return(e,a)=>{const l=n("el-input-number"),m=n("BaseCrud");return p(),t(m,{cols:c,fetch:o(d),extraBtns:[{name:"import",text:"导入个税"}],onExtraBtn:h},{jnjs:r((()=>[s(l,{min:0,placeholder:"缴纳基数"}),i(" 元 ")])),grjcbl:r((()=>[s(l,{min:0,placeholder:"缴存比例"}),i(" % ")])),_:1},8,["fetch"])}}});export{b as _};
