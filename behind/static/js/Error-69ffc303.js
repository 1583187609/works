import{d as s,o as a,c as e,a as t,B as r,f as p,b as i,e as n,u as c,bG as m,i as o}from"./rewrite-56f504a7.js";import{_ as f}from"./_plugin-vue_export-helper-1b428a4d.js";const u=""+new URL("../png/name-ff02f8c4.png",import.meta.url).href,l=""+new URL("../png/name-a564d912.png",import.meta.url).href,g=""+new URL("../png/name-cff5c2b4.png",import.meta.url).href,d={class:"error f-c-c-c"},_={class:"tips"},v={class:"f-c-c"},b=f(s({__name:"Error",props:{status:{default:"404"}},setup(s){const f={403:{img:u,tips:"抱歉！您还没权限访问该页面哦~"},404:{img:l,tips:"啊哦~页面好像找不到啦……"},500:{img:g,tips:"嗯~这个……服务器日常抽风……"}},b=m();return(m,u)=>{const l=o("BaseImg"),g=o("el-button");return a(),e("div",d,[t(l,{size:"400",src:f[s.status].img},null,8,["src"]),r("div",_,p(f[s.status].tips),1),r("div",v,[t(g,{size:"large",type:"primary",onClick:u[0]||(u[0]=s=>c(b).go(-1))},{default:i((()=>[n("返回上一页")])),_:1})])])}}}),[["__scopeId","data-v-6f1cc024"]]);export{b as default};