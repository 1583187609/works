import{w as e,T as t,a4 as a,U as r,a5 as o,_ as p}from"./index-8cf28f90.js";import{_ as s}from"./AddEdit.vue_vue_type_script_setup_true_lang-fea85c62.js";import l from"./InfoSteps-ad29aee1.js";import i from"./AuthInfo-e978f17e.js";import{u as n}from"./index-50082517.js";import{u as m}from"./vue-router-e17d6507.js";import"./nprogress-b5e58671.js";import{a2 as d,$ as u}from"./@element-plus-91223246.js";import{a as c}from"./cascader-082fe68e.js";import{_ as y}from"./Index.vue_vue_type_script_setup_true_lang-be427753.js";import{_}from"./Index.vue_vue_type_script_setup_true_lang-ad693c57.js";import{d as g,B as j,_ as f,ah as v,o as b,c as h,V as x,P as w,T as B,F as k,a8 as I,O as T,S as q,U,u as z,D as R}from"./@vue-022d9836.js";import"./dayjs-21617033.js";import"./call-bind-ada3a9fc.js";import"./get-intrinsic-176af07e.js";import"./es-errors-c8ed318b.js";import"./has-symbols-456daba2.js";import"./has-proto-c2a23985.js";import"./function-bind-afbcd6f2.js";import"./hasown-c3b72c9b.js";import"./set-function-length-968dc075.js";import"./define-data-property-9d7bf764.js";import"./es-define-property-c2edbfb6.js";import"./gopd-16a4ddf0.js";import"./has-property-descriptors-52e43c9d.js";import"./lodash-8dc1f9dc.js";import"./xlsx-c1bdd32b.js";import"./element-plus-6dad9269.js";import"./lodash-es-d4f5f48c.js";import"./@vueuse-c70f8764.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-3c499e77.js";import"./qs-fd29a741.js";import"./side-channel-5a41c40a.js";import"./object-inspect-0d550a97.js";import"./axios-86de682d.js";import"./pinia-f80f4126.js";import"./mock-ada1f893.js";import"./mockjs-217213d3.js";import"./vite-plugin-mock-6db8ade2.js";import"./path-to-regexp-83a43451.js";const A={class:"page-view three f-sb-s"},C={key:0,class:"f-c-c-c"},E={key:1},L=p(g({name:"TestThree",__name:"index",setup(p){const g={xm:"李四",xb:2,nl:26,dhhm:"18483221518",jgnr:"这是警告内容"},{getOpts:L,getText:N}=e(),S=j("openPopup"),M=m(),{type:P}=M.query,V="simple"===P,{getSearchOpts:W}=n(),$=L("User"),D=L("EnableStatus");let F=f({xm:"张三",multi_tag:["new_user"],date_range_def_val:["2023-08-19","2023-08-27"],num_range_def_val:[10,20]});const O=[{prop:"xm",label:"姓名"},{prop:"qyzt",label:"启用状态",type:"select",options:D},{prop:"multi_tag",label:"多标签",type:"select",options:$,attrs:{multiple:!0}},{prop:"liveCity",label:"级联",type:"cascader",options:c("Region"),attrs:{filterable:!0}},W("school",{prop:"schoolId",label:"学校",popover:"采用hooks封装复杂逻辑"}),W("company",{prop:"companyId",label:"公司",popover:"hooks封装且自定义选择下拉项"}),{prop:"num_range_arr",label:"数字(数组)",type:"BaseNumberRange"},{prop:["num_range_min","num_range_max"],label:"数字(对象)",type:"BaseNumberRange"},{prop:"num_range_def_val",label:"数字(默值)",type:"BaseNumberRange"},{prop:"date_range",label:"日期(数组)",type:"date-picker"},{prop:["date_range_min","date_range_max"],label:"日期(对象)",type:"date-picker"},{prop:"date_range_def_val",label:"日期(默值)",type:"date-picker"},{prop:"zdy",label:"自定义",type:"custom",popover:"在搜索表单中一般几乎用不到自定义特性，此处用作示例"}];O.slice(0,4),O.slice(4,6),O.slice(6,9),O.slice(9);const G=[{label:"自定义组件列-内置 [UserInfo]",type:"UserInfo",popover:'传递popover属性增加疑问小提示；可以自定义表格列并内嵌到系统中，设置 {type: "UserInfo"} 即可',attrs:{simple:V}},!V&&{prop:"info_complete",label:"自定义组件-非内置",width:170,type:"custom",popover:'需设置 {type: "custom"}'},{prop:"avatar",label:"图片 [BaseImg]",type:"BaseImg",minWidth:160,popover:"内置图片组件 [BaseImg]，含列宽、图片大小、圆角样式、预览等功能；设置{minWidth: 160} 覆盖默认宽度"},{prop:"produce",label:"自我介绍 [BaseText]",type:"BaseText",popover:"内置文本组件 [BaseText]，内置列宽；超出文本后自动省略，且可点击后弹出弹窗查看完整内容"},{prop:"form_col",label:"formatter列",minWidth:140,popover:"继承自ElementPlus的 formatter 方法",formatter:(e,t,a,r=0)=>`formatter格式化示例-第${r+1}行`},V?{prop:"is_proxy",label:"标签(自定义，simple可见)",width:220,type:"custom"}:{prop:"status",label:"状态 [BaseTag]",width:220,type:"BaseTag",popover:"非simple可见"},!V&&{prop:"sj",label:"时间（内置宽度）",popover:'只设置 {prop: "sj"}，不设置 {type: "create"}。会根据 label 中带时间二字，自动确定该列的宽度'},{type:"create",label:"创建时间 [create]",popover:'只设置 {type: "create"}，便会默认区创建时间、创建人两个字段的 prop '},{type:"update",prop:"updatedAt",label:"修改时间 [update]",popover:'设置 {type: "update", prop: "updatedAt"}，只会显示 updatedAt 属性的值'},{prop:"status",label:"启/禁用",type:"switch",minWidth:100,popover:'设置{type: "switch"}，此列可防止在右侧操作栏的按钮组中，后续可能考虑移除',attrs:{}},{type:"remark",label:"备注 [remark]",popover:'设置{type: "remark"}，内置列宽度、label文案'}];function J(e,t,a,p,s){r({add:()=>Y(null,a),export:()=>o(s),dialog:()=>S("这是一个dialog列表示例",{component:y,attrs:{}}),drawer:()=>S("这是一个drawer表单示例",{component:_,attrs:{}},"drawer")},e)}function Q(e,a,o){const{id:p}=a;r({edit:()=>Y(a,o),delete:()=>t({id:p}).then((()=>o())),forbid:()=>t({id:p,status:0}).then((()=>o())),enable:()=>t({id:p,status:1}).then((()=>o()))},e)}async function Y(e,t){e&&(e=g),S(""+(e?"编辑":"新增"),{component:s,attrs:{data:e,refreshList:t}})}return(e,r)=>{const o=v("BaseTag"),p=v("BaseIcon"),s=v("el-tag"),n=v("BaseCrud");return b(),h("div",A,[x(n,{class:"f-3",modelValue:z(F),"onUpdate:modelValue":r[0]||(r[0]=e=>R(F)?F.value=e:F=e),cols:G,fields:O,fetch:z(t),extraBtns:["add","delete","import","export","enable","forbid","repeal","upload","download","pass","reject",{name:"dialog",text:"打开dialog列表",attrs:{type:"primary",icon:"Postcard"}},{name:"drawer",text:"打开drawer表单",attrs:{type:"primary",icon:z(d)}},{name:"view",text:"url跳转",to:"/user/detail?id=12",order:50,attrs:{icon:"Link"}},{name:"zdy",text:"自定义按钮",attrs:{type:"primary",icon:z(u)}}],groupBtns:(e,t)=>{const{id:a}=e;return t%2==0?["edit","delete","reject","repeal","pass","download","log","audit","reset",t%3==0?"forbid":"enable",{name:"view",text:"查看",to:`/user/detail?id=${a}`}]:["edit","audit","reject","delete","download","pass","repeal","reset","log",{name:"view",to:{name:"userDetail",query:{id:a}}}]},onExtraBtn:J,onGroupBtn:Q,handleReq:e=>z(a)(e,["liveCity"]),compact:"",selection:""},{zdy:w((()=>[B("【这是自定义的搜索项】")])),info_complete:w((({row:e})=>[x(l,{data:e},null,8,["data"])])),info_status:w((({row:e})=>[B(" 这是自定义组件 - 信息状态 ")])),auth_info:w((({row:e})=>[x(i,{data:e},null,8,["data"])])),relation_tag:w((({row:e})=>[(b(!0),h(k,null,I(e.relationTag,((e,t)=>(b(),T(o,{name:"User",class:"mb-q",value:e.tagCode,key:t},null,8,["value"])))),128)),e.relationTag.length?q("",!0):(b(),h(k,{key:0},[B("-")],64))])),is_proxy:w((({row:e})=>[x(o,{name:"YesNo",value:0===e.agentId?1:0},null,8,["value"])])),business:w((({row:e})=>[1===e.vipLevel||e.rechargeMoney?(b(),h("div",C,[1===e.vipLevel?(b(),T(s,{key:0,type:"warning",effect:"dark"},{default:w((()=>[x(p,{name:"StarFilled"}),B(" 脱单特权 ")])),_:1})):q("",!0),e.rechargeMoney?(b(),h("div",E,"RMB充值："+U(e.rechargeMoney)+"元",1)):q("",!0)])):(b(),h(k,{key:1},[B("-")],64))])),_:1},8,["modelValue","fetch","extraBtns","groupBtns","handleReq"])])}}}),[["__scopeId","data-v-9db5be31"]]);export{L as default};
