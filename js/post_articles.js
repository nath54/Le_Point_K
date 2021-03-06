
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

window.nb_recent=0;
window.nbs = {1:0, 2:0, 3:0, 4:0};
window.nb_max=3;

function test_is_already(idrow,idp){
    if(document.getElementById(idrow)==undefined){
        return false;
    }
    for(c of document.getElementById(idrow).children){
        if(c.id==idp){ return true; }
    }
    return false;
}

function post_articles(){
    if(list_articles!=undefined){
        for(index=list_articles.length;index>=0;index--){
            a=list_articles[index];
            if(a!=undefined){
                //
                if(!test_is_already("row_recent_posts", a["id"]) && window.nb_recent < window.nb_max && document.getElementById("row_recent_posts")!=undefined ){
                    var art=create_article(a);
                    if(art!=null){ document.getElementById("row_recent_posts").appendChild( art ); }
                    window.nb_recent+=1;
                }

                var c = a["category"];
                if(!test_is_already("row_cat"+c+"_posts", a["id"]) && window.nbs[c] < window.nb_max && document.getElementById("row_cat"+c+"_posts")!=undefined ){
                    var art=create_article(a);
                    if(art!=null){ document.getElementById("row_cat"+c+"_posts").appendChild( art ); }
                    window.nbs[c]+=1;
                }
            }
        }
    }
    //
    var id_bt="bt_more_main";
    if(document.getElementById(id_bt)!=undefined){
        if(window.nb_max>=list_articles.length){
            document.getElementById(id_bt).style.display = "none";
        }
        else{
            document.getElementById(id_bt).style.display = "initial";
        }
    }
    //
    var cat=0;
    var parameters = location.search.substring(1).split("&");
    if(parameters.length>=1){
        cat = parseInt(parameters[0]);
    }
    id_bt="bt_more_cat";
    if(document.getElementById(id_bt)!=undefined && cat!=0){
        if(window.nb_max>=tries[cat].length){
            document.getElementById(id_bt).style.display = "none";
        }
        else{
            document.getElementById(id_bt).style.display = "initial";
        }
    }
}



function load_more(idrow,tipe,nb){
    //
    window.nb_max+=3;
    post_articles();
}

