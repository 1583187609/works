// let box = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23_0", "23_1", "23_2", "23_3", "23_4", "23_5", "24_0", "24_1", "24_2", "25_0", "25_1", "25_2"];
// let boxShadow = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25"];
// let imgInfos = [];
// function getImgsInfo(arr, path, name, type = "png") {
//     for (let i = 0; i < arr.length; i++) {
//         let item = arr[i];
//         let img = new Image();
//         img.src = `${path}/${name}${item}.${type}`
//         img.onload = () => {
//             let { width, height } = img;
//             imgInfos.push({ name: `${name}${item}`, width, height });
//         }
//     }
// }
// getImgsInfo(boxShadow, `./img/boxs`, 'by');
// setTimeout(() => {
//     console.log(imgInfos, 'imgInfos----')
// }, 500)
const imgs = [
    { name: "bouncer", width: 50, height: 140 },   //弹跳器
    { name: "box0", width: 303, height: 271 },     //盒子（墩子）
    { name: "box1", width: 303, height: 271 },
    { name: "box2", width: 303, height: 270 },
    { name: "box3", width: 303, height: 269 },
    { name: "box4", width: 303, height: 271 },
    { name: "box5", width: 302, height: 270 },
    { name: "box6", width: 303, height: 271 },
    { name: "box7", width: 266, height: 253 },
    { name: "box8", width: 266, height: 253 },
    { name: "box9", width: 266, height: 253 },
    { name: "box10", width: 266, height: 253 },
    { name: "box11", width: 266, height: 253 },
    { name: "box12", width: 286, height: 257 },
    { name: "box13", width: 286, height: 257 },
    { name: "box14", width: 212, height: 222 },
    { name: "box15", width: 212, height: 222 },
    { name: "box16", width: 149, height: 162 },
    { name: "box17", width: 183, height: 182 },
    { name: "box18", width: 183, height: 182 },
    { name: "box19", width: 141, height: 182 },
    { name: "box20", width: 184, height: 201 },
    { name: "box21", width: 247, height: 233 },
    { name: "box22", width: 238, height: 235 },
    { name: "box23_0", width: 276, height: 259 },
    { name: "box23_1", width: 276, height: 259 },
    { name: "box23_2", width: 276, height: 259 },
    { name: "box23_3", width: 276, height: 259 },
    { name: "box23_4", width: 276, height: 259 },
    { name: "box23_5", width: 276, height: 259 },
    { name: "box24_0", width: 300, height: 268 },
    { name: "box24_1", width: 300, height: 268 },
    { name: "box24_2", width: 300, height: 268 },
    { name: "box25_0", width: 267, height: 246 },
    { name: "box25_1", width: 267, height: 246 },
    { name: "box25_2", width: 267, height: 246 },
    { name: "by0", width: 402, height: 230 },    //盒子（墩子）阴影
    { name: "by1", width: 402, height: 230 },
    { name: "by2", width: 402, height: 230 },
    { name: "by3", width: 402, height: 230 },
    { name: "by4", width: 402, height: 230 },
    { name: "by5", width: 402, height: 230 },
    { name: "by6", width: 402, height: 230 },
    { name: "by7", width: 350, height: 206 },
    { name: "by8", width: 350, height: 206 },
    { name: "by9", width: 350, height: 206 },
    { name: "by10", width: 350, height: 206 },
    { name: "by11", width: 350, height: 206 },
    { name: "by12", width: 367, height: 225 },
    { name: "by13", width: 367, height: 225 },
    { name: "by14", width: 298, height: 170 },
    { name: "by15", width: 298, height: 170 },
    { name: "by16", width: 164, height: 94 },
    { name: "by17", width: 220, height: 137 },
    { name: "by18", width: 220, height: 137 },
    { name: "by19", width: 213, height: 126 },
    { name: "by20", width: 259, height: 148 },
    { name: "by21", width: 291, height: 154 },
    { name: "by22", width: 298, height: 170 },
    { name: "by23", width: 350, height: 206 },
    { name: "by24", width: 350, height: 206 },
    { name: "by25", width: 350, height: 206 }
]