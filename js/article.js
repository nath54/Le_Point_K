
var parameters = location.search.substring(1).split("&");
if(parameters.length>=1){
    var id_article = parameters[0];
}
else{
    var id_article=undefined;
}
const lst_eco=["écologie","ecologie","ecology"];
const lst_pol=["politique"];
const lst_inf=["info","informatique"];
const lst_san=["sante","santé"];

function create_balise(bal){
    if(bal==undefined){
        return null;
    }
    if(bal.length==3){
        //on crée la balise
        var balise=document.createElement(bal[0]);
        //on lui met ses attributs
        for(a of bal[1]){
            if(a.length==2){
                balise.setAttribute(a[0],a[1]);
            }
        }
        //on lui crée ses enfants
        if(typeof(bal[2])=="string"){
            balise.innerHTML=bal[2];
        }
        else{
            for(c of bal[2]){
                console.log(c);
                var child=create_balise(c);
                if(child!=null){
                    balise.appendChild(child);
                }
            }
        }
        return balise;
    }
    return null;
}

function create_article(){
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
        /*
        var dd=document.createElement("include");
        dd.setAttribute("src",art["content"]);
        document.getElementById("contenu_de_larticle").appendChild(dd);
        //
        (() => {
            const includes = document.getElementsByTagName('include');
            [].forEach.call(includes, i => {
                let filePath = i.getAttribute('src');
                fetch(filePath).then(file => {
                    file.text().then(content => {
                        i.insertAdjacentHTML('afterend', content);
                        i.remove();
                    });
                });
            });
        })();
        */
        //
        var l =document.createElement("link");
        l.setAttribute("href",art["content"]);
        l.setAttribute("rel","import");
        l.setAttribute("id","limport");
        document.getElementById("head").appendChild(l);
        //
        var extern = document.getElementById("limport").import;
        console.log(extern);
        document.getElementById("contenu_de_larticle").replaceChild(
            extern.getElementById("content")
        );
        
    }

}

create_article();









