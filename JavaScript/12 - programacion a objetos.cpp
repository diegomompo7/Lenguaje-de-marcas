class Contacto {
	public char nombre[30];
	public long telefono;

	public Contacto(char n[30], long t){
		strcpy(this.nombre,n);
		this.telefono = t;
	}

	void Escribir(Contacto, c){
	printf("Nombre: %s telefono: %ld", this.nombre,this.telefono);
	}

	void CambiarTelefono(long nt){
	this.telefono = nt;
	}
}
int main()
{ 
	Contacto c1;
	c1 = new Contacto("Pepe",111111111);
	c1.Escribir();
	c1.CambiarTelefono(222222222);
	return 0;
} 
