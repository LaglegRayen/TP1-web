text = document.querySelector("#test");
document.querySelector("#couleur").addEventListener("input",function(){
    text.style.color = this.value;
})

document.querySelector("#nombre").addEventListener("input",function(){
    text.style.fontSize = this.value+"px";
    
})

document.querySelector("#police").addEventListener("input",function(){
    text.style.fontFamily = this.value;
   
})







