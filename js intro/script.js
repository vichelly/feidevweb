let x=Math.random()
x=x*100;
x=Math.floor(x)
window.alert(x)


function pegar(){


let n=document.getElementById("n").value



if (n>x){
   
    document.getElementById("yy").innerHTML="Número Pequeno"
}
else if (n<x){
    document.getElementById("yy").innerHTML="Número Grande"
}
else if (n===x){
    document.getElementById("yy").innerHTML="Correto"
}
}