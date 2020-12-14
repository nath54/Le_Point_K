
var categories = {
    1: {"nom": "Écologie"},
    2: {"nom": "Politique"},
    3: {"nom": "Sciences et Santé"},
    4: {"nom": "Culture"}
}

function init_cat(){
    var cat = 1;
    var parameters = location.search.substring(1).split("&");
    if(parameters.length>=1){
        vat = parseInt(parameters[0]);
    }
    else{
        window.location.href="main.html"
    }
    //
    document.getElementById("title").innerHTML = "Le Point-K : " + categories[cat].nom;
    for(elt in document.getElementsByClassName("ncat1")){
        elt.innerHTML = categories[1].nom;
    }
    for(elt in document.getElementsByClassName("ncat2")){
        elt.innerHTML = categories[2].nom;
    }
    for(elt in document.getElementsByClassName("ncat3")){
        elt.innerHTML = categories[3].nom;
    }
    for(elt in document.getElementsByClassName("ncat4")){
        elt.innerHTML = categories[4].nom;
    }
    for(elt in document.getElementsByClassName("ncat")){
        console.log(elt);
        elt.innerHTML = categories[cat].nom;
    }
    //

}
