import{w as t,T as e,U as s,a2 as o,af as r,a5 as p,a0 as i}from"./index-8cf28f90.js";import{_ as a}from"./AddEdit.vue_vue_type_script_setup_true_lang-a8ec854c.js";import"./dayjs-21617033.js";import{d as n,B as l,e as d,ah as m,o as u,O as j,u as c}from"./@vue-022d9836.js";import"./lodash-8dc1f9dc.js";import"./call-bind-ada3a9fc.js";import"./get-intrinsic-176af07e.js";import"./es-errors-c8ed318b.js";import"./has-symbols-456daba2.js";import"./has-proto-c2a23985.js";import"./function-bind-afbcd6f2.js";import"./hasown-c3b72c9b.js";import"./set-function-length-968dc075.js";import"./define-data-property-9d7bf764.js";import"./es-define-property-c2edbfb6.js";import"./gopd-16a4ddf0.js";import"./has-property-descriptors-52e43c9d.js";import"./xlsx-c1bdd32b.js";import"./element-plus-6dad9269.js";import"./lodash-es-d4f5f48c.js";import"./@vueuse-c70f8764.js";import"./@element-plus-91223246.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-3c499e77.js";import"./qs-fd29a741.js";import"./side-channel-5a41c40a.js";import"./object-inspect-0d550a97.js";import"./axios-86de682d.js";import"./pinia-f80f4126.js";import"./mock-ada1f893.js";import"./mockjs-217213d3.js";import"./vue-router-e17d6507.js";import"./nprogress-b5e58671.js";import"./vite-plugin-mock-6db8ade2.js";import"./path-to-regexp-83a43451.js";import"./UploadAvatar-de705a07.js";import"./avatar-810e7140.js";import"./cascader-082fe68e.js";const b=n({name:"SystemUserAccount",__name:"index",setup(n){const{getOpts:b}=t(),f=b("Gender"),h=b("RoleType"),g=b("EnableStatus"),x=l("openPopup"),y=d([{prop:"id",label:"用户ID"},{prop:"name",label:"用户姓名"},{prop:"age",label:"年龄",type:"BaseNumberRange"},{prop:"gender",label:"性别",type:"select",options:f},{prop:"type",label:"用户类型",type:"select",options:h},{prop:"status",label:"账号状态",type:"select",options:g}]),v=[{prop:"id",label:"用户ID",width:70},{prop:"name",label:"用户姓名",width:90},{prop:"gender_text",label:"性别",width:90,sortable:!0},{prop:"age",label:"年龄",width:90,sortable:!0},{prop:"address_text",label:"地址",minWidth:250},{prop:"phone",label:"电话",minWidth:120},{prop:"type_text",label:"用户类型",minWidth:90},{prop:"status",label:"状态",type:"BaseTag"}];function _(t,e,o){s({edit:()=>B(e,o),view:()=>function(t){x("查看",{component:a,attrs:{id:t.id,pureText:!0}})}(e),delete:()=>E([e.id],o),forbid:()=>A(e,o),enable:()=>A(e,o)},t)}function w(t,e,o){s({add:()=>B(null,o),delete:()=>E(e,o),export:()=>function(t,e){r({ids:t,cols:v}).then((t=>{p(t,"用户列表"),e()}))}(e,o)},t)}function B(t,e){x(t?"编辑":"新增",{component:a,attrs:{id:null==t?void 0:t.id,refreshList:e}})}function E(t,e){o({ids:t}).then((t=>{e()}))}function A(t,e){const{status:s,id:o}=t;i({id:o,status:1===s?2:1}).then((t=>{e()}))}function D(t,e){e()}return(t,s)=>{const o=m("BaseCrud");return u(),j(o,{cols:v,fields:y.value,fetch:c(e),extraBtns:["add",{name:"add",text:"新增（url)",to:"/user/detail"},,"delete","import","export"],groupBtns:["edit",{name:"edit",text:"编辑（url)",to:t=>`/user/detail?id=${t.id}`},"delete",t=>1===(null==t?void 0:t.status)?"forbid":"enable","view"],onExtraBtn:w,onGroupBtn:_,onDargSortEnd:D,selection:"",index:"",sort:""},null,8,["fields","fetch","groupBtns"])}}});export{b as default};
