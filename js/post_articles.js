
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

const lst_eco=["écologie","ecologie","ecology"];
const lst_pol=["politique"];
const lst_inf=["info","informatique"];
const lst_san=["sante","santé"];
const l_arts_pop=trie_articles_pop(list_articles);


function create_article(article){

    if(article==undefined){
        return null;
    }

    var div2=document.createElement("div");
    div2.setAttribute("class","post post-thumb poste");
    div2.setAttribute("id",article["id"]);

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

    var aa3=document.createElement("a");
    aa3.setAttribute("href",article["lien"]);

    var h3=document.createElement("h3");
    h3.setAttribute("class","post-title");    
    h3.innerHTML=article["titre"];

    aa3.appendChild(h3) 

    div4.appendChild(aa2);
    div4.appendChild(span);

    aa.appendChild(img); 

    div3.appendChild(div4);
    div3.appendChild(aa3)
    
    div2.appendChild(aa);
    div2.appendChild(div3);

    return div2;
}


function trie_articles_pop(articles){
    l_articles=[];
    for(a of articles){ l_articles.push(a); }
    //
    for(i=0; i<l_articles.length; i++){
        for(j=0; j<i; j++){
            if(l_articles[i]["nbvues"]>l_articles[j]["nbvues"]){
                temp=l_articles[i];
                l_articles[i]=l_articles[j];
                l_articles[j]=temp;
            }
        }
    }
    return l_articles;
}


function main(){
    if(list_articles!=undefined){
        var nb_recent=0;
        var nb_eco=0;
        var nb_eco_pop=0;
        var nb_pol=0;
        var nb_pol_pop=0;
        var nb_inf=0;
        var nb_inf_pop=0;
        var nb_san=0;
        var nb_san_pop=0;
        var nb_enavant=0;
        if(document.getElementById("nb_max_recent")!=undefined){ var nb_max_recent=parseInt(document.getElementById("nb_max_recent").innerHTML); }
        else{ var nb_max_recent=3; }
        if(document.getElementById("nb_max_eco")!=undefined){ var nb_max_eco=parseInt(document.getElementById("nb_max_eco").innerHTML); }
        else{ var nb_max_eco=3; }
        if(document.getElementById("nb_max_pol")!=undefined){ var nb_max_pol=parseInt(document.getElementById("nb_max_pol").innerHTML); }
        else{ var nb_max_pol=3; }
        if(document.getElementById("nb_max_inf")!=undefined){ var nb_max_inf=parseInt(document.getElementById("nb_max_inf").innerHTML); }
        else{ var nb_max_inf=3; }
        if(document.getElementById("nb_max_san")!=undefined){ var nb_max_san=parseInt(document.getElementById("nb_max_san").innerHTML); }
        else{ var nb_max_san=3; }
        if(document.getElementById("nb_max_eco_pop")!=undefined){ var nb_max_eco_pop=parseInt(document.getElementById("nb_max_eco_pop").innerHTML); }
        else{ var nb_max_eco_pop=3; }
        if(document.getElementById("nb_max_pol_pop")!=undefined){ var nb_max_pol_pop=parseInt(document.getElementById("nb_max_pol_pop").innerHTML); }
        else{ var nb_max_pol_pop=3; }
        if(document.getElementById("nb_max_inf_pop")!=undefined){ var nb_max_inf_pop=parseInt(document.getElementById("nb_max_inf_pop").innerHTML); }
        else{ var nb_max_inf_pop=3; }
        if(document.getElementById("nb_max_san_pop")!=undefined){ var nb_max_san_pop=parseInt(document.getElementById("nb_max_san_pop").innerHTML); }
        else{ var nb_max_san_pop=3; }
        if(document.getElementById("nb_max_enavant")!=undefined){ var nb_max_enavant=parseInt(document.getElementById("nb_max_enavant").innerHTML); }
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
                if(lst_eco.includes(a["category"]) && nb_eco_pop < nb_max_eco_pop && document.getElementById("row_eco_posts_pop")!=undefined ){
                    var art=create_article(a);
                    if(art!=null){ document.getElementById("row_eco_posts_pop").appendChild( art ); }
                    nb_eco_pop+=1;
                }
                //
                if(lst_pol.includes(a["category"]) && nb_pol_pop < nb_max_pol_pop && document.getElementById("row_pol_posts_pop")!=undefined ){
                    var art=create_article(a);
                    if(art!=null){ document.getElementById("row_pol_posts_pop").appendChild( art ); }
                    nb_pol_pop+=1;
                }
                //
                if(lst_inf.includes(a["category"]) && nb_inf_pop < nb_max_inf_pop && document.getElementById("row_inf_posts_pop")!=undefined ){
                    var art=create_article(a);
                    if(art!=null){ document.getElementById("row_inf_posts_pop").appendChild( art ); }
                    nb_inf_pop+=1;
                }
                //
                if(lst_san.includes(a["category"]) && nb_san_pop < nb_max_san_pop && document.getElementById("row_san_posts_pop")!=undefined ){
                    var art=create_article(a);
                    if(art!=null){ document.getElementById("row_san_posts_pop").appendChild( art ); }
                    nb_san_pop+=1;
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
    
    for(x=0; x<l_arts_pop.length; x++){
        var nb_pop=0;
        if(document.getElementById("nb_max_pop")!=undefined){ var nb_max_pop=parseInt(document.getElementById("nb_max_pop").innerHTML); }
        else{ var nb_max_pop=3; }
        if(nb_pop < nb_max_pop && document.getElementById("row_pop_posts")!=undefined ){
            var art=create_article(a);
            if(art!=null){ document.getElementById("row_pop_posts").appendChild( art ); }
            nb_pop+=1;
        }
        if(nb_pop>=nb_max_pop){
            break
        }
    }
    
}

function test_is_already(idrow,idp){
    for(c of document.getElementById(idrow).children){
        if(c.id==idp){ return true; }
    }
    return false;
}

function load_more(idrow,tipe,nb){
    //
    if(tipe=="pop"){
        var nb_pop=0;
        for(x=0; x<l_arts_pop.length; x++){
            if(document.getElementById("row_pop_posts")!=undefined){
                var art=create_article(l_arts_pop[x]);
                if(art!=null){ document.getElementById("row_pop_posts").appendChild( art ); }
                nb_pop+=1;
            }
            if(nb_pop>=nb){ return 0; }
        }
    }
    //
    else if(tipe=="eco_pop"){
        var nb_a=0;
        for(x=0; x<l_arts_pop.length; x++){
            if(lst_eco.includes(l_arts_pop[x]["category"]) && document.getElementById("row_eco_posts")!=undefined){
                var art=create_article(l_arts_pop[x]);
                if(art!=null){ document.getElementById("row_eco_posts_pop").appendChild( art ); }
                nb_a+=1;
            }
            if(nb_a>=nb){ return 0; }
        }
    }
    //
    else if(tipe=="pol_pop"){
        var nb_a=0;
        for(x=0; x<l_arts_pop.length; x++){
            if(lst_pol.includes(l_arts_pop[x]["category"]) && document.getElementById("row_pol_posts")!=undefined){
                var art=create_article(l_arts_pop[x]);
                if(art!=null){ document.getElementById("row_pol_posts_pop").appendChild( art ); }
                nb_a+=1;
            }
            if(nb_a>=nb){ return 0; }
        }
    }
    //
    else if(tipe=="inf_pop"){
        var nb_a=0;
        for(x=0; x<l_arts_pop.length; x++){
            if(lst_inf.includes(l_arts_pop[x]["category"]) && document.getElementById("row_inf_posts")!=undefined){
                var art=create_article(l_arts_pop[x]);
                if(art!=null){ document.getElementById("row_inf_posts_pop").appendChild( art ); }
                nb_a+=1;
            }
            if(nb_a>=nb){ return 0; }
        }
    }
    //
    else if(tipe=="san_pop"){
        var nb_a=0;
        for(x=0; x<l_arts_pop.length; x++){
            if(lst_inf.includes(l_arts_pop[x]["category"]) && document.getElementById("row_san_posts")!=undefined){
                var art=create_article(l_arts_pop[x]);
                if(art!=null){ document.getElementById("row_san_posts_pop").appendChild( art ); }
                nb_a+=1;
            }
            if(nb_a>=nb){ return 0; }
        }
    }
    
}

main();




