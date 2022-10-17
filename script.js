let itenscount = 0;
let custototal = 0;
let meal = "";
let drink = "";
let dishe = "";
let mealcost = 0;
let drinkcost = 0;
let dishecost = 0;
function seleciona(elemento){
    const pai = elemento.parentNode
        if(pai.querySelector(".select") !== null){
        const verifica = pai.querySelector(".select")
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
    finalizar_disponivel()
    categoriza(elemento);
}

function custo(elemento){
    let qtd = elemento.querySelector(".custo");
    const nqtd = (qtd.innerHTML).replace(',','.');
    return Number(nqtd)
}
function finalizar_disponivel(){
if(itenscount === 3){
    const bot = document.querySelector(".botao");
    bot.innerHTML = "Fechar pedido";
    bot.classList.add("newbottombar");
}
}
function continuar(){
    if(itenscount < 3){
        
    }
    else{
        const blurry = document.querySelector(".blurry");
        const finish_screen = document.querySelector(".finalizar-pedido");
        document.querySelector(".escolha1").innerHTML = meal;
        document.querySelector(".escolha2").innerHTML = drink;
        document.querySelector(".escolha3").innerHTML = dishe;
        document.querySelector(".custo1").innerHTML = mealcost;
        document.querySelector(".custo2").innerHTML = drinkcost;
        document.querySelector(".custo3").innerHTML = dishecost;
        document.querySelector(".total").innerHTML = custototal.toFixed(1);
        finish_screen.classList.remove("not-display");
        blurry.classList.remove("not-display");
        document.querySelector(".body").classList.add("scroll-block");
    }
}
function cancelar(){
    const blurry = document.querySelector(".blurry");
    const finish_screen = document.querySelector(".finalizar-pedido");
    finish_screen.classList.add("not-display");
    blurry.classList.add("not-display");
    document.querySelector(".body").classList.remove("scroll-block");
}
function categoriza(elemento){
    const pai = elemento.parentNode
    if(pai.classList.contains("meals") == true){
        meal = (elemento.querySelector(".nome")).innerHTML;
        mealcost = (elemento.querySelector(".custo")).innerHTML;
    }
    if(pai.classList.contains("drinks")==true){
        drink = (elemento.querySelector(".nome")).innerHTML;
        drinkcost = (elemento.querySelector(".custo")).innerHTML;
    }
    if(pai.classList.contains("dishes")==true){
        dishe = (elemento.querySelector(".nome")).innerHTML; 
        dishecost=(elemento.querySelector(".custo")).innerHTML;
    }
}