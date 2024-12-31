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
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    let result = [];
    let keyIndex = 0;
    key = key.toUpperCase();
    message = message.toUpperCase();

    for (let i = 0; i < message.length; i++) {
      if (/[A-Z]/.test(message[i])) {
        let charCodeMessage = message.charCodeAt(i);
        let charCodeKey = key.charCodeAt(keyIndex % key.length);
        let encryptedCharCode = (charCodeMessage - 65 + (charCodeKey - 65)) % 26 + 65;
        result.push(String.fromCharCode(encryptedCharCode));

        keyIndex++;
      } else {
        result.push(message[i]);
      }
    }

    return this.direct ? result.join('') : result.reverse().join('');
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    let result = [];
    let keyIndex = 0;
    key = key.toUpperCase();
    message = message.toUpperCase();

    for (let i = 0; i < message.length; i++) {
      if (/[A-Z]/.test(message[i])) {
        let charCodeMessage = message.charCodeAt(i);
        let charCodeKey = key.charCodeAt(keyIndex % key.length);
        let decryptedCharCode = (charCodeMessage - 65 - (charCodeKey - 65) + 26) % 26 + 65;
        result.push(String.fromCharCode(decryptedCharCode));

        keyIndex++;
      } else {
        result.push(message[i]);
      }
    }

    return this.direct ? result.join('') : result.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};