function cifraVigenere(texto, chave, modo) {
    const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let resultado = "";

    for (let i = 0; i < texto.length; i++) {
        const char = texto[i].toUpperCase();
        
        if (alfabeto.includes(char)) {
            const charIndex = alfabeto.indexOf(char);
            const chaveChar = chave[i % chave.length].toUpperCase();
            const chaveIndex = alfabeto.indexOf(chaveChar);

            let novoIndex;

            if (modo === "criptografar") {
                novoIndex = (charIndex + chaveIndex) % 26;
            } else if (modo === "descriptografar") {
                novoIndex = (charIndex - chaveIndex + 26) % 26;
            }

            resultado += alfabeto.charAt(novoIndex);
        } else {
            resultado += char;
        }
    }

    return resultado;
}

function criptografar() {
    const mensagem = document.getElementById("mensagem").value;
    const chave = document.getElementById("chave").value;
    const resultado = cifraVigenere(mensagem, chave, "criptografar");
    document.getElementById("resultado").textContent = resultado;
}

function descriptografar() {
    const mensagem = document.getElementById("mensagem").value;
    const chave = document.getElementById("chave").value;
    const resultado = cifraVigenere(mensagem, chave, "descriptografar");
    document.getElementById("resultado").textContent = resultado;
}