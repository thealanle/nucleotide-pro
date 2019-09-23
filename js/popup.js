const button1 = document.getElementByID("submit-button")
const button2 = document.getElementByID("go-to-expasy")

function getOutput() {
    var nucInput = document.getElementById("nucleotide-input").value;
    document.getElementById("form-input").innerHTML = `<h2>Input:</h2>${nucInput}`;
    callExpasy(nucInput);

}

function callExpasy(dna_sequence) {
    var result = "NULL";
    var xhr = new XMLHttpRequest();
    var url = "https://web.expasy.org/cgi-bin/translate/dna2aa.cgi"
    var params = "dna_sequence=" + dna_sequence + "&output_format=fasta";

    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(params);

    xhr.onload = function() {
        if (xhr.status = 200) {
            result = xhr.responseText.replace(/\n>/g, "\n\n>").replace(/\n/g, "<br>")
            document.getElementById("form-output").innerHTML = `<h2>Output:</h2>${result}`;
        } else {
            document.getElementById("form-output").innerHTML = `unable to get translation`;
            alert("failed");
        }
    }
}

function clearResults() {
    document.getElementById("form-input").innerHTML = "";
    document.getElementById("form-output").innerHTML = "";
}

var thisForm = document.getElementById("nucleotide-form");
thisForm.addEventListener('submit', function(e) {
    e.preventDefault();
    clearResults();
    getOutput();
})
