
const NUMBER_NAMES = {
	ones: ['', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove','dez', 'onze', 'doze', 'treze', 'catorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'],
	tens: ['', 'dez', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'],
	Singular: ['cem', 'mil'],
	Plural: ['cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos'],
}

function isNumber(obj) {
	return obj != null && !isNaN(obj) && toString.call(obj) == '[object Number]';
}


function getMinorHundredNumber(number){
	const num = number.toString();
	// console.log(number)
	let numberName = NUMBER_NAMES.tens[parseInt(num[0])];
	if (num[1] !== '0'){
		numberName = numberName + " e " + NUMBER_NAMES.ones[num[1]];
	}
	return numberName;
}

function getUnderAThousandNumber(number){
	// console.log(number)
	// console.log("Entrou")
	const num = number.toString();
	let numberName = NUMBER_NAMES.Plural[parseInt(num[0]) -1];
	const nSecondPart = num.slice(1);
	// console.log(nSecondPart)
	if (nSecondPart !== '00'){
		numberName += " e " + numberToText(parseInt(nSecondPart));
	}
	return numberName; //NUMBER_NAMES.Plural[parseInt(number[0]) - 1];
}

function numberToText(number) {
	// console.log(number)
	if (number === 0) return "";
	if (NUMBER_NAMES.ones[number]) {
		return NUMBER_NAMES.ones[number];
	}
	
	const num = number.toString()
	// console.log("num = "+num)
	if (number <= 99 ){
		return getMinorHundredNumber(number)
	}

	if (number == 100 ){
		return NUMBER_NAMES.Singular[0];
	}

	if (number <= 999){
		return getUnderAThousandNumber(num);
	}

	const numLength = num.length;
	const nSecondPart = num.slice(numLength - 3, numLength);
	let numberName = numberToText(parseInt(num.slice(0, numLength - 3))) + " mil";
	if (nSecondPart !== '000'){
		numberName += " e " + numberToText(parseInt(nSecondPart));
	}
	return numberName;

}

function wrap(number) {
	if (!isNumber(number)) {
		throw new Error('A entrada não é um número.');
	}
	number = Math.floor(number); // confirma que sera apenas a parte inteira
	var res = numberToText(number);
	return res;
}

module.exports = {
    wrap
};
  