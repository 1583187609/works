import{_ as h}from"./BatchEdit.vue_vue_type_script_setup_true_lang-607a4991.js";import"./index-1a9ed3b5.js";import{e as f}from"./user-760da63c.js";import{ay as n}from"./index-79ac556c.js";import{q as y,Q as s,a6 as r,t as x,D as B,E as i,L as c,J as m,u as j}from"./runtime-core.esm-bundler-95bf9971.js";const C=y({__name:"Index",props:{_example_prop:{default:()=>({})}},setup(g){const l=s("openPopup");s("closePopup");const u=[{prop:"zc",label:"职称",type:"select",options:[]},{prop:"zj",label:"职级",type:"select",options:[]},{prop:"xm",label:"姓名"}],d=[{prop:"xm",label:"姓名",minWidth:250},{prop:"sszz",label:"所属组织",minWidth:250},{prop:"zc",label:"职称",minWidth:250},{prop:"zj",label:"职级",minWidth:250},{prop:"jnjs",label:"缴纳基数",minWidth:200,type:"custom"},{prop:"grjcbl",label:"个人缴存比例",minWidth:200,type:"custom"},{prop:"gxr",label:"更新人",minWidth:250}];function _(e,o,t){const p={edit:()=>a(o,t,"batchEdit"),setBaseNum:()=>a(o,t,"baseNum"),setPayRatio:()=>a(o,t,"payRatio")};p[e]?p[e]():n.warning(`点击了${e}按钮`)}function b(e,o,t){const p={edit:()=>a(o.id,t,"edit")};p[e]?p[e]():n.warning(`点击了${e}按钮`)}function a(e,o,t){l(`${{edit:"编辑",batchEdit:"批量编辑",baseNum:"批量设置缴存基数",payRatio:"批量设置个人缴存比例"}[t]??""}`,{component:h,attrs:{type:t,ids:e,refreshList:o}})}return(e,o)=>{const t=r("el-input-number"),p=r("BaseCrud");return x(),B(p,{cols:d,fields:u,fetch:j(f),extraBtns:[{name:"edit",text:"批量编辑"},{name:"setBaseNum",text:"批量设置缴纳基数",attrs:{type:"primary"}},{name:"setPayRatio",text:"批量设置个人缴存比例",attrs:{type:"primary"}}],groupBtns:["edit"],onExtraBtn:_,onGroupBtn:b,selection:""},{jnjs:i(()=>[c(t,{min:0,placeholder:"缴纳基数"}),m(" 元 ")]),grjcbl:i(()=>[c(t,{min:0,placeholder:"缴存比例"}),m(" % ")]),_:1},8,["fetch"])}}});export{C as _};