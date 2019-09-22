function openSettings() {
   document.getElementById("settings").classList.toggle("settings-open");
}

function saveName() {
    localStorage.setItem('receivedName', userName);
}

function changeName() {
   userName = document.getElementById("name-input").value;
   saveName();
}

function getGreeting() {
   document.getElementById("greeting").innerHTML  = `Hello, ${userName}`;
}


document.getElementById("settings-button").addEventListener('click', openSettings)

var userName = localStorage.getItem('receivedName');

if (userName == null) {
   userName = "friend";
}

document.getElementById("name-form").addEventListener('submit', function(e) {
   e.preventDefault()
   changeName();
   location.reload();

});

getGreeting()
