import{a as b}from"./avatar-810e7140.js";import{M as x,q as U,aR as p,aE as o,s as u,bx as h,u as k,bN as d,bH as y}from"./index-8b36bd1b.js";const B=["src"],V=x({__name:"UploadAvatar",props:{modelValue:{default:b},accepts:{default:()=>["image/png","image/jpeg"]},maxSize:{default:1}},emits:["update:modelValue"],setup(m,{emit:i}){const c=m,l=i,n=U({get(){return c.modelValue},set(e){l("update:modelValue",e)}}),_=(e,a)=>{l("update:modelValue",URL.createObjectURL(a.raw))},f=e=>{const{type:a,size:t}=e,{accepts:s,maxSize:r}=c;if(s.includes(a)){if(t/1024/1024>r)return d.error(`图片大小不能超过 ${r}MB!`),!1}else{const v=s.map(g=>g.split("/")[1]).join("，");return d.error(`请上传 ${v} 格式的图片！`),!1}return!0};return(e,a)=>{const t=p("BaseIcon"),s=p("el-upload");return o(),u(s,{class:"upload-avatar f-c-c",action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15","show-file-list":!1,"on-success":_,"before-upload":f,accept:e.accepts.join(",")},{default:h(()=>[n.value?(o(),k("img",{key:0,src:n.value,class:"img"},null,8,B)):(o(),u(t,{key:1,name:"Plus",size:"32"}))]),_:1},8,["accept"])}}});const I=y(V,[["__scopeId","data-v-2750493b"]]);export{I as U};
