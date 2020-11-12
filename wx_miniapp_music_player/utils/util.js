const dict = require("./dict.js");
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
const handleColor = color => {
  return color.replace(/0x/i, "#");
}
//num:自增的基数；step：每次自增多少；size：循环自增的最大值
const alterStatusId = (key, vm, max) => {
  let id = vm.data[key] + 1;
  let currId = id > max ? 1 : id;
  let obj = {};
  obj[key] = currId;
  vm.setData(obj);
  return currId;
}
const formatSeconds = seconds => {
  let m = Math.floor(seconds / 60);
  let s = Math.floor(seconds % 60);
  return formatNumber(m) + ":" + formatNumber(s);
}
const getSecsByMinStr = minuteStr => {
  let arr=minuteStr.split(":");
  let secs=parseInt(arr[0])*60+parseInt(arr[1])
  return secs;
}
const getDictText = (key, code) => {
  let curr = dict[key].filter(item => {
    return item.code == code;
  })[0];
  return curr.text;
}
const getIndex = (arr, key, val) => {
  let ind = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][key] == val) {
      ind = i;
      break;
    }
  }
  return ind;
}
const disruptSimpleArr = arr => {
  function randomsort() {
    return Math.random() > .5 ? -1 : 1;
  }
  return arr.sort(randomsort);
}
const disruptComplexArr = arr => {
  let indArr=[],endArr=[];
  arr.forEach((item,index)=>{
    indArr.push(index);
  })
  function randomsort() {
    return Math.random() > .5 ? -1 : 1;
  }
  indArr.sort(randomsort);
  indArr.forEach(item=>{
    endArr.push(arr[item]);
  })
  return endArr;
}
module.exports = {
  formatTime,
  handleColor,
  alterStatusId,
  formatSeconds,
  getSecsByMinStr,
  getDictText,
  getIndex,
  disruptSimpleArr,
  disruptComplexArr
}