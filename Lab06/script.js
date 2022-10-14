let canvas = document.getElementById("mycanvas")
let ctx = canvas.getContext("2d")

ctx.fillStyle = "grey";
ctx.fillRect(0,0,300,300);

ctx.fillStyle="red";
ctx.fillRect(0,90,30,30)

canvas.addEventListener(type="mousemove", e => {
    let x = e.offsetX;
    let y = e.offsetY;
    console.log(x,y);
    desenhar(x,y);
} )


function desenhar(x,y){
    if (x<285 && y<285 && x>15 && y>15){
    ctx.clearRect(0,0, canvas.width, canvas.height )
    ctx.fillStyle = "grey"
    ctx.fillRect(0,0,300,300)
    ctx.fillStyle="red";
    ctx.fillRect(x-15,y-15,30,30)
}}