import{M as t,bO as a,aM as s,an as e,aR as o,aE as l,u as r,v as n,I as c,bx as i,b3 as u,t as d,bc as f,cO as m,am as b,F as p,aP as g,s as h,ao as v,bH as w}from"./index-31bd5f7b.js";import{g as x}from"./_utils-18cac365.js";const B={class:"f-fs-s-c cont-box f-1"},k={key:0,class:"f-fs-c head f-0"},y={class:"mr-a line-1"},H={class:"ml-12 mr-12 f-0"},_={class:"title f-sb-b f-0"},D={class:"b"},A={class:"time-ago"},I={class:"foot-box f-c-c f-0"},T=w(t({__name:"AboutItem",props:{row:{default:()=>({})},sizeType:{default:"default"},groupBtns:{default:()=>[]},status:{},bottomBar:{}},emits:["groupBtn"],setup(t,{emit:w}){const{getText:T}=a(),j=t,z=w,C=s(!1),M=s();s(),s();const O={large:{bottom:0,height:36,barHeight:32},default:{bottom:0,height:26,barHeight:26},small:{bottom:0,height:22,barHeight:22}}[j.sizeType],R=computed((()=>x(j.bottomBar)));return e((()=>{!function(){const{scrollHeight:t,clientHeight:a}=(null==M?void 0:M.value)||{};C.value=t>a}()})),(t,a)=>{const s=o("el-tooltip"),e=o("BaseCopy"),w=o("BaseTag"),x=o("BaseBtn");return l(),r("div",{class:v(["about-item f-fs-s-c",{passed:0===t.status,rejected:1===t.status}])},[n("div",B,[t.row.userData?(l(),r("div",k,[c(s,{"show-after":300,content:t.row.userData.nickname,disabled:!t.row.userData.nickname},{default:i((()=>[n("span",y,u(t.row.userData.nickname||"-"),1)])),_:1},8,["content","disabled"]),c(e,{class:"ml-12 f-0",text:t.row.userId},null,8,["text"]),n("div",H,u(t.row.userData.age||"-")+"岁",1),c(w,{name:"Sex",value:t.row.userData.gender,class:"f-0",pureText:""},null,8,["value"])])):d("",!0),n("div",_,[n("b",D,u(f(T)("AboutInfo",t.row.type)),1),n("span",A,u(f(m)(t.row.updatedAt?t.row.updatedAt:t.row.createdAt)||"-"),1)]),n("div",{class:"desc all-hide-scroll f-1",ref_key:"descRef",ref:M},u(t.row.content||"-"),513),f(R).text?(l(),r("div",b({key:1,class:"bottom-text",style:{minHeight:f(O).barHeight+"px"}},f(R).attrs),u(f(R).text),17)):d("",!0)]),n("div",I,[(l(!0),r(p,null,g(t.groupBtns,((t,a)=>(l(),h(x,{name:t,round:"",size:"small",onClick:()=>z("groupBtn",t)},null,8,["name","onClick"])))),256))])],2)}}}),[["__scopeId","data-v-c1f61fb8"]]);export{T as default};
