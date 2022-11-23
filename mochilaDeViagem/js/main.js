const form = document.getElementById("novoItem");
const itens = [];
form.addEventListener("submit", (evento)=>{
    evento.preventDefault();

    /* pelo evento conseguimos descobrir informações importantes da requisição do submit*/
    var nome = evento.target.elements["nome"];
    var quant = evento.target.elements["quantidade"];

    console.log(nome);
    console.log(quant);
    //console.log("funcionou");
    //chama a função e coloca seu retorno em novo item
    const novoItem = criaElemento(nome.value, quant.value);

    //chama a função para colocar na lista
    adicionaNaLista(novoItem);

    //chama a localStorage
    adicionaLocalStorage(nome.value, quant.value);

    //limpa os campos
    nome.value = "";
    quant.value = "";
})

function criaElemento(nome, quantidade){
    console.log(nome);
    console.log(quantidade);

    //<li class="item"><strong>7</strong>camisas</li>

    //criando li
    const novoItem = document.createElement('li');
    novoItem.classList.add("item");
    
    //criando o strong
    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = quantidade;

    //appending
    novoItem.appendChild(numeroItem);
    
    //colocando o nome no elemnto
    novoItem.innerHTML += nome;

    return novoItem;
}

function adicionaNaLista(item){
    const lista = document.getElementById("lista");
    lista.appendChild(item);
}

function adicionaLocalStorage(nome, quant){
    
    const itemAtual = {
        "nome": nome,
        "quantidade": quant
    }

    itens.push(itemAtual);

    localStorage.setItem("item", JSON.stringify(itens));
    
}