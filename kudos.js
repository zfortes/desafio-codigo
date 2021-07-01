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


const { wrap } = require('./numberToText');


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
  getKudosValueMessageForUser
  
};
