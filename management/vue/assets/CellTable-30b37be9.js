import{M as a,aM as s,q as l,bL as e,cC as t,aR as o,aE as c,s as d,bx as n,u,F as p,aP as r,am as i,aQ as f,bc as b,cp as v,t as m,bH as y}from"./index-31bd5f7b.js";const _={key:0,class:"custom-all-box"},k={key:0,class:"cell f-1"},A=y(a({__name:"CellTable",props:{data:{default:()=>({})},fields:{default:()=>[]},colSpanAttrs:{}},setup(a){const y={span:6},A=a,x=s(!0),j=l((()=>a=>a.colAttrs||Object.assign({},y,A.colSpanAttrs))),S=l((()=>{const{fields:a,data:s}=A;return a.map(((a,l)=>{const{prop:e,value:t}=a,o=s[e];return void 0!==o&&(a.value=o),a}))}));return e("resize",(()=>{let a=0;const s=t();A.fields.map((({colAttrs:l},e)=>{const t=Object.assign({},y,A.colSpanAttrs,l);a+=(null==t?void 0:t[s])||t.span||0})),x.value=a%24!=0}),!0),(a,s)=>{const l=o("BaseKeyVal"),e=o("el-col"),t=o("el-row");return c(),d(t,{class:"cell-table f-fs-s-w"},{default:n((()=>[(c(!0),u(p,null,r(S.value,((s,t)=>(c(),d(e,i({class:"cell"},j.value(s),{key:t}),{default:n((()=>["custom-all"===s.type?(c(),u("div",_,[f(a.$slots,s.prop,{field:s},void 0,!0)])):(c(),d(l,i({key:1,colon:!1,labelWidth:b(v)(A.fields)+"em"},s),{default:n((()=>["custom"===s.type?f(a.$slots,s.prop,{key:0,field:s,data:a.data},void 0,!0):m("",!0)])),_:2},1040,["labelWidth"]))])),_:2},1040)))),128)),x.value?(c(),u("div",k)):m("",!0)])),_:3})}}}),[["__scopeId","data-v-6c6b7bfd"]]);export{A as default};
