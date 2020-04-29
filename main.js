let NC = document.getElementById('NC');
let Nombre = document.getElementById('Nombre'); 



var wb = XLSX.utils.book_new();
        wb.Props = {
                Title: "SheetJS Tutorial",
                Subject: "Test",
                Author: "Victor Andaya",
                CreatedDate: new Date(2020,04,29)
        };
        
        wb.SheetNames.push("Datos");
        var ws_data = [[NC , Nombre]];
        var ws = XLSX.utils.aoa_to_sheet(ws_data);
        wb.Sheets["Datos"] = ws;
        var wbout = XLSX.write(wb, {bookType:'xlsx',  type: 'binary'});
        function s2ab(s) {
  
                var buf = new ArrayBuffer(s.length);
                var view = new Uint8Array(buf);
                for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
                return buf;
                
        }
        $("#button-a").click(function(){
                saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), 'test.xlsx');
        });