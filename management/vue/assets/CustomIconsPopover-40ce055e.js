import{M as V,aM as m,co as z,ct as F,q as P,aR as v,aE as e,s as S,bx as f,u as t,I as h,v as o,b3 as k,ao as y,F as I,aP as x,aI as N,aF as R,bH as E}from"./index-346f95fe.js";const C=a=>(N("data-v-504cb305"),a=a(),R(),a),M={key:0,class:"icon-box f-fs-c"},$={class:"ml-h"},j={key:1,class:"placeholder"},q={class:"list f-fs-fs-w all-hide-scroll"},D=C(()=>o("span",{class:"f-c-c",style:{height:"32px",width:"32px","font-size":"22px"}},"无",-1)),H=C(()=>o("span",{class:"text line-1"},"none",-1)),L=[D,H],O=["onClick"],A={class:"text line-1"},G=V({__name:"CustomIconsPopover",props:{width:{},modelValue:{default:""}},emits:["update:modelValue"],setup(a,{emit:b}){const w=a,g=b,p=m(null),{formItem:n}=z(),r=m(Object.keys(F)),c=P(()=>w.modelValue);function u(l){g("update:modelValue",l),p.value.hide(),n==null||n.validate("blur")}return(l,_)=>{const d=v("BaseIcon"),B=v("el-popover");return e(),S(B,{placement:"bottom-start",width:l.width-100,trigger:"click",ref_key:"popoverRef",ref:p},{reference:f(()=>[c.value?(e(),t("div",M,[h(d,{size:"26",name:c.value},null,8,["name"]),o("span",$,k(c.value),1)])):(e(),t("span",j,"请选择菜单图标"))]),default:f(()=>[o("ul",q,[o("li",{onClick:_[0]||(_[0]=s=>u("")),class:y(["item f-c-c-c f-1",{active:c.value==""}])},L,2),(e(!0),t(I,null,x(r.value,(s,i)=>(e(),t("li",{onClick:J=>u(s),class:y(["item f-c-c-c f-1",{active:c.value==s}]),key:i},[h(d,{name:s,size:"30"},null,8,["name"]),o("span",A,k(s),1)],10,O))),128)),(e(!0),t(I,null,x(7-r.value.length%7,(s,i)=>(e(),t("li",{class:"f-empty item",key:"empty-"+i}))),128))])]),_:1},8,["width"])}}});const Q=E(G,[["__scopeId","data-v-504cb305"]]);export{Q as default};
