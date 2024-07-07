import{d as e,_ as t,e as s,j as o,f as a,o as r,O as i,P as l,L as m,a9 as p,ah as u,a as n,c as d,a8 as f,I as c,F as j,T as h,J as g,S as x}from"./@vue-022d9836.js";import{h as b}from"./_utils-f23ae63f.js";import{l as v}from"./lodash-8dc1f9dc.js";import y from"./FooterBtns-bbeb9770.js";import"./dayjs-21617033.js";import{i as B,x as T,_ as F}from"./index-8cf28f90.js";import{d as _}from"./_config-c0994392.js";import"./call-bind-ada3a9fc.js";import"./get-intrinsic-176af07e.js";import"./es-errors-c8ed318b.js";import"./has-symbols-456daba2.js";import"./has-proto-c2a23985.js";import"./function-bind-afbcd6f2.js";import"./hasown-c3b72c9b.js";import"./set-function-length-968dc075.js";import"./define-data-property-9d7bf764.js";import"./es-define-property-c2edbfb6.js";import"./gopd-16a4ddf0.js";import"./has-property-descriptors-52e43c9d.js";import"./@element-plus-91223246.js";import"./index-0a44dd7a.js";import"./element-plus-6dad9269.js";import"./lodash-es-d4f5f48c.js";import"./@vueuse-c70f8764.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-3c499e77.js";import"./xlsx-c1bdd32b.js";import"./qs-fd29a741.js";import"./side-channel-5a41c40a.js";import"./object-inspect-0d550a97.js";import"./axios-86de682d.js";import"./pinia-f80f4126.js";import"./mock-ada1f893.js";import"./mockjs-217213d3.js";import"./vue-router-e17d6507.js";import"./nprogress-b5e58671.js";import"./vite-plugin-mock-6db8ade2.js";import"./path-to-regexp-83a43451.js";const k=F(e({name:"BaseForm",__name:"BaseForm",props:{modelValue:{default:()=>t({})},fields:{default:()=>[]},pureText:{type:Boolean},fetch:{},fetchSuccess:{},fetchFail:{},span:{default:24},footer:{type:Boolean,default:!0},submitText:{},resetText:{},extraParams:{},moreBtns:{},loading:{type:Boolean},isOmit:{type:Boolean,default:!0},log:{type:Boolean,default:!B},debug:{type:Boolean},isCache:{type:Boolean},autoFixedFoot:{type:Boolean,default:!0},noSubmitProps:{},handleReq:{}},emits:["update:modelValue","submit","change","moreBtns"],setup(e,{expose:t,emit:B}){const F=e,k=B,V=s(null),S=s(),R=o((()=>{const e=T(F.fields);return v.merge({labelWidth:e+"em"},_)})),P=s([]),q=o({get:()=>F.modelValue,set(e){k("update:modelValue",e)}}),O=o((()=>v.merge({},q.value,F.extraParams)));function w(){F.fetch?V.value.submit():k("submit",O.value)}return a((()=>F.fields),(e=>{const{modelValue:t}=F,s=b(e,k,t),{data:o,fields:a}=s;P.value=a,v.merge(q.value,o)}),{immediate:!0,deep:!0}),t({formRef:S,formValidate:()=>V.value.formValidate()}),(e,t)=>{const s=u("BaseFormItem"),o=u("el-form");return r(),i(o,m({class:"base-form f-fs-s-c f-1",model:q.value},R.value,{onKeyup:p(w,["enter"]),ref_key:"formRef",ref:S}),{default:l((()=>[n("div",{class:g(["all-hide-scroll",[P.value.length?"f-fs-fs-w":"f-c-c",e.autoFixedFoot&&"auto-fixed-foot"]])},[P.value.length?(r(!0),d(j,{key:0},f(P.value,((o,a)=>(r(),i(s,{className:`f-span-${o.span||e.span}`,field:o,pureText:o.pureText||e.pureText,modelValue:q.value[o.prop],"onUpdate:modelValue":e=>q.value[o.prop]=e,onChange:t[0]||(t[0]=(e,t)=>k("change",e,t)),key:void 0===o.key?a:o.key},{custom:l((({field:t})=>[c(e.$slots,t.prop,{field:t,form:q.value},void 0,!0)])),_:2},1032,["className","field","pureText","modelValue","onUpdate:modelValue"])))),128)):(r(),d(j,{key:1},[h("空空如也~")],64))],2),!e.pureText&&e.footer?(r(),i(y,{key:0,loading:e.loading,moreBtns:e.moreBtns,submitText:e.submitText,resetText:e.resetText,formRef:S.value,isOmit:e.isOmit,log:e.log,debug:e.debug,params:O.value,fetch:e.fetch,fetchSuccess:e.fetchSuccess,fetchFail:e.fetchFail,noSubmitProps:e.noSubmitProps,handleReq:e.handleReq,disabled:!P.value.length,onMoreBtns:t[1]||(t[1]=(e,t,s)=>k("moreBtns",e,t,s)),onSubmit:t[2]||(t[2]=e=>k("submit",e)),ref_key:"footerBtnsRef",ref:V},null,8,["loading","moreBtns","submitText","resetText","formRef","isOmit","log","debug","params","fetch","fetchSuccess","fetchFail","noSubmitProps","handleReq","disabled"])):x("",!0)])),_:3},16,["model"])}}}),[["__scopeId","data-v-f0018fd3"]]);export{k as default};