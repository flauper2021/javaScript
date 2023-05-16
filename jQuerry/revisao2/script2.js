$().ready(function(){

    $("button").click(function(evento){
        console.log(evento.target);
        console.log(evento.target.id)
    })
    $("input").keydown(function(evento){
        console.log(evento.which)
    })
    $("#inputChangePass").click(function(){
        let inputPassWord = $("input")[0];
        inputPassWord.type = inputPassWord.type == "text" ? "password" : "text";
    })
})