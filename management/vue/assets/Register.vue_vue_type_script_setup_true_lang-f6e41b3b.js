import{M as n,aK as d,aR as i,aE as u,s as m,bc as t,af as f}from"./index-346f95fe.js";import{P as c}from"./user-7f5e5957.js";const b=n({__name:"Register",setup(_){let e=d({});const a=[{prop:"pheon",label:"电话",valid:"phone",required:!0},{prop:"psd",label:"密码",valid:"password",required:!0,attrs:{type:"password"}},{prop:"confirm_psd",label:"确认密码",valid:"password",required:!0,rules:[{validator:p,trigger:"blur"}],attrs:{type:"password"}}];function p(l,r,s){r!==e.psd?s(new Error("确认密码和密码需要保持一致")):s()}return(l,r)=>{const s=i("BaseForm");return u(),m(s,{modelValue:t(e),"onUpdate:modelValue":r[0]||(r[0]=o=>f(e)?e.value=o:e=o),style:{width:"450px"},fields:a,fetch:t(c),submitText:"注册"},null,8,["modelValue","fetch"])}}});export{b as _};
