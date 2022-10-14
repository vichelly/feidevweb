let canvas = document.getElementById("lab05");
let ctx = canvas.getContext("2d");

ctx.font = "25px Arial";
ctx.fillText("Canvas", 107, 265)

ctx.fillRect(0,0,60,30);
ctx.fillRect(0,0,30,60);

ctx.beginPath();
ctx.strokeStyle="green";
ctx.fillStyle="#21fff0";
ctx.arc(150,0,45,0*Math.PI,1*Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle="#21fff0";
ctx.fillRect(0,135,30,30);
ctx.fillRect(270,120,30,30);
ctx.fillRect(270,150,30,30);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle="blue";
ctx.fillRect(255,255,45,45);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle="#ff0000";
ctx.fillRect(0,255,45,45);
ctx.fillRect(150,110,40,40);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(150,45);
ctx.lineTo(150,150);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.arc(150,0,75,0,0.5*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(150,0,60,0.5*Math.PI,1*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0,150);
ctx.lineTo(300,150);
ctx.stroke();

ctx.beginPath()
ctx.arc(150,150,75,0,0.25*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(150,150,60,0,1*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(150,150,75,2.35,1*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.fillStyle="#fffb1c";
ctx.arc(75,75,15,0,2*Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle="#fffb1c";
ctx.arc(225,75,15,0,2*Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="blue"
ctx.fillStyle="#21fff0";
ctx.arc(150,185,15,0,2*Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(150,150);
ctx.lineTo(300,300);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="#ff0000";
ctx.moveTo(150,150);
ctx.lineTo(0,300);
ctx.stroke();
ctx.fillStyle="#fffb1c";
ctx.fillRect(240,0,60,30);
ctx.fillRect(270,0,30,60);
ctx.stroke();

