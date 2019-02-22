function Mostrar()
{
//tomo el mes 
var mesDelAnio = document.getElementById('mes').value;

//alert (mesDelAño);

var mes;

switch (mesDelAnio) {

    case "Febrero":
    alert (" Este mes no tiene más de 29 días." );
    break;

    case "Enero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
    case "Julio":
    case "Agosto":
    case "septiembre":
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
    alert("Este mes tiene 30 o más días");
    break;
}
	


}//FIN DE LA FUNCIÓN