import{b as c}from"./vue-router-f1520cd3.js";import{i as p,a as m,b as d}from"./500-a6172bac.js";import{q as l,a6 as o,t as u,v as g,L as r,x as a,K as f,E as v,J as b,u as x}from"./runtime-core.esm-bundler-95bf9971.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";const B={class:"error f-c-c-c"},E={class:"tips"},C={class:"f-c-c"},h=l({__name:"Error",props:{status:{default:"404"}},setup(k){const s={403:{img:p,tips:"抱歉！您还没权限访问该页面哦~"},404:{img:m,tips:"啊哦~页面好像找不到啦……"},500:{img:d,tips:"嗯~这个……服务器日常抽风……"}},i=c();return(t,e)=>{const n=o("BaseImg"),_=o("el-button");return u(),g("div",B,[r(n,{size:"400",src:s[t.status].img},null,8,["src"]),a("div",E,f(s[t.status].tips),1),a("div",C,[r(_,{size:"large",type:"primary",onClick:e[0]||(e[0]=I=>x(i).go(-1))},{default:v(()=>[b("返回上一页")]),_:1})])])}}});const w=y(h,[["__scopeId","data-v-c71770bd"]]);export{w as default};
