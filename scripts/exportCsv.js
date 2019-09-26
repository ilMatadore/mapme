function downloadCSV(csv, filename) {
    var csvFile;
    var downloadLink;
    var csv = "\ufeff"+csv;
    /* CSV file */
    csvFile = new Blob([csv], {type: "text/csv; charset=utf-18"});

    /* Download link */
    downloadLink = document.createElement("a");

    /* File name */
    downloadLink.download = filename;

    /* Create a link to the file */
    downloadLink.href = window.URL.createObjectURL(csvFile);

    /* Hide download link */
    downloadLink.style.display = "none";

    /* Add the link to DOM */
    document.body.appendChild(downloadLink);

    /* Click download link */
    downloadLink.click();
}

function exportTableToCSV(filename,clicked_id) {
    var csv = [];
    if (clicked_id == "export") {
        var rows = document.getElementById("table");
        if (tbody.childNodes.length == 0) {
        alert("Please load data first");
        return;
        };
    } else {    
        var rows = document.getElementById("tableRev");
        if (tbodyRev.childNodes.length == 0) {
        alert("Please load data first");
        return;
        };
    }
    var rows2= rows.querySelectorAll("tr");
    var rows3= rows.querySelectorAll("input");

    for (var i = 0; i < rows2.length; i++) {
        var row = [];
        var cols = rows2[i].querySelectorAll("th");
        var cols2 = rows2[i].querySelectorAll("td");
        var cols3 = rows2[i].querySelectorAll("input");

        for (var j = 0; j < cols.length; j++) {
            if (cols[j].innerText !== "") {
               row.push(cols[j].innerText);
        }
        }

        for (var z = 0; z < cols3.length; z++) 
           row.push(cols3[z].value);
            
        for (var x = 0; x < cols2.length; x++) {
            if (cols2[x].textContent !== "") {
                row.push(cols2[x].textContent);
            }
        }


        csv.push(row.join(","));        
    }

    /* Download CSV file */
   downloadCSV(csv.join("\n"), filename);
};

