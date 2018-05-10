function ObtenerOperando(idOperando) {
	var Operando;
	Operando = document.getElementById(idOperando);
	return parseInt(Operando.value);
	
}


function RealizaOperacion(TipoOperacion){

	var Resultado;
	var Operacion;
	var valor;

	Operacion = document.getElementById(TipoOperacion);

	if (TipoOperacion == '+') 
		 valor = ObtenerOperando('Operando1') + ObtenerOperando('Operando2');
	else if(TipoOperacion == '-')
		   valor = ObtenerOperando('Operando1') - ObtenerOperando('Operando2');
	else if(TipoOperacion == '*')
		   valor = ObtenerOperando('Operando1') * ObtenerOperando('Operando2');
	else if(TipoOperacion == '/')
		   valor = ObtenerOperando('Operando1') - ObtenerOperando('Operando2');
	else
		valor = 0;
	Resultado = document.getElementById('Resultado').innerHTML = valor;

	// 1. obtener el valor del primer operando
	// 2. obtener el valor del segun oprando
	// 3. realizar la operaciuon con los operacion y segun el valor y tipo de operación
	// 4. Guardar resultado
}