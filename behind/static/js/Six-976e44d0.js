import{d as e,r as l,i as a,o as t,c as o,a as n,B as r,b as u,e as s,F as i}from"./rewrite-3b822c29.js";const c={class:"f-fs-c mt-h"},p=e({__name:"Six",setup(e){const p=1e3,d=["1","6",9],f=["作用","回复"];let m=!0;const v=l(null),y=l("");function h(e){y.value=function(e=""){return d.forEach((l=>{e=e.replaceAll(l,`<span style="color: orange;">${l}</span>`)})),f.forEach((l=>{e=e.replaceAll(l,`<span style="color: red;">${l}</span>`)})),e}(e.getText())}function g(e){e.isEmpty();y.value=e.getHtml()}function _(){var e;null==(e=null==v?void 0:v.value)||e.restoreSelection()}function b(){v.value.dangerouslyInsertHtml("<h1>1231231</h1><p>文本 <b>2222</b></p>")}function C(){}var E;return E="hellow worl 1234567890！",setTimeout((()=>{m=!1,y.value=E}),p),(e,l)=>{const p=a("BaseEditor"),d=a("el-button");return t(),o(i,null,[n(p,{modelValue:y.value,"onUpdate:modelValue":l[0]||(l[0]=e=>y.value=e),editor:v.value,"onUpdate:editor":l[1]||(l[1]=e=>v.value=e),onBlur:h,onChange:g},null,8,["modelValue","editor"]),r("div",c,[n(d,{type:"primary",onClick:_},{default:u((()=>[s("恢复选区")])),_:1}),n(d,{type:"primary",onClick:b},{default:u((()=>[s("插入文本")])),_:1}),n(d,{type:"primary",onClick:C},{default:u((()=>[s("获取选中的文本")])),_:1})])],64)}}});export{p as default};
