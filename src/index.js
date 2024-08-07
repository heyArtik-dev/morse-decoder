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
    const zero = '';
    const ten = '10';
    const elvn = '11';
    let morse = '';
    let letters = [];


    for (let i = 0; i < expr.length/ 10; i++) {
        letters.push(expr.substr(0, 10));

    }
    console.log(letters);
    
    
    
}

// module.exports = {
//     decode
// }



const expr = "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010";
// const result = "hello world";
decode(expr);