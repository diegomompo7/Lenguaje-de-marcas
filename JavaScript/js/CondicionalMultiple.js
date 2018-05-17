function CalcularEtapa()
{
	var campoEdad,
	    valorEdad,
		campoResultado;

	campoResultado = document.getElementById('Resultado');
	campoEdad = document.getElementById('Edad');
	valorEdad = parseInt(campoEdad.value);

	switch(valorEdad)
	{
		case 12:
		campoResultado.innerHTML = " Infancia";
		break;
		case 13:
		campoResultado.innerHTML = " Adolesencia";
		break;
		case 17:
		campoResultado.innerHTML = "Juventud";
		break;
		case 23:
		campoResultado.innerHTML = "Adulto";
		break;
	}
	

}