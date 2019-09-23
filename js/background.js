function genericOnClick(e) {
    window.open("https://web.expasy.org/cgi-bin/translate/dna2aa.cgi?dna_sequence=" + encodeURI(e.selectionText), "_blank")
}

var args = {
    "title": "Translate with ExPASy",
    "contexts": ["selection"],
    "onclick": genericOnClick
}

var menuItem = chrome.contextMenus.create(args);
