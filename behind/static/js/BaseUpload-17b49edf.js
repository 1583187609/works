import{d as e,bR as a,aV as s,r as t,o as r,g as o,b as l,c,aF as i,E as u,i as p}from"./rewrite-56f504a7.js";import{_ as d}from"./_plugin-vue_export-helper-1b428a4d.js";const n=["src"],f=d(e({__name:"BaseUpload",props:{size:{default:80}},setup(e){const d=e,f=a(d.size),m=s({height:f,width:f}),v=t(""),_=(e,a)=>{v.value=URL.createObjectURL(a.raw)},b=e=>"image/jpeg"!==e.type?(u.error("Avatar picture must be JPG format!"),!1):!(e.size/1024/1024>2)||(u.error("Avatar picture size can not exceed 2MB!"),!1);return(e,a)=>{const s=p("BaseIcon"),t=p("el-upload");return r(),o(t,{style:i(m),class:"base-upload f-c-c",action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15","show-file-list":!1,"on-success":_,"before-upload":b},{default:l((()=>[v.value?(r(),c("img",{key:0,src:v.value,class:"avatar"},null,8,n)):(r(),o(s,{key:1,size:parseFloat(d.size.toString())/3,name:"Plus"},null,8,["size"]))])),_:1},8,["style"])}}}),[["__scopeId","data-v-2faadffe"]]);export{f as default};