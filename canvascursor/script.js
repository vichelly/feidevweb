let canvas = document.getElementById("mycanvas")
let ctx = canvas.getContext("2d")

ctx.fillStyle = "green";
ctx.fillRect(0,0,1600,850);

var bolsoimage = new Image();
bolsoimage.src = "bolsonaro.jpg";

canvas.addEventListener(type="mousemove", e => {
    let x = e.offsetX;
    let y = e.offsetY;
    console.log(x,y);
    desenhar(x,y);
} )


function desenhar(x,y){
    if (x<1250 && y<600 && x>200 && y>200)
    ctx.clearRect(0,0, canvas.width, canvas.height )
    ctx.fillStyle = "yellow"
    ctx.fillRect(0,0,1600,850)
    ctx.drawImage(bolsoimage,x-155,y-150,320,300)
}