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
    let result = [];
    for (let i = 0; i < expr.length; i += 10) {
        result.push(expr.slice(i, i + 10));
    }
   let letters = result.map(el => {
        let word = '';
        for (let i = 0; i < el.length; i++) {
            if (el[i] === '1') {
                if (el[i+1] === '1') {
                    word += '-';
                    i+=1;
                }else word +='.';
            } 
        }
        return word;
    })

    return letters.map(elem => {
        if (elem === '') {
            return ' ';
        } else return MORSE_TABLE[elem];
    }).join('');

}

module.exports = {
    decode
}