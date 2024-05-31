import base64

def decode_base64_file_50_times(input_file_path, output_file_path):
    with open(input_file_path, 'rb') as file:
        encoded_content = file.read()
    
    decoded_content = encoded_content
    
    for _ in range(50):
        decoded_content = base64.b64decode(decoded_content)
    
    with open(output_file_path, 'wb') as file:
        file.write(decoded_content)

if __name__ == "__main__":
    input_file = ''  # Path to the input file containing base64 encoded content
    output_file = ''  # Path to the output file where the final decoded content will be saved

    decode_base64_file_50_times(input_file, output_file)
    print("Decoding complete. Check the output file:", output_file)
