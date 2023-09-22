import numpy as np

def encrypt(pair, K):
    pair = [ord(c) - 65 for c in pair]
    pair = np.array(pair)
    cipher = np.dot(K, pair) % 26
    cipher = [chr(c + 65) for c in cipher]
    return ''.join(cipher)

def decrypt(pair, K_inv):
    pair = [ord(c) - 65 for c in pair]
    pair = np.array(pair)
    message = np.dot(K_inv, pair).astype(int) % 26
    message = [chr(m + 65) for m in message]
    return ''.join(message)

def main():
    # Solicite ao usuário que insira a chave e a mensagem a serem criptografadas
    key = input("Por favor, insira a chave (deverá ter 4 caracteres, se tiver menos, será preenchida com 'A'): ").upper()
    while len(key) < 4:
        key += 'A'
    key = np.array([ord(c) - 65 for c in key]).reshape(2, 2)
    
    # Calcule a matriz inversa de K mod 26
    det = int(np.round(np.linalg.det(key)))
    det_inv = None
    for i in range(26):
        if (det * i) % 26 == 1:
            det_inv = i
            break
    K_inv = np.round(det_inv * np.linalg.det(key) * np.linalg.inv(key)).astype(int) % 26

    # Solicite ao usuário que escolha entre criptografia e decriptografia
    choice = input("Você gostaria de (E)ncrypt ou (D)ecrypt a mensagem?: ").upper()

    if choice == 'E':
        # Solicite ao usuário que insira a mensagem a ser criptografada
        message = input("Por favor, insira a mensagem a ser criptografada: ").upper()

        # Criptografe a mensagem
        cipher = ''
        for i in range(0, len(message), 2):
            pair = message[i:i+2]
            cipher += encrypt(pair, key)
        print('Mensagem criptografada:', cipher)
    elif choice == 'D':
        # Solicite ao usuário que insira a mensagem a ser decriptografada
        cipher = input("Por favor, insira a mensagem a ser decriptografada: ").upper()

        # Decripte a mensagem
        decrypted_message = ''
        for i in range(0, len(cipher), 2):
            pair = cipher[i:i+2]
            decrypted_message += decrypt(pair, K_inv)
        print('Mensagem decriptada:', decrypted_message)
    else:
        print("Opção inválida. Por favor, escolha 'E' para criptografia ou 'D' para decriptografia.")

if __name__ == "__main__":
    main()
