import{M as P,aK as C,cd as w,aM as p,q as c,bs as q,aR as h,aE as m,s as g,bx as y,v as N,u as F,aP as M,aQ as O,F as T,H as A,ao as E,t as I,am as K,bA as L,cb as $,cc as B,bH as H}from"./index-8b36bd1b.js";import{h as U}from"./_utils-74d46e39.js";import{F as _}from"./FooterBtns-9c37528e.js";import{d as z}from"./_config-c76f4e31.js";import"./index-fc466e0a.js";const D=P({__name:"BaseForm",props:{modelValue:{default:()=>C({})},fields:{default:()=>[]},pureText:{type:Boolean},fetch:{},fetchSuccess:{},fetchFail:{},span:{default:24},footer:{type:Boolean,default:!0},submitText:{},resetText:{},extraParams:{},moreBtns:{},loading:{type:Boolean},isOmit:{type:Boolean,default:!0},log:{type:Boolean,default:!w},debug:{type:Boolean},isCache:{type:Boolean},autoFixedFoot:{type:Boolean,default:!0},noSubmitProps:{},handleReq:{}},emits:["update:modelValue","submit","change","moreBtns"],setup(V,{expose:x,emit:k}){const l=V,s=k,v=p(null),u=p(),R=c(()=>{const e=$(l.fields);return B.merge({labelWidth:e+"em"},z)}),n=p([]),r=c({get(){return l.modelValue},set(e){s("update:modelValue",e)}}),b=c(()=>B.merge({},r.value,l.extraParams));return q(()=>l.fields,e=>{const{modelValue:o}=l,d=U(e,s,o),{data:f,fields:t}=d;n.value=t,B.merge(r.value,f)},{immediate:!0,deep:!0}),x({formRef:u,formValidate(){return v.value.formValidate()}}),(e,o)=>{const d=h("BaseFormItem"),f=h("el-form");return m(),g(f,K({class:"base-form f-fs-s-c f-1",model:r.value},R.value,{onKeyup:o[3]||(o[3]=L(t=>s("submit",b.value),["enter"])),ref_key:"formRef",ref:u}),{default:y(()=>[N("div",{class:E(["all-hide-scroll",[n.value.length?"f-fs-fs-w":"f-c-c",e.autoFixedFoot&&"auto-fixed-foot"]])},[n.value.length?(m(!0),F(T,{key:0},M(n.value,(t,i)=>(m(),g(d,{className:`f-span-${t.span||e.span}`,field:t,pureText:t.pureText||e.pureText,modelValue:r.value[t.prop],"onUpdate:modelValue":a=>r.value[t.prop]=a,onChange:o[0]||(o[0]=(a,S)=>s("change",a,S)),key:t.key===void 0?i:t.key},{custom:y(({field:a})=>[O(e.$slots,a.prop,{field:a,form:r.value},void 0,!0)]),_:2},1032,["className","field","pureText","modelValue","onUpdate:modelValue"]))),128)):(m(),F(T,{key:1},[A("空空如也~")],64))],2),!e.pureText&&e.footer?(m(),g(_,{key:0,loading:e.loading,moreBtns:e.moreBtns,submitText:e.submitText,resetText:e.resetText,formRef:u.value,isOmit:e.isOmit,log:e.log,debug:e.debug,params:b.value,fetch:e.fetch,fetchSuccess:e.fetchSuccess,fetchFail:e.fetchFail,noSubmitProps:e.noSubmitProps,handleReq:e.handleReq,disabled:!n.value.length,onMoreBtns:o[1]||(o[1]=(t,i,a)=>s("moreBtns",t,i,a)),onSubmit:o[2]||(o[2]=t=>s("submit",t)),ref_key:"footerBtnsRef",ref:v},null,8,["loading","moreBtns","submitText","resetText","formRef","isOmit","log","debug","params","fetch","fetchSuccess","fetchFail","noSubmitProps","handleReq","disabled"])):I("",!0)]),_:3},16,["model"])}}});const X=H(D,[["__scopeId","data-v-c6e770f7"]]);export{X as default};
