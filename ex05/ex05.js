function calculaCombustivel() {
	var tempo = prompt("Quanto tempo de viagem?");
	var velocidadeMedia = prompt("Qual foi sua velocidade média?");
	var distancia = tempo * velocidadeMedia;
	var litros = distancia / 12;

	console.log(
		`Sua velocidade média foi de ${velocidadeMedia}km/h, o tempo gasto na viagem foi ${tempo}h, gastando ${litros.toFixed(
			2
		)} litros de combustivel percorrendo ${distancia}Km`
	);
}
calculaCombustivel();
