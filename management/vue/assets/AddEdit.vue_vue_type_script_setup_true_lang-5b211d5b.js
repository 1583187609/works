import{M as x,bO as h,aK as U,aM as g,aR as q,aE as v,s as V,bx as O,I as S,bc as s,af as T,aq as B}from"./index-346f95fe.js";import{d as _,e as k,f as w,g as A}from"./user-7f5e5957.js";import C from"./UploadAvatar-af957e81.js";const F=x({__name:"AddEdit",props:{id:{},pureText:{type:Boolean},refreshList:{}},setup(n){const{getOpts:r}=h(),d=r("Sex"),u=r("UserType"),i=r("Enable"),c=r("address"),l=n,{id:p}=l;let e=U(l.id?{}:{sex:0,status:1});const m=g([{prop:"avatar",label:"头像",required:!1,type:"custom"},{prop:"nickname",label:"昵称",required:!1,attrs:{maxlength:16}},{prop:"name",label:"姓名",attrs:{maxlength:6}},{prop:"sex",label:"性别",type:"radio-group",options:d,attrs:{type:"button"}},{prop:"age",label:"年龄",type:"input-number",attrs:{min:0,max:150}},{prop:"type",label:"类型",type:"select",required:!1,options:u},{prop:"status",label:"状态",type:"radio-group",required:!1,options:i,attrs:{type:"button"}},{prop:"address",label:"地址",required:!1,type:"cascader",attrs:{style:"width: 100%",options:c}},{prop:"phone",label:"电话",required:!0,valid:"phone"}]);p&&f(p);function f(t){_({id:t}).then(o=>{Object.assign(e,o)})}return(t,o)=>{const b=q("BaseForm");return v(),V(b,{request:s(k),modelValue:s(e),"onUpdate:modelValue":o[0]||(o[0]=a=>T(e)?e.value=a:e=a),style:B({width:t.pureText?"350px":"500px"}),fields:m.value,pureText:t.pureText,fetch:s(p)?s(w):s(A),fetchSuccess:t.refreshList},{avatar:O(({form:a})=>[S(C,{modelValue:a.avatar,"onUpdate:modelValue":y=>a.avatar=y},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["request","modelValue","style","fields","pureText","fetch","fetchSuccess"])}}});export{F as _};