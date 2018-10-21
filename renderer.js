// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.


function saveTextAsFile() {
    var textToWrite = editor.getValue();
    var textFileAsBlob = new Blob([ textToWrite ], { type: 'text/plain' });
    var fileNameToSaveAs = "filename.txt";
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null) {
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    }

    downloadLink.click();
}

function destroyClickedElement(event) {
    document.body.removeChild(event.target);
}

function doc_keyUp(e) {
    /*if (e.ctrlKey && e.keyCode == 79) {
        loadTextFromFile();
    }
    else */if (e.ctrlKey && e.keyCode == 83) {
        saveTextAsFile();
    }
}

document.addEventListener('keyup', doc_keyUp, false);