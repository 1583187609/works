import o from"./CellForm-9f95e990.js";import{M as m,aK as c,aR as p,aE as x,u as g,I as e,bx as l,H as a,F as y,bH as z}from"./index-346f95fe.js";import"./_utils-e1c645e6.js";import"./FooterBtns-8c6c3ddb.js";import"./index-6d0323cd.js";import"./_config-c76f4e31.js";const h=m({__name:"index",props:{type:{default:()=>({})}},setup(j){const n=[{prop:"zsxm",label:"真实姓名"},{prop:"sfzh",label:"身份证号/通信证号",valid:"identity"},{prop:"hjcs",label:"户籍城市",type:"cascader"}],_=[{prop:"xxmc",label:"学校名称"},{prop:"xlzsjb",label:"学历证书级别"},{prop:"zdlx",label:"在读类型",type:"select"},{prop:"xxjb",label:"学校级别",type:"select"},{prop:"rlxsd",label:"人脸相似度",type:"input-number"}],d=[{prop:"gsmc",label:"公司名称"},{prop:"jc",label:"简称"},{prop:"yxrz",label:"邮箱认证"}],b=[{prop:"gsmc",label:"公司名称"},{prop:"gsjc",label:"公司简称"},{prop:"gslx",label:"公司类型"},{prop:"rzfs",label:"认证方式"},{prop:"yx",label:"邮箱"},{prop:"rztp",label:"认证图片"},{prop:"tjsj",label:"提交时间"},{prop:"tgsj",label:"通过时间"},{prop:"rzzt",label:"认证状态"},{prop:"czr",label:"操作人"}],i=[{prop:"xxmc",label:"学校名称"},{prop:"xxlx",label:"学校类型"},{prop:"xl",label:"学历"},{prop:"sfzd",label:"是否在读"},{prop:"rzlx",label:"认证类型"},{prop:"zsbh",label:"证书编号"},{prop:"tjsj",label:"提交时间"},{prop:"tgsj",label:"通过时间"},{prop:"rzzt",label:"认证状态"},{prop:"sbyy",label:"失败原因"},{prop:"czr",label:"操作人"}],u=c([]),f=c([]);return(F,w)=>{const t=p("el-tag"),s=p("BaseSection"),r=p("BaseTable");return x(),g(y,null,[e(s,{title:"认证信息"},{right:l(()=>[e(t,{type:"success",class:"tag"},{default:l(()=>[a("已完善资料")]),_:1})]),_:1}),e(s,{title:"实名认证"},{right:l(()=>[e(t,{class:"tag",type:"success"},{default:l(()=>[a("已认证")]),_:1}),e(t,{class:"tag"},{default:l(()=>[a("后台认证")]),_:1})]),default:l(()=>[e(o,{fields:n,footer:!1})]),_:1}),e(s,{title:"学历认证"},{right:l(()=>[e(t,{type:"success",class:"tag"},{default:l(()=>[a("已认证")]),_:1}),e(t,{class:"tag"},{default:l(()=>[a("取消认证")]),_:1})]),default:l(()=>[e(o,{fields:_,footer:!1})]),_:1}),e(s,{title:"公司认证"},{right:l(()=>[e(t,{type:"success",class:"tag"},{default:l(()=>[a("已认证")]),_:1}),e(t,{class:"tag"},{default:l(()=>[a("取消认证")]),_:1})]),default:l(()=>[e(o,{fields:d,footer:!1})]),_:1}),e(s,{title:"公司认证记录"},{right:l(()=>[e(t,{type:"success",class:"tag"},{default:l(()=>[a("已完善资料")]),_:1})]),default:l(()=>[e(r,{cols:b,rows:u},null,8,["rows"])]),_:1}),e(s,{title:"学历认证记录"},{right:l(()=>[e(t,{type:"success",class:"tag"},{default:l(()=>[a("已完善资料")]),_:1})]),default:l(()=>[e(r,{cols:i,rows:f},null,8,["rows"])]),_:1})],64)}}});const T=z(h,[["__scopeId","data-v-9cec0fd5"]]);export{T as default};
