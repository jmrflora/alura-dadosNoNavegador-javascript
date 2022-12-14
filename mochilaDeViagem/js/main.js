const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
//criando o array de itens, recebendo o array no localStorage se não recebe vazio
const itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach((element) => {
    criaElemento(element.nome, element.quantidade);
});


form.addEventListener("submit", (evento)=>{
    evento.preventDefault();

    /* pelo evento conseguimos descobrir informações importantes da requisição do submit*/
    var nome = evento.target.elements["nome"];
    var quant = evento.target.elements["quantidade"];

    const itemAtual ={
        "nome": nome.value,
        "quantidade": quant.value
    }
    //chama a função e coloca seu retorno em novo item
    criaElemento(itemAtual.nome, itemAtual.quantidade);

    //chama a localStorage
    adicionaLocalStorage(itemAtual);

    //limpa os campos
    nome.value = "";
    quant.value = "";
})

function criaElemento(nome, quantidade){
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
    //colocando na lista
    lista.appendChild(novoItem);
}

function adicionaLocalStorage(itemAtual){
    
    itens.push(itemAtual);

    localStorage.setItem("itens", JSON.stringify(itens));
    
}