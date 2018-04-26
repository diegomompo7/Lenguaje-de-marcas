function CambiarTexto(argument) {

	var miParrafo;

	var precio = 22.65;

	miParrafo = document.getElementByID('Resultado');
	miParrafo.innerHTML = "Texto cambiado";
	precio = precio + 10;
	miParrafo.innerHTML +=
		"El precio es" + precio +"<br>";
}