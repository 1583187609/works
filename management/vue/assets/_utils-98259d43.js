import{c8 as e,bZ as t,cG as i,cb as l,cH as a,c3 as r,ca as n}from"./index-31bd5f7b.js";import{b as o}from"./_config-0a862e30.js";function p(t=1,i=20){var l,a;return Object.assign({index:{prop:"$index",label:"序号",type:"index",width:54,fixed:"left",index:e=>e+1+(t-1)*i},sort:{prop:"$sort",label:"排序",type:"sort",width:54,fixed:"left"},selection:{prop:"$selection",label:"选择",type:"selection",width:48,fixed:"left"},operate:{prop:"$operate",label:"操作",type:"operate",fixed:"right"},id:{prop:"id",label:"ID",minWidth:70,fixed:"left"},remark:{prop:"remark",label:"备注",minWidth:140},create:{prop:["createdName","createdAt"],label:"创建时间",minWidth:160},update:{prop:["updatedName","updatedAt"],label:"修改时间",minWidth:160},switch:{prop:"status",label:"启用状态",minWidth:80,attrs:{activeValue:1,inactiveValue:0,activeText:"启用",inactiveText:"禁用",inlinePrompt:!0}},BaseTag:{prop:"status",label:"状态",minWidth:90,attrs:{name:"Enable"}},BaseImg:{prop:"imgUrl",label:"图片",minWidth:136,attrs:{size:"120"}},BaseText:{prop:"content",label:"内容",minWidth:250}},null==(a=null==(l=e)?void 0:l.table)?void 0:a.customSpecialCol)}function d(e,p=0,s,c){let m=p;const{children:u,type:h,prop:b,label:f,minWidth:v}=e,x=s[h],{getAttrs:W}=x||{},g=t.merge({},o,x,(null==f?void 0:f.includes("时间"))&&{minWidth:164,formatter:"custom"!==h&&"string"==typeof b?e=>{if(void 0===e[b])return i("未联调");return l.includes(e[b])||a===e[b]?"-":e[b]}:void 0},null==W?void 0:W(e),e);if("Array"===r(g.prop)&&(g.prop=g.prop.join(n)),c){const{width:e,minWidth:t}=g;e&&(g.width-=20),t&&(g.minWidth-=20)}return(null==u?void 0:u.length)&&(g.children=u.map((e=>{if("Object"!==r(e))return 0;const{col:t,level:i}=d(e,p++,s,o);return i>m&&(m=i),t}))),{col:g,level:m}}export{d as a,p as g};
