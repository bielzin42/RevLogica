function volumeObjeto() {
	var altura = Number(prompt("Digite a altura do objeto em cm: "));
	var raio = Number(prompt("digite o raio do objeto"));
	var volume = 3.14159 * (raio * raio) * altura;
	console.log(`O objeto tem o volume de ${volume.toFixed(2)}cm`);
}
volumeObjeto();
