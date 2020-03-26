function descontos() {
	var salarioBruto = Number(prompt("Qual é o seu salário bruto?"));
	var desconto1 = salarioBruto - salarioBruto * 0.1;
	var desconto2 = desconto1 - desconto1 * 0.05;

	console.log(
		`Seu salário bruto foi de R$${salarioBruto} seu desconto inicial foi de 10%, restando R$${desconto1}, e seu segundo desconto foi de 5% totalizando seu salário líquido de R$${desconto2}.`
	);
}
descontos();
