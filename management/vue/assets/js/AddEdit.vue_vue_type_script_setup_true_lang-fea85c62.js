import{w as e,T as a}from"./index-8cf28f90.js";import{d as t,_ as l,j as s,ah as r,o as p,O as o,u as d,D as i}from"./@vue-022d9836.js";const n=t({name:"TestTest3AddEdit",__name:"AddEdit",props:{data:{},refreshList:{}},setup(t){const{getOpts:n,getText:u}=e(),c=n("Gender"),m=[{label:"警告",value:1},{label:"禁言",value:2},{label:"封禁",value:3}],x=t;let f=l(Object.assign({cflx:1,sfqy:0},x.data));const h=s((()=>[{prop:"xm",label:"姓名",required:!0,attrs:{maxlength:6}},{prop:"xb",label:"性别",required:!0,type:"select",options:c},{prop:"nl",label:"年龄",valid:"age"},{prop:"dhhm",label:"电话号码",valid:"phone"},{prop:"sfqy",label:"是否启用",popover:"这是popover示例",type:"switch"},{prop:"cflx",label:"处罚类型",type:"radio-group",options:m},1===f.cflx&&{prop:"jgnr",label:"警告内容",tips:"这是tips示例",attrs:{type:"textarea",maxlength:100}},...2===f.cflx?[{prop:"ts",label:"天数",type:"input-number",after:"天",attrs:{min:0}},{prop:"jygz",label:"禁言告知",attrs:{type:"textarea",maxlength:100}}]:[],3===f.cflx&&{prop:"fjgz",label:"封禁告知",tips:"这是tips示例",attrs:{type:"textarea",maxlength:100}}]));return(e,t)=>{var l;const s=r("BaseForm");return p(),o(s,{style:{width:"600px"},modelValue:d(f),"onUpdate:modelValue":t[0]||(t[0]=e=>i(f)?f.value=e:f=e),fields:h.value,fetch:(e.data,d(a)),fetchSuccess:e.refreshList,extraParams:{id:null==(l=e.data)?void 0:l.id},onChange:t[1]||(t[1]=(e,a)=>d(f)[e]=a)},null,8,["modelValue","fields","fetch","fetchSuccess","extraParams"])}}});export{n as _};