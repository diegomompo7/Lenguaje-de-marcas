function ObtenerOperando(idOperando) {
	var Operando;
	Operando = document.getElementById(idOperando);
	return parseInt(Operando.value);
	
}


function Sumar() {

	var Resultado;
	var ValorSuma;


	Resultado = document.getElementById('Resultado');
	ValorSuma = ObtenerOperando('Operando1') + ObtenerOperando('Operando2');
	Resultado.innerHTML = ValorSuma;
}

function Restar() {

	var Resultado;
	var ValorResta;


	Resultado = document.getElementById('Resultado');
	ValorResta = ObtenerOperando('Operando1') - ObtenerOperando('Operando2');
	Resultado.innerHTML = ValorResta;
}

function Multiplicar() {

	var Resultado;
	var ValorMultiplicar;


	Resultado = document.getElementById('Resultado');
	ValorMultiplicar = ObtenerOperando('Operando1') * ObtenerOperando('Operando2');
	Resultado.innerHTML = ValorMultiplicar;
}

function Dividir() {

	var Resultado;
	var ValorDividir;


	Resultado = document.getElementById('Resultado');
	ValorDividir = ObtenerOperando('Operando1') / ObtenerOperando('Operando2');
	Resultado.innerHTML = ValorDividir;
}