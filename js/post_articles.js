
/*
    <div class="post post-thumb">
        <a class="post-img" href="blog-post.html"><img class="img_post" src="./img/post-1.jpg" alt=""></a>
        <div class="post-body">
            <div class="post-meta">
                <a class="post-category cat-2" href="category.html">JavaScript</a>
                <span class="post-date">March 27, 2018</span>
            </div>
            <h3 class="post-title"><a href="blog-post.html">Chrome Extension Protects Against JavaScript-Based CPU Side-Channel Attacks</a></h3>
        </div>
    </div>
*/





//

//alert("il y a actuellement "+list_articles.length+" articles sur le site");

if(document.getElementById("nb_art_1")!=undefined){
    document.getElementById("nb_art_1").innerHTML=tries[1].length;
}
if(document.getElementById("nb_art_2")!=undefined){
    document.getElementById("nb_art_2").innerHTML=tries[2].length;
}
if(document.getElementById("nb_art_3")!=undefined){
    document.getElementById("nb_art_3").innerHTML=tries[3].length;
}
if(document.getElementById("nb_art_4")!=undefined){
    document.getElementById("nb_art_4").innerHTML=tries[4].length;
}

//



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
    img.setAttribute("class","img_post");
    img.setAttribute("src",article["post-img"]);
    img.setAttribute("alt",article["alt-img"]);

    var div3=document.createElement("div");
    div3.setAttribute("class","post-body");

    var div4=document.createElement("div");
    div4.setAttribute("class","post-meta");

    var aa2=document.createElement("a");
    if(article["category"]==1){
        aa2.setAttribute("class","post-category cat-1");
        aa2.setAttribute("href","category.html?1");
    }
    else if(article["category"]==2){
        aa2.setAttribute("class","post-category cat-2");
        aa2.setAttribute("href","category.html?2");
    }
    else if(article["category"]==3){
        aa2.setAttribute("class","post-category cat-3");
        aa2.setAttribute("href","category.html?2");
    }
    else if(article["category"]==4){
        aa2.setAttribute("class","post-category cat-4");
        aa2.setAttribute("href","category.html?4");
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

    aa3.appendChild(h3);

    div4.appendChild(aa2);
    div4.appendChild(span);

    aa.appendChild(img); 

    div3.appendChild(div4);
    div3.appendChild(aa3)
    
    div2.appendChild(aa);
    div2.appendChild(div3);

    return div2;
}





function post_articles(){
    if(list_articles!=undefined){
        var nb_recent=0;
        var nbs = {1:0, 2:0, 3:0, 4:0};
        var nb_max=3;
        for(index=list_articles.length;index>=0;index--){
            a=list_articles[index];
            if(a!=undefined){
                //
                if(nb_recent < nb_max && document.getElementById("row_recent_posts")!=undefined ){
                    var art=create_article(a);
                     if(art!=null){ document.getElementById("row_recent_posts").appendChild( art ); }
                    nb_recent+=1;
                }
                
                var c = a["category"];
                if(nbs[c] < nb_max && document.getElementById("row_cat"+c+"_posts")!=undefined ){
                    var art=create_article(a);
                    if(art!=null){ document.getElementById("row_cat"+c+"_posts").appendChild( art ); }
                    nbs[c]+=1;
                }
                
                
            }
            
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
    var nb_a=0;

    if(nb_a==0){
        var dd=document.createElement("div");
        document.getElementById(idrow).appendChild(dd);
    }
    
}

