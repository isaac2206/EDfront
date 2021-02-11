function logar(){
    var txtLogin = document.getElementById("txtLogin").value;
    var txtSenha = document.getElementById("txtSenha").value;

    console.log("Digitou = "+txtLogin+"/"+txtSenha);

    //uma vez capturada as infos, preciso montar uma msg para enviar ao back end

    var msgBody={
        racf:txtLogin,
        email:txtLogin,
        senha:txtSenha
    };

    var cabecalho={
        method:"POST",
        body:JSON.stringify(msgBody),
        headers:{
            "Content-type":"application/json"
        }
    };

    /*se o fetch nao fosse assincrono
    var resposta;
    resposta=fetch("http://local...",cabecalho)
    */
fetch("http://localhost:8088/login",cabecalho).then(resposta => trataResposta(resposta));

}

function trataResposta(resposta){
    if(resposta.status==200){ //200 significa que o objeto foi recebido corretamente
        resposta.json().then(usuario=>{ //xtraçao do objeto
            localStorage.setItem("userDASH",JSON.stringify(usuario));//arnazena o obj usuario no cache local
            window.location="relatorio.html"; //redirecionando para outra pagina
        });
    }
    else if(resposta.status==401){
        document.getElementById("msg").innerHTML="Senha Inválida!";
    }
    else if (resposta.status==401){
        document.getElementById("msg").innerHTML="Usuário não encontrado!";
    }
    else{
        document.getElementById("msg").innerHTML="Erro desconhecido :(";
    }
}