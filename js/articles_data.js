
// ARTICLE :
//  - id : l'identifiant de l'article
//  - titre : le titre de l'article
//  - date : la date de l'article en format texte, mais avec le format : jour en entier, mois en texte, année en entier
//  - lien : le lien de la page de l'article
//  - post-img : l'image de l'article 
//  - alt-img : du texte qui est affiché quand la souris reste quelques secondes sur l'image
//  - category : la catégorie de l'article ( écologie , politique , informatique , santé )
//  - journal : le numéro du journal où l'article est, null si il n'est pas paru dans un journal
//  - nbvues : le nombre de fois ou un utilisateur ouvre la page
//  - commentaires : la liste des commentaires qui ont été postés sur l'article


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




