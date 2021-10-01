let comments = [];
let authors = [];

function addComment(){
   autor= document.querySelector("#user").value,
   comment= document.querySelector("#txt").value;
    comments.push(comment);
    authors.push(autor);
    displayComments();
}

function displayComments(){
    let infoToSave = "";
    for (let i = 0; i < comments.length; i++){
        infoToSave += `@${authors[i]} \n ${comments[i]}\n -------------- \n`;
    }
    document.getElementById('comments_tf').value = infoToSave;
    document.getElementById('user').value = '';
    document.getElementById('txt').value = '';
    
    localStorage.setItem("nombreUsuario", JSON.stringify(authors));
    localStorage.setItem("comentarioDejado", JSON.stringify(comments));
}
