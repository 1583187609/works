import g from"./SectionForm-6d1819a5.js";import{M as V,bO as z,aK as S,q as w,aR as i,aE as n,u as d,I as s,bx as p,H as B,bc as U,af as E,v as c,F,aP as O,b3 as u,bH as P}from"./index-346f95fe.js";import{P as T}from"./user-7f5e5957.js";import j from"./AddDelBtn-a1433b04.js";import{a as k}from"./cascader-cbb71516.js";import"./_utils-e1c645e6.js";import"./FooterBtns-8c6c3ddb.js";import"./index-6d0323cd.js";import"./_config-c76f4e31.js";const A={class:"page-view two f-sb-s"},C={class:"f-1 ml-o tips-list"},D=V({__name:"test-2",setup(W){const{getOpts:m,getText:q}=z(),b=k("Region"),h=["section块之间span属性功能完善","label宽度根据各个section块决定"],o={activeValue:1,inactiveValue:0,activeText:"支持",inactiveText:"不支持",inlinePrompt:!0,style:"width: 5em"},_=m("Sex");let l=S({nl:24,cyxslx:1});const y=w(()=>{const{cyxslx:t}=l;return[{title:"基础信息",popover:"纯文本展示",fieldAttrs:{span:8},fields:[{prop:"xm",label:"姓名"},{prop:"xb",label:"性别",type:"select",options:_},{prop:"nl",label:"年龄",type:"input-number",valid:"age",attrs:{}},{prop:"dhhm",label:"电话",valid:"phone"},{prop:"dz",label:"地址",type:"cascader",options:b},{prop:"hz",label:"后缀",after:{component:j,attrs:{name:"add"}}},{prop:"bz",label:"备注",span:24,attrs:{type:"textarea"}}]},{title:"第二部分",popover:"属性继承（例：disabled）",fieldAttrs:{attrs:{disabled:!0}},fields:[{prop:"sfzh",label:"身份证号",valid:"identity",span:12},{prop:"zsbh",label:"证书证号",span:12,attrs:{maxlength:11}}]},{title:"第三部分",popover:"正常表单配置",fields:[{prop:"zdy",label:"自定义组件",type:"custom",tips:"这是自定义组件，临时用el-input代替"},{prop:"tx",label:"头像",required:!1,type:"BaseUpload",span:12},{prop:"zs",label:"证书",required:!1,type:"BaseUpload",span:12},{prop:"cyxslx",label:"差异显示类型",type:"radio-group",tips:"radio-group控件，默认为button样式",popover:"点击提交按钮时，有prop，可看到提交参数多嵌套了一层并包裹在prop中，无prop，子级children散开在外层",options:[{label:"认证方式有prop",value:1},{label:"认证方式无prop",value:2}]},t===1&&{prop:"rzfs",label:"认证方式",children:[{prop:"isSupportEmail",label:"邮箱认证",type:"switch",labelWidth:"6em",attrs:o},{prop:"isSupportPerson",label:"人工认证",type:"switch",labelWidth:"6em",attrs:o}]},t===2&&{label:"认证方式",children:[{prop:"isSupportDingTalk",label:"钉钉认证",type:"switch",labelWidth:"6em",attrs:o},{prop:"isSupportFeiShu",label:"飞书认证",type:"switch",labelWidth:"6em",attrs:o}]},{prop:"bjnr",label:"编辑内容",popover:"不能超过最大字符数校验",type:"custom",rules:[{max:10,message:"不能超过10个字符",trigger:"change"}]},{prop:"bz",label:"备注",attrs:{type:"textarea",maxlength:100}}]}]});function x(t){return console.log(t,"parasms-----------"),T(t)}return(t,r)=>{const f=i("el-input"),v=i("BaseEditor");return n(),d("div",A,[s(g,{class:"f-2",modelValue:U(l),"onUpdate:modelValue":r[0]||(r[0]=e=>E(l)?l.value=e:l=e),fetch:x,sections:y.value},{"right-0":p(()=>[B("这是标题右侧的插槽")]),zdy:p(({form:e})=>[s(f,{placeholder:"这是自定义组件",modelValue:e.zdy,"onUpdate:modelValue":a=>e.zdy=a,clearable:""},null,8,["modelValue","onUpdate:modelValue"])]),bjnr:p(({form:e})=>[s(v,{modelValue:e.bjnr,"onUpdate:modelValue":a=>e.bjnr=a},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["modelValue","sections"]),c("ul",C,[(n(),d(F,null,O(h,(e,a)=>c("li",{class:"item",key:a},u(a+1)+"、"+u(e),1)),64))])])}}});const Q=P(D,[["__scopeId","data-v-99acb50a"]]);export{Q as default};
