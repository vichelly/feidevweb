document.body.style.setProperty("background-color","blue")

document.getElementById("bot").style.setProperty("width","100%")
document.getElementById("bot").style.setProperty("background-color","green")
document.getElementById("bot").style.setProperty("height","40px")
document.getElementById("n").style.setProperty("width","100%")
document.getElementById("n").style.setProperty("height","40px")
document.getElementById("yy").style.setProperty("width","50%")
document.getElementById("yy").style.setProperty("height","40px")
document.getElementById("yy").style.setProperty("background-color","red")
 b 

let x=Math.random()
x=x*100;
x=Math.floor(x)



function pegar(){

let n = document.getElementById("n").value;
n=parseInt(n);



if (n<x){
   
    document.getElementById("yy").innerHTML="Número Pequeno";
}

else if (n>x){
    document.getElementById("yy").innerHTML="Número Grande";
}

else if (n===x){
    document.getElementById("yy").innerHTML="Correto";
}
}