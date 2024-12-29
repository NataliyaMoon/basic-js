const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || "+";
  const addition = String(options.addition) || '';
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || "|";

  let value = String(str);
  let result = [];
  
  if (!(addition === 'undefined')) {
    value += (addition + additionSeparator).repeat(additionRepeatTimes);
    value = value.substring(0, value.length - additionSeparator.length);
  }
  for (let i = 0; i < repeatTimes; i++) {
    result.push(value);
  }
  return result.join(separator);
}

module.exports = {
  repeater
};