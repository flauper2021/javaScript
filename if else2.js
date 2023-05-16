let objetoServidor = {
    acesso: true,
    login: "mundojs",
};
let objetoServidor2 = {
    erro: "Erro ao conectar ao servidor",
};

function conexcaoLogin(respostaDoServidor){
    if(respostaDoServidor.erro == null){
        if(respostaDoServidor.acesso){
            console.log(`login: ${respostaDoServidor.login}`);
        }else{
            console.log("Acesso Negado!");
        }
    }else{
        console.log(respostaDoServidor.erro);
    }
}
conexcaoLogin(objetoServidor);
conexcaoLogin(objetoServidor2);

objetoServidor.acesso = false;
conexcaoLogin(objetoServidor);