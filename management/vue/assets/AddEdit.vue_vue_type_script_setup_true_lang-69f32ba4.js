import"./index-1a9ed3b5.js";import{a as y,b as x}from"./user-760da63c.js";import{u as g}from"./all-tags-eaeb4056.js";import{U as q}from"./UploadAvatar-ed051a4e.js";import{q as T,O as h,r as v,a6 as O,t as U,D as _,E as B,L as S,u as p,k,A}from"./runtime-core.esm-bundler-95bf9971.js";const F=T({__name:"AddEdit",props:{id:{},pureText:{type:Boolean}},setup(l){const{getOpts:t}=g(),n=t("Sex"),u=t("UserType"),i=t("Enable"),d=t("address"),m=l,{id:o}=m;let e=h({sex:0,status:1});const c=v([{prop:"avatar",label:"头像",required:!0,type:"custom"},{prop:"nickname",label:"昵称",required:!0,attrs:{maxlength:16}},{prop:"name",label:"姓名",attrs:{maxlength:6}},{prop:"phone",label:"电话",valid:"phone"},{prop:"age",label:"年龄",type:"input-number",attrs:{min:0,max:150}},{prop:"sex",label:"性别",type:"radio-group",options:n,attrs:{type:"button"}},{prop:"type",label:"类型",type:"select",required:!0,options:u},{prop:"status",label:"状态",type:"radio-group",required:!0,options:i,attrs:{type:"button"}},{prop:"address",label:"地址",required:!0,type:"cascader",attrs:{style:"width: 100%",options:d}}]);o&&b(o);function b(s){y({id:s}).then(r=>{Object.assign(e,r)})}return(s,r)=>{const f=O("BaseForm");return U(),_(f,{request:p(x),modelValue:p(e),"onUpdate:modelValue":r[0]||(r[0]=a=>k(e)?e.value=a:e=a),style:A({width:s.pureText?"350px":"500px"}),fields:c.value,pureText:s.pureText},{avatar:B(({form:a})=>[S(q)]),_:1},8,["request","modelValue","style","fields","pureText"])}}});export{F as _};