
var parameters = location.search.substring(1).split("&");
if(parameters.length>=1){
    var id_article = parameters[0];
}
else{
    var id_article=undefined;
}
window.idart=id_article;

const lst_eco=["écologie","ecologie","ecology"];
const lst_pol=["politique"];
const lst_inf=["info","informatique"];
const lst_san=["sante","santé"];


function load_articles(){
    if(article_contents[id_article]!=undefined){
        art=article_contents[id_article];
        document.getElementById("titre_h1").innerHTML=art["dossier"];
        document.getElementById("titre_li").innerHTML=art["dossier"];
        if(lst_eco.includes(art["category"])){
            document.getElementById("cat_li").innerHTML="écologie";
            document.getElementById("cat_li").setAttribute("href","../category_ecologie.html");
        }
        else if(lst_pol.includes(art["category"])){
            document.getElementById("cat_li").innerHTML="politique";
            document.getElementById("cat_li").setAttribute("href","../category_politique.html");
        }
        else if(lst_inf.includes(art["category"])){
            document.getElementById("cat_li").innerHTML="informatique";
            document.getElementById("cat_li").setAttribute("href","../category_informatique.html");
        }
        else if(lst_san.includes(art["category"])){
            document.getElementById("cat_li").innerHTML="santé";
            document.getElementById("cat_li").setAttribute("href","../category_sante.html");
        }
        
        $("#contenu_de_larticle").load(art["content"]); 
        
        try{
            websocket.send( JSON.stringify({"action":"read_article","id":id_article}) )
        }
        catch{
            
        }
        
    }

}

load_articles();









