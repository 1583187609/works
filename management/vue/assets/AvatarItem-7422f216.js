import{M as N,q as u,aR as l,aE as c,u as i,v as s,ao as t,b3 as a,t as I,I as m,H as _,bc as C,cN as A,F as j,aP as P,s as D,bH as M}from"./index-346f95fe.js";const T={key:0,class:"mask f-c-c"},V={class:"info f-1"},F={class:"f-fs-c row"},q={class:"mr-h"},z={class:"row"},E={class:"row"},H={class:"time-age row"},S={class:"foot-box f-c-c"},$=N({__name:"AvatarItem",props:{row:{default:()=>({userId:"",age:0,gender:0,nickname:"",uploadNum:0,rejectNum:0,createdAt:0,updatedAt:0,avatarData:()=>{}})},withMask:{type:Boolean},status:{},isPatrol:{type:Boolean},groupBtns:{type:[Array,Function],default:()=>[]}},emits:["groupBtn"],setup(w,{emit:B}){const o=w,g=B,r=u(()=>!o.isPatrol&&o.status===0),n=u(()=>!o.isPatrol&&o.status===1),f=u(()=>o.withMask&&(r.value||n.value));return(e,p)=>{var v;const h=l("BarsImg"),k=l("BaseCopy"),b=l("BaseTag"),y=l("BaseBtn");return c(),i("div",{class:t(["avatar-item",{passed:r.value,rejected:n.value}])},[s("div",{class:t(["top-box",["f-sb-s"]])},[f.value?(c(),i("div",T,[s("div",{class:t(["inner f-c-c",{passed:r.value,rejected:n.value}])},a(r.value?"已通过":n.value?"已驳回":""),3)])):I("",!0),m(h,{bottomBar:e.status===1?e.row.reason:"",width:"200",height:"200",src:e.row.src,class:"avatar f-0"},null,8,["bottomBar","src"]),s("div",V,[s("div",{onClick:p[0]||(p[0]=d=>e.$router.push({name:"userDetail",query:{id:e.row.userId}})),class:"nickname line-2 row"},a(e.row.nickname||"-"),1),m(k,{class:"row",text:e.row.userId},null,8,["text"]),s("div",F,[s("span",q,a(e.row.age??"-")+"岁",1),m(b,{name:"Sex",value:e.row.gender,"pure-text":""},null,8,["value"])]),s("div",z,[_(" 上传："),s("b",{class:t({"color-success":e.row.uploadNum})},a(e.row.uploadNum??"-"),3)]),s("div",E,[_(" 驳回："),s("b",{class:t({"color-danger":e.row.rejectNum})},a(e.row.rejectNum??"-"),3)]),s("div",H,a(C(A)((v=e.row.avatarData)==null?void 0:v.updatedAt)||"-"),1)])]),s("div",S,[(c(!0),i(j,null,P(e.groupBtns,(d,L)=>(c(),D(y,{name:d,round:"",disabled:e.isPatrol?!1:e.status!==2,size:"small",onClick:()=>g("groupBtn",d)},null,8,["name","disabled","onClick"]))),256))])],2)}}});const G=M($,[["__scopeId","data-v-9e64c420"]]);export{G as default};
