import"./dayjs-21617033.js";import{t as a}from"./index-8cf28f90.js";import"./lodash-8dc1f9dc.js";function t(a){const{id:t,age:e,gender:r,nickname:n,avatar:s}=a.userData,{cnt:d,noPassCnt:o}=a.avatarUploadData;return{userId:t,age:e,reason:a.reason,gender:r,nickname:n,uploadNum:d,rejectNum:o,createdAt:a.createdAt,updatedAt:a.updatedAt,src:s,avatarData:a.avatarData}}function e(t){const e=a(t);return["String","Number"].includes(e)?{text:t}:"Object"===e?t:{}}export{t as a,e as g};