function encryptCesar(text, shift) {
    let result = '';

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        
        if (char.match(/[a-zA-Z]/)) {
            const isUpperCase = char === char.toUpperCase();
            const alphabetStart = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
            const alphabetSize = 26;
            const shiftedChar = String.fromCharCode(
                ((char.charCodeAt(0) - alphabetStart + shift) % alphabetSize) + alphabetStart
            );

            result += shiftedChar;
        } else {
            result += char;
        }
    }

    return result;
}

function criptografar() {
    const mensagem = document.getElementById("mensagem").value;
    const chave = parseInt(document.getElementById("chave").value, 10);
    const resultado = encryptCesar(mensagem, chave);
    document.getElementById("resultado").textContent = resultado;
}

function descriptografar() {
    const mensagem = document.getElementById("mensagem").value;
    const chave = parseInt(document.getElementById("chave").value, 10);
    const resultado = encryptCesar(mensagem, -chave); // Para descriptografar, use um deslocamento negativo
    document.getElementById("resultado").textContent = resultado;
}