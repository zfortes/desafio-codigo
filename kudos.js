// Conversão de kudos para pontos e reais
const KUDOS = [
  { name: 'OK', point: 5, reais: 2 },
  { name: 'NICE', point: 10, reais: 5},
  { name: 'GOOD', point: 20, reais: 8},
  { name: 'GREAT', point: 50, reais: 15},
  { name: 'SUPER', point: 100, reais: 25},
];

const { wrap } = require('./numberToText');

/* 
  Recebe: um int representando o número de pontos do usuário
  Retorna: um array contendo os kudos. Ex.: ['OK', 'GOOD'] 
*/
function getKudosForUser(points) {
  let rest = points, integer, kudos = [];
  let k = KUDOS.length - 1;
  for (k; rest > 0 && k >= 0; k--){ // usando um for com rest > 0 pois um .filter passaria por todas as posicoes do vetor
    [integer, rest] = divisionFunction(rest, KUDOS[k].point);
    for (i = 0 ; i < integer; i++) kudos.push(KUDOS[k].name);
  }
  return kudos;
}

/**
 * Faz a divisao entre dois numero e retorna o resto e a parte inteira do resultado como uma tupla 
 * @param {*} dividend 
 * @param {*} divisor 
 * @returns 
 */
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
	let sum = 0, listKudosText = ""; 
	const t = kudos.forEach((r, v) => {
		const vKudo = KUDOS.find(x => x.name === r).reais;
		sum += vKudo;
		listKudosText += v !== kudos.length - 1 ? r + ", ": r;
	});
	return "Você recebeu " + wrap(sum) + " reais em retorno aos kudos " + listKudosText + "!";
}

console.log(getKudosValueMessageForUser(getKudosForUser(30)));

module.exports = {
  getKudosForUser,
  getKudosValueMessageForUser
};
