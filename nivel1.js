// EXERCÍCIO 1

function fnExibirChamada() {
    let alunos = ["Ana", "Bruno", "Carla", "Diego", "Elena"];

    console.log("Primeiro aluno: " + alunos[0]);
    console.log("Último aluno: " + alunos[alunos.length - 1]);
    console.log("Total de alunos: " + alunos.length);

}
fnExibirChamada();


// EXERCÍCIO 2

function fnAdicionarProduto(lista, novoItem) {
    lista.push(novoItem);
    console.log(lista);
    let produtos = ["Teclado Mecânico", "Mouse Gamer"];

}
fnAdicionarProduto(produtos, "Headset USB");


// EXERCÍCIO 3

function fnEncaixarPrioridade(fila, nomePaciente) {
    fila.unshift(nomePaciente);
    console.log(fila);
    let fila = ["Marcos", "Juliana", "Roberto"];

}
fnEncaixarPrioridade(fila, "Dona Clara (Idosa)");


// EXERCÍCIO 4

function fnChamarProximo(fila) {
    let chamado = fila.shift();

    console.log("Paciente chamado: " + chamado);
    console.log("Fila restante:");
    console.log(fila);
    let filaAtendimento = ["Dona Clara (Idosa)", "Marcos", "Juliana", "Roberto"];

}
fnChamarProximo(filaAtendimento);


// EXERCÍCIO 5

function fnDesfazerAcao(lista) {
    lista.pop();
    console.log(lista);
    let acoes = ["Escreveu título", "Aplicou negrito", "Inseriu tabela"];

}
fnDesfazerAcao(acoes);


// EXERCÍCIO 6

function fnVerificarEstoque(lista) {
    console.log("Total de itens: " + lista.length);
    let estoque = ["Camiseta", "Calça", "Tênis", "Boné"];

}
fnVerificarEstoque(estoque);


// EXERCÍCIO 7

function fnEstaNaLista(lista, nome) {
    console.log(lista.includes(nome));
    let convidados = ["Lucas", "Mariana", "Thiago", "Beatriz"];

}
fnEstaNaLista(convidados, "Mariana");
fnEstaNaLista(convidados, "Rafael");


// EXERCÍCIO 8

function fnConsultarCorredor(lista, item) {
    let posicao = lista.indexOf(item);

    if (posicao != -1) {
        console.log("Posição encontrada: " + posicao);
    } else {
        console.log("Item não encontrado");
    }
    let corredor = ["Arroz", "Feijão", "Açúcar", "Café", "Sal"];


}
fnConsultarCorredor(corredor, "Café");
fnConsultarCorredor(corredor, "Macarrão");


// EXERCÍCIO 9

function fnAtualizarPreco(lista, indice, novoValor) {
    lista[indice] = novoValor;
    console.log(lista);
    let precos = [15.00, 25.00, 40.00];

}
fnAtualizarPreco(precos, 1, 28.50);


// EXERCÍCIO 10

function fnCriarBoletim(nota1, nota2, nota3) {
    let notas = [nota1, nota2, nota3];
    console.log(notas);

}
fnCriarBoletim(8.0, 7.5, 9.0);

