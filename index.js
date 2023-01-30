const sharp = require('sharp');
const fs = require('fs');
const { AsyncLocalStorage } = require('async_hooks');
const directory = '';

fs.readdirSync(directory).forEach(file => {
  sharp(`${directory}/${file}`)
    .resize(200, 100) // width, height
    .toFile(`${directory}/${file}-small.jpg`);
  });

  function myFunction() {
    alert("Hello\nHow are you?");
  }

