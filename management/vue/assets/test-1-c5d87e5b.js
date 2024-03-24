import{M as z,aK as q,q as w,aR as o,aE as i,u as n,I as d,bx as V,bc as u,af as k,v as b,F as B,aP as j,b3 as c,cQ as W,bN as N,bH as E}from"./index-346f95fe.js";import{P}from"./user-7f5e5957.js";import{_ as S}from"./BaseIcon.vue_vue_type_script_lang-b4e8d4df.js";const F={class:"page-view one f-sb-s"},T={class:"f-1 ml-t tips-list"},C={class:"item"},H=z({__name:"test-1",props:{_example_prop:{default:()=>({})}},setup(R){const m=[{label:"省1",value:"1",children:[{label:"市1-1",value:"1-1",children:[{label:"县1-1-1",value:"1-1-1"},{label:"县1-1-2",value:"1-1-2"}]},{label:"市1-2",value:"1-2",children:[{label:"县1-2-1",value:"1-2-1"},{label:"县1-2-2",value:"1-2-2"}]},{label:"市1-3",value:"1-3",children:[{label:"县1-3-1",value:"1-3-1"},{label:"县1-3-2",value:"1-3-2"}]}]},{label:"省2",value:"2",children:[{label:"市2-1",value:"2-1"},{label:"市2-2",value:"2-2"},{label:"市2-3",value:"2-3"}]}],h=["各个功能组件的默认配置可以根据实际项目情况作灵活处理","label宽度自动计算","ElementPlus中的控件属性一律放在attrs中（实现了UI控件属性全继承）","只要保证父级盒子高度的100%可继承，底部按钮（提交、重置）会自动跟随或固定在下方","BaseFrom继承了所有el-form的属性，故可以进行影响全表单项的设置，例：disabled","底部扩展更多按钮，默认均会触发表单校验，可设置needValid: false不触发表单校"],r={activeValue:1,inactiveValue:0,activeText:"支持",inactiveText:"不支持",inlinePrompt:!0,style:"width: 5em"};let t=q({inner_obj:{one:"嵌套对象必填项一",two:"嵌套对象必填项二"},xm:"张三",dhhm:"18483221518",mm:"abc123456",xb:1,rq:["2023-04-02","2023-04-07"],cyxslx:1,bpzs2:1,ly:[1,2],cyfs:2,nzcyzj_min:1,nzcyzj_max:2,zdy:[10,20]});const v=w(()=>{const{cyxslx:e}=t;return[{label:"嵌套的校验（对象）",prop:"inner_obj",required:!0,children:[{prop:"one",label:"一",value:1,required:!0,labelWidth:"0",labelHide:!0},{prop:"two",label:"二",value:2,required:!0,labelWidth:"0",labelHide:!0}]},{label:"嵌套的校验（数组）",prop:"inner_arr",required:!0,type:"addDel",children:[{prop:"one",label:"一",value:1,required:!0,labelWidth:"0",labelHide:!0},{prop:"two",label:"二",value:2,required:!0,labelWidth:"0",labelHide:!0}]},{prop:"xm",label:"姓名",required:!0,tips:"最少传入prop，label两个属性；tips属性设置表单项下方提示信息;设置required: true, 设为必填；设置attrs属性，完全继承于ElementPlus的表单控价属性；",attrs:{maxlength:30}},{prop:"sfzh",label:"身份证号",tips:"popover设置弹出层提示；设置valid，内置身份证、密码等校验；添加example属性，拼接在placeholder后面，作为输入示例",popover:"这是popover提示",valid:"identity",example:"这是拼接在placeholder后面的输入示例"},{prop:"dhhm",label:"电话号码",valid:"phone",tips:"prefix插槽插入图标（传入文本）；内置电话号码校验；自定义placeholder",attrs:{placeholder:"电话号码（这是自定义的placeholder）",slots:{prefix:"Tel"}}},{prop:"mm",label:"密码",valid:"password",tips:"prefix插槽插入图标（传入组件）；内置密码校验；",attrs:{slots:{prefix:{component:S,attrs:{name:"Lock"}}}}},{prop:"xb",label:"性别",type:"select",options:[{label:"男",value:1},{label:"女",value:2}]},{prop:"rq",label:"日期(单prop)",type:"date-picker",tips:"默认类型是daterange；prop为字符串时，提交表单时是一个数组"},{prop:["rq_s","rq_e"],label:"日期(双prop)",type:"date-picker",tips:"props传入数组，提交表单数据时，会被拆成两个字段"},{prop:"csrq",label:"出生日期",type:"date-picker",attrs:{type:"date"}},{prop:"zdbqsrk",label:"自动补全输入框",type:"autocomplete",attrs:{}},{prop:"nl",label:"年龄",tips:"valid（限制最小值、最大值）和自定义校验规则（必须大于18岁）同时使用；设置after属性，往表单项后面添加内容【岁】（可以是文本或组件）",valid:"age",rules:[{validator:_,trigger:"blur"}]},{prop:"sg",label:"身高",type:"slider",attrs:{min:100,max:200}},{prop:"sfqy",label:"是否启用",type:"switch",tips:"考虑【启用/禁用】用的多，故设为内置switch样式，可通过设置attrs覆盖内置默认样式",attrs:{}},{prop:"ly",label:"渠道来源",type:"checkbox-group",options:[{label:"来源1",value:1},{label:"来源2",value:2},{label:"来源3",value:3}]},{prop:"jzw",label:"是否记住我",type:"checkbox",tips:"用attrs.slots.default改变多选框右侧的文字（默认跟label一样）",attrs:{slots:"记住我"}},{prop:"ssq",label:"省市区",type:"cascader",options:m},{prop:"cyfs",label:"参与方式",labelWidth:"15em",type:"radio-group",tips:"手动指定label宽度，覆盖自动计算宽度",options:[{label:"方式1",value:1},{label:"方式2",value:2},{label:"方式3",value:3}],attrs:{type:""}},{prop:"bpzs1",label:"并排展示1",span:12,tips:"表单项禁用",attrs:{disabled:!0}},{prop:"bpzs2",label:"并排展示2",type:"select",tips:"纯文本展示",span:12,pureText:!0,options:[{label:"并排展示选项1",value:1},{label:"并排展示选项2",value:2}]},{prop:"bz",label:"备注",attrs:{type:"textarea"}},{prop:["nzcyzj_min","nzcyzj_max"],label:"内置常用组件",type:"BaseNumberRange"},{prop:"zdy",label:"自定义组件",type:"custom",tips:"设置type:'custom'通过插槽加入自定义组件，并通过v-model绑定表单值"},{prop:"kmsj",label:"开幕时间",type:"time-picker",tips:"因为几乎用不到，考虑性能，故不放出time-picker。此处作为当type类型错误时的示例"},{prop:"cyxslx",label:"差异显示类型",type:"radio-group",tips:"radio-group控件，默认为button样式",popover:"点击提交按钮时，有prop，可看到提交参数多嵌套了一层并包裹在prop中，无prop，子级children散开在外层",options:[{label:"认证方式有prop",value:1},{label:"认证方式无prop",value:2}]},e===1&&{prop:"rzfs",label:"认证方式",children:[{prop:"isSupportEmail",label:"邮箱认证",type:"switch",labelWidth:"6em",attrs:r},{prop:"isSupportPerson",label:"人工认证",type:"switch",labelWidth:"6em",attrs:r}]},e===2&&{label:"认证方式",children:[{prop:"isSupportDingTalk",label:"钉钉认证",type:"switch",labelWidth:"6em",attrs:r},{prop:"isSupportFeiShu",label:"飞书认证",type:"switch",labelWidth:"6em",attrs:r}]}]});function y(e,l){e==="cyxslx"&&(t.cyxslx=l)}const _=(e,l,p)=>{l<18?p(new Error("年龄必须大于18岁")):p()};function f(e,l){W({noValid:()=>x()},e)}function x(){N.warning("设置needValid: false，不触发表单校验")}return(e,l)=>{const p=o("BaseNumberRange"),g=o("BaseForm");return i(),n("div",F,[d(g,{onChange:y,modelValue:u(t),"onUpdate:modelValue":l[0]||(l[0]=a=>k(t)?t.value=a:t=a),fields:v.value,fetch:u(P),moreBtns:["reject",{name:"noValid",text:"不触发表单校验",needValid:!1,attrs:{type:"primary",plain:!0}},{name:"jump",text:"回到首页",to:{name:"home"},attrs:{type:"primary",link:!0}}],onMoreBtns:f,class:"three f-2",pureText:!1},{zdy:V(({form:a})=>[d(p,{modelValue:a.zdy,"onUpdate:modelValue":s=>a.zdy=s},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["modelValue","fields","fetch"]),b("ul",T,[(i(),n(B,null,j(h,(a,s)=>b("li",C,c(s+1)+"、"+c(a),1)),64))])])}}});const A=E(H,[["__scopeId","data-v-ba6f6adb"]]);export{A as default};