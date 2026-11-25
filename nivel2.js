// EXERCÍCIO 11

function fnSomarCompra() {
    let valores = [29.90, 54.00, 15.50, 80.00];
    let total = 0;

    for (let i = 0; i < valores.length; i++) {
        total = total + valores[i];
    }
    console.log("Total da compra: R$ " + total.toFixed(2));

}
fnSomarCompra();


// EXERCÍCIO 12

function fnCalcularMedia() {
    let notas = [6.5, 5.0, 7.5, 6.0];
    let soma = 0;

    for (let i = 0; i < notas.length; i++) {
        soma = soma + notas[i];
    }

    let media = soma / notas.length;

    console.log("Média: " + media);

    if (media >= 6.0) {
        console.log("Aluno aprovado");
    } else {
        console.log("Aluno reprovado");
    }

}
fnCalcularMedia();


// EXERCÍCIO 13

function fnSepararIdades() {
    let idades = [14, 18, 25, 16, 32, 17, 19];
    let maiores = [];

    for (let i = 0; i < idades.length; i++) {
        if (idades[i] >= 18) {
            maiores.push(idades[i]);
        }
    }
    console.log(maiores);
}
fnSepararIdades();


// EXERCÍCIO 14

function fnCadastrarLogin(lista, novoLogin) {
    if (lista.includes(novoLogin)) {
        console.log("Login indisponível");
    } else {
        lista.push(novoLogin);
        console.log("Login cadastrado com sucesso");
    }

    console.log(lista);
    let logins = ["joao.silva", "maria.souza", "pedro.lima"];

}
fnCadastrarLogin(logins, "ana.costa");


// EXERCÍCIO 15

function fnAplicarDesconto() {
    let precos = [100, 200, 50, 80];
    let promocao = [];

    for (let i = 0; i < precos.length; i++) {
        let novoValor = precos[i] * 0.85;
        promocao.push(novoValor);
    }
    console.log("Preços originais: " + precos);
    console.log("Preços promocionais: " + promocao);

}
fnAplicarDesconto(); 


// EXERCÍCIO 16

function fnContarNumeros() {
    let numeros = [12, 7, 5, 20, 33, 8, 11, 4];

    let pares = 0;
    let impares = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 == 0) {
            pares++;
        } else {
            impares++;
        }
    }
    console.log("Números pares: " + pares);
    console.log("Números ímpares: " + impares);

}
fnContarNumeros();


// EXECERÍCIO 17

function fnVerficiarTemperatura() {
    let temperaturas = [22, 29, 18, 31, 24, 19];

    let maior = temperaturas[0];
    let menor = temperaturas[0];

    for (let i = 0; i < temperaturas.length; i++) {
        if (temperaturas[i] > maior) {
            maior = temperaturas[i];
        }

        if (temperaturas[i] < menor) {
            menor = temperaturas[i];
        }
    }

    console.log("Maior temperatura: " + maior);
    console.log("Menor temperatura: " + menor);
}

// EXERÍCIO 18

function fnRemoverProdutos() {
   let posicao = lista.indexOf(produto);

    if (posicao != -1) {
        lista.splice(posicao, 1);
    }

    console.log(lista);
    let pedido = ["Hambúrguer", "Batata Frita", "Refrigerante", "Sobremesa"];


}
fnRemoverProduto(pedido, "Batata Frita");


// EXERÍCIO 19

function fnFiltrarNomes(lista, inicial) {
    let resultado = [];

    for (let i = 0; i < lista.length; i++) {
        if (lista[i][0] == inicial) {
            resultado.push(lista[i]);
        }
    }

    console.log(resultado);
    let nomes = ["Amanda", "Carlos", "Arthur", "Bruna", "Alice", "Diego"];

}
fnFiltrarNomes(nomes, "A");


// EXERCÍCIO 20

function fnVerificarEstoque() {
    let produtos = [
        { nome: "Notebook", quantidade: 4 },
        { nome: "Webcam", quantidade: 0 },
        { nome: "Mousepad", quantidade: 12 },
        { nome: "Cabo HDMI", quantidade: 0 }
    ];

    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].quantidade > 0) {
            console.log(produtos[i].nome);
        }
    }
}

fnVerificarEstoque();
