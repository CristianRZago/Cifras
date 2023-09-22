function decimalToBinary(decimal) {
    return decimal.toString(2);
}

function binaryToDecimal(binary) {
    return parseInt(binary, 2);
}

function encrypt() {
    const messageInput = document.getElementById("message");
    const keyInput = document.getElementById("key");
    const encryptedMessage = document.getElementById("encryptedMessage");

    const message = parseInt(messageInput.value);
    const key = parseInt(keyInput.value);
    const keyBinary = decimalToBinary(key);

    const encryptedBinary = decimalToBinary(message ^ key);

    encryptedMessage.innerText = `Mensagem (Decimal): ${message} \n Chave (Decimal): ${key} \n Chave (Binário): ${keyBinary} \n\n Mensagem Criptografada (Binário): ${encryptedBinary}`;
    
    const encryptedDecimal = message ^ key;
    encryptedMessage.innerText += `\nMensagem Criptografada (Decimal): ${encryptedDecimal}`;
    document.querySelector('.result').style.display = 'block';
}

function decrypt() {
    const encryptedMessageInput = document.getElementById("encryptedMessageInput").value;
    const decryptKeyInput = document.getElementById("decryptKey");
    const decryptedMessage = document.getElementById("decryptedMessage");

    const key = parseInt(decryptKeyInput.value);

    const decryptedDecimal = binaryToDecimal(encryptedMessageInput) ^ key;
    decryptedMessage.innerText = `Mensagem Criptografada (Decimal): ${binaryToDecimal(encryptedMessageInput)} \nChave (Decimal): ${key} \nChave (Binário): ${decimalToBinary(key)} \n\nMensagem Descriptografada (Decimal): ${decryptedDecimal}`;
    document.querySelector('.decrypt-box .result').style.display = 'block';
}

function decryptBinary() {
    const encryptedMessageBinaryInput = document.getElementById("encryptedMessageBinaryInput").value;
    const decryptKeyBinaryInput = document.getElementById("decryptKeyBinary").value;
    const decryptedMessageBinary = document.getElementById("decryptedMessageBinary");

    const keyBinary = decryptKeyBinaryInput;
    const keyDecimal = binaryToDecimal(keyBinary);
    const decryptedDecimal = binaryToDecimal(encryptedMessageBinaryInput) ^ keyDecimal;

    decryptedMessageBinary.innerText = `Mensagem Criptografada (Binário): ${encryptedMessageBinaryInput} \n Chave (Decimal): ${keyDecimal} \n Chave (Binário): ${keyBinary} \n\nMensagem Descriptografada (Decimal): ${decryptedDecimal}`;
    document.querySelector('.decrypt-binary-box .result').style.display = 'block';
}

document.getElementById("encryptButton").addEventListener("click", encrypt);
document.getElementById("decryptButton").addEventListener("click", decrypt);
document.getElementById("decryptBinaryButton").addEventListener("click", decryptBinary);
