function diasVividos() {
	var diaNascimento = parseInt(prompt("Que dia você nasceu?"));
	var mesNascimento = parseInt(prompt("Que mês você nasceu?"));
	var anoNascimento = parseInt(prompt("Qual ano você nasceu?"));
	var diaFinal = parseInt(prompt("até que dia você deseja contar?"));
	var mesFinal = parseInt(prompt("até que mês você deseja contar?"));
	var anoFinal = parseInt(prompt("Até que ano você deseja contar?"));

	ccalculo =
		diaFinal -
		diaNascimento +
		(mesFinal - mesNascimento) * 30 +
		(anoFinal - anoNascimento) * 365;

	if (ccalculo >= 0) {
		console.log(`Você viveu aproximadamente ${ccalculo} dias.`);
	} else {
		console.log("digite um valor válido e tente novamente apertando F5.");
	}
}
diasVividos();
