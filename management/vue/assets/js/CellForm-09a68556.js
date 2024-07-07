import{l as e}from"./lodash-8dc1f9dc.js";import{h as t}from"./_utils-f23ae63f.js";import s from"./FooterBtns-bbeb9770.js";import"./dayjs-21617033.js";import{i as o,x as a,_ as r}from"./index-8cf28f90.js";import{d as i}from"./_config-c0994392.js";import{d as l,_ as m,e as p,j as d,f as n,ah as u,o as f,O as c,P as j,a as h,J as g,c as x,F as b,a8 as v,L as y,V as B,I as T,T as F,u as _,S}from"./@vue-022d9836.js";import"./call-bind-ada3a9fc.js";import"./get-intrinsic-176af07e.js";import"./es-errors-c8ed318b.js";import"./has-symbols-456daba2.js";import"./has-proto-c2a23985.js";import"./function-bind-afbcd6f2.js";import"./hasown-c3b72c9b.js";import"./set-function-length-968dc075.js";import"./define-data-property-9d7bf764.js";import"./es-define-property-c2edbfb6.js";import"./gopd-16a4ddf0.js";import"./has-property-descriptors-52e43c9d.js";import"./@element-plus-91223246.js";import"./index-0a44dd7a.js";import"./element-plus-6dad9269.js";import"./lodash-es-d4f5f48c.js";import"./@vueuse-c70f8764.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-3c499e77.js";import"./xlsx-c1bdd32b.js";import"./qs-fd29a741.js";import"./side-channel-5a41c40a.js";import"./object-inspect-0d550a97.js";import"./axios-86de682d.js";import"./pinia-f80f4126.js";import"./mock-ada1f893.js";import"./mockjs-217213d3.js";import"./vue-router-e17d6507.js";import"./nprogress-b5e58671.js";import"./vite-plugin-mock-6db8ade2.js";import"./path-to-regexp-83a43451.js";const V=r(l({inheritAttrs:!1,name:"CellForm",__name:"CellForm",props:{modelValue:{default:()=>m({})},fields:{default:()=>[]},pureText:{type:Boolean},fetch:{},fetchSuccess:{},fetchFail:{},footer:{type:Boolean,default:!0},submitText:{},resetText:{},extraParams:{},moreBtns:{},colSpanAttrs:{},loading:{type:Boolean},isOmit:{type:Boolean,default:!0},log:{type:Boolean,default:!o},debug:{type:Boolean},autoFixedFoot:{type:Boolean,default:!0},noSubmitProps:{},handleReq:{}},emits:["update:modelValue","submit","change","moreBtns"],setup(o,{expose:r,emit:l}){const m={span:6},V=o,k=l,R=p(),O=d((()=>{const t=a(V.fields);return e.merge({labelWidth:t+"em"},i)})),P=p([]),q=d({get:()=>V.modelValue,set(e){k("update:modelValue",e)}});return n((()=>V.fields),(s=>{const{modelValue:o}=V,a=t(s,k,o),{data:r,fields:i}=a;P.value=i,e.merge(q.value,r)}),{immediate:!0,deep:!0}),r({formRef:R}),(t,o)=>{const a=u("BaseFormItem"),r=u("el-col"),i=u("el-form");return f(),c(i,y({class:"cell-form f-fs-s-c f-1",model:q.value},O.value,{ref_key:"formRef",ref:R}),{default:j((()=>[h("div",{class:g(["box all-hide-scroll",[t.fields.length?"f-fs-s-w":"f-c-c",t.autoFixedFoot&&"auto-fixed-foot"]])},[t.fields.length?(f(!0),x(b,{key:0},v(t.fields,((e,s)=>(f(),c(r,y(e.colAttrs||Object.assign({},m,t.colSpanAttrs),{key:s}),{default:j((()=>[B(a,{field:e,pureText:e.pureText||t.pureText,modelValue:q.value[e.prop],"onUpdate:modelValue":t=>q.value[e.prop]=t,onChange:o[0]||(o[0]=(e,t)=>k("change",e,t))},{custom:j((({field:e})=>[T(t.$slots,e.prop,{field:e,form:q.value},void 0,!0)])),_:2},1032,["field","pureText","modelValue","onUpdate:modelValue"])])),_:2},1040)))),128)):(f(),x(b,{key:1},[F("空空如也~")],64))],2),!t.pureText&&t.footer?(f(),c(s,{key:0,loading:t.loading,moreBtns:t.moreBtns,submitText:t.submitText,resetText:t.resetText,formRef:R.value,isOmit:t.isOmit,log:t.log,debug:t.debug,params:_(e.merge)({},q.value,t.extraParams),fetch:t.fetch,fetchSuccess:t.fetchSuccess,fetchFail:t.fetchFail,noSubmitProps:t.noSubmitProps,handleReq:t.handleReq,disabled:!P.value.length,onMoreBtns:o[1]||(o[1]=(e,t,s)=>k("moreBtns",e,t,s)),onSubmit:o[2]||(o[2]=e=>k("submit",e))},null,8,["loading","moreBtns","submitText","resetText","formRef","isOmit","log","debug","params","fetch","fetchSuccess","fetchFail","noSubmitProps","handleReq","disabled"])):S("",!0)])),_:3},16,["model"])}}}),[["__scopeId","data-v-d8942943"]]);export{V as default};