import{T as t,_ as e}from"./index-8cf28f90.js";import{_ as s}from"./AddGroup.vue_vue_type_script_setup_true_lang-79dcd8a9.js";import{_ as r}from"./MoveGroup.vue_vue_type_script_setup_true_lang-e7d5d653.js";import{_ as o}from"./EditSalary.vue_vue_type_script_setup_true_lang-b11c516f.js";import{E as p}from"./element-plus-6dad9269.js";import{d as i,B as a,ah as n,o as m,c as l,a as d,V as u,u as j,bm as c,bk as _}from"./@vue-022d9836.js";import"./dayjs-21617033.js";import"./call-bind-ada3a9fc.js";import"./get-intrinsic-176af07e.js";import"./es-errors-c8ed318b.js";import"./has-symbols-456daba2.js";import"./has-proto-c2a23985.js";import"./function-bind-afbcd6f2.js";import"./hasown-c3b72c9b.js";import"./set-function-length-968dc075.js";import"./define-data-property-9d7bf764.js";import"./es-define-property-c2edbfb6.js";import"./gopd-16a4ddf0.js";import"./has-property-descriptors-52e43c9d.js";import"./lodash-8dc1f9dc.js";import"./xlsx-c1bdd32b.js";import"./qs-fd29a741.js";import"./side-channel-5a41c40a.js";import"./object-inspect-0d550a97.js";import"./axios-86de682d.js";import"./pinia-f80f4126.js";import"./mock-ada1f893.js";import"./mockjs-217213d3.js";import"./vue-router-e17d6507.js";import"./nprogress-b5e58671.js";import"./vite-plugin-mock-6db8ade2.js";import"./path-to-regexp-83a43451.js";import"./lodash-es-d4f5f48c.js";import"./@vueuse-c70f8764.js";import"./@element-plus-91223246.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-3c499e77.js";import"./GetValWays.vue_vue_type_script_setup_true_lang-46ce8496.js";const f={class:"f-sb-s"},x={class:"f-0 mr-o left"},h=(t=>(c("data-v-3f105bed"),t=t(),_(),t))((()=>d("strong",{class:"title"},"薪资项",-1))),v=e(i({name:"SalaryConfigSalaryRuleIndex",__name:"Index",props:{_example_prop:{default:()=>({})}},setup(e){const i=a("openPopup"),c=[{prop:"xzx",label:"薪资项"}],_=[{prop:"xzx",label:"薪资项",minWidth:180},{prop:"sx",label:"属性",minWidth:180},{prop:"lx",label:"类型",minWidth:180},{prop:"jslx",label:"缴税类型",minWidth:180}];function v(t,e,o){const a={add:()=>function(t){i("新增分组",{component:s,attrs:{refreshList:t}})}(o),move:()=>function(t){i("移动至",{component:r,attrs:{refreshList:t}})}(o),edit:()=>g(null,o)};a[t]?a[t]():p.warning(`点击了${t}按钮`)}function b(t,e,s){const r={edit:()=>g(e,s),delete:()=>(e.id,void p.success("删除成功！"))};r[t]?r[t]():p.warning(`点击了${t}按钮`)}function g(t,e){i("编辑薪资项",{component:o,attrs:{data:t,refreshList:e,isView:!1}})}return(e,s)=>{const r=n("el-input"),o=n("el-tree"),p=n("BaseCrud");return m(),l("div",f,[d("div",x,[h,u(r,{class:"mt-h mb-h",placeholder:"请输入薪资项",clearable:""}),u(o)]),u(p,{class:"f-1",fields:c,cols:_,extraBtns:[{name:"add",text:"新增分组"},{name:"edit",text:"批量编辑"},{name:"repeal",text:"取消编辑"},{name:"move",text:"批量移动",attrs:{type:"primary",icon:"Pointer"}},{name:"delete",text:"批量移除"}],fetch:j(t),groupBtns:["edit",{name:"delete",text:"移除"}],onExtraBtn:v,onGroupBtn:b,sort:""},null,8,["fetch"])])}}}),[["__scopeId","data-v-3f105bed"]]);export{v as default};