/* A Função abaixo serve para quando clicado no elemento "btn-cripto",
   ele pega a variavel textoDecodifica com a id "input-texto"  e manda
   para o valor msg */
document.getElementById("btn-cripto").addEventListener("click", function () {

    var textoDecodificado = document.getElementById("input-texto").value;

document.getElementById("msg").value = textoDecodificado;
});