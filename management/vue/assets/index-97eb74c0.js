import{b$ as L,bJ as S,bO as M,bK as r,c0 as I,bP as k,M as N,aa as P,aM as g,aK as R,q as $,aR as y,aE as B,u as q,v,b3 as A,bc as p,I as d,bx as b,af as H,H as x,c1 as T,bH as z}from"./index-95e659d0.js";import{a as U,b as E,G as F}from"./user-67406bfa.js";import{_ as O}from"./FindPassword.vue_vue_type_script_setup_true_lang-52bd7ea1.js";import{_ as D}from"./Register.vue_vue_type_script_setup_true_lang-f22c7194.js";import G from"./Captcha-d2cac4e9.js";import{p as K}from"./package-ff11a3c3.js";const j=L("user",()=>{const m=S(),c=M();async function f(a){const{user:e,navs:_}=a;return U(a).then(async h=>{var u;r.setItem("token",(e==null?void 0:e.token)??""),r.setItem("userInfo",e),r.setItem("allNavs",_),await c.initMap(),m.push("/"),I({type:"success",title:"登录成功",duration:2e3,dangerouslyUseHTMLString:!0,message:`欢迎回来，<b>${(u=k(e))==null?void 0:u._title}</b>`})})}async function i(a=m.currentRoute.value.fullPath){E().then(()=>{r.removeItem("token"),r.removeItem("userInfo"),r.removeItem("allNavs"),c.clearMap()})}return{login:f,logout:i}}),J={class:"wrap f-c-c"},Q={class:"bounce-in login-box"},W={class:"head f-c-c"},X={class:"foot f-sb-c"},Y=N({__name:"index",setup(m){const c=P("openPopup");j();const f=S(),i=g(!1),a=g([]);let e=R({phone:"superAdmin_1",psd:"superAdmin123456",captcha:""});const _=$(()=>[{prop:"phone",label:"账号",valid:/^\d/.test(e.phone)?"phone":void 0,required:!0,type:"autocomplete",attrs:{placeholder:"请输入账号 / 手机号",autocomplete:"off",onSelect:w,fetchSuggestions:V}},{prop:"psd",label:"密码",valid:"password",required:!0,attrs:{type:"password",autocomplete:"off"}},{prop:"captcha",label:"验证码",type:"custom",required:!0}]);h();function h(){F().then(s=>{a.value=s.map(t=>{const{account:n,...l}=t;return{value:n,...l}})})}function u(s){i.value=!0,U(s).then(t=>{T(t),f.push("/"),I({type:"success",title:"登录成功",duration:2e3,dangerouslyUseHTMLString:!0,message:`欢迎回来，<b>${k()._title}</b>`})}).finally(()=>{i.value=!1})}function V(s,t){let n=a.value;s&&(n=a.value.filter(l=>o=>o.value.toLowerCase().indexOf(l.toLowerCase())===0)),t(n)}function w(s){e.psd=s.psd}return(s,t)=>{const n=y("BaseForm"),l=y("el-button");return B(),q("div",J,[v("div",Q,[v("h1",W,A(p(K).name),1),d(n,{modelValue:p(e),"onUpdate:modelValue":t[0]||(t[0]=o=>H(e)?e.value=o:e=o),ref:"formRef",size:"large",loading:i.value,fields:_.value,onSubmit:u,submitText:"登录",class:"body"},{captcha:b(({form:o})=>[d(G,{modelValue:o.captcha,"onUpdate:modelValue":C=>o.captcha=C,prop:"captcha"},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["modelValue","loading","fields"]),v("div",X,[d(l,{onClick:t[1]||(t[1]=o=>p(c)({title:"免费注册",direction:"ltr"},D,"drawer")),class:"btn",type:"info",size:"small",link:""},{default:b(()=>[x(" 免费注册 ")]),_:1}),d(l,{onClick:t[2]||(t[2]=o=>p(c)("找回密码",O,"drawer")),class:"btn",type:"info",size:"small",link:""},{default:b(()=>[x(" 找回密码 ")]),_:1})])])])}}});const ne=z(Y,[["__scopeId","data-v-f1d1d477"]]);export{ne as default};
