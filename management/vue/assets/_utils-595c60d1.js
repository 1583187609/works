import{c3 as n,cJ as t,ca as e,cp as r,bZ as o}from"./index-31bd5f7b.js";function l(t,e){if(!e)return;const{attrs:r,children:i}=t,{attrs:a,...c}=e;t.attrs=r?o.merge({},a,r):a,null==i||i.forEach((t=>{if("Object"!==n(t))return!1;l(t,e)})),o.merge(t,c,JSON.parse(JSON.stringify(t)))}function i(t){const e={};return null==t||t.map((t=>{if("Object"!==n(t))return;const{prop:r}=t;e[r]=void 0})),e}function a(o=[],c,d,s){const u={data:{},fields:[]};return o.forEach(((o,f)=>{if("Object"!==n(o))return null;const{type:p,prop:h,children:v}=o,g=n(h);if(t(o,d),"String"===g){let n=null==d?void 0:d[h];if("checkbox"===p&&void 0===n)n=!1;else if("addDel"===p)u.data[h]=(null==n?void 0:n.length)?n:[i(v)];else{const t=(null==v?void 0:v.length)?a(v,c,n).data:n;u.data[h]=t,void 0!==t&&(null==c||c("change",h,t))}}else if("Array"===g){const[n,t]=h,r=null==d?void 0:d[t],l=null==d?void 0:d[n],i=h.join(e),a=void 0===l&&void 0===r?void 0:[l,r];u.data[i]=a,o.prop=i,void 0!==a&&(null==c||c("change",i,a))}else{if("Undefined"!==g)throw new Error(`暂未处理prop为${g}类型的值`);if(!v)throw new Error("不能同时没有prop和children属性");if(v.length){const n={},t=v.map((t=>{const{prop:e}=t;return n[e]=null==d?void 0:d[e],e})).join(e),r=n;o.prop=t,u.data[t]=r,Object.keys(r).length&&(null==c||c("change",t,r))}}if(l(o,s),null==v?void 0:v.length){const t=r(v);null==v||v.forEach((e=>{if("Object"!==n(e))return!1;const r=e;void 0===r.labelWidth&&(r.labelWidth=t+"em")}))}u.fields.push(o)})),u}export{i as g,a as h};
