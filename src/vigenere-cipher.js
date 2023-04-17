const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    let encrypted = '';
    let messageIndex = 0;
    key = key.toUpperCase().replace(/[^A-Z]/g, '');
    
    for (let i = 0; i < message.length; i++) {
      let messageChar = message[i].toUpperCase();
      if (/[^A-Z]/.test(messageChar)) {
        encrypted += messageChar;
        continue;
      }
      let keyChar = key.charAt(messageIndex % key.length);
      let keyIndex = this.alphabet.indexOf(keyChar);
      let index = this.alphabet.indexOf(messageChar);
      let newIndex = (index + keyIndex) % this.alphabet.length;
      let encryptedChar = this.alphabet.charAt(newIndex);
      encrypted += encryptedChar;
      messageIndex++;
    }

    if (!this.isDirect) {
      encrypted = encrypted.split('').reverse().join('');
    }

    return encrypted;
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    let decrypted = '';
    let messageIndex = 0;
    key = key.toUpperCase().replace(/[^A-Z]/g, '');

    for (let i = 0; i < message.length; i++) {
      let messageChar = message[i].toUpperCase();
      if (/[^A-Z]/.test(messageChar)) {
        decrypted += messageChar;
        continue;
      }
      let keyChar = key.charAt(messageIndex % key.length);
      let keyIndex = this.alphabet.indexOf(keyChar);
      let index = this.alphabet.indexOf(messageChar);
      let newIndex = (index - keyIndex + this.alphabet.length) % this.alphabet.length;
      let decryptedChar = this.alphabet.charAt(newIndex);
      decrypted += decryptedChar;
      messageIndex++;
    }

    if (!this.isDirect) {
      decrypted = decrypted.split('').reverse().join('');
    }

    return decrypted;
  }
}



module.exports = {
  VigenereCipheringMachine
};
