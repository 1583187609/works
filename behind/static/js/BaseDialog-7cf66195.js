import{d as e,r as a,w as o,o as l,g as t,b as s,u as d,aZ as u,a3 as n,m as r,i,a as m,e as c,t as f,c as p,F as y,f as b,h as k}from"./rewrite-3b822c29.js";import{l as V}from"./lodash-54c2f325.js";const v=e({__name:"BaseDialog",props:{modelValue:{type:Boolean,default:!1},body:null},emits:["update:modelValue"],setup(e,{emit:v}){const g=e,C=a(!1),_={title:"title 标题",width:"fit-content",cancel(){C.value=!1},confirm(){C.value=!1}},h=V.merge({},_);return o((()=>g.modelValue),(e=>{C.value=e}),{immediate:!0,deep:!0}),o(C,(e=>{v("update:modelValue",e)})),(a,o)=>{const V=i("el-button"),v=i("el-dialog");return l(),t(v,r({modelValue:C.value,"onUpdate:modelValue":o[0]||(o[0]=e=>C.value=e)},d(h),{onClose:o[1]||(o[1]=e=>C.value=!1),"append-to-body":"","destroy-on-close":""}),{footer:s((()=>[d(h).footer?u(a.$slots,"footer",{key:0},(()=>[m(V,{onClick:d(h).cancel},{default:s((()=>[c("取消")])),_:1},8,["onClick"]),m(V,{type:"primary",onClick:d(h).confirm},{default:s((()=>[c(" 确认 ")])),_:1},8,["onClick"])])):n("",!0)])),default:s((()=>[u(a.$slots,"default",{},(()=>["String"===d(f)(e.body)?(l(),p(y,{key:0},[c(b(e.body),1)],64)):(l(),t(k(e.body),{key:1}))]))])),_:3},16,["modelValue"])}}});export{v as default};