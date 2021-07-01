const numberToText = require("./numberToText");

test('test decimals wrap', () => {
    expect(numberToText.wrap(1)).toEqual("um");
    expect(numberToText.wrap(2)).toEqual("dois");
    expect(numberToText.wrap(3)).toEqual("três");
    expect(numberToText.wrap(4)).toEqual("quatro");
    expect(numberToText.wrap(5)).toEqual("cinco");
    expect(numberToText.wrap(6)).toEqual("seis");
    expect(numberToText.wrap(7)).toEqual("sete");
    expect(numberToText.wrap(8)).toEqual("oito");
    expect(numberToText.wrap(9)).toEqual("nove");
    expect(numberToText.wrap(10)).toEqual("dez");
    expect(numberToText.wrap(11)).toEqual("onze");
    expect(numberToText.wrap(12)).toEqual("doze");
    expect(numberToText.wrap(13)).toEqual("treze");
    expect(numberToText.wrap(14)).toEqual("catorze");
    expect(numberToText.wrap(15)).toEqual("quinze");
    expect(numberToText.wrap(16)).toEqual("dezesseis");
    expect(numberToText.wrap(17)).toEqual("dezessete");
    expect(numberToText.wrap(18)).toEqual("dezoito");
    expect(numberToText.wrap(19)).toEqual("dezenove");
    expect(numberToText.wrap(20)).toEqual("vinte");
    expect(numberToText.wrap(21)).toEqual("vinte e um");
    expect(numberToText.wrap(22)).toEqual("vinte e dois");
    expect(numberToText.wrap(23)).toEqual("vinte e três");
    expect(numberToText.wrap(24)).toEqual("vinte e quatro");
    expect(numberToText.wrap(25)).toEqual("vinte e cinco");
    expect(numberToText.wrap(26)).toEqual("vinte e seis");
    expect(numberToText.wrap(27)).toEqual("vinte e sete");
    expect(numberToText.wrap(28)).toEqual("vinte e oito");
    expect(numberToText.wrap(29)).toEqual("vinte e nove");
    expect(numberToText.wrap(30)).toEqual("trinta");
    expect(numberToText.wrap(40)).toEqual("quarenta");
    expect(numberToText.wrap(50)).toEqual("cinquenta");
    expect(numberToText.wrap(60)).toEqual("sessenta");
    expect(numberToText.wrap(70)).toEqual("setenta");
    expect(numberToText.wrap(80)).toEqual("oitenta");
    expect(numberToText.wrap(90)).toEqual("noventa");
    expect(numberToText.wrap(91)).toEqual("noventa e um");
    expect(numberToText.wrap(92)).toEqual("noventa e dois");
    expect(numberToText.wrap(93)).toEqual("noventa e três");
})

test("test hundred wrap", () => { 
    expect(numberToText.wrap(100)).toEqual("cem");
    expect(numberToText.wrap(101)).toEqual("cento e um");
    expect(numberToText.wrap(110)).toEqual("cento e dez");
    expect(numberToText.wrap(111)).toEqual("cento e onze");
    expect(numberToText.wrap(112)).toEqual("cento e doze");
    expect(numberToText.wrap(120)).toEqual("cento e vinte");
    expect(numberToText.wrap(121)).toEqual("cento e vinte e um");
    expect(numberToText.wrap(122)).toEqual("cento e vinte e dois");
    expect(numberToText.wrap(123)).toEqual("cento e vinte e três");
    expect(numberToText.wrap(124)).toEqual("cento e vinte e quatro");
    expect(numberToText.wrap(125)).toEqual("cento e vinte e cinco");
    expect(numberToText.wrap(130)).toEqual("cento e trinta");
    expect(numberToText.wrap(140)).toEqual("cento e quarenta");
    expect(numberToText.wrap(150)).toEqual("cento e cinquenta");
    expect(numberToText.wrap(160)).toEqual("cento e sessenta");
    expect(numberToText.wrap(170)).toEqual("cento e setenta");
    expect(numberToText.wrap(180)).toEqual("cento e oitenta");
    expect(numberToText.wrap(190)).toEqual("cento e noventa");
    expect(numberToText.wrap(200)).toEqual("duzentos");
    expect(numberToText.wrap(201)).toEqual("duzentos e um");
    expect(numberToText.wrap(210)).toEqual("duzentos e dez");
    expect(numberToText.wrap(211)).toEqual("duzentos e onze");
    expect(numberToText.wrap(220)).toEqual("duzentos e vinte");
    expect(numberToText.wrap(300)).toEqual("trezentos");
    expect(numberToText.wrap(400)).toEqual("quatrocentos");
    expect(numberToText.wrap(500)).toEqual("quinhentos");
    expect(numberToText.wrap(600)).toEqual("seiscentos");
    expect(numberToText.wrap(700)).toEqual("setecentos");
    expect(numberToText.wrap(800)).toEqual("oitocentos");
    expect(numberToText.wrap(900)).toEqual("novecentos");
})


test("test thousand wrap", () => {
    expect(numberToText.wrap(1000)).toEqual("um mil");
    expect(numberToText.wrap(1001)).toEqual("um mil e um");
    expect(numberToText.wrap(1099)).toEqual("um mil e noventa e nove");
    expect(numberToText.wrap(1100)).toEqual("um mil e cem");
    expect(numberToText.wrap(1101)).toEqual("um mil e cento e um");
    expect(numberToText.wrap(1115)).toEqual("um mil e cento e quinze");
    expect(numberToText.wrap(1300)).toEqual("um mil e trezentos");
    expect(numberToText.wrap(10000)).toEqual("dez mil");
    expect(numberToText.wrap(10001)).toEqual("dez mil e um");
    expect(numberToText.wrap(10100)).toEqual("dez mil e cem");
    expect(numberToText.wrap(10101)).toEqual("dez mil e cento e um");
    expect(numberToText.wrap(10999)).toEqual("dez mil e novecentos e noventa e nove");
    expect(numberToText.wrap(15000)).toEqual("quinze mil");
    expect(numberToText.wrap(15999)).toEqual("quinze mil e novecentos e noventa e nove");
    expect(numberToText.wrap(100000)).toEqual("cem mil");
    expect(numberToText.wrap(100001)).toEqual("cem mil e um");
    expect(numberToText.wrap(100090)).toEqual("cem mil e noventa");
    expect(numberToText.wrap(100999)).toEqual("cem mil e novecentos e noventa e nove");
    expect(numberToText.wrap(120000)).toEqual("cento e vinte mil");
    expect(numberToText.wrap(125222)).toEqual("cento e vinte e cinco mil e duzentos e vinte e dois");
    expect(numberToText.wrap(999999)).toEqual("novecentos e noventa e nove mil e novecentos e noventa e nove");
})