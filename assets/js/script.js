function encrypt() {
  const inputText = document.getElementById("texto-entrada");
  const outputText = document.getElementById("texto-saida");

  let text = inputText.value.toLowerCase();

  let textCript = text
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  outputText.value = textCript;
}

function descript() {
  const inputText = document.getElementById("texto-entrada");
  const outputText = document.getElementById("texto-saida");

  let text = inputText.value.toLowerCase();

  let textDescrip = text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  outputText.value = textDescrip;
}

function copiarTexto() {
  let textoCopiado = document.getElementById("texto-saida");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999);

  document.execCommand("copy")
}
