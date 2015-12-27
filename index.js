'use strict';
let ipc = require('electron').ipcRenderer;
var closeEl = document.querySelector('#closeButton');
closeEl.addEventListener('click', function () {
    ipc.send('close-main-window');
    console.log('clicked close button')
});