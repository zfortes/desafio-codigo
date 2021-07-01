// Array com todos os nome dos números
const NUMBER_NAMES = {
	ones: ['', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove','dez', 'onze', 'doze', 'treze', 'catorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'],
	tens: ['', 'dez', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'],
	Singular: ['cem', 'mil'],
	Plural: ['cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos'],
}

/**
 * Verifica se um número realmente é um número
 * @param {*} obj 
 * @returns 
 */
function isNumber(obj) {
	return obj != null && !isNaN(obj) && toString.call(obj) == '[object Number]';
}

/**
 * Pega o primeiro algarismo do número e o procura no array de números
 * @param {*} number 
 * @returns 
 */
function getUnderHundredNumber(number){
	const num = number.toString();
	let numberName = NUMBER_NAMES.tens[parseInt(num[0])];
	return numberName + getNextNumber(parseInt(num[1]));
}

/**
 * Pega o primeiro algarismo do número e o procura no array de centenas
 * @param {numer} number 
 * @returns 
 */
function getUnderAThousandNumber(number){
	const num = number.toString();
	let numberName = NUMBER_NAMES.Plural[parseInt(num[0]) -1];
	return numberName + getNextNumber(parseInt(num.slice(1)));
}

/**
 * Divide o número em duas metades para que possa resolver cada metade como uma centana individual
 * @param {number} number 
 * @returns 
 */
function getUnderAMillionNumber(number){
    const num = number.toString();
	const numLength = num.length;
	let numberName = numberToText(parseInt(num.slice(0, numLength - 3))) + " mil";
	return numberName + getNextNumber(parseInt(num.slice(numLength - 3, numLength)));
}

/**
 * Verifica se o número é diferente de 0, caso sim procura o seu nome por extenso
 * @param {*} number 
 * @returns 
 */
function getNextNumber(number){
    return number !== 0 ? " e " + numberToText(parseInt(number)): "";
}

/**
 * Faz o switch entre as funções especificas para cada tamanho do número obedencendo as especificidades de cada tamanho
 * @param {*} number 
 * @returns 
 */
function numberToText(number) {
	if (number === 0) return ""; // se o numero for zero ele já retorna logo
	if (NUMBER_NAMES.ones[number]) return NUMBER_NAMES.ones[number];
	
	if (number <= 99 ) return getUnderHundredNumber(number);

	if (number === 100 ) return NUMBER_NAMES.Singular[0];

	if (number <= 999) return getUnderAThousandNumber(number);

    return getUnderAMillionNumber(number);
}

/**
 * Função inicial do conversor. Responsável por verificar se o número recebido é adequado. 
 * @param {*} number 
 * @returns 
 */
function wrap(number) {
	if (!isNumber(number)) {
		throw new Error('A entrada não é um número.');
	}

    if (number < 0 || number >= 1000000 ) {
		throw new Error('A lib só converte números maiores ou iguais a 0 e menores que 1000000');
	}

	number = Math.floor(number); // confirma que sera apenas a parte inteira
	var numberName = numberToText(number);
	return numberName;
}

module.exports = {
    wrap
};
  