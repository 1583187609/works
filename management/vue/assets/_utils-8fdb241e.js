import{c2 as d}from"./index-346f95fe.js";function o(t){const{id:a,age:e,gender:n,nickname:r,avatar:s}=t.userData,{cnt:u,noPassCnt:c}=t.avatarUploadData;return{userId:a,age:e,reason:t.reason,gender:n,nickname:r,uploadNum:u,rejectNum:c,createdAt:t.createdAt,updatedAt:t.updatedAt,src:s,avatarData:t.avatarData}}function p(t){const a=d(t);return["String","Number"].includes(a)?{text:t}:a==="Object"?t:{}}export{o as a,p as g};
