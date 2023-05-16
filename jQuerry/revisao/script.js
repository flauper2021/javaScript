$().ready(function(){

    let umaDiv = $("div");
    let umParagrafo = $("<p>Olá Mundo!</p>")

    umaDiv.append(umParagrafo);

    $("<p>1 2 3 de Oliveira 4</p>").prependTo(umaDiv)

});