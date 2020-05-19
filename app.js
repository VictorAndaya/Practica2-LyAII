//var currentDate = new Date(); 
//var futureBlockDate = new Date(); 
//futureBlockDate.setDate(currentDate.getDate() + 30); 


const input = document.querySelector('.NC');
input.addEventListener('change', validate);
function fecha() {
    var inicio = document.getElementById('fechaIni').value;
    var finalq = document.getElementById('fechaTer').value;


    var primera = Date.parse(inicio);
    var segunda = Date.parse(finalq);

    if (primera == segunda) {
        alert("El campo fecha de inicio no puede ser igual a la fecha de termino");
    } else if (primera > segunda) {
        alert("El campo fecha de termino no puede ser menor a la fecha de inicio");
    }
    
}


function validate() {

    var NC = document.getElementById("NC").value
    //var isValid = NC.match(/(0|1|9)\d(09)[0-4]\d\d\d$/) == null ? false : true;
    //alert("Permitido: " + isValid);

    if(NC.match(/(0|1|9)\d(09)[0-4]\d\d\d$/) == null){
        alert("El NUMERO DE CONTROL no contiene el formato deseado");
    }
}


