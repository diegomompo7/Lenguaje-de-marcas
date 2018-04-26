function CalcularOperadores(argument) {

	var miParrafo;
	var valor;


	miParrafo = document.getElementByID('Resultado');
	valor = 12 + 20;
	miParrafo.innerHTML +=
		"Sumando los numeros 12 y 20 =" + valor +"<br>";

	valor = 12 - 20;
	miParrafo:.innerHTML +=
		"Restando los numeros 12 y 20 =" + valor +"<br>";

		valor = 3 * 20;
	miParrafo.innerHTML +=
		"Multiplicando los numeros 12 y 20 =" + valor +"<br>";

		valor = 34 / 6;
	miParrafo.innerHTML +=
		"Dividiendo los numeros 12 y 20 =" + valor +"<br>";

		valor = 8;
	miParrafo.innerHTML +=
		"Sumando valor =" + (++valor) +"<br>";

		valor = 8;
	miParrafo.innerHTML +=
		"Sumando valor =" + (valor++) +"<br>";
}