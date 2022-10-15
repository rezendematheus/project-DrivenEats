let itenscount = 0;
let custototal = 0;
function seleciona(elemento){
    if(document.querySelector(".select") !== null){
        const verifica = document.querySelector(".select")
        verifica.classList.remove("select");
        const vector = verifica.querySelector(".check-icon");
        vector.classList.add("not-display");
        itenscount -= 1;
        custototal -= custo(elemento);
    }
    elemento.classList.add("select");   
    const vector = elemento.querySelector(".check-icon");
    vector.classList.remove("not-display");
    itenscount +=1;
    custototal += custo(elemento);
}
function custo(elemento){
    let qtd = elemento.querySelector(".custo");
    const nqtd = (qtd.innerHTML).replace(',','.');
    return nqtd
}
if(itenscount === 3){
    const bot = document.querySelector(".bottombar");
    bot.innerHTML = "Fechar pedido";
    bot.classList.add("newbottombar");
}