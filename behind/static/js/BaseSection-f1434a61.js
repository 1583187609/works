import{d as s,o as a,c as e,B as t,f as l,u as d,a3 as o,aZ as i,G as c,e as r}from"./rewrite-3b822c29.js";import{_ as p}from"./_plugin-vue_export-helper-1b428a4d.js";const f={class:"base-section"},u={class:"head f-sb-c"},b={class:"title f-fs-c"},n={class:"line-1"},m={key:0},v=p(s({__name:"BaseSection",props:{title:{default:"标题"},badge:{default:0},max:{default:99},bodyClass:{default:"gap"}},setup(s){const p=Number(s.badge);return(v,_)=>(a(),e("div",f,[t("div",u,[t("div",b,[t("span",n,l(s.title),1),d(p)>0?(a(),e("span",m,"("+l(d(p)>s.max?s.max+"+":d(p))+")",1)):o("",!0)]),i(v.$slots,"right",{},void 0,!0)]),t("div",{class:c(["body",{[`${s.bodyClass}`]:!!s.bodyClass}])},[i(v.$slots,"default",{},(()=>[r("空空如也~")]),!0)],2)]))}}),[["__scopeId","data-v-ae5b14c2"]]);export{v as default};