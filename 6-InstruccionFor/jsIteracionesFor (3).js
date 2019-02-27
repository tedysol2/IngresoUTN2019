function Mostrar()
{

var repetciones = prompt("ingrese el número de repeticiones");

while (isNaN(repeticiones)){
    repeticiones= parseInt(prompt("eso no es un numero. ingrese el numero"))
}

for ( var i = 0 ; i < repeticiones ; i++){
    console.log( "Hola UTNFRA");

}


}//FIN DE LA FUNCIÓN