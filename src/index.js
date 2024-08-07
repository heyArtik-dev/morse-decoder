const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  const space = ' ';
  const dot = '.';
  const dashes = '-';
  const zero = '00';
  const ten = '10';
  const elvn = '11';
  let ltr = '';
  let morse = [];
  let letters = [];
  let result = '';

  for (let i = 0; i < expr.length; i += 10) {
    letters.push(expr.substr(i, 10));
  }

  for (let key in letters) {
    addDotsDashes(letters[key]);
  }

  function addDotsDashes(str) {
    for (let i = 0; i < str.length; i += 2) {
      let item = str.substr(i, 2);

      if (item == zero) {
        ltr += '';
      } else if (item == ten) {
        ltr += dot;
      } else if (item == elvn) {
        ltr += dashes;
      } else if (item == '**') {
        ltr += ' ';
        i += 8;
      }
    }
    morse.push(ltr);
    ltr = '';
  }

  for (let i = 0; i < morse.length; i++) {
    if (morse[i] == space) result += space;
    for (let key in MORSE_TABLE) {
      if (key == morse[i]) {
        result += MORSE_TABLE[key];
      }
    }
  }
  return result;
}

module.exports = {
    decode
}
