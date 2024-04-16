import{g as a}from"./cascader-082fe68e.js";import{w as s,_ as e}from"./index-8cf28f90.js";import{a as t}from"./vue-router-e17d6507.js";import{d as l,ah as i,o as r,c as o,F as n,V as c,a as m,U as d,T as p,O as u,P as f,S as v,u as j}from"./@vue-022d9836.js";import"./dayjs-21617033.js";import"./call-bind-ada3a9fc.js";import"./get-intrinsic-176af07e.js";import"./es-errors-c8ed318b.js";import"./has-symbols-456daba2.js";import"./has-proto-c2a23985.js";import"./function-bind-afbcd6f2.js";import"./hasown-c3b72c9b.js";import"./set-function-length-968dc075.js";import"./define-data-property-9d7bf764.js";import"./es-define-property-c2edbfb6.js";import"./gopd-16a4ddf0.js";import"./has-property-descriptors-52e43c9d.js";import"./lodash-8dc1f9dc.js";import"./xlsx-c1bdd32b.js";import"./element-plus-6dad9269.js";import"./lodash-es-d4f5f48c.js";import"./@vueuse-c70f8764.js";import"./@element-plus-91223246.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-3c499e77.js";import"./qs-fd29a741.js";import"./side-channel-5a41c40a.js";import"./object-inspect-0d550a97.js";import"./axios-86de682d.js";import"./pinia-f80f4126.js";import"./mock-ada1f893.js";import"./mockjs-217213d3.js";import"./nprogress-b5e58671.js";import"./vite-plugin-mock-6db8ade2.js";import"./path-to-regexp-83a43451.js";const g={key:0,class:"user-info f-sb-s"},h={class:"f-1 f-sb-s-c"},y={class:"f-fs-c"},b={class:"f-0 mr-o"},x={class:"f-sb-c"},k={class:"avatar-box f-0 mr-8"},C={class:"f-1 f-sb-s-c"},S={class:"f-sb-c"},T={class:"f-0 age"},_={class:"f-sb-c"},z={class:"f-0 item"},A={class:"f-0 item"},w={class:"f-fs-c"},B={class:"item f-0"},I={class:"item f-0"},N={class:"f-fs-fs"},D={class:"item f-0"},q={class:"item f-0"},E={class:"f-fs-c"},G={class:"item f-0"},L={class:"item f-0"},U=e(l({name:"_componentsUserInfo",__name:"UserInfo",props:{data:{default:()=>({})},simple:{type:Boolean}},setup(e){const l=t(),{getOpts:U,getText:F}=s(),O=e;function R(a){const{companyStatus:s,schoolStatus:e}=a;let t=0;return t=0===s&&0===e?4:0===s?3:0===e?2:1,t}function J(){l.push({name:"userDetail",query:{id:O.data.id}})}return(s,e)=>{const t=i("BaseAvatar"),l=i("BaseCopy"),U=i("BaseTag"),O=i("el-popover");return s.data?(r(),o("div",g,[s.simple?(r(),o(n,{key:0},[c(t,{class:"avatar simple f-0 mr-8",src:s.data.avatar,gender:s.data.gender},null,8,["src","gender"]),m("div",h,[m("b",{onClick:J,class:"nickname line-1"},d(s.data.nickname||"-"),1),m("div",y,[m("div",b,[p("ID："),c(l,{text:s.data.id,line:"1"},null,8,["text"])]),c(U,{class:"f-0 gender",name:"Gender",value:s.data.gender,size:"small",pureText:""},null,8,["value"])]),m("div",x,[c(U,{class:"f-0",name:"AccountStatus",value:s.data.accountStatus,size:"small"},null,8,["value"]),c(U,{class:"f-0",name:"AuthCase",value:R(s.data),size:"small"},null,8,["value"])])])],64)):(r(),o(n,{key:1},[m("div",k,[0===s.data.companyStatus?(r(),u(O,{key:0,"show-after":200,"hide-after":0,trigger:"hover"},{reference:f((()=>[c(U,{class:"company",name:"AuthCase",value:"3"},{default:f((()=>[p("公司")])),_:1})])),default:f((()=>[m("div",null,d(s.data.companyName),1)])),_:1})):v("",!0),c(t,{class:"avatar",src:s.data.avatar,gender:s.data.gender},null,8,["src","gender"]),0===s.data.schoolStatus?(r(),u(O,{key:1,"show-after":200,"hide-after":0,trigger:"hover"},{reference:f((()=>[c(U,{class:"education",name:"AuthCase",value:"2"},{default:f((()=>[p("学历")])),_:1})])),default:f((()=>[m("div",null,d(j(F)("EducationType",s.data.schoolCertificateLevel)||"-"),1)])),_:1})):v("",!0)]),m("div",C,[m("div",S,[m("b",{onClick:J,class:"nickname line-1"},d(s.data.nickname||"-"),1),c(U,{class:"f-0 gender",name:"Gender",value:s.data.gender,size:"small",pureText:""},null,8,["value"]),m("span",T,d(s.data.age||"0")+"岁",1),c(U,{class:"f-0 ml-h mr-a",name:"MatrimonyStatus",value:s.data.singleType,size:"small",pureText:""},null,8,["value"]),c(U,{class:"f-0",name:"AccountStatus",value:s.data.accountStatus,size:"small"},null,8,["value"])]),m("div",_,[m("div",z,[p("ID："),c(l,{text:s.data.id,line:"1"},null,8,["text"])]),m("div",A,[p(" 学号："),c(l,{text:s.data.userCode,line:"1"},null,8,["text"])])]),m("div",w,[m("div",B,[p(" 学历："),m("b",null,d(j(F)("EducationType",s.data.schoolCertificateLevel)||"-"),1)]),m("div",I,[p(" 学校："),m("b",null,d(s.data.schoolName||"-"),1)])]),m("div",N,[m("div",D,[p(" 职业："),m("b",null,d(s.data.jobName||"-"),1)]),m("div",q,[p(" 收入："),m("b",null,d(s.data.incomeTypeName||"-"),1)])]),m("div",E,[m("div",G,[p(" 现居地："),m("b",null,d(j(a)("Region",s.data.liveCity)||"-"),1)]),m("div",L,[p(" 家乡："),m("b",null,d(j(a)("Region",s.data.city)||"-"),1)])])])],64))])):v("",!0)}}}),[["__scopeId","data-v-ba9798a9"]]);export{U as default};
