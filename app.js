//var currentDate = new Date(); 
//var futureBlockDate = new Date(); 
//futureBlockDate.setDate(currentDate.getDate() + 30); 


const input = document.querySelector('.NC');
const nombre = document.querySelector('');
const apePat = document.querySelector('');


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
    if(NC.match(/(0|1|9)\d(09)[0-4]\d\d\d$/) == null || NC == ""){
        input.classList.add('is-invalid');
    }else{
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
    }
}


