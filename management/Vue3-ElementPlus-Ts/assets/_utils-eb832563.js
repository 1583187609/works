import{t as b,l as w}from"./common-f4827de9.js";import{e as A,b as S,a as L}from"./system-a8d5b9ab.js";function y(p,n){const{type:r,prop:s}=p,c=b(s);r!=null&&r.includes("date")&&(c==="String"?(n==null?void 0:n[s])===A&&(n[s]=""):c==="Array"&&s.forEach(f=>{(n==null?void 0:n[f])===A&&(n[f]="")}))}function J(p,n){if(!n)return;const{attrs:r,children:s}=p,{attrs:c,...f}=n;p.attrs=r?w.merge({},c,r):c,s==null||s.forEach(O=>{if(b(O)!=="Object")return!1;J(O,n)}),w.merge(p,f,JSON.parse(JSON.stringify(p)))}function P(p){const n={};return p==null||p.map(r=>{if(b(r)!=="Object")return;const{prop:s}=r;n[s]=void 0}),n}function T(p=[],n,r,s){const c={data:{},fields:[]};return p.forEach((f,O)=>{if(b(f)!=="Object")return null;const{type:E,prop:g,children:t}=f,v=b(g);if(y==null||y(f,r),v==="String"){let o=r==null?void 0:r[g];if(E==="checkbox"&&o===void 0)o=!1;else if(E==="addDel")c.data[g]=o!=null&&o.length?o:[P(t)];else{const a=t!=null&&t.length?T(t,n,o).data:o;c.data[g]=a,a!==void 0&&(n==null||n("change",g,a))}}else if(v==="Array"){const[o,a]=g,h=r==null?void 0:r[a],j=r==null?void 0:r[o],i=g.join(S),x=j===void 0&&h===void 0?void 0:[j,h];c.data[i]=x,f.prop=i,x!==void 0&&(n==null||n("change",i,x))}else if(v==="Undefined")if(t)if(t.length){const o={},a=t.map(j=>{const{prop:i}=j;return o[i]=r==null?void 0:r[i],i}).join(S),h=o;f.prop=a,c.data[a]=h,Object.keys(h).length&&(n==null||n("change",a,h))}else console.warn("children不能为空数组");else throw new Error("不能同时没有prop和children属性");else throw new Error(`暂未处理prop为${v}类型的值`);if(J(f,s),t!=null&&t.length){const o=L(t);t==null||t.forEach(a=>{if(b(a)!=="Object")return!1;const h=a;h.labelWidth===void 0&&(h.labelWidth=o+"em")})}c.fields.push(f)}),c}export{P as g,T as h};