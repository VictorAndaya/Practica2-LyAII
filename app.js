//var currentDate = new Date(); 
//var futureBlockDate = new Date(); 
//futureBlockDate.setDate(currentDate.getDate() + 30); 

const input = document.querySelector('.NC');
const Name = document.querySelector('.datos');
const Boton = document.getElementById('button-a');
const message = document.querySelector('invalid-feedback');

input.addEventListener('change', validateNc);
Name.addEventListener('change',fecha);


function fecha() {
    var inicio = document.getElementById('fechaIni').value;
    var finalq = document.getElementById('fechaTer').value;
    var primera = Date.parse(inicio);
    var segunda = Date.parse(finalq);
    var Nombre = document.getElementById("Nombre").value;
    var ApePat = document.getElementById("ApePat").value;

    if(/\s|\s$/.test(Nombre)){
        Name.classList.add('is-invalid');
        Boton.disabled = true;
    }else{
        Name.classList.remove('is-invalid');
        Name.classList.add('is-valid');
        Boton.disabled = false;
    }

    if (primera == segunda) {
        alert("El campo fecha de inicio no puede ser igual a la fecha de termino");
    } else if (primera > segunda) {
        alert("El campo fecha de termino no puede ser menor a la fecha de inicio");
    }


}

function validateNc() {
    var NC = document.getElementById("NC").value
    if(NC.match(/(0|1|9)\d(09)[0-4]\d\d\d$/ || /\s+$/.test(NC)) == null){
        input.classList.add('is-invalid');
        Boton.disabled = true;
    }else{
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        Boton.disabled = false;
    }
    
}

function check(e) {
    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8) {
        return true;
    }

    // Patron de entrada, en este caso solo acepta numeros y letras
    patron = /[\SA-Za-z]|[A-Za-z\s]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}

function only(e) {
    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8) {
        return true;
    }

    // Patron de entrada, en este caso solo acepta numeros y letras
    patron = /[0-9]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}


