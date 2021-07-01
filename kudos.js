// Conversão de kudos para pontos
const KUDOS_TO_POINTS = [
  { name: 'OK', value: 5 },
  { name: 'NICE', value: 10 },
  { name: 'GOOD', value: 20 },
  { name: 'GREAT', value: 50 },
  { name: 'SUPER', value: 100 },
];

// Conversão de kudos para reais
const KUDOS_TO_REAL = [
  { name: 'OK', value: 2 },
  { name: 'NICE', value: 5 },
  { name: 'GOOD', value: 8 },
  { name: 'GREAT', value: 15 },
  { name: 'SUPER', value: 25 },
];


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
	console.log(number)
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
	console.log("num = "+num)
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

/* 
  Recebe: um int representando o número de pontos do usuário
  Retorna: um array contendo os kudos. Ex.: ['OK', 'GOOD'] 
*/
function getKudosForUser(points) {
  let rest = points;
  let integer;
  let kudos = [];
  let k = KUDOS_TO_POINTS.length - 1;
  for (k; rest > 0 && k >= 0; k--){ // usando um for com rest > 0 pois um .filter passaria por todas as posicoes do vetor
    [integer, rest] = divisionFunction(rest, KUDOS_TO_POINTS[k].value);
    for (i = 0 ; i < integer; i++) kudos.push(KUDOS_TO_POINTS[k].name);
  }
  return kudos;
}

function divisionFunction(dividend, divisor){
  const integer = Math.floor(dividend/divisor);
  const rest = dividend % divisor;
  return [integer, rest]
}

/* 
  Recebe: Recebe um array contendo os nomes dos kudos de um usuário. Ex.: ['OK', 'GOOD']
  Retorna: a mensagem padrão com o valor em reais dos kudos por extenso. Ex.: Parabéns, você ganhou vinte e cinco reais
*/
function getKudosValueMessageForUser(kudos) {
  
	let sum = 0;
	let listKudosText = ""; 
	kudos.map((r, v) => {
		const vKudo = KUDOS_TO_REAL.find(x => x.name === r).value;
		sum += vKudo;
		listKudosText += v !== kudos.length - 1 ? r + ", ": r;
	});
	
	return "Você recebeu " + wrap(sum) + " reais em retorno aos kudos " + listKudosText + "!";
  
}

// console.log(wrap(301));

console.log(getKudosValueMessageForUser(getKudosForUser(40)));

module.exports = {
  getKudosForUser,
  getKudosValueMessageForUser,
  wrap
};
