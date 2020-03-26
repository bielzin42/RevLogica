var total = [];
const escolha = prompt(
	"O que você deseja fazer? \n 1 - Calcular os gastos de um hospede \n 2 - Calcular todos os ganhos \n 3 - Para zerar o total de ganhos é só apertar F5 \n os dados são enviados para o console."
);

if (escolha == 1) {
	calculoDias(
		prompt("Qual o nome do hospede?"),
		prompt("Quantos dias o hospede ficou?")
	);
} else {
	if (escolha == 2) {
		totalGanho(prompt("Quantidade de quartos ou clientes"));
	} else {
		if (escolha == 3) {
			total = [];
		} else {
			alert("Escolha um número válido, aperte F5 para recomeçar.");
		}
	}
}

function calculoDias(nome, dias) {
	var calculo = 0;
	if (dias < 15) {
		calculo = (50 + 4) * dias;
	} else {
		if (dias == 15) {
			calculo = (50 + 3.6) * dias;
		} else {
			calculo = (50 + 3) * dias;
		}
	}
	console.log(`${nome} ficou ${dias} dias e sua conta é de R$${calculo}`);
	return calculo;
}

function totalGanho(totalQuartos) {
	for (i = 1; i <= totalQuartos; i++) {
		total.push(
			calculoDias(
				prompt(`Qual o nome do hóspede ${i}?`),
				parseInt(prompt(`quanto tempo o hóspede ${i} ficou no hotel?`))
			)
		);
	}
	alert("dados enviados ao console.");
	console.log(
		`O total de ganhos foi de R$${total.reduce((a, b) => a + b, 0)}.`
	);
}
