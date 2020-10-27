
var parameters = location.search.substring(1).split("&");
if(parameters.length>=1){
    var id_article = parameters[0];
}
else{
    var id_article=undefined;
}
window.idart=id_article;

const lste_eco=["écologie","ecologie","ecology"];
const lste_pol=["politique"];
const lste_inf=["sciences","science"];
const lste_san=["sante","santé"];


function load_articles(){
    if(article_contents[id_article]!=undefined){
        art=article_contents[id_article];
        document.getElementById("titre_h1").innerHTML=art["dossier"];
        document.getElementById("titre_li").innerHTML=art["dossier"];
        if(lste_eco.includes(art["category"])){
            document.getElementById("cat_li").innerHTML="écologie";
            document.getElementById("cat_li").setAttribute("href","../category_ecologie.html");
        }
        else if(lste_pol.includes(art["category"])){
            document.getElementById("cat_li").innerHTML="politique";
            document.getElementById("cat_li").setAttribute("href","../category_politique.html");
        }
        else if(lste_inf.includes(art["category"])){
            document.getElementById("cat_li").innerHTML="science";
            document.getElementById("cat_li").setAttribute("href","../category_science.html");
        }
        else if(lste_san.includes(art["category"])){
            document.getElementById("cat_li").innerHTML="santé";
            document.getElementById("cat_li").setAttribute("href","../category_sante.html");
        }
        
        $("#contenu_de_larticle").load(art["content"]); 
        
        try{
            websocket.send( JSON.stringify({"action":"read_article","id":id_article}) )
            console.log("art_vu");
        }
        catch{
            console.log("error");
            //console.log("websocket : ",websocket);
        }
        
    }

}

load_articles();









