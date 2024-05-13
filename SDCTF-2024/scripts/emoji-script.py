def decrypt_with_partial_key(encrypted, partial_key):
    decrypted = ''.join([chr(ord(c) ^ ord(partial_key[i % len(partial_key)])) for i, c in enumerate(encrypted)])
    return decrypted

def main():
    print("Enter the encrypted text:")
    encrypted = input().strip()
    
    print("Enter a part of the known plaintext:")
    known_part = input().strip()
    
    # Use known part to extract part of the key
    partial_key = ''.join([chr(ord(encrypted[i]) ^ ord(known_part[i])) for i in range(len(known_part))])
    
    # Decrypt the text using the partial key
    decrypted_text = decrypt_with_partial_key(encrypted, partial_key)
    
    print("Partial Key:", partial_key)
    print("Decrypted Text:", decrypted_text)

if __name__ == "__main__":
    main()
