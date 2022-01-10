const imgs = {
    bouncer: './img/bouncer.png'
}
for (let key in imgs) {
    let src = imgs[key];
    imgs[key] = new Image();
    imgs[key].src = src;
}
console.log(imgs, 'imgs')