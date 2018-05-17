class Contacto{

	constructor(n,t) {
		this.nombre = n;
		this.telefono = t;
	}

	Escribir() {
		var Resultado;
		Resultado = document.getElementById('Resultado');
		Resultado.innerHTML = 
			"Nombre: " + this.nombre + "<br>";
			"Teléfono" + this.telefono + "<br>";
	}

	CambiarTelefono(nuevoT) {
		this.telefono = nuevoT;
	}
}
function CrearContacto() {
	var c1 = new Contacto("Pepe", 1111111111),
	c1.Escribir();
}

