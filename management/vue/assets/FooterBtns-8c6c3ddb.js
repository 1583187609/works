import{M as E,aa as I,aM as N,q as O,bs as D,aR as h,aS as z,aE as r,u as _,bz as k,s as u,bx as B,I as A,ao as H,H as C,b3 as P,t as T,F as x,aP as G,bc as $,cG as J,cd as K,c9 as Q,cj as U,ce as R,bN as W,cf as X,bH as Y}from"./index-346f95fe.js";import{g as Z}from"./index-6d0323cd.js";const ee={class:"footer-btns f-c-c f-0 pt-h pb-h"},te=E({__name:"FooterBtns",props:{loading:{type:Boolean},submitText:{default:"提交"},resetText:{default:"重置"},moreBtns:{default:()=>[]},formRef:{},isOmit:{type:Boolean,default:!0},log:{type:Boolean},debug:{type:Boolean},params:{},fetch:{},fetchSuccess:{},fetchFail:{},noSubmitProps:{},handleReq:{},disabled:{type:Boolean}},emits:["moreBtns","submit"],setup(S,{expose:w,emit:F}){const M=I("closePopup"),i=S,m=F,l=N(!1),V=O(()=>i.moreBtns.map(e=>Z(e)));D(()=>i.loading,e=>{l.value=e});function f(){const{log:e,debug:a,isOmit:s,noSubmitProps:n}=i;return new Promise((o,c)=>{let{params:t,formRef:d,handleReq:b}=i;d&&d.validate((j,q)=>{if(j){if(t=K(t),b&&(t=b(t)),s&&(t=Q(t)),t=U(t,n),(e||a)&&(R(t,"req"),a))return;o(t)}else{const y=Object.values(q)[0][0];W.error(y.message),c(y)}})})}const p=(e=i.submitText+"成功！",a,s,n=!0)=>{X(e),M(a),s==null||s()};function v(){f().then(e=>{const{log:a,fetch:s,fetchSuccess:n=p,fetchFail:o}=i;s?(l.value=!0,s(e).then(c=>{a&&R(c,"res"),n(i.submitText+"成功！")}).catch(()=>{o==null||o()}).finally(()=>{l.value=!1})):m("submit",e)}).catch(()=>{})}function L(){const{formRef:e}=i;e&&e.resetFields()}function g(e){const{name:a,needValid:s,to:n}=e;n===void 0&&(s?f().then(o=>{m("moreBtns",a,o,p)}).catch(()=>{}):m("moreBtns",a,void 0,p))}return w({formValidate:f,submit:v}),(e,a)=>{const s=h("BaseIcon"),n=h("el-button"),o=h("BaseBtn"),c=z("debounce");return r(),_("div",ee,[e.submitText?k((r(),u(n,{key:0,type:"primary",disabled:e.disabled||l.value},{icon:B(()=>[A(s,{class:H({rotate:l.value}),name:l.value?"Loading":"Promotion"},null,8,["class","name"])]),default:B(()=>[C(" "+P(e.submitText),1)]),_:1},8,["disabled"])),[[c,v,void 0,{immediate:!0}]]):T("",!0),(r(!0),_(x,null,G(V.value,(t,d)=>(r(),_(x,{key:d},[t.popconfirm?(r(),u(o,{key:0,onClick:b=>g(t),name:t,disabled:e.disabled},null,8,["onClick","name","disabled"])):k((r(),u(o,{key:1,name:t,disabled:e.disabled},null,8,["name","disabled"])),[[c,()=>g(t),void 0,{immediate:!0}]])],64))),128)),e.resetText?(r(),u(n,{key:1,icon:$(J),onClick:L,disabled:e.disabled||l.value},{default:B(()=>[C(P(e.resetText),1)]),_:1},8,["icon","disabled"])):T("",!0)])}}});const oe=Y(te,[["__scopeId","data-v-8ef61165"]]);export{oe as default};