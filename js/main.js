function doGet() {
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
    }