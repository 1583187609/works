import{M as N,ck as $,cw as h,q as f,aR as g,aE as y,u as M,I as m,bx as c,bc as V,v as R,b3 as z,ao as E,bN as I,ci as b,bH as S}from"./index-8b36bd1b.js";const j={class:"f-fs-fs base-number-range"},w=N({__name:"BaseNumberRange",props:{modelValue:{},prop:{},label:{},rules:{},attrs:{},rangeSeparator:{default:$},size:{}},emits:["update:modelValue","change","clear"],setup(_,{emit:C}){h();const o=_,u=C,{prop:l,attrs:J}=o,[x,B]=[`${l}[0]`,`${l}[1]`],r=f({get(){var a;return(a=o.modelValue)==null?void 0:a[0]},set(a){u("update:modelValue",[a,s.value??""])}}),s=f({get(){var a;return(a=o.modelValue)==null?void 0:a[1]},set(a){u("update:modelValue",[r.value??"",a])}});function i(a,e,t){r.value===""||s.value===""?t():r.value>s.value?(I.error(o.label+"最小值不能超过最大值"),t("最小值不能超过最大值")):t()}function d(a){var t;const e=[r.value,s.value];u("change",((t=l==null?void 0:l.join)==null?void 0:t.call(l,b))??l,e)}function p(a){var t;const e=a==="min"?["",s.value]:[r.value,""];u("clear",((t=l==null?void 0:l.join)==null?void 0:t.call(l,b))??l,e)}return(a,e)=>{const t=g("el-input"),v=g("el-form-item");return y(),M("div",j,[m(v,{class:"f-1 hide-err-text",prop:V(x),rules:[{validator:i,trigger:"blur"}]},{default:c(()=>[m(t,{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=n=>r.value=n),modelModifiers:{number:!0},onChange:e[1]||(e[1]=n=>d("min")),onClear:e[2]||(e[2]=n=>p("min")),placeholder:"最小值",clearable:""},null,8,["modelValue"])]),_:1},8,["prop","rules"]),R("div",{class:E(["f-c-c f-0 separator",a.size])},z(a.rangeSeparator),3),m(v,{class:"f-1 hide-err-text",prop:V(B),rules:[{validator:i,trigger:"blur"}]},{default:c(()=>[m(t,{modelValue:s.value,"onUpdate:modelValue":e[3]||(e[3]=n=>s.value=n),modelModifiers:{number:!0},onChange:e[4]||(e[4]=n=>d("max")),onClear:e[5]||(e[5]=n=>p("max")),placeholder:"最大值",clearable:""},null,8,["modelValue"])]),_:1},8,["prop","rules"])])}}});const U=S(w,[["__scopeId","data-v-883f6a5e"]]);export{U as default};
