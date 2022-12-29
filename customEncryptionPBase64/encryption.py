import base64

# Encryption function
def encrypt(str, key):
  # Initialize the output string
  out = ""

  # Loop through each character in the string
  for i in range(len(str)):
    # Get the ASCII code for the character
    char = ord(str[i])
    # Shift the ASCII code by the key value
    char = char + key
    # Add the shifted character to the output string
    out += chr(char)

  # Encode the encrypted string with Base64
  out = base64.b64encode(out.encode())
  # Return the encoded string
  return out.decode()

# Decryption function
def decrypt(str, key):
  # Decode the Base64 encoded string
  str = base64.b64decode(str.encode()).decode()

  # Initialize the output string
  out = ""

  # Loop through each character in the string
  for i in range(len(str)):
    # Get the ASCII code for the character
    char = ord(str[i])
    # Shift the ASCII code back by the key value
    char = char - key
    # Add the shifted character to the output string
    out += chr(char)

  # Return the decrypted string
  return out

print(encrypt("Hello, World!",5))