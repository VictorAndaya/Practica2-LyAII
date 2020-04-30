/*function doGet() {
        return HtmlService.createHtmlOutputFromFile('inicio')
            .setSandboxMode(HtmlService.SandboxMode.IFRAME);
    }

    //Obtener los valores del formulario.
    function obtenerValores(formulario) {
        var NC = formulario.NC,
            Nombre = formulario.Nombre,
            libro = SpreadsheetApp.openById('1S9EjEo6IJ8DKvq3xO5ZDOEqV2FXCWUhNUmPDzweURtM'),
            hoja = libro.getSheetByName('Hoja 1');
        hoja.appendRow([NC, Nombre]);
    }*/

/*
var wb = XLSX.utils.book_new();
wb.Props = {
    Title: "Lenguajes y Automatas 2",
    Subject: "Prueba",
    Author: "Victor Andaya",
    CreatedDate: new Date(2020, 04, 29)
};

wb.SheetNames.push("Hoja de Prueba");
var ws_data = [['hello', 'world']];
var ws = XLSX.utils.aoa_to_sheet(ws_data);
wb.Sheets["Hoja de Prueba"] = ws;
var wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });
function s2ab(s) {

    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;

}
$("#button-a").click(function () {
    saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), 'test.xlsx');
});
*/
function Regresar() { 
    window.location = "https://victorandaya.github.io/Practica2-LyAII/";
 }