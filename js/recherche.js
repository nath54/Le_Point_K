
var parameters = location.search.substring(1).split("&");
if(parameters.length>=1){
    var txt_rech = parameters[0];
    if(parameters.length>=2){
        var nb_page=parseInt(parameters[1]);
    }
    else{ var nb_page=1; }
}
else{
    var txt_rech=undefined;
    var nb_page=1;
}

function posts(articles){
    var dive=document.createElement("div");
    dive.setAttribute("class","row rowarticles");
    if(articles.length>=1){
        for(art of articles){
            if(art!=undefined){
                var article=create_article(art);
                dive.appendChild(article);
            }
        }
    }
    else{
        var message=document.createElement("h2");
        message.innerHTML="Aucun résultat trouvé";
        dive.appendChild(message);
    }

    if(document.getElementById("content")){
        for(c of document.getElementById("content").children){
            document.getElementById("content").removeChild(c);
        }
        document.getElementById("content").children=[];
        document.getElementById("content").appendChild(dive);
    }

}

function traite(txt){
    txt=txt.toLowerCase();
    return txt;
}

function search(){
    var liste_arts=[];
    if(txt_rech!=undefined){
        for(a of list_articles){
            if(traite(a["titre"]).includes(traite(txt_rech))){
                liste_arts.push(a);
            }
        }
        posts(liste_arts);
    }
}

search();


function inpute_key(e){
    if(e && e.keyCode == 13) {
        if(window.location.href.includes("articles/article.html")){
            window.location.href = "../recherche.html?"+document.getElementById("inpsearch").value+"&1";
        }  
        else{
            window.location.href = "recherche.html?"+document.getElementById("inpsearch").value+"&1";
        }
    }
}

