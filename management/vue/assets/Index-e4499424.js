import t from"./AvatarItem-7a1d7fd4.js";import s from"./AboutItem-504f0e0f.js";import a from"./FaceItem-98666fee.js";import o from"./PhotoItem-3524b8f9.js";import{a as r}from"./_utils-18cac365.js";import{M as e,aa as n,aM as u,aR as p,aS as i,aE as l,s as m,bx as d,bz as c,u as B,F as f,aP as y,bc as g,t as x,cf as w,bH as v}from"./index-31bd5f7b.js";import{a as b}from"./_utils-0af7a6f9.js";import"./BarsImg-860e42cf.js";import"./index-3780be65.js";const h={class:"list-box f-fs-fs-w f-1"},j="status",k=v(e({__name:"Index",props:{type:{default:"avatar-audit"},filterByAuth:{},groupBtns:{}},emits:["groupBtn"],setup(e,{expose:v,emit:k}){const $=n("closePopup"),G=e,_=k,I=u(null),A=u([]);function M(t,s){A.value=t}function P(t,s){const{groupBtns:a}=G;return function(t=[]){const{filterByAuth:s}=G;return s?t.filter((({auth:t})=>!(null==t?void 0:t.length)||s(t))):t}(b(t,s,a))}function R(t,s,a,o){const{name:r,text:e}=t;_("groupBtn",r,s,((t=`${e||"操作"}成功！`,s,a)=>{w(t),$(s),I.value.refreshList(a)}),o)}return v(I.value),(e,n)=>{const u=p("BaseEmpty"),w=p("BaseCrud"),v=i("loading");return l(),m(w,{class:"card-crud",onRows:M,ref_key:"crudRef",ref:I,selectAll:""},{default:d((({loading:n,params:p,rows:i})=>[c((l(),B("div",h,[(l(!0),B(f,null,y(i,((n,u)=>(l(),B(f,{key:u},[["avatar-audit","avatar-patrol"].includes(e.type)?(l(),m(t,{key:0,class:"item",row:g(r)({...n,$index:u},e.type),withMask:"avatar-audit"===e.type&&[2,""].includes(n.status),status:n[j],groupBtns:P(n,u),onGroupBtn:t=>R(t,{...n,$index:u},0,p),isPatrol:"avatar-patrol"===e.type},null,8,["row","withMask","status","groupBtns","onGroupBtn","isPatrol"])):"about"===e.type?(l(),m(s,{key:1,class:"item",row:{...n,$index:u},status:n[j],groupBtns:P(n,u),onGroupBtn:t=>R(t,{...n,$index:u},0,p),bottomBar:1===n[j]?n.reason||"~原因为空~":""},null,8,["row","status","groupBtns","onGroupBtn","bottomBar"])):"face"===e.type?(l(),m(a,{key:2,class:"item",row:{...n,$index:u},status:n[j],groupBtns:P(n,u),onGroupBtn:t=>R(t,{...n,$index:u},0,p),bottomBar:1===n[j]?n.rejectReason||"~原因为空~":""},null,8,["row","status","groupBtns","onGroupBtn","bottomBar"])):"photo"===e.type?(l(),m(o,{key:3,class:"item",row:{...n,$index:u},status:n.status,groupBtns:P(n,u),onGroupBtn:t=>R(t,{...n,$index:u},0,p)},null,8,["row","status","groupBtns","onGroupBtn"])):x("",!0)],64)))),128)),n||i.length?x("",!0):(l(),m(u,{key:0}))])),[[v,n]])])),_:1},512)}}}),[["__scopeId","data-v-466d44d1"]]);export{k as default};
