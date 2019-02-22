function Mostrar()
{
//tomo el mes 
var mesDelAnio = document.getElementById('mes').value;

//alert (mesDelAño);
	
    var mes;
    switch (mesDelAnio){
        case "Enero":
        case "Marzo":
        case "Mayo":
        case "julio":
        case "Agosto":
        case "Octubre":
        case "Diciembre":
        alert("si tiene 31 días");
        break;

       
        case "Abril":
        case "junio":
        case "Septiembre":
        case "Noviembre":
        alert("si tiene 30 días");
        break;

        case "Febrero":
        alert("si tiene 28 días.");
        break;
    
    
        

    }



}//FIN DE LA FUNCIÓN