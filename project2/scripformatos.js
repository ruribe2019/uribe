/* Ejerciio1
//[Paso 1] Creación de una variable “data” con un stringJSON
var data='[ { "name": "Aragorn", "race": "Humana" }, { "name": "Gimli", "race": "Dwarf" } ]';
console.log(data);

//[Paso 2] Decodificar el string
data=JSON.parse(data);
console.log(data);
console.log(data[1].name)

//[Paso 3] Acceder a los datos como un objeto normal
// Ejemplo: recorrer el objeto con iteraciones
for(var i=0; i<data.length; i++) {
console.log("El personaje "+data[i].name+' es de raza '+data[i].race+'.')
}*/

/*Ejercicio 2
// paso 1
//Crear data en data.json

// [Paso 2] Se instancia un nuevo objeto con el prototipo de un XMLHttpRequest()
var request=new XMLHttpRequest();

//[Paso 3] Se abre la solicitud indicando que una solicitud GET se usará para abrir el archivo
request.open('GET', 'data.json', true);

//[Paso 4] Especificarle a Javascriptque hacer cuándo el archivo esté cargado
// se crea una funcion
request.onload=function() {
    var data = JSON.parse(this.response); // esto se refiere al requesten este contexto
    console.log(data); // Podemos ver los datos
    for(i=0; i<data.length; i++) {
    console.log("El personaje "+data[i].name+' es de raza '+data[i].race+'.'); // Se imprimen llaves y valores en la consola
    }
    }

//[Paso 5] Enviar la solicitud
request.send();*/

//Ejericio 3
// [Paso 2] Se instancia un nuevo objeto con el prototipo de un XMLHttpRequest()
var request=new XMLHttpRequest();

//[Paso 3] Se abre la solicitud indicando que una solicitud GET se usará para abrir el archivo
request.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

//[Paso 4] Especificarle a Javascriptque hacer cuándo el archivo esté cargado
// se crea una funcion
request.onload=function() {
    var data = JSON.parse(this.response); // esto se refiere al requesten este contexto
    console.log(data); // Podemos ver los datos
    for(i=0; i<data.length; i++) {
    console.log(
    " Id "+data[i].id+"\n"+
    " Nombre "+data[i].name+"\n"+
    ' Nick  '+data[i].username+"\n"+
    ' Ciudad  '+data[i].address.city+"\n"+
    ' Latitud  '+data[i].address.geo.lat+"\n"+
    ' _____________________________'+"\n"); // Se imprimen llaves y valores en la consola
    }
    }
    request.send();

