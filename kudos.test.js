const kudos = require('./kudos');

test('test getKudosForUser', () => {
  expect(kudos.getKudosForUser(30)).toEqual(['GOOD', 'NICE']);
  expect(kudos.getKudosForUser(40)).toEqual(['GOOD', 'GOOD']);
  expect(kudos.getKudosForUser(100)).toEqual(['SUPER']);
});

test('test getKudosValueMessageForUser', () => {
  expect(kudos.getKudosValueMessageForUser(kudos.getKudosForUser(30)))
    .toEqual('Você recebeu treze reais em retorno aos kudos GOOD, NICE!');
});

test('test wrap', () => {
  expect(kudos.wrap(100)).toEqual("cem");
  expect(kudos.wrap(200)).toEqual("duzentos");
  expect(kudos.wrap(201)).toEqual("duzentos e um");
  expect(kudos.wrap(210)).toEqual("duzentos e dez");
  expect(kudos.wrap(211)).toEqual("duzentos e onze");
  expect(kudos.wrap(220)).toEqual("duzentos e vinte");
  expect(kudos.wrap(1000)).toEqual("um mil");
  expect(kudos.wrap(1001)).toEqual("um mil e um");
  expect(kudos.wrap(1099)).toEqual("um mil e noventa e nove");
  expect(kudos.wrap(1100)).toEqual("um mil e cem");
  expect(kudos.wrap(1101)).toEqual("um mil e cento e um");
  expect(kudos.wrap(1115)).toEqual("um mil e cento e quinze");
  expect(kudos.wrap(1300)).toEqual("um mil e trezentos");
  expect(kudos.wrap(10000)).toEqual("dez mil");
  expect(kudos.wrap(10001)).toEqual("dez mil e um");
  expect(kudos.wrap(10100)).toEqual("dez mil e cem");
  expect(kudos.wrap(10101)).toEqual("dez mil e cento e um");
  expect(kudos.wrap(10999)).toEqual("dez mil e novecentos e noventa e nove");
  expect(kudos.wrap(15999)).toEqual("quinze mil e novecentos e noventa e nove");
  expect(kudos.wrap(100000)).toEqual("cem mil");
  expect(kudos.wrap(100001)).toEqual("cem mil e um");
  expect(kudos.wrap(100090)).toEqual("cem mil e noventa");
  expect(kudos.wrap(100999)).toEqual("cem mil e novecentos e noventa e nove");
  expect(kudos.wrap(120000)).toEqual("cento e vinte mil");
  expect(kudos.wrap(125222)).toEqual("cento e vinte e cinco mil e duzentos e vinte e dois");
  expect(kudos.wrap(999999)).toEqual("novecentos e noventa e nove mil e novecentos e noventa e nove");





})
