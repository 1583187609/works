import{M as N,aM as d,aR as m,aE as _,u as V,aQ as x,I as h,ao as g,v as y,b3 as z,s as A,t as $,bx as R,H,bH as j}from"./index-8b36bd1b.js";const D={class:"f-0 ml-h"},Q=["muted"],U=["src"],q=["src"],F=N({__name:"BaseAudio",props:{src:{},showProgress:{type:Boolean,default:!0},default:{type:Boolean,default:!0}},setup(G,{expose:k}){const o=d(null),s=d(!1),i=d(0),u=d(!1),r=d("00:00/00:00"),t=d(!0);function M(e){const{currentTime:a,duration:l}=o.value;r.value=`${n(a)}/${n(l)}`,t.value=!l}function I(e){const{currentTime:a,duration:l}=o.value;r.value=`${n(a)}/${n(l)}`,i.value=a/l*100}function P(){s.value=!1,r.value=`00:00/${n(o.value.duration)}`}function S(e){const{duration:a}=o.value;o.value.currentTime=a*(e/100),c()}function w(e){const{duration:a}=o.value,l=a*(e/100);r.value=`${n(l)}/${n(a)}`,v()}function b(){s.value?v():c()}function p(){t.value||(u.value=!u.value)}function n(e){e=Math.round(e);const a=Math.floor(e/60),l=e%60;return[a,l].map(f=>(f<10?"0":"")+f).join(":")}function c(){t.value||(s.value=!0,o.value.play())}function v(){t.value||(s.value=!1,o.value.pause())}return k({playing:s,progress:i,timeStr:r,muted:u,play:c,pause:v,audioCtx:o,toggleMuted:p,formatTime:n}),(e,a)=>{var B,T;const l=m("BaseIcon"),C=m("el-slider"),f=m("el-tooltip");return _(),V("div",{class:g(["base-audio f-sb-c",{default:!e.$slots.default}])},[x(e.$slots,"default",{playing:s.value,muted:u.value,currentTime:((B=o.value)==null?void 0:B.currentTime)||0,duration:((T=o.value)==null?void 0:T.duration)||0,timeStr:r.value,progress:i.value,play:c,pause:v,togglePlaying:b,toggleMuted:p,formatTime:n},()=>[h(l,{onClick:b,size:"20",class:g(["f-0 btn",{disabled:t.value}]),name:s.value?"VideoPause":"VideoPlay"},null,8,["class","name"]),y("time",D,z(r.value),1),e.showProgress?(_(),A(C,{key:0,onChange:S,onInput:w,modelValue:i.value,"onUpdate:modelValue":a[0]||(a[0]=E=>i.value=E),"show-tooltip":!1,disabled:t.value,class:"f-1 ml-o"},null,8,["modelValue","disabled"])):$("",!0),h(f,{content:u.value?"取消静音":"静音","show-after":400,disabled:t.value},{default:R(()=>[h(l,{onClick:p,size:"20",class:g(["btn f-0 ml-h",{disabled:t.value}]),name:u.value?"Mute":"Microphone"},null,8,["class","name"])]),_:1},8,["content","disabled"])],!0),e.src?(_(),V("audio",{key:0,onCanplay:M,onTimeupdate:I,onEnded:P,muted:u.value,controls:"",hidden:"",ref_key:"audioRef",ref:o},[y("source",{src:e.src,type:"audio/mpeg"},null,8,U),y("source",{src:e.src,type:"audio/ogg"},null,8,q),H(" 您的浏览器不支持音频播放 ")],40,Q)):$("",!0)],2)}}});const K=j(F,[["__scopeId","data-v-9645e8d5"]]);export{K as default};
