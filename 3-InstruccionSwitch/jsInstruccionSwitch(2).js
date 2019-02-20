function Mostrar()
{
//tomo el mes 
var mesDelAnio = document.getElementById('mes').value;


var mes;

switch (mesDelAnio){
    case "Julio":
    case "Agosto":
    alert("Abrigate que hace frio.");
    break; 

    case "Abril":
    case "Mayo":
    case "Junio":
    alert ("Falta para el invierno.");
    break;


    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
    case "Enero":
    case "Febrero":
    case "Marzo":
    alert ( "Ya pasamos el frio, ahora calor!!!.");
    break;



}


}//FIN DE LA FUNCIÓN