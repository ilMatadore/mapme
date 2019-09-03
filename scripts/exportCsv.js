function downloadCSV(csv, filename) {
    var csvFile;
    var downloadLink;
    var csv = "\ufeff"+csv;
    // CSV file
    csvFile = new Blob([csv], {type: "text/csv; charset=utf-18"});

    // Download link
    downloadLink = document.createElement("a");

    // File name
    downloadLink.download = filename;

    // Create a link to the file
    downloadLink.href = window.URL.createObjectURL(csvFile);

    // Hide download link
    downloadLink.style.display = "none";

    // Add the link to DOM
    document.body.appendChild(downloadLink);

    // Click download link
    downloadLink.click();
}

function exportTableToCSV(filename,clicked_id) {
    
    var csv = [];
    if (clicked_id == "export") {
        var rows = document.getElementById("table");
    } else {    
        var rows = document.getElementById("tableRev");
    }
    var rows2= rows.querySelectorAll("tr");

    for (var i = 0; i < rows2.length; i++) {
        var row = [], cols = rows2[i].querySelectorAll("td, th");
        
        for (var j = 0; j < cols.length; j++) 
            row.push(cols[j].innerText);
        
        csv.push(row.join(","));        
    }

    // Download CSV file
    downloadCSV(csv.join("\n"), filename);
}

