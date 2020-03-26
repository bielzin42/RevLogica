function calculosDeSalario() {
	ht = Number(prompt("Horas trabalhadas no mês"));
	vh = Number(prompt("Valor da hora trabalhadas"));
	pd = Number(prompt("qual é o percentual de desconto?"));
	sb = ht * vh;
	td = (pd / 100) * sb;
	sl = sb - td;

	console.log(
		`Você trabalhou ${ht} recebendo ${vh} reais totalizando ${sb} reais de salário bruto. \n o percentual de desconto é ${pd}%, o total de descontos foi de ${td} reais e o seu salário líquido é ${sl} reais`
	);
}

calculosDeSalario();
