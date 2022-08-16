// 2- Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura,
// año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y
// cual es el rasgo característico de esta generación.
// Para realizar este método tener en cuenta la siguiente tabla de generaciones:
// esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
// mostrarDatos: devuelve toda la información del objeto.

// Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona,
// permitiendo ingresar las propiedades mediante un formulario, también agregar los botones “mostrar generación”,
//  es “mayor de edad” e indicar en un alert el resultado de la función correspondiente.
class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, anioDeNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anioDeNacimiento = anioDeNacimiento;
  }

  mostrarGeneracion() {
    document.write(`
      <ul> 
      <h2>${this.nombre}</h2>
      <li>Año de nacimiento: ${this.anioDeNacimiento}</li>  
      <li>El rasgo caracteristico de esta generacion es </li>  
      </ul>`);
  }
  esMayorDeEdad() {
    if (this.edad >= 18) {
      document.write(`
      <ul> 
      <h2>${this.nombre}</h2>
      <li>Es mayor de edad ya que nacio en el año ${this.anioDeNacimiento} y tiene ${this.edad} años</li>  
      </ul>`);
    } else {
      document.write(`
        <ul> 
        <h2>${this.nombre}</h2>
        <li>No es mayor de edad ya que nacio en el año ${this.anioDeNacimiento} y tiene ${this.edad} años</li>  
        </ul>`);
    }
  }
  mostrarDatos() {
    document.write(`<ul>
      <h3>Datos Personales</h3>
     <li>Nombre: ${this.nombre}</li>
      <li>Edad: ${this.edad}</li>   
      <li>Sexo: ${this.sexo}</li>   
      <li>Peso: ${this.peso}</li>   
      <li>Altura: ${this.altura}</li>   
      <li>DNI: ${this.dni}</li>   
      <li>Año de nacimiento: ${this.anioDeNacimiento}</li>   
      </ul>`);
  }
}


// agregar variables y llamar valores con queryselector
let agregarNombre = document.querySelector("#inputAgregarNombre").value;
console.log(agregarNombre.value);
let agregarEdad = document.querySelector("#inputAgregarEdad").value;
let agregarSexo = document.querySelector("#inputAgregarDni").value;
let agregarDni = document.querySelector("#inputAgregarSexo").value;
let agregarPeso = document.querySelector("#inputAgregarPeso").value;
let agregarAltura = document.querySelector("#inputAgregarAltura").value;
let agregarAnio = document.querySelector("#inputAgregarAnio").value;


let Matias = new Persona(
  agregarNombre.innerHTML = agregarNombre,
  agregarEdad.innerHTML,
  agregarDni.innerHTML,
  agregarSexo.innerHTML,
  agregarPeso.innerHTML,
  agregarAltura.innerHTML,
  agregarAnio.innerHTML
);

Matias.mostrarDatos();
