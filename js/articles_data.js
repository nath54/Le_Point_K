
list_articles=[
    //{"titre":"les ordi nous attaquent","date":"12 juin 2020","lien":"blog-post.html","post_img":"img/post-1.png","alt_img":"découvrez comment les ordis nous attaquent !","category":"informatique", "journal":null}

]


tries_ecol=[];
tries_poli=[];
tries_info=[];
tries_sant=[];
tries_journaux={};


for(a of list_articles){
    if(a["category"]=="ecologie"){ tries_ecol.push(a); }
    if(a["category"]=="politique"){ tries_poli.push(a); }
    if(a["category"]=="informatique"){ tries_info.push(a); }
    if(a["category"]=="sante"){ tries_sant.push(a); }
    //
    if(!Object.keys(tries_journaux).includes(a["journal"])){
        tries_journaux[a["journal"]]=[a];
    }
    else{
        tries_journaux[a["journal"]].push(a);
    }
}




