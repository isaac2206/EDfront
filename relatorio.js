function carregaInfo() {
    var strUser = localStorage.getItem("userDASH");//quero verificar se user esta no cache

    //se não tiper usuario no localstorage, redirecinar pro index
    if (!strUser) {
        window.location = "index.html";
        return;
    }

    //segue o jogo
    var user = JSON.parse(strUser); //estou convertendo a string do user para um objeto

    //subst o texto da tag fotoUser por uma tag de imagem

    document.getElementById("fotoUser").innerHTML = `<img src ="${user.linkFoto}" width="100%"/>`;
    document.getElementById("bioUser").innerHTML = `<h4>${user.nome}</h4>
                                                <p><strong>RACF:</strong>${user.racf}</p>
                                                <p><strong>RACF:</strong>${user.email}</p>
                                                <p><strong>RACF:</strong>${user.ramal}</p>
                                                <button type="button" class="btn btn-primary" onclick="logout()">
                                                LOGOUT </button>`;
}

function logout() {
    localStorage.removeItem("userDASH");
    window.location = "index.html";
}