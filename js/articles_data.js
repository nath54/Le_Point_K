
// ARTICLE :
//  - id : l'identifiant de l'article
//  - titre : le titre de l'article
//  - date : la date de l'article en format texte, mais avec le format : jour en entier, mois en texte, année en entier
//  - lien : le lien de la page de l'article
//  - post-img : l'image de l'article 
//  - alt-img : du texte qui est affiché quand la souris reste quelques secondes sur l'image
//  - category : la catégorie de l'article ( écologie , politique , science , santé )
//  - journal : le numéro du journal où l'article est, null si il n'est pas paru dans un journal
//  - nbvues : le nombre de fois ou un utilisateur ouvre la page
//  - commentaires : la liste des commentaires qui ont été postés sur l'article
//  - enavant : si l'article est mis en avant
//

/*
Catégories :

  1 : Écologie
  2 : Politique
  3 : Sciences et Santé
  4 : Culture

*/


var list_articles=[
    {"id":"000000","titre":"Le nucléaire, une bonne source d'énergie ?","date":"15 février 2020","lien":"articles/article.html?000000","post-img":"articles/art_nucleaire_1/post.jpeg","alt-img":"Le nucléaire, une bonne source d'énergie ?","category":1},
    {"id":"000001","titre":"Faut-il interdire le glyphosate ?","date":"17 février 2020","lien":"articles/article.html?000001","post-img":"articles/art_glypho_1/img1.jpg","alt-img":"Faut-il interdire le glyphosate ?","category":1},
    {"id":"000002","titre":"Linux ou Windows, lequel vous est le plus adapté ?","date":"30 août 2020","lien":"articles/article.html?000002","post-img":"articles/art_linux_vs_windows/post.svg","alt-img":"Linux ou Windows, lequel vous est le plus adapté ?","category":3},
    {"id":"000003","titre":"L’Aérotrain, le futur d’il y a 50 ans","date":"27 octobre 2020","lien":"articles/article.html?000003","post-img":"articles/art_aerotrain/img_0.jpg","alt-img":"L’Aérotrain, le futur d’il y a 50 ans ?","category":3},
    {"id":"000004","titre":"BLAME!, une errance contemplative dans un monde dévasté","date":"15 decembre 2020","lien":"articles/article.html?000004","post-img":"articles/art_blame_1/img_1.jpg","alt-img":"","category":4},
    {"id":"000005","titre":"La liberté d'expression et le Blasphème","date":"15 decembre 2020","lien":"articles/article.html?000005","post-img":"","alt-img":"","category":2},
    {"id":"000006","titre":"Brazil, l'espoir dans une réalité absurde","date":"15 decembre 2020","lien":"articles/article.html?000006","post-img":"articles/art_brazil_1/img_1.jpg","alt-img":"","category":4},
    {"id":"000007","titre":"Agnès Buzyn dans la crise du COVID-19","date":"15 decembre 2020","lien":"articles/article.html?000007","post-img":"articles/art_buzin_1/img1.jpg","alt-img":"","category":2},
    {"id":"000008","titre":"COVID-19 : symptôme d'une France en voie d'implosion","date":"15 decembre 2020","lien":"articles/article.html?000008","post-img":"","alt-img":"","category":3},
    {"id":"000009","titre":"Le pissenlit, la plante qui nous divise","date":"15 decembre 2020","lien":"articles/article.html?000009","post-img":"articles/art_pisselenlit_1/img_1.jpg","alt-img":"","category":1},
    {"id":"000010","titre":"Une nouvelle prépa à Poinca ?","date":"15 decembre 2020","lien":"articles/article.html?000010","post-img":"articles/art_poinca_mpi_1/img_1.jpg","alt-img":"","category":3},
    {"id":"000011","titre":"La provocation a-t-elle sa place dans un débat ?","date":"15 decembre 2020","lien":"articles/article.html?000010","post-img":"","alt-img":"","category":2},
    {"id":"000012","titre":"Sappho, la poètesse oubliée","date":"15 decembre 2020","lien":"articles/article.html?000010","post-img":"articles/art_sapho_1/img_1.png","alt-img":"","category":4},
]

function get_date(dicte){
    if(dicte==undefined){ return null; }
    dt=dicte.date;
    d=dt.split(" ");
    j=parseInt(d[0]);
    //mois
    m=0
    for(m of ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","décembre"]){
        if(d[1]==m){ break; }
        m++;
    }
    //
    a=parseInt(d[2]);
    return j,m,a;
}

function trie_articles_date(articles){
    l_articles=[];
    for(a of articles){ l_articles.push(a); }
    //
    for(i=0; i<l_articles.length; i++){
        for(j=0; j<i; j++){
            di=get_date(l_articles[i]);
            dj=get_date(l_articles[j]);
            if(di!=null && dj!=null){
                ji=di[0];
                mi=di[1];
                ai=di[2];
                jj=j[0];
                mj=dj[1];
                aj=dj[2];
                var echange=false;
                if(ai>aj){ echange=true; }
                else if(ai==aj && mi>mj){ echange=true; }
                else if(mi==mj && ji>jj){ echange=true; }
                if(echange){
                    temp=l_articles[i];
                    l_articles[i]=l_articles[j];
                    l_articles[j]=temp;
                }
            }
            
        }
    }
    return l_articles;
}


list_articles=trie_articles_date(list_articles);
tries = {
    1 : [],
    2 : [],
    3 : [],
    4 : []
}

function trie_articles(){
    for(a of list_articles){
        tries[a["category"]].push(a);
    }
}

trie_articles();
