
var parameters = location.search.substring(1).split("&");
if(parameters.length>=1){
    var id_article = parameters[0];
}
else{
    var id_article=undefined;
}
window.idart=id_article;


var categories = {
    1: {"nom": "Écologie"},
    2: {"nom": "Politique"},
    3: {"nom": "Sciences et Santé"},
    4: {"nom": "Culture"}
}

function load_articles(){
    if(article_contents[id_article]!=undefined){
        art=article_contents[id_article];
        /*
        document.getElementById("titre_h1").innerHTML=art["dossier"];
        document.getElementById("titre_li").innerHTML=art["dossier"];
        */
        document.getElementById("cat_li").innerHTML=categories[art["category"]]["nom"];
        document.getElementById("cat_li").setAttribute("href", "../category.html?"+art["category"]);
        $("#contenu_de_larticle").load(art["content"]);
    }

}

load_articles();









