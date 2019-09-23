
const button1 = document.getElementById("submit-button");
const button2 = document.getElementById("go-to-expasy");


function getOutput() {
    var nucInput = document.getElementsByName("input_sequence")[0].value;
    document.getElementById("form-input").innerHTML = `<h2>Input:</h2>${nucInput}`;
    callExPASy(nucInput);

}

function callExPASy(dna_sequence) {
    var result = "NULL";
    var xhr = new XMLHttpRequest();
    var url = "https://web.expasy.org/cgi-bin/translate/dna2aa.cgi";
    var params = "dna_sequence=" + dna_sequence + "&output_format=fasta";

    document.getElementById("form-input").innerHTML = `<h2 class=result-header>Input:</h2><div class=result>${dna_sequence}</div>`;

    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(params);

    xhr.onload = function() {
        if (xhr.status = 200) {
            result = xhr.responseText.replace(/\n>/g, "\n\n>").replace(/\n/g, "<br>")
            document.getElementById("form-output").innerHTML = `<h2 class=result-header>Output:</h2>${result}`;
        } else {
            document.getElementById("form-output").innerHTML = `unable to get translation`;
            alert("failed");
        }
    }
}

function openExPASy(dna_sequence) {
    var param = "?dna_sequence=" + dna_sequence;
    window.open("https://web.expasy.org/cgi-bin/translate/dna2aa.cgi" + param, "_blank");
}

function clearResults() {
    document.getElementById("form-input").innerHTML = "";
    document.getElementById("form-output").innerHTML = "";
}

button1.addEventListener('click', function(e) {
    e.preventDefault();
    clearResults();
    callExPASy(document.getElementById("input_sequence").value);
})

button2.addEventListener('click', function(e) {
    e.preventDefault();
    clearResults();
    openExPASy(document.getElementById("input_sequence").value);

})
