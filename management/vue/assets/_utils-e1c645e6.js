import{c2 as v,cH as P,ca as y,cp as D,c8 as E}from"./index-346f95fe.js";function A(a,t){if(!t)return;const{attrs:n,children:f}=a,{attrs:s,...p}=t;a.attrs=n?E.merge({},s,n):s,f==null||f.forEach(O=>{if(v(O)!=="Object")return!1;A(O,t)}),E.merge(a,p,JSON.parse(JSON.stringify(a)))}function I(a){const t={};return a==null||a.map(n=>{if(v(n)!=="Object")return;const{prop:f}=n;t[f]=void 0}),t}function J(a=[],t,n,f){const s={data:{},fields:[]};return a.forEach((p,O)=>{if(v(p)!=="Object")return null;const{type:w,prop:g,children:r}=p,j=v(g);if(P(p,n),j==="String"){let o=n==null?void 0:n[g];if(w==="checkbox"&&o===void 0)o=!1;else if(w==="addDel")s.data[g]=o!=null&&o.length?o:[I(r)];else{const c=r!=null&&r.length?J(r,t,o).data:o;s.data[g]=c,c!==void 0&&(t==null||t("change",g,c))}}else if(j==="Array"){const[o,c]=g,h=n==null?void 0:n[c],i=n==null?void 0:n[o],b=g.join(y),x=i===void 0&&h===void 0?void 0:[i,h];s.data[b]=x,p.prop=b,x!==void 0&&(t==null||t("change",b,x))}else if(j==="Undefined")if(r)if(r.length){const o={},c=r.map(i=>{const{prop:b}=i;return o[b]=n==null?void 0:n[b],b}).join(y),h=o;p.prop=c,s.data[c]=h,Object.keys(h).length&&(t==null||t("change",c,h))}else console.warn("children不能为空数组");else throw new Error("不能同时没有prop和children属性");else throw new Error(`暂未处理prop为${j}类型的值`);if(A(p,f),r!=null&&r.length){const o=D(r);r==null||r.forEach(c=>{if(v(c)!=="Object")return!1;const h=c;h.labelWidth===void 0&&(h.labelWidth=o+"em")})}s.fields.push(p)}),s}export{I as g,J as h};
