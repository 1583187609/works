import{M as D,bO as H,aM as r,an as I,aR as c,aE as a,u as l,v as t,I as u,bx as S,b3 as s,t as f,bc as o,cN as z,am as N,F as x,aP as M,s as V,ao as j,bH as E}from"./index-346f95fe.js";import{g as F}from"./_utils-8fdb241e.js";const O={class:"f-fs-s-c cont-box f-1"},P={key:0,class:"f-fs-c head f-0"},L={class:"mr-a line-1"},R={class:"ml-12 mr-12 f-0"},q={class:"title f-sb-b f-0"},G={class:"b"},J={class:"time-ago"},K={class:"foot-box f-c-c f-0"},Q=D({__name:"AboutItem",props:{row:{default:()=>({})},sizeType:{default:"default"},groupBtns:{default:()=>[]},status:{},bottomBar:{}},emits:["groupBtn"],setup(b,{emit:_}){const{getText:g}=H(),h={large:{bottom:0,height:36,barHeight:32},default:{bottom:0,height:26,barHeight:26},small:{bottom:0,height:22,barHeight:22}},d=b,B=_,v=r(!1),n=r();r(),r();const w=h[d.sizeType],i=computed(()=>F(d.bottomBar));I(()=>{k()});function k(){const{scrollHeight:e,clientHeight:m}=(n==null?void 0:n.value)||{};v.value=e>m}return(e,m)=>{const y=c("el-tooltip"),C=c("BaseCopy"),T=c("BaseTag"),A=c("BaseBtn");return a(),l("div",{class:j(["about-item f-fs-s-c",{passed:e.status===0,rejected:e.status===1}])},[t("div",O,[e.row.userData?(a(),l("div",P,[u(y,{"show-after":300,content:e.row.userData.nickname,disabled:!e.row.userData.nickname},{default:S(()=>[t("span",L,s(e.row.userData.nickname||"-"),1)]),_:1},8,["content","disabled"]),u(C,{class:"ml-12 f-0",text:e.row.userId},null,8,["text"]),t("div",R,s(e.row.userData.age||"-")+"岁",1),u(T,{name:"Sex",value:e.row.userData.gender,class:"f-0",pureText:""},null,8,["value"])])):f("",!0),t("div",q,[t("b",G,s(o(g)("AboutInfo",e.row.type)),1),t("span",J,s(o(z)(e.row.updatedAt?e.row.updatedAt:e.row.createdAt)||"-"),1)]),t("div",{class:"desc all-hide-scroll f-1",ref_key:"descRef",ref:n},s(e.row.content||"-"),513),o(i).text?(a(),l("div",N({key:1,class:"bottom-text",style:{minHeight:o(w).barHeight+"px"}},o(i).attrs),s(o(i).text),17)):f("",!0)]),t("div",K,[(a(!0),l(x,null,M(e.groupBtns,(p,U)=>(a(),V(A,{name:p,round:"",size:"small",onClick:()=>B("groupBtn",p)},null,8,["name","onClick"]))),256))])],2)}}});const Y=E(Q,[["__scopeId","data-v-c1f61fb8"]]);export{Y as default};
