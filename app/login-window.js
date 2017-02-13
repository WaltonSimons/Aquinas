const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const remote = require('electron').remote;


function minimizeButton(){
    var window = remote.getCurrentWindow();
    window.minimize();
  }

  function maximizeButton(){
    var window = remote.getCurrentWindow();
    var buttonImg = document.getElementById("maximize-button");
    if (window.isMaximized()) {
        window.unmaximize();
        buttonImg.src = "images/maximize-button.png"
    } else {
        window.maximize();
        buttonImg.src = "images/maximize-button-2.png"
    }
  }

  function closeButton(){
    var window = remote.getCurrentWindow();
    window.close();
  }
