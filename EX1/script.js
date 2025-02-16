

document.querySelector("select").addEventListener("change",function(){
    n = this.value;
    randomNumber = Math.floor(Math.random() *5) + 1;
    jouer(n, randomNumber); 
        

});
document.querySelector("#reset").addEventListener("click",function(){
    n = document.querySelector("select").value
    randomNumber = Math.floor(Math.random() *5) + 1;
    jouer(n,randomNumber);
})



function jouer(n, randomNumber){
    while (n > 0){
        x = prompt("ecriver le nombre");
        if(x==randomNumber){alert("vous avez trouve le nombre");break;}
        n--;
        }
}







