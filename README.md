# Encryptor CLI

This is a simple command-line tool that applies different encryption techniques to a given input message. It supports three types of encryption:

- **Caesar Cipher**: Shifts letters by a given amount.
- **Symbol Cipher**: Replaces certain characters with symbols.
- **Reverse Cipher**: Reverses each word in the message.

## Features
- Encrypts messages using different cipher techniques.
- Supports user input via the command line.
- Easily extendable with new encryption methods.

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/encryptor-cli.git
   ```
2. Navigate to the project folder:
   ```sh
   cd encryptor-cli
   ```
3. Install dependencies (if any):
   ```sh
   npm install
   ```

## Usage
Run the program using the following syntax:
```sh
node encryptor.js <encryption-type> [shift-amount]
```

### Encryption Types:
- `caesar <shift>` - Uses the Caesar Cipher with the specified shift amount.
- `symbol` - Uses the Symbol Cipher.
- `reverse` - Uses the Reverse Cipher.

### Example Commands:
```sh
node encryptor.js caesar 4
```
```sh
node encryptor.js symbol
```
```sh
node encryptor.js reverse
```

After running the command, enter the message you want to encrypt. The encrypted message will be displayed in the terminal.

## File Structure
```
 encryptor-cli/
 |-- encryptor.js        # Main CLI script
 |-- encryptors.js       # Encryption functions
 |-- README.md           # Project documentation
```

## License
This project is licensed under the MIT License.

## Contributing
Feel free to submit issues or pull requests to improve this tool!

## Author
Created by **Tilaoui Ayoub**.

