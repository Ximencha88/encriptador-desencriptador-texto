const btnEncriptar = document.getElementById('btnEncriptar');
const btnDesencriptar = document.getElementById('btnDesencriptar');
const btnCopiar = document.getElementById('btnCopiar');
const textoEntrada = document.getElementById('texto');
const textoResultado = document.getElementById('textoEncriptadoDesencriptado');

btnEncriptar.addEventListener('click', () => {
    const texto = textoEntrada.value.toLowerCase();
    const textoEncriptado = encriptarTexto(texto);
    textoResultado.value = textoEncriptado;
});

btnDesencriptar.addEventListener('click', () => {
    const textoEncriptado = textoEntrada.value.toLowerCase();
    const textoDesencriptado = desencriptarTexto(textoEncriptado);
    textoResultado.value = textoDesencriptado;
});

btnCopiar.addEventListener('click', () => {
    textoResultado.select();
    document.execCommand('copy');
});

function encriptarTexto(texto) {
    // Función de encriptación según las reglas establecidas
    return texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function desencriptarTexto(textoEncriptado) {
    // Función de desencriptación según las reglas establecidas
    return textoEncriptado
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}
