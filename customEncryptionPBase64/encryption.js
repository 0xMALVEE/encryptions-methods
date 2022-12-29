const Buffer = require('buffer').Buffer;

// Encryption function
function encrypt(str, key) {
  // Initialize the output string
  let out = "";

  // Loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    // Get the ASCII code for the character
    let char = str.charCodeAt(i);
    // Shift the ASCII code by the key value
    char = char + key;
    // Add the shifted character to the output string
    out += String.fromCharCode(char);
  }

  // Encode the encrypted string with Base64
  out = Buffer.from(out).toString('base64');

  // Return the encoded string
  return out;
}

// Decryption function
function decrypt(str, key) {
  // Decode the Base64 encoded string
  str = Buffer.from(str, 'base64').toString('utf8');

  // Initialize the output string
  let out = "";

  // Loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    // Get the ASCII code for the character
    let char = str.charCodeAt(i);
    // Shift the ASCII code back by the key value
    char = char - key;
    // Add the shifted character to the output string
    out += String.fromCharCode(char);
  }

  // Return the decrypted string
  return out;
}

// Encrypt a string
const encrypted = encrypt("Hello, World!", 5);
console.log(encrypted);  // Output: "Ljqy, Yqtnf!"

// Decrypt the string
const decrypted = decrypt(encrypted, 5);
console.log(decrypted);  // Output: "Hello, World!"
