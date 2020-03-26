var sexos = [
	"feminino",
	"masculino",
	"feminino",
	"feminino",
	"feminino",
	"feminino",
	"masculino",
	"feminino",
	"masculino",
	"feminino"
];
var corDosOlhos = [
	"preto",
	"castanho",
	"preto",
	"castanho",
	"castanho",
	"preto",
	"castanho",
	"castanho"
];
var corDosCabelos = [
	"castanhos",
	"pretos",
	"castanhos",
	"pretos",
	"castanhos",
	"loiros",
	"castanhos",
	"castanhos"
];
var idades = [6, 5, 8, 7, 35, 32, 18, 19];
var quantSexosFem = [];
var quantidadeCabeloPretoeOlhosCastanhos = [];

// função para criação das "pessoas". cada pessoa tem os dados informados guardados na mesma index, ou seja, a primeira pessoa tera todos os dados guardados nas indexes 0 de todos os argumentos em arrays diferentes, facilitando a busca e podendo usar como uma espécie de ID.
function pessoa(sexo, corOlhos, corCabelos, idade) {
	sexos.push(sexo);
	corDosOlhos.push(corOlhos);
	corDosCabelos.push(corCabelos);
	idades.push(idade);
}
// função simples que retorna a pessoa mais velha do array idades, falta implementar quem é essa pessoa.
function maiorIdade() {
	var maior = Math.max.apply(null, idades);
	console.log(`A maior idade é a de ${maior}.`);
	return maior;
}
// autorxplicativo.
function feminino18a35() {
	for (let i = 0; i < sexos.length; i++) {
		if (sexos[i] == "feminino") {
			if (idades[i] > 17 && idades[i] < 36) {
				quantSexosFem.push(i);
			}
		}
	}
	console.log(
		`A quantidade de pessoas do sexo feminino e idade entre 17 e 36 anos é de ${quantSexosFem.length} \n e elas se encontram respectivamente nas indexes ${quantSexosFem}.`
	);
	return quantSexosFem.length;
}
// mais autoexplicativo ainda.
function olhosCastanhosCabelosPretos() {
	for (let b = 0; b < corDosOlhos.length; b++) {
		if (corDosOlhos[b] == "castanho") {
			if (corDosCabelos[b] == "pretos") {
				quantidadeCabeloPretoeOlhosCastanhos.push(b);
			}
		}
	}
	console.log(
		`A quantidade de pessoas com olhos pretos e cabelos castanhos é: ${quantidadeCabeloPretoeOlhosCastanhos.length} \n elas se encontram respectivamente nas indexes ${quantidadeCabeloPretoeOlhosCastanhos}.`
	);
	return quantidadeCabeloPretoeOlhosCastanhos.length;
}

// invocando as funções;
maiorIdade();
feminino18a35();
olhosCastanhosCabelosPretos();

alert(
	'As funções foram invocadas com valores fictícios a fim de teste. você pode zerar os arrays e usar a função pessoa() para criar suas "pessoas" personalizadas.'
);
