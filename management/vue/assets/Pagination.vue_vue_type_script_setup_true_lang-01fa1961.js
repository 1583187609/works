import{M as c,ak as S,c7 as d,q as g,s as P,am as C,bc as f,aR as v,aE as b}from"./index-346f95fe.js";import{b as k}from"./_config-a971499b.js";var p,i,u;const U=c({__name:"Pagination",props:S({currPage:{},pageSize:{},total:{},pageSizes:{}},Object.assign({pageSize:10,currPage:1,pageSizes:()=>[10,20,30,50,100]},(u=(i=(p=d)==null?void 0:p.BaseCrud)==null?void 0:i._components)==null?void 0:u.Pagination)),emits:["update:currPage","update:pageSize","update:sizeChange","update:currentChange"],setup(l,{emit:m}){const r=l,n=m,s=g({get:()=>r.currPage,set:t=>n("update:currPage",t)}),o=g({get:()=>r.pageSize,set:t=>n("update:pageSize",t)});return(t,e)=>{const z=v("el-pagination");return b(),P(z,C({class:"f-c-c mt-h f-0",currentPage:s.value,"onUpdate:currentPage":e[0]||(e[0]=a=>s.value=a),pageSize:o.value,"onUpdate:pageSize":e[1]||(e[1]=a=>o.value=a),total:t.total,pageSizes:t.pageSizes,onSizeChange:e[2]||(e[2]=a=>n("update:sizeChange",a)),onCurrentChange:e[3]||(e[3]=a=>n("update:currentChange",a))},f(k)),null,16,["currentPage","pageSize","total","pageSizes"])}}});export{U as _};