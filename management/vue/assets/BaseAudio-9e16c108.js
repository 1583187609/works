import{M as e,aM as a,aR as l,aE as u,u as o,aQ as s,I as t,ao as n,v as i,b3 as d,s as r,t as c,bx as v,H as m,bH as f}from"./index-31bd5f7b.js";const p={class:"f-0 ml-h"},g=["muted"],y=["src"],b=["src"],h=f(e({__name:"BaseAudio",props:{src:{},showProgress:{type:Boolean,default:!0},default:{type:Boolean,default:!0}},setup(e,{expose:f}){const h=a(null),$=a(!1),M=a(0),T=a(!1),_=a("00:00/00:00"),k=a(!0);function x(e){const{currentTime:a,duration:l}=h.value;_.value=`${j(a)}/${j(l)}`,k.value=!l}function C(e){const{currentTime:a,duration:l}=h.value;_.value=`${j(a)}/${j(l)}`,M.value=a/l*100}function P(){$.value=!1,_.value=`00:00/${j(h.value.duration)}`}function V(e){const{duration:a}=h.value;h.value.currentTime=a*(e/100),z()}function w(e){const{duration:a}=h.value,l=a*(e/100);_.value=`${j(l)}/${j(a)}`,E()}function B(){$.value?E():z()}function I(){k.value||(T.value=!T.value)}function j(e){e=Math.round(e);return[Math.floor(e/60),e%60].map((e=>(e<10?"0":"")+e)).join(":")}function z(){k.value||($.value=!0,h.value.play())}function E(){k.value||($.value=!1,h.value.pause())}return f({playing:$,progress:M,timeStr:_,muted:T,play:z,pause:E,audioCtx:h,toggleMuted:I,formatTime:j}),(e,a)=>{var f,H;const R=l("BaseIcon"),S=l("el-slider"),A=l("el-tooltip");return u(),o("div",{class:n(["base-audio f-sb-c",{default:!e.$slots.default}])},[s(e.$slots,"default",{playing:$.value,muted:T.value,currentTime:(null==(f=h.value)?void 0:f.currentTime)||0,duration:(null==(H=h.value)?void 0:H.duration)||0,timeStr:_.value,progress:M.value,play:z,pause:E,togglePlaying:B,toggleMuted:I,formatTime:j},(()=>[t(R,{onClick:B,size:"20",class:n(["f-0 btn",{disabled:k.value}]),name:$.value?"VideoPause":"VideoPlay"},null,8,["class","name"]),i("time",p,d(_.value),1),e.showProgress?(u(),r(S,{key:0,onChange:V,onInput:w,modelValue:M.value,"onUpdate:modelValue":a[0]||(a[0]=e=>M.value=e),"show-tooltip":!1,disabled:k.value,class:"f-1 ml-o"},null,8,["modelValue","disabled"])):c("",!0),t(A,{content:T.value?"取消静音":"静音","show-after":400,disabled:k.value},{default:v((()=>[t(R,{onClick:I,size:"20",class:n(["btn f-0 ml-h",{disabled:k.value}]),name:T.value?"Mute":"Microphone"},null,8,["class","name"])])),_:1},8,["content","disabled"])]),!0),e.src?(u(),o("audio",{key:0,onCanplay:x,onTimeupdate:C,onEnded:P,muted:T.value,controls:"",hidden:"",ref_key:"audioRef",ref:h},[i("source",{src:e.src,type:"audio/mpeg"},null,8,y),i("source",{src:e.src,type:"audio/ogg"},null,8,b),m(" 您的浏览器不支持音频播放 ")],40,g)):c("",!0)],2)}}}),[["__scopeId","data-v-35639a07"]]);export{h as default};
