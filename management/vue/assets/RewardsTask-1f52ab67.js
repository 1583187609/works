import{S as p}from"./SectionForm-b6ee37ad.js";import{M as c,bO as o,aK as x,aE as n,u as m,I as f,bc as j,af as b,G as h,bH as y}from"./index-95e659d0.js";import"./_utils-ee6ed3b9.js";import"./FooterBtns-0a071bbf.js";import"./index-f4c48f7a.js";import"./_config-c76f4e31.js";const z={class:"f-fs-s-c",style:{height:"100%"}},_=h('<div class="kpi-head f-fs-c f-0" data-v-8a127383><div class="item" data-v-8a127383>任务名称</div><div class="item" data-v-8a127383>状态</div><div class="item" data-v-8a127383>奖励类型</div><div class="item" data-v-8a127383>奖励明细</div><div class="item" data-v-8a127383>领取方式</div></div>',1),q=c({__name:"RewardsTask",props:{_example_prop:{default:()=>({})}},setup(v){const{getOpts:s,getText:u}=o(),d=s("TaskRewards"),r=s("GetRewardWay");let e=x({scszzp:{zt:0,jllx:2,jlmx:20,lqfs:2},scyyjs:{zt:0,jllx:1,jlmx:30,lqfs:1},bcxqah:{zt:0,jllx:2,jlmx:40,lqfs:2},bclxx:{zt:0,jllx:1,jlmx:50,lqfs:1},wcsfrz:{zt:0,jllx:2,jlmx:60,lqfs:2},jsycsfk:{zt:0,jllx:2,jlmx:60,lqfs:2},fsyccjxh:{zt:0,jllx:2,jlmx:60,lqfs:2},dcycxhxh:{zt:0,jllx:2,jlmx:60,lqfs:2},bc:{zt:0,jllx:2,jlmx:60,lqfs:2},sdqjsyckp:{zt:0,jllx:2,jlmx:60,lqfs:2},dsqoyywlx:{zt:0,jllx:2,jlmx:60,lqfs:2},dsqoyywxy:{zt:0,jllx:2,jlmx:60,lqfs:2},gzgzh:{zt:0,jllx:2,jlmx:60,lqfs:2},bdsjh:{zt:0,jllx:2,jlmx:60,lqfs:2}});const l=[{prop:"zt",label:"状态",type:"switch",labelWidth:"0",labelHide:!0},{prop:"jllx",label:"奖励类型",labelWidth:"1em",labelHide:!0,type:"select",options:d},{prop:"jlmx",label:"奖励明细",labelWidth:"1em",labelHide:!0,type:"input-number",attrs:{min:0}},{prop:"lqfs",label:"领取方式",labelWidth:"1em",labelHide:!0,type:"radio-group",options:r}],i=[{title:"KPI1 - 提升自己",fields:[{prop:"wszl",label:"完善资料",children:l},{prop:"scszzp",label:"上传3张照片",children:l},{prop:"scyyjs",label:"上传语音介绍",children:l},{prop:"bcxqah",label:"补充兴趣爱好",children:l},{prop:"bclxx",label:"补充理想型",children:l},{prop:"wcsfrz",label:"完成身份认证",children:l}]},{title:"KPI2 - 结识新朋友",fields:[{prop:"jsycsfk",label:"解锁一次身份卡",children:l},{prop:"fsyccjxh",label:"发送一次超级喜欢",children:l},{prop:"dcycxhxh",label:"达成一次相互喜欢",children:l}]},{title:"KPI3 - 探索新功能",fields:[{prop:"bc",label:"补充[颜值描述]",children:l},{prop:"sdqjsyckp",label:"单身圈解锁一次卡片",children:l},{prop:"dsqoyywlx",label:"单身圈偶遇一位老乡",children:l},{prop:"dsqoyywxy",label:"单身圈偶遇一位校友",children:l}]},{title:"KPI4 - 加速脱单",fields:[{prop:"gzgzh",label:"关注公众号",children:l},{prop:"bdsjh",label:"绑定手机号",children:l}]}];return(w,t)=>(n(),m("div",z,[_,f(p,{style:{width:"800px"},sections:i,modelValue:j(e),"onUpdate:modelValue":t[0]||(t[0]=a=>b(e)?e.value=a:e=a),class:"rewards-task f-1"},null,8,["modelValue"])]))}});const K=y(q,[["__scopeId","data-v-8a127383"]]);export{K as default};