const encryptors = require('./encryptors.js');


const encodeMessage = (str) => {
  let encrypted = encryptors.caesarCipher(str, 4);
  encrypted = encryptors.symbolCipher(encrypted);
  encrypted = encryptors.reverseCipher(encrypted);
  return encrypted;
}


const decodeMessage = (str) => {
  let decrypted = encryptors.reverseCipher(str); 
  decrypted = encryptors.symbolCipher(decrypted);
  decrypted = encryptors.caesarCipher(decrypted, -4);
  return decrypted;
}

// User input / output.

const handleInput = (userInput) => {
  const str = userInput.toString().trim();
  let output;
  if (process.argv[2] === 'encode') {
    output = encodeMessage(str);
  } 
  if (process.argv[2] === 'decode') {
    output = decodeMessage(str);
  } 
  
  process.stdout.write(output + '\n');
  process.exit();
}

process.stdout.write('Enter the message you would like to encrypt...\n> ');
process.stdin.on('data', handleInput);