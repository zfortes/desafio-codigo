const kudos = require('./kudos');

test('test getKudosForUser', () => {
  expect(kudos.getKudosForUser(5)).toEqual(['OK']);
  expect(kudos.getKudosForUser(10)).toEqual(['NICE']);
  expect(kudos.getKudosForUser(20)).toEqual(['GOOD']);
  expect(kudos.getKudosForUser(50)).toEqual(['GREAT']);
  expect(kudos.getKudosForUser(100)).toEqual(['SUPER']);
  expect(kudos.getKudosForUser(15)).toEqual(['NICE', 'OK']);
  expect(kudos.getKudosForUser(25)).toEqual(['GOOD', 'OK']);
  expect(kudos.getKudosForUser(30)).toEqual(['GOOD', 'NICE']);
  expect(kudos.getKudosForUser(35)).toEqual(['GOOD', 'NICE', 'OK']);
  expect(kudos.getKudosForUser(40)).toEqual(['GOOD', 'GOOD']);
  expect(kudos.getKudosForUser(60)).toEqual(['GREAT', 'NICE']);
  expect(kudos.getKudosForUser(65)).toEqual(['GREAT', 'NICE', 'OK']);
  expect(kudos.getKudosForUser(70)).toEqual(['GREAT', 'GOOD']);
  expect(kudos.getKudosForUser(75)).toEqual(['GREAT', 'GOOD', 'OK']);
  expect(kudos.getKudosForUser(80)).toEqual(['GREAT', 'GOOD', 'NICE']);
  expect(kudos.getKudosForUser(85)).toEqual(['GREAT', 'GOOD', 'NICE', 'OK']);
  expect(kudos.getKudosForUser(90)).toEqual(['GREAT', 'GOOD', 'GOOD']);
  expect(kudos.getKudosForUser(95)).toEqual(['GREAT', 'GOOD', 'GOOD', 'OK']);
});

test('test getKudosValueMessageForUser', () => {
  expect(kudos.getKudosValueMessageForUser(kudos.getKudosForUser(30)))
    .toEqual('Você recebeu treze reais em retorno aos kudos GOOD, NICE!');
  expect(kudos.getKudosValueMessageForUser(kudos.getKudosForUser(135)))
    .toEqual('Você recebeu quarenta reais em retorno aos kudos SUPER, GOOD, NICE, OK!');
  expect(kudos.getKudosValueMessageForUser(kudos.getKudosForUser(40)))
    .toEqual('Você recebeu dezesseis reais em retorno aos kudos GOOD, GOOD!');
  expect(kudos.getKudosValueMessageForUser(kudos.getKudosForUser(70)))
    .toEqual('Você recebeu vinte e três reais em retorno aos kudos GREAT, GOOD!');
});

