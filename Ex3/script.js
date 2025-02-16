document.querySelector("#button").addEventListener("click", function() {
    n = document.querySelector("#name").value;
    c = document.querySelector("#content").value;
    element = n +": "+ c+" <i class='bi bi-trash3 '></i>";
    document.querySelector("#list").innerHTML += "<li class = 'list-group-item list-group-item-action list-group-item-dark' id = 'element'>"+element+"</li>";

});


document.querySelector("#content").addEventListener("input",function(){
    n = document.querySelector("#name").value;
    joursdelasemaine = ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"];
    if(joursdelasemaine.includes(n.toLowerCase())){
        document.querySelector("#button").disabled = false;
    }


});

addEventListener("click", function(event) {   
    if(event.target.classList.contains("bi-trash3")){
        event.target.parentElement.remove();
    }

 }


);



