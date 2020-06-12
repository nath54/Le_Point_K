
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

function create_article(article){

    var div2=document.createElement("div");
    div2.setAttribute("class","post post-thumb");

    var aa=document.createElement("a");
    aa.setAttribute("class","post-img");
    aa.setAttribute("href",article["lien"]);

    var img=document.createElement("img");
    img.setAttribute("src",article["post_img"]);
    img.setAttribute("alt",article["alt_img"]);

    var div3=document.createElement("div");
    div3.setAttribute("class","post-body");

    var div4=document.createElement("div");
    div4.setAttribute("class","post-meta");

    var aa2=document.createElement("a");
    aa2.setAttribute("class","post-category cat-2");
    aa2.setAttribute("href","category_"+article["category"]+".html");


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
        var index=0;
        for(a of list_articles){
            if(Math.abs(list_articles.length-index) < 3 && document.getElementById("row_recent_posts")!=undefined ){
                var art=create_article(a);
                document.getElementById("row_recent_posts").appendChild( art );
            }
            index++;
        }
    }
    
}

main();




