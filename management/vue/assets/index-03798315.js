import e from"./ImgItem-01729b2c.js";import t from"./CellTable-30b37be9.js";import{M as l,aa as a,bO as s,aM as p,aK as r,aR as o,aE as i,u as c,I as n,bx as d,H as y,v as u,bc as f,F as m,aP as b,am as _,b3 as g,s as v,bN as x,aI as h,aF as j,bH as k}from"./index-31bd5f7b.js";import{_ as C}from"./RejectAvatar.vue_vue_type_script_setup_true_lang-e3aae1e1.js";import w from"./CoinList-ef68fd2c.js";import{_ as z}from"./ReportList.vue_vue_type_script_setup_true_lang-3fef4ac0.js";import{_ as q}from"./LoveList.vue_vue_type_script_setup_true_lang-25c9079c.js";import{_ as A}from"./EvaluateList.vue_vue_type_script_setup_true_lang-b17edf80.js";import{_ as I}from"./AboutList.vue_vue_type_script_setup_true_lang-8d6f3c8b.js";import F from"./AboutTitle-db7ad7d4.js";import B from"./VideoPannel-5500f03a.js";const L=e=>(h("data-v-2fa8ae5c"),e=e(),j(),e),P={class:"f-c-s-c mr-o"},R=L((()=>u("strong",{class:"title"},"封面头像",-1))),N={class:"f-c-s-c mr-o"},O=L((()=>u("strong",{class:"title"},"学历头像",-1))),M={class:"img-item f-c-c-c"},D={class:"f-c-s-c mr-o"},E=L((()=>u("strong",{class:"title"},"相册",-1))),H={class:"f-fs-c"},S={class:"f-1 f-sb-c"},T={class:"tags f-fs-c",style:{"margin-right":"auto"}},G={class:"comment f-fs-c"},K={class:"f-c-c item positive"},V=L((()=>u("span",null,"正面评价 "+g(3),-1))),$={class:"f-c-c item negative"},J=L((()=>u("span",null,"负面评价 "+g(3),-1))),Q=L((()=>u("div",{class:"attitude f-fs-c"},[u("span",{class:"item"},"被举报 "+g(3)),u("span",{class:"item"},"举报 "+g(3)),u("span",{class:"item"},"超级喜欢 "+g(3)),u("span",{class:"item"},"被超级喜欢 "+g(3))],-1))),U=L((()=>u("strong",{style:{"line-height":"28px"}},"语音介绍",-1))),W=L((()=>u("div",null," 江西人，清华本科，关于我的介绍江西人，清华本科，关于我的介绍江西人，清华本科，关于我的介绍江西人，清华本科，关于我的介绍…… ",-1))),X=L((()=>u("div",null," 希望是90后，净身高希望是90后，净身高希望是90后，希望是90后，净身高希望是90后，净身高希望是90后，净身高净身高希望是90后，净身高希望是90后，净身高希望是90后，净身高希望是90后，净身高希望是90后，净身高希望是90后，净身高希望是90后，净身高希望是90后，净身高…… ",-1))),Y={class:"f-sb-c"},Z=L((()=>u("strong",{style:{"margin-right":"auto"}},"兴趣爱好",-1))),ee={class:"mt-o"},te=k(l({__name:"index",props:{data:{default:()=>({})}},setup(l){const h=a("openPopup"),j=a("closePopup"),{getOpts:k}=s(),L=k("Sex"),te={normal:{text:"正常",type:"success"},forbidden:{text:"封禁",type:"danger"},signOut:{text:"注销",type:"warning"},singleOut:{text:"已脱单",type:"primary"},limitActive:{text:"限制互动",type:"info"}},le={text:"已完善资料",type:"success"},ae=p("normal"),se=[{prop:"yhid",label:"用户ID",required:!0},{prop:"nc",label:"昵称"},{prop:"xb",label:"性别",type:"select",options:L},{prop:"nl",label:"年龄",type:"input-number",valid:"age"},{prop:"sr",label:"生日",type:"date-picker",attrs:{type:"date"}},{prop:"xz",label:"星座",attrs:{disabled:!0}},{prop:"sg",label:"身高",type:"input-number",attrs:{min:100,height:250}},{prop:"xh",label:"学号"},{prop:"zy",label:"职业",type:"select"},{prop:"sru",label:"收入",type:"BaseNumberRange"},{prop:"hyzk",label:"婚姻状况",type:"select"},{prop:"wxh",label:"微信号"},{prop:"sr",label:"手机号",valid:"phone"},{prop:"sjh",label:"资料完善度",type:"input-number"},{prop:"phcs",label:"偏好城市",type:"cascader"},{prop:"xjd",label:"现居地",type:"cascader"},{prop:"jx",label:"家乡"},{prop:"dwcs",label:"定位城市"},{prop:"hjcs",label:"户籍城市",type:"cascader"},{prop:"lyqd",label:"来源渠道",type:"select"},{prop:"zczd",label:"注册终端"},{prop:"zcip",label:"注册IP",attrs:{}},{prop:"zjdlip",label:"最近登录IP",attrs:{}},{prop:"zcsj",label:"注册时间",attrs:{}},{prop:"zjdlsj",label:"最近登录时间",popover:"最近登录时间",required:!0,attrs:{}}],pe=r({yhid:1,nc:12233}),re=[{prop:"jbye",label:"金币余额"},{prop:"tdtq",label:"脱单特权"}],oe=[{prop:"yyjs-label",label:"语音介绍",type:"none",colAttrs:{span:12}},{prop:"yyjs-value",label:"语音介绍",type:"none",colAttrs:{span:12}},{prop:"gyw-label",label:"关于我",type:"none",colAttrs:{span:12},attrs:{direction:"vertical"}},{prop:"wdlxx-label",label:"我的理想型",type:"none",colAttrs:{span:12}},{prop:"gyw-value",label:"关于我",type:"none",colAttrs:{span:12},attrs:{direction:"vertical"}},{prop:"wdlxx-value",label:"我的理想型",type:"none",colAttrs:{span:12}},{prop:"xqah",label:"兴趣爱好",type:"none",colAttrs:{span:24}},{prop:"qghwddf",label:"去过好玩的地方",direction:"vertical",type:"custom"},{prop:"xhdyd",label:"喜欢的运动",direction:"vertical"},{prop:"xhdys",label:"喜欢的影视",direction:"vertical"},{prop:"xhdsj",label:"喜欢的书籍",direction:"vertical"},{prop:"xhdms",label:"喜欢的美食",direction:"vertical"},{prop:"scdlq",label:"擅长的乐器",direction:"vertical"},{prop:"cmmldah",label:"充满魅力的爱好",direction:"vertical"}],ie=[{prop:"ppcs",label:"匹配城市",type:"cascader"},{prop:"yxqx",label:"优先权限",type:"select"},{prop:"nlfw",label:"年龄范围",type:"BaseNumberRange",valid:"age"},{prop:"xlyq",label:"学历要求",type:"select"},{prop:"qgzt",label:"情感状态",type:"select"},{prop:"sgfw",label:"身高范围",type:"BaseNumberRange",attrs:{min:100,max:250}},{prop:"jx",label:"家乡",type:"cascader"},{prop:"sfsfrz",label:"是否身份认证",type:"select"}],ce=[{prop:"glsl",label:"关联数量",value:3},{prop:"yzx",label:"已注销",value:1}];function ne(e){e?h({title:"温馨提示",confirm(){x.success("已取消驳回"),j("dialog")}},{component:`确定${e?"取消":""}驳回？`,attrs:{}},"dialog"):h("头像驳回",{component:C},"dialog",!1)}function de(){h({title:"金币明细"},{component:w,attrs:{}},"dialog",!1)}function ye(e){h({title:(2===e?"被":"")+"举报记录"},{component:z,attrs:{type:e}},"dialog",!1)}function ue(e){h({title:(2===e?"被":"")+"喜欢记录"},{component:q,attrs:{type:e}},"dialog",!1)}function fe(e){h({title:(2===e?"负":"正")+"面评价"},{component:A,attrs:{type:e}},"dialog",!1)}function me(e){h({title:(2===e?"关于我":"关于你")+"提交记录"},{component:I,attrs:{type:e}},"dialog",!1)}return(l,a)=>{const s=o("el-button"),p=o("BaseImg"),r=o("BaseSection"),x=o("el-tag"),j=o("BaseIcon");return i(),c(m,null,[n(r,{class:"imgs",title:"图片审核",bodyClass:"f-fs-s p-o"},{right:d((()=>[n(s,{type:"primary",style:{"margin-left":"auto"}},{default:d((()=>[y("处理用户")])),_:1}),n(s,{type:"info"},{default:d((()=>[y("注销用户")])),_:1})])),default:d((()=>[u("div",P,[R,n(e,{rejected:"",onClick:ne})]),u("div",N,[O,u("div",M,[n(p,{class:"mb-q"}),n(s,{type:"success",style:{width:"5em"},size:"small",onClick:a[0]||(a[0]=e=>f(h)(null,{component:"是否要重新比对人脸？"},"dialog"))},{default:d((()=>[y("比对人脸")])),_:1})])]),u("div",D,[E,u("div",H,[(i(),c(m,null,b(4,((t,l)=>n(e,{onClick:ne,key:l}))),64))])])])),_:1}),n(r,{class:"base-info",title:"基本信息"},{right:d((()=>[u("div",S,[u("div",T,[n(x,_({class:"tag"},te[ae.value]),{default:d((()=>[y(g(te[ae.value].text),1)])),_:1},16),(i(),v(x,{key:0,class:"tag",color:"#F3DBFB",style:{color:"#d359f5",border:"1px solid #d359f5"}},{default:d((()=>[y("优质嘉宾")])),_:1})),(i(),v(x,{key:1,class:"tag",color:"#CFFAFF",style:{color:"#2bb4c5",border:"1px solid #2bb4c5"}},{default:d((()=>[y("代理人")])),_:1})),n(x,{class:"tag",effect:"dark"},{default:d((()=>[y("新人曝光期")])),_:1})]),u("div",G,[u("div",K,[n(j,{class:"mr-q"}),V]),u("div",$,[n(j,{class:"mr-q"}),J])]),Q])])),default:d((()=>[n(t,{fields:se,data:pe},null,8,["data"])])),_:1}),n(r,{class:"business-info",title:"商业化信息"},{default:d((()=>[n(t,{fields:re})])),_:1}),n(r,{class:"detail-info",title:"详细信息"},{right:d((()=>[n(x,{type:le.type,style:{"margin-right":"auto"}},{default:d((()=>[y(g(le.text),1)])),_:1},8,["type"])])),default:d((()=>[n(t,{fields:oe},{"yyjs-label":d((()=>[U])),"yyjs-value":d((()=>[n(B)])),"gyw-label":d((()=>[n(F)])),"wdlxx-label":d((()=>[n(F,{type:"you",rejected:""})])),"gyw-value":d((()=>[W])),"wdlxx-value":d((()=>[X])),xqah:d((()=>[u("div",Y,[Z,n(s,{type:"info",size:"small"},{default:d((()=>[y("选择")])),_:1}),n(s,{type:"primary",size:"small"},{default:d((()=>[y("驳回")])),_:1})])])),qghwddf:d((({field:e})=>[(i(),c(m,null,b(3,((e,t)=>n(x,{class:"mr-h",key:t},{default:d((()=>[y(g("北京故宫"+t),1)])),_:2},1024))),64))])),_:1})])),_:1}),n(r,{title:"偏好设置"},{default:d((()=>[n(t,{fields:ie})])),_:1}),n(r,{title:"关联账号"},{default:d((()=>[n(t,{fields:ce})])),_:1}),u("div",ee,[n(s,{onClick:de,type:"primary"},{default:d((()=>[y("打开金币列表弹窗")])),_:1}),n(s,{onClick:a[1]||(a[1]=e=>ye(1)),type:"primary"},{default:d((()=>[y("打开举报记录弹窗")])),_:1}),n(s,{onClick:a[2]||(a[2]=e=>ye(2)),type:"primary"},{default:d((()=>[y("打开被举报记录弹窗")])),_:1}),n(s,{onClick:a[3]||(a[3]=e=>ue(1)),type:"primary"},{default:d((()=>[y("打开喜欢记录弹窗")])),_:1}),n(s,{onClick:a[4]||(a[4]=e=>ue(2)),type:"primary"},{default:d((()=>[y("打开被喜欢记录弹窗")])),_:1}),n(s,{onClick:a[5]||(a[5]=e=>fe(1)),type:"primary"},{default:d((()=>[y("打开正面评价记录弹窗")])),_:1}),n(s,{onClick:a[6]||(a[6]=e=>fe(2)),type:"primary"},{default:d((()=>[y("打开负面评价记录弹窗")])),_:1}),n(s,{onClick:a[7]||(a[7]=e=>me(1)),type:"primary"},{default:d((()=>[y("打开关于你提交记录弹窗")])),_:1}),n(s,{onClick:a[8]||(a[8]=e=>me(2)),type:"primary"},{default:d((()=>[y("打开关于我提交记录弹窗")])),_:1})])],64)}}}),[["__scopeId","data-v-2fa8ae5c"]]);export{te as default};
