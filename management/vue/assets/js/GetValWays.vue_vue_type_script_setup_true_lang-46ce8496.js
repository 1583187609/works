import{d as e,j as a,ah as l,o as u,c as t,V as d,P as o,F as s,a8 as m,T as p,U as n,O as v,S as r}from"./@vue-022d9836.js";const V={class:"example-vue"},i=e({name:"SalaryConfigSalaryRule_componentsGetValWays",__name:"GetValWays",props:{modelValue:{default:()=>({})}},emits:["update:modelValue"],setup(e,{emit:i}){const y=[{label:"输入",value:1},{label:"公式",value:2}],c=e,b=i,_=a({get:()=>c.modelValue,set(e){b("update:modelValue",e)}});return(e,a)=>{const i=l("el-radio"),c=l("el-radio-group"),b=l("el-input-number"),f=l("el-input");return u(),t("div",V,[d(c,{modelValue:_.value.type,"onUpdate:modelValue":a[0]||(a[0]=e=>_.value.type=e)},{default:o((()=>[(u(),t(s,null,m(y,((e,a)=>d(i,{disabled:e.disabled,value:e.value,key:a},{default:o((()=>[p(n(e.label),1)])),_:2},1032,["disabled","value"]))),64))])),_:1},8,["modelValue"]),1===_.value.type?(u(),v(b,{key:0,style:{"margin-right":"100px"},modelValue:_.value.val,"onUpdate:modelValue":a[1]||(a[1]=e=>_.value.val=e),placeholder:"请输入值",min:0},null,8,["modelValue"])):2===_.value.type?(u(),v(f,{key:1,modelValue:_.value.val,"onUpdate:modelValue":a[2]||(a[2]=e=>_.value.val=e),placeholder:"请输入公式",type:"textarea"},null,8,["modelValue"])):r("",!0)])}}});export{i as _};