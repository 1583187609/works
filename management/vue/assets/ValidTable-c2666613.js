import{M as e,aK as l,aR as a,aE as t,s as o,bx as d,I as r,t as m,v as i,H as s}from"./index-31bd5f7b.js";const u={class:"flex_cen mt_15"},n=e({__name:"ValidTable",setup(e){const n=l({tableData:[{realname:"张三1",idcard:"5111231231231",mobile:"18483221518"},{realname:"张三2",idcard:"5111231231231",mobile:"18483221518"},{realname:"张三3",idcard:"5111231231231",mobile:"18483221518"}]}),p={realname:[{required:!0,message:"请输入"}],idcard:[{required:!0,message:"请输入"}],mobile:[{required:!0,message:"请输入"}]};function b(){}return(e,l)=>{const c=a("el-table-column"),f=a("el-input"),_=a("el-form-item"),V=a("el-table"),x=a("el-button"),y=a("el-form");return t(),o(y,{ref:"forms",model:n},{default:d((()=>[r(V,{ref:"multipleTable",data:n.tableData,"tooltip-effect":"dark",style:{width:"100%"},border:""},{default:d((()=>[r(c,{type:"selection",width:"55"}),r(c,{label:"姓名",width:"80"},{default:d((({row:e,$index:l})=>[l>=0?(t(),o(_,{key:0,prop:`tableData.${l}.realname`,rules:p.realname,style:{"margin-bottom":"16px"}},{default:d((()=>[r(f,{type:"text",placeholder:"输入姓名",modelValue:e.realname,"onUpdate:modelValue":l=>e.realname=l,clearable:""},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["prop","rules"])):m("",!0)])),_:1}),r(c,{label:"身份证号","show-overflow-tooltip":""},{default:d((({row:e,$index:l})=>[r(_,{prop:`tableData.${l}.idcard`,rules:p.idcard,style:{"margin-bottom":"16px"}},{default:d((()=>[r(f,{type:"text",placeholder:"输入身份证号",modelValue:e.idcard,"onUpdate:modelValue":l=>e.idcard=l,clearable:""},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["prop","rules"])])),_:1}),r(c,{label:"手机号码","show-overflow-tooltip":""},{default:d((({row:e,$index:l})=>[r(_,{prop:`tableData.${l}.mobile`,rules:p.mobile,style:{"margin-bottom":"16px"}},{default:d((()=>[r(f,{type:"number",placeholder:"输入手机号码",modelValue:e.mobile,"onUpdate:modelValue":l=>e.mobile=l,clearable:""},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["prop","rules"])])),_:1})])),_:1},8,["data"]),i("div",u,[r(x,{type:"primary",disabled:0==n.tableData.length,class:"submit mr_20 fs_16",onClick:b},{default:d((()=>[s("确认提交")])),_:1},8,["disabled"])])])),_:1},8,["model"])}}});export{n as default};
