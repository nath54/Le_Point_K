var websocket = new WebSocket("ws://127.0.0.1:6789/");
//websocket.onerror=cantconnect;
console.log(websocket);

websocket.onmessage = function (event) {
    data = JSON.parse(event.data);
    switch (data.type) {
        case "ping":
            alert("pong");
            break;
        case "articles":
            window.list_articles=data.articles;
        default:
            console.error("unsupported event", data);
    }
}

function article_lu(idart){
    websocket.send( JSON.stringify({"action":"read_article","id":idart}) )
}

function cantconnect(){
    //alert("Error : can't connect to the server");
}

function commentaire_send(mes, pseudo, email, idart){
    websocket.send( 
        JSON.stringify({"action":"commentaire",
                        "value":mes,
                        "id":idart,
                        "pseudo":pseudo,
                        "email":email})
    );
}

