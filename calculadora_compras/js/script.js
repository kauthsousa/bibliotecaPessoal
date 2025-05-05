let inputResultado = document.getElementById("inputCalculadora");
let listaProdutos = document.getElementById('lista');

let produtos = JSON.parse(localStorage.getItem('produtos')) || [];

let batom01 = document.querySelector(".batom-01 span").textContent;
let batom02 = document.querySelector(".batom-02 span").textContent;
let batom03 = document.querySelector(".batom-03 span").textContent;
let batom04 = document.querySelector(".batom-04 span").textContent;
let batom05 = document.querySelector(".batom-05 span").textContent;
let batom06 = document.querySelector(".batom-06 span").textContent;

let btn01 = document.getElementById("btn01");
let btn02 = document.getElementById("btn02");
let btn03 = document.getElementById("btn03");
let btn04 = document.getElementById("btn04");
let btn05 = document.getElementById("btn05");
let btn06 = document.getElementById("btn06");

function renderListaProdutos(){
    listaProdutos.innerHTML = '';

    produtos.forEach(function(produto) {
        let itemLista = document.createElement('li');
        itemLista.setAttribute('class', 'list-group-item list-group-item-action');
        itemLista.onclick = function(){
            deletarProduto(this);
        }
        let itemTexto = document.createTextNode(produto);
        itemLista.appendChild(itemTexto);
        listaProdutos.appendChild(itemLista);
    });
}

renderListaProdutos();

btn01.addEventListener("click", function(){
    document.querySelector(".batom-01 span").textContent;
    inputResultado.placeholder = parseFloat(inputResultado.placeholder) + parseFloat(batom01);
    let nomeProduto = document.querySelector(".batom-01 h5").textContent + " - " + document.querySelector(".batom-01 p").textContent;
    produtos.push(nomeProduto);
    renderListaProdutos();
    salvarDadosNoStorage();
});

btn02.addEventListener("click", function(){
    document.querySelector(".batom-02 span").textContent;
    inputResultado.placeholder = parseFloat(inputResultado.placeholder) + parseFloat(batom02);
    let nomeProduto = document.querySelector(".batom-02 h5").textContent + " - " + document.querySelector(".batom-02 p").textContent;
    produtos.push(nomeProduto);
    renderListaProdutos();
    salvarDadosNoStorage();
});

btn03.addEventListener("click", function(){
    document.querySelector(".batom-03 span").textContent;
    inputResultado.placeholder = parseFloat(inputResultado.placeholder) + parseFloat(batom03);
    let nomeProduto = document.querySelector(".batom-03 h5").textContent + " - " + document.querySelector(".batom-03 p").textContent;
    produtos.push(nomeProduto);
    renderListaProdutos();
    salvarDadosNoStorage();
});

btn04.addEventListener("click", function(){
    document.querySelector(".batom-04 span").textContent;
    inputResultado.placeholder = parseFloat(inputResultado.placeholder) + parseFloat(batom04);
    let nomeProduto = document.querySelector(".batom-04 h5").textContent + " - " + document.querySelector(".batom-04 p").textContent;
    produtos.push(nomeProduto);
    renderListaProdutos();
    salvarDadosNoStorage();
});

btn05.addEventListener("click", function(){
    document.querySelector(".batom-05 span").textContent;
    inputResultado.placeholder = parseFloat(inputResultado.placeholder) + parseFloat(batom05);
    let nomeProduto = document.querySelector(".batom-05 h5").textContent + " - " + document.querySelector(".batom-05 p").textContent;
    produtos.push(nomeProduto);
    renderListaProdutos();
    salvarDadosNoStorage();
});

btn06.addEventListener("click", function(){
    document.querySelector(".batom-06 span").textContent;
    inputResultado.placeholder = parseFloat(inputResultado.placeholder) + parseFloat(batom06);
    let nomeProduto = document.querySelector(".batom-06 h5").textContent + " - " + document.querySelector(".batom-06 p").textContent;
    produtos.push(nomeProduto);
    renderListaProdutos();
    salvarDadosNoStorage();
});

function deletarProduto(prod){
    produtos.splice(produtos.indexOf(prod.textContent), 1);
    let delProdCalc = (prod.textContent).split("R$")[1];
    inputResultado.placeholder = parseFloat(inputResultado.placeholder) - parseFloat(delProdCalc);
    renderListaProdutos();;
    salvarDadosNoStorage();
}

function salvarDadosNoStorage(){
    localStorage.setItem('produtos', JSON.stringify(produtos));
}