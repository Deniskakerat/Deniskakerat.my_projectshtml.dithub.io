var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
//Border
var drawBorder = function () {
    ctx.beginPath();
    ctx.fillStyle = "Gray";
    ctx.fillRect(0, 0, width, blockSize);
    ctx.fillRect(0, height - blockSize, width, blockSize);
    ctx.fillRect(0, 0, blockSize, height);
    ctx.fillRect(width - blockSize, 0, blockSize, height);
};
//Circle
var circle = function (x, y, radius, fillCircle) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
        ctx.fill();
    } else {
        ctx.stroke();
    }
};
///ant
var Ant = function (antcordsx, antcordsy) {
    this.antcordsx = antcordsx;
    this.antcordsy = antcordsy;
    this.color = "Red";
    this.radius = 5;
    this.nextstep = 1;
}
//Moving
let moveRight = function (ant,pole) {

    if(pole[ant.antcordsx/10][ant.antcordsy/10].type==0){
        ant.color = "White";
    }else{
        ant.color="Grey";
    }
        antcreate(ant);
        ant.antcordsx += 10;
        ant.color="Red";
        antcreate(ant); };
        let moveLeft = function (ant,pole) {
    if(pole[ant.antcordsx/10][ant.antcordsy/10].type==0){
        ant.color = "White";
    }else{
        ant.color="Grey";
    }
    antcreate(ant);
    ant.antcordsx -= 10;
    ant.color="Red";
    antcreate(ant); };
    let moveDown = function (ant,pole) {
    if(pole[ant.antcordsx/10][ant.antcordsy/10].type==0){
        ant.color = "White";
    }else{
        ant.color="Grey";
    }
    antcreate(ant);
    ant.antcordsy += 10;
    ant.color="Red";
    antcreate(ant);
};
let moveUp = function (ant,pole) {
    if(pole[ant.antcordsx/10][ant.antcordsy/10].type==0){
        ant.color = "White";
    }else{
        ant.color="Grey";
    }
    antcreate(ant);
    ant.antcordsy -= 10;
    ant.color="Red";
    antcreate(ant);
};
Ant.prototype.Checknextstep = function (ant) {
    if(pole[ant.antcordsx/10][ant.antcordsy/10].type==0){
        if(ant.nextstep==4){
        ant.nextstep = 0;
    }
    ant.nextstep = ant.nextstep+1;
}
    else{
        if(pole[ant.antcordsx/10][ant.antcordsy/10].type==1){
            if(ant.nextstep==1){
            ant.nextstep = 5;
        }
    }
    ant.nextstep = ant.nextstep-1;
    }
};
let antcreate = function (ant) {
    ctx.fillStyle = ant.color;
    circle(ant.antcordsx+ant.radius, ant.antcordsy+ant.radius, ant.radius, true);

}
var Block = function (cordsx, cordsy, type) {
    this.cordsx = cordsx;
    this.cordsy = cordsy;
    this.type = type;
    this.radius = 10;
};
let create = function (block) {
    if (block.type == 1) {
        ctx.fillStyle = "Grey";
    }
    else {
        ctx.fillStyle = "White";
    }
    ctx.beginPath();
    ctx.fillRect(block.cordsx, block.cordsy, block.radius, block.radius);
    ctx.stroke();

};
let check = function (ant) {
    if (pole[ant.antcordsx/10][ant.antcordsy/10].type==0) {
        pole[ant.antcordsx/10][ant.antcordsy/10].type=1;
        create(pole[ant.antcordsx/10][ant.antcordsy/10]);
    }  else {
        pole[ant.antcordsx/10][ant.antcordsy/10].type=0;
        create(pole[ant.antcordsx/10][ant.antcordsy/10]);
    }
}
Ant.prototype.movement = function(cords){
  for(let i=0; i<10;i++){
    this.cordsx++;
  }
}
//Blocks
var width = canvas.width;
var height = canvas.height;
blockSize = 10;
var widthInBlocks = width / 1000;
var heightInBlocks = height / 1000;
//create Ant
var ant = new Ant(500,500);
const pole = []
for (let i = 0; i < 100; i++) {
    const raw = []
    pole.push(raw)
    for (let j = 0; j < 100; j++) {
        let k = new Block(i * 100, j * 100, 0);
       // s.push(k);
        raw.push(k);
        create(k);
    }
}
const d=pole[0][0];
for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
        create(pole[i][j]);
        if(i+j%2!=0){
        pole[i][j].type=0;
        }else{
        pole[i][j].type=1;
        }
    }}
//logic
console.log(pole);
drawBorder();
check(ant);
for(let i=0;i<1;i++){
    var intervalId = setInterval(function () {
antcreate(ant);
if(ant.nextstep==1){
    moveRight(ant,pole);
}
if(ant.nextstep==2){
    moveDown(ant,pole);
}
if(ant.nextstep==3){
    moveLeft(ant,pole);
}
if(ant.nextstep==4){
    moveUp(ant,pole);
}
ant.Checknextstep(ant);
check(ant);
antcreate(ant);
    },50)
}
