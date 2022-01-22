/* A Função abaixo serve para quando clicado no elemento "btn-cripto",
   ele pega a variavel textoDecodifica com a id "input-texto"  e manda
   para o valor msg */
/*document.getElementById("btn-cripto").addEventListener("click", function () {

    var textoCodificado = document.getElementById("input-texto").value;

document.getElementById("msg").value = textoCodificado;
});*/
document.getElementById("btn-cripto").addEventListener("click", function () {
    
    var textoCodificado = document.getElementById("input-texto").value;
    textoCodificado = textoCodificado.replaceAll('e', 'enter')
                .replaceAll('i', 'imes')
                .replaceAll('a', 'ai')
                .replaceAll('o', 'ober')
                .replaceAll('u', 'ufat');

                document.getElementById("msg").value = textoCodificado;
})
document.getElementById("btn-descripto").addEventListener("click", function () {
    
    var textoCodificado = document.getElementById("input-texto").value;
    textoCodificado = textoCodificado.replaceAll('e', 'enter')
                .replaceAll('imes', 'i')
                .replaceAll('ai', 'a')
                .replaceAll('ober', 'o')
                .replaceAll('ufat', 'u');

                document.getElementById("msg").value = textoCodificado;
})
/*................................................................................*/
document.getElementById("btn-clean").addEventListener("click", function () {
    document.getElementById("input-texto").value = "";
    document.getElementById("msg").value = "";
})
document.getElementById("btn-copy").addEventListener("click", function () {

  var copyText = document.getElementById("msg");

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value);
  
  alert("o texto foi copiado: " + copyText.value);
})