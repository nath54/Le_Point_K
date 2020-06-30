
var dispo_newsletter=false;
var dispo_sendmessage=false;

function send_email_to_newsletter(inpid){
    email=document.getElementById(inpid).value;
    if(!dispo_newsletter){
        alert("Cette fonctionnalité n'est pas encore disponible.");
    }

}

function send_message(){
    email=document.getElementById("input_email").value;
    object=document.getElementById("input_object").value;
    texte=document.getElementById("input_texte").value;
    if(!dispo_sendmessage){
        alert("Cette fonctionnalité n'est pas encore disponible.");
    }
}





