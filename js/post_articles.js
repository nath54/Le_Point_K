
/*
    <div class="post post-thumb">
        <a class="post-img" href="blog-post.html"><img src="./img/post-1.jpg" alt=""></a>
        <div class="post-body">
            <div class="post-meta">
                <a class="post-category cat-2" href="category.html">JavaScript</a>
                <span class="post-date">March 27, 2018</span>
            </div>
            <h3 class="post-title"><a href="blog-post.html">Chrome Extension Protects Against JavaScript-Based CPU Side-Channel Attacks</a></h3>
        </div>
    </div>
*/

const lst_eco=["écologie","ecologie","ecology"]
const lst_pol=["politique"]
const lst_inf=["info","informatique"]
const lst_san=["sante","santé"]

function create_article(article){

    if(article==undefined){
        return null;
    }

    var div2=document.createElement("div");
    div2.setAttribute("class","post post-thumb poste");

    var aa=document.createElement("a");
    aa.setAttribute("class","post-img");
    aa.setAttribute("href",article["lien"]);

    var img=document.createElement("img");
    img.setAttribute("src",article["post-img"]);
    img.setAttribute("alt",article["alt-img"]);
    

    var div3=document.createElement("div");
    div3.setAttribute("class","post-body");

    var div4=document.createElement("div");
    div4.setAttribute("class","post-meta");

    
    var aa2=document.createElement("a");
    if(lst_eco.includes(article["category"])){
        aa2.setAttribute("class","post-category cat-1");
        aa2.setAttribute("href","category_ecologie.html");
    }
    else if(lst_pol.includes(article["category"])){
        aa2.setAttribute("class","post-category cat-2");
        aa2.setAttribute("href","category_politique.html");
    }
    else if(lst_inf.includes(article["category"])){
        aa2.setAttribute("class","post-category cat-3");
        aa2.setAttribute("href","category_informatique.html");
    }
    else if(lst_san.includes(article["category"])){
        aa2.setAttribute("class","post-category cat-4");
        aa2.setAttribute("href","category_sante.html");
    }
    else{
        aa2.setAttribute("class","post-category");
    }    


    var span=document.createElement("span");
    span.setAttribute("class","post-date");
    span.innerHTML=article["date"];

    var h3=document.createElement("h3");
    h3.setAttribute("class","post-title");

    var aa3=document.createElement("a");
    aa3.setAttribute("href",article["lien"]);
    aa3.innerHTML=article["titre"];

    h3.appendChild(aa3) 

    div4.appendChild(aa2);
    div4.appendChild(span);

    aa.appendChild(img); 

    div3.appendChild(div4);
    
    div2.appendChild(aa);
    div2.appendChild(div3);
    div2.appendChild(h3);

    return div2;
}


function main(){
    if(list_articles!=undefined){
        var nb_recent=0;
        var nb_eco=0;
        var nb_pol=0;
        var nb_inf=0;
        var nb_san=0;
        var nb_enavant=0;
        if(document.getElementById("nb_max_recent")!=undefined){ var nb_max_recent=parseInt(document.getElementById("nb_max_recent")); }
        else{ var nb_max_recent=3; }
        if(document.getElementById("nb_max_eco")!=undefined){ var nb_max_recent=parseInt(document.getElementById("nb_max_eco")); }
        else{ var nb_max_eco=3; }
        if(document.getElementById("nb_max_pol")!=undefined){ var nb_max_recent=parseInt(document.getElementById("nb_max_pol")); }
        else{ var nb_max_pol=3; }
        if(document.getElementById("nb_max_inf")!=undefined){ var nb_max_recent=parseInt(document.getElementById("nb_max_inf")); }
        else{ var nb_max_inf=3; }
        if(document.getElementById("nb_max_san")!=undefined){ var nb_max_recent=parseInt(document.getElementById("nb_max_san")); }
        else{ var nb_max_san=3; }
        if(document.getElementById("nb_max_enavant")!=undefined){ var nb_max_enavant=parseInt(document.getElementById("nb_max_enavant")); }
        else{ var nb_max_enavant=3; }
        for(index=list_articles.length;index>=0;index--){
            a=list_articles[index];
            if(a!=undefined){
                //
                if(nb_recent < nb_max_recent && document.getElementById("row_recent_posts")!=undefined ){
                    var art=create_article(a);
                    if(art!=null){ document.getElementById("row_recent_posts").appendChild( art ); }
                    nb_recent+=1;
                }
                //
                if(lst_eco.includes(a["category"]) && nb_eco < nb_max_eco && document.getElementById("row_eco_posts")!=undefined ){
                    var art=create_article(a);
                    if(art!=null){ document.getElementById("row_eco_posts").appendChild( art ); }
                    nb_eco+=1;
                }
                //
                if(lst_pol.includes(a["category"]) && nb_pol < nb_max_pol && document.getElementById("row_pol_posts")!=undefined ){
                    var art=create_article(a);
                    if(art!=null){ document.getElementById("row_pol_posts").appendChild( art ); }
                    nb_pol+=1;
                }
                //
                if(lst_inf.includes(a["category"]) && nb_inf < nb_max_inf && document.getElementById("row_inf_posts")!=undefined ){
                    var art=create_article(a);
                    if(art!=null){ document.getElementById("row_inf_posts").appendChild( art ); }
                    nb_inf+=1;
                }
                //
                if(lst_san.includes(a["category"]) && nb_san < nb_max_san && document.getElementById("row_san_posts")!=undefined ){
                    var art=create_article(a);
                    if(art!=null){ document.getElementById("row_san_posts").appendChild( art ); }
                    nb_san+=1;
                }
                //
                if(a["enavant"] && nb_enavant < nb_max_enavant && document.getElementById("row_enavant_posts")!=undefined ){
                    var art=create_article(a);
                    if(art!=null){ document.getElementById("row_enavant_posts").appendChild( art ); }
                    nb_enavant+=1;
                }
            }
            
        }
    }
    //POPULAIRES
    /*
    for(){
        var nb_pop=0;
        if(document.getElementById("nb_max_pop")!=undefined){ var nb_max_recent=parseInt(document.getElementById("nb_max_pop")); }
        else{ var nb_max_pop=3; }
        if(nb_pop < 3 && document.getElementById("row_pop_posts")!=undefined ){
            var art=create_article(a);
            if(art!=null){ document.getElementById("row_pop_posts").appendChild( art ); }
            nb_pop+=1;
        }
    }
    */
    
}


main();




