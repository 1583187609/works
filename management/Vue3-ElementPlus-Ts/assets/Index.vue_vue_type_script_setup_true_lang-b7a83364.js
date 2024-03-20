import{_ as s}from"./CutRatioiTypes.vue_vue_type_script_setup_true_lang-4db943e0.js";import n from"./HolidaysRatio-980bc68f.js";import{S as b}from"./SectionForm-c721db42.js";import{_ as m}from"./TimeTable.vue_vue_type_script_setup_true_lang-c4856cf2.js";import d from"./FullRule-872f2192.js";import{q as u,O as y,a6 as c,t as q,D as x,E as e,L as l,J as r,u as _,k as j}from"./runtime-core.esm-bundler-95bf9971.js";const C=u({__name:"Index",props:{_example_prop:{default:()=>({})}},setup(k){let a=y({kkbllx:{type:1,val:""},qqjsfqy:{kg:1}});const i=[{title:"月标准计薪天数",hasSeted:!1,fields:[{prop:"gzsj",label:"工作时间",attrs:{slots:{prepend:"下拉选择项",append:"小时/天"}}}]},{title:"旷工扣款规则",hasSeted:!1,fields:[{prop:"kkbl",label:"扣款比例",type:"input-number",attrs:{min:0,max:100},after:"%"},{prop:"kkbllx",label:"扣款比例类型",type:"custom"},{prop:"bz",label:"备注",attrs:{type:"textarea"}}]},{title:"加班工资规则",hasSeted:!0,fields:[{prop:"gzrbl",label:"工作日比例",type:"input-number",attrs:{style:"width: 200px",min:0,max:100},span:12,after:"%"},{prop:"xxrbl",label:"休息日比例",span:12,type:"input-number",attrs:{style:"width: 200px",min:0,max:100}},{prop:"jjrbl",label:"节假日比例",type:"custom"},{prop:"jlbllx",label:"奖励比例类型",type:"custom"},{prop:"bz",label:"备注",attrs:{type:"textarea"}}]},{title:"请假扣款规则",hasSeted:!0,fields:[{prop:"qjlx",label:"请假类型",type:"select"},{prop:"qjkkbl",label:"扣款比例",type:"custom",tips:"不支持非考勤周期内的调薪，例如上月请假一天，不计入本月调整"},{prop:"qjbz",label:"备注",attrs:{type:"textarea"}}]},{title:"迟到、早退扣款规则",hasSeted:!1,fields:[{prop:"tjfs",label:"统计方式",type:"select",span:8},{prop:"sfhb",label:"是否合并",type:"switch",span:4},{prop:"sflj",label:"是否累计",type:"switch",span:4},{prop:"cd",label:"迟到",type:"custom"},{prop:"zt",label:"早退",type:"custom"}]},{title:"全勤奖规则",hasSeted:!1,fields:[{prop:"qqj",label:"全勤奖",after:"元"},{prop:"qqjsfqy",label:"全勤奖",type:"custom"}]}];return(h,o)=>{const p=c("el-button");return q(),x(b,{modelValue:_(a),"onUpdate:modelValue":o[0]||(o[0]=t=>j(a)?a.value=t:a=t),sections:i},{kkbllx:e(({form:t})=>[l(s)]),jlbllx:e(({form:t})=>[l(s)]),"right-2":e(()=>[l(p,{type:"primary",size:"small"},{default:e(()=>[r("添加")]),_:1})]),jjrbl:e(({form:t})=>[l(n)]),"right-3":e(()=>[l(p,{type:"primary",size:"small"},{default:e(()=>[r("添加")]),_:1})]),qjkkbl:e(({form:t})=>[l(s,{stagework:""})]),"right-4":e(()=>[l(p,{type:"primary",size:"small"},{default:e(()=>[r("添加")]),_:1})]),cd:e(({form:t})=>[l(m)]),zt:e(({form:t})=>[l(m)]),qqjsfqy:e(({form:t})=>[l(d,{modelValue:t.qqjsfqy,"onUpdate:modelValue":f=>t.qqjsfqy=f},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["modelValue"])}}});export{C as _};
