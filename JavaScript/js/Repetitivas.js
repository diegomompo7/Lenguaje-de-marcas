function numero()
{
	var campoResultado,
		numero,
		contador;

	campoResultado = document.getElementById('Resultado');
	numero = parseInt(document.getElementById('Numero').value);
	contador = 1;
	while (contador<=numero){
		campoResultado.innerHTML += " " ++contador;
	}
}