import"./index-1a9ed3b5.js";import{f as L}from"./auth-107d8eaa.js";import{_ as Y}from"./AddEdit.vue_vue_type_script_setup_true_lang-47258356.js";import{q as O,t as o,v as l,x as p,K as b,r as j,e as G,S as H,a6 as S,L as u,z as M,F,bn as X,bl as Z,I as B,J as k,Q as ee,O as te,E as h,a0 as ae,D,u as q,k as se}from"./runtime-core.esm-bundler-95bf9971.js";import{_ as V}from"./_plugin-vue_export-helper-c27b6911.js";import{c as oe}from"./platform-fba39571.js";import{k as ne}from"./system-a8d5b9ab.js";/* empty css                                                                      */import{e as E}from"./user-760da63c.js";import{l as le}from"./common-f4827de9.js";import{u as re}from"./all-tags-eaeb4056.js";import{u as ce}from"./vue-router-f1520cd3.js";import{_ as pe}from"./index-4a03ead4.js";import{ay as U}from"./index-79ac556c.js";import"./index-a0dfeff6.js";import"./storage-f5c2149e.js";import"./pinia-680d6f3f.js";const ie={class:"custom-option f-sb-c"},de={class:"f-1 line-one"},me={class:"f-0 short-name"},ue=O({__name:"CompanyOption",props:{fullName:{},shortName:{}},setup(s){return(e,r)=>(o(),l("div",ie,[p("div",de,b(e.fullName||"-"),1),p("div",me,b(e.shortName),1)]))}}),_e=V(ue,[["__scopeId","data-v-71efd4d6"]]),W={school:{reqNameKey:"name",resValKey:"id",fetchApi:E,defaultField:{prop:"xx",label:"学校",type:"select"},handleItem(s){const{name:e,id:r}=s;return{label:e,value:r}}},company:{reqNameKey:"name",resValKey:"id",fetchApi:E,defaultField:{prop:"gs",label:"公司",type:"select"},handleItem(s){const{fullName:e,shortName:r,id:n}=s;return{label:e,customOption:{component:_e,attrs:{fullName:e,shortName:r}},value:n}}},major:{reqNameKey:"majorName",resValKey:"id",fetchApi:E,defaultField:{prop:"zy",label:"专业",type:"select"},handleItem(s){const{majorName:e,id:r}=s;return{label:e,value:r}}},subject:{reqNameKey:"name",resValKey:"name",fetchApi:E,defaultField:{prop:"subject",label:"学科名称",type:"select"},handleItem(s){const{name:e,code:r}=s;return{label:e,value:r}},extraParams:{groupType:2}}},fe=()=>{function s(e,r,n,y){if(!W[e])throw new Error(`不存在type为${e}的类型`);const{fetchApi:d,defaultField:m,handleItem:f,reqNameKey:g="name",resValKey:K="id",extraParams:x}=W[e],C=j(!1),N=j([]),z=G(()=>N.value.map(f));n&&$(n);function $(_="",I=!1){!_&&!I||(C.value=!!_,d({[g]:_,...x}).then(v=>{N.value=(v==null?void 0:v.list)||[]}).finally(()=>{C.value=!1}))}function R(_){const I=N.value.find(v=>v[K]===_);H(()=>{y(_,I)})}return{...le.merge({},m,r),options:z,attrs:{filterable:!0,remote:!0,remoteShowSuffix:!0,defaultFirstOption:!0,onFocus:()=>$("",!0),remoteMethod:$,onChange:y?R:void 0,loading:C}}}return{getSearchOpts:s}},w=s=>(X("data-v-498eb4e8"),s=s(),Z(),s),he=w(()=>p("div",{class:"f-0 num"},"1",-1)),ye={class:"f-0 text"},ve=w(()=>p("div",{class:"f-0 num"},"2",-1)),be={key:0,class:"f-0 text"},ge={key:1,class:"f-0 text"},xe=w(()=>p("div",{class:"f-0 num"},"3",-1)),Ie={key:0,class:"f-0 text"},ke={key:1,class:"f-0 text"},Se=O({__name:"InfoSteps",props:{data:{default:()=>({})}},setup(s){const e={0:{text:"已完善 - 已通过",class:"success"},1:{text:"已完善 - 未通过",class:"danger"},2:{text:"已完善 - 待审核",class:"primary"},3:{text:"未完善",class:"warning"}},r=s,n=G(()=>{const{infoStatus:y="",idCardStatus:d,companyStatus:m,schoolStatus:f}=r.data;return{hasRealName:d===0,hasAuth:m===0||f===0,info:e[y]||{}}});return(y,d)=>{var f,g;const m=S("BaseIcon");return o(),l(F,null,[p("div",{class:M([(f=n.value.info)==null?void 0:f.class,"f-fs-c step-item"])},[he,p("div",ye,b(((g=n.value.info)==null?void 0:g.text)||"-"),1),u(m,{class:"icon",size:"20px",name:"CircleCheckFilled"})],2),p("div",{class:M([{success:n.value.hasRealName},"f-fs-c step-item"])},[ve,n.value.hasRealName?(o(),l("div",be,"已实名")):(o(),l("div",ge,"未实名")),u(m,{class:"icon",size:"20px",name:"CircleCheckFilled"})],2),p("div",{class:M([{success:n.value.hasAuth},"f-fs-c step-item"])},[xe,n.value.hasAuth?(o(),l("div",Ie,"已认证")):(o(),l("div",ke,"未认证")),u(m,{class:"icon",size:"20px",name:"CircleCheckFilled"})],2)],64)}}});const Be=V(Se,[["__scopeId","data-v-498eb4e8"]]),Ce={class:"auth-info"},Ne={key:0,class:"f-c-c-c item-box"},$e={class:"text-tag"},Ae={class:"text-tag"},Fe={key:1,class:"f-c-c-c item-box"},Re={class:"text-tag"},Te=O({__name:"AuthInfo",props:{data:{default:()=>({})}},setup(s){return(e,r)=>{const n=S("BaseTag");return o(),l("div",Ce,[e.data.schoolStatus===0?(o(),l("div",Ne,[u(n,{name:"AuthCase",value:"2"}),p("div",$e,b(e.data.labelSchool||"-"),1),p("div",Ae,b(e.data.schoolName||"-"),1)])):B("",!0),e.data.companyStatus===0?(o(),l("div",Fe,[u(n,{name:"AuthCase",value:"3"}),p("div",Re,b(e.data.labelCompany||"-"),1)])):B("",!0),e.data.schoolStatus!==0&&e.data.companyStatus!==0?(o(),l(F,{key:2},[k("-")],64)):B("",!0)])}}});const qe=V(Te,[["__scopeId","data-v-560c0b34"]]),Ee={class:"page-view three f-sb-s"},Oe={key:0,class:"f-c-c-c"},Ve={key:1},Ke=O({__name:"index",setup(s){const{getOpts:e,getText:r}=re(),n=ce(),{type:y}=n.query,d=y==="simple",{getSearchOpts:m}=fe(),f=e("UserType"),g=e("Enable"),K=ee("openPopup");let x=te({xm:"张三",dbq:[0],date:["2023-08-19","2023-08-27"],date_min:"2023-07-19",date_max:"2023-07-27",min_num:1,max_num:2,num_def:[10,20]});const C=j([{prop:"xm",label:"姓名"},{prop:"qyzt",label:"启用状态",type:"select",options:g},{prop:"dbq",label:"多标签",type:"select",options:f,attrs:{multiple:!0}},{prop:"times",label:"时间(数组)",type:"date-picker"},{prop:["date_min","date_max"],label:"时间(对象)",type:"date-picker"},{prop:"date",label:"时间(带值)",type:"date-picker"},{prop:["min_num","max_num"],label:"数字(对象)",type:"BaseNumberRange"},{prop:"numRange",label:"数字(数组)",type:"BaseNumberRange"},{prop:"num_def",label:"数字(默值)",type:"BaseNumberRange"},{prop:"liveCity",label:"级联",type:"cascader"},m("school",{prop:"schoolId",label:"学校",popover:"采用hooks封装复杂逻辑"}),m("company",{prop:"companyId",label:"公司",popover:"自定义选择下拉项"}),{prop:"zdy",label:"自定义",type:"custom",popover:"在搜索表单中一般几乎用不到自定义特性"}]),N=[{label:"内置自定义组件列",type:"UserInfo",attrs:{simple:d}},{prop:"form_col",label:"formatter列",minWidth:140,formatter(a){return"formatter格式化示例"}},!d&&{prop:"info_complete",label:"非内置自定义组件列",width:170,type:"custom"},d?{prop:"is_proxy",label:"标签(自定义，simple可见)",width:220,type:"custom"}:{prop:"agentId",label:"标签(内置，非simple可见)",width:220,type:"BaseTag",attrs:{name:"Enable"}},!d&&{prop:"create_time",label:"时间（内置宽度）"},...d?[{type:"create",label:"创建时间（内置）"}]:[{type:"create",label:"创建时间（内置、单prop）",minWidth:200}],{prop:"status",label:"是否启用",type:"switch",attrs:{}},{type:"remark",label:"备注（内置）"}];function z(a,c,i,A,P){const T={add:()=>R(null,i),export:()=>v(P)};T[a]?T[a]():U.warning(`点击了${a}按钮`)}function $(a,c,i){const A={edit:()=>R(c,i),delete:()=>_(c.id,i),forbid:()=>I(c.id,i),enable:()=>I(c.id,i)};A[a]?A[a]():U.warning(`点击了${a}按钮`)}async function R(a,c){a&&(a={xm:"李四",xb:2,nl:26,dhhm:"18483221518",jgnr:"这是警告内容"}),K(`${a?"编辑":"新增"}`,{component:Y,attrs:{data:a,refreshList:c}})}function _(a,c){L({id:a}).then(i=>c())}function I(a,c){L().then(i=>{c()})}function v(a){ne(a)}return(a,c)=>{const i=S("BaseTag"),A=S("BaseIcon"),P=S("el-tag"),T=S("BaseCrud");return o(),l("div",Ee,[u(T,{class:"f-3",modelValue:q(x),"onUpdate:modelValue":c[0]||(c[0]=t=>se(x)?x.value=t:x=t),cols:N,fields:C.value,fetch:q(L),extraBtns:["add","export",{name:"zdy",text:"自定义按钮",attrs:{type:"primary",icon:q(pe)}}],groupBtns:["edit","delete",t=>t.$index%2===1?"forbid":"enable",{name:"view",to:t=>({name:"userDetail",query:{id:t.id}})}],onExtraBtn:z,onGroupBtn:$,colSpanAttrs:{xs:12,sm:12,md:12,lg:8,xl:6},handleParams:t=>q(oe)(t,"liveCity"),isCompact:"",selection:""},{zdy:h(()=>[k("【这是自定义的搜索条件项】")]),info_complete:h(({row:t})=>[u(Be,{data:t},null,8,["data"])]),info_status:h(({row:t})=>[k(" 这是自定义组件 - 信息状态 ")]),auth_info:h(({row:t})=>[u(qe,{data:t},null,8,["data"])]),relation_tag:h(({row:t})=>[(o(!0),l(F,null,ae(t.relationTag,(J,Q)=>(o(),D(i,{name:"User",class:"mb-q",value:J.tagCode,key:Q},null,8,["value"]))),128)),t.relationTag.length?B("",!0):(o(),l(F,{key:0},[k("-")],64))]),is_proxy:h(({row:t})=>[u(i,{name:"YesNo",value:t.agentId===0?1:0},null,8,["value"])]),business:h(({row:t})=>[t.vipLevel===1||t.rechargeMoney?(o(),l("div",Oe,[t.vipLevel===1?(o(),D(P,{key:0,type:"warning",effect:"dark"},{default:h(()=>[u(A,{name:"StarFilled"}),k(" 脱单特权 ")]),_:1})):B("",!0),t.rechargeMoney?(o(),l("div",Ve,"RMB充值："+b(t.rechargeMoney)+"元",1)):B("",!0)])):(o(),l(F,{key:1},[k("-")],64))]),_:1},8,["modelValue","fields","fetch","extraBtns","groupBtns","handleParams"])])}}});const tt=V(Ke,[["__scopeId","data-v-054a52c8"]]);export{tt as default};