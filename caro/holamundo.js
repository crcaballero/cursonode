console.log("Hola Mundo");

var fs = require('fs');
fs.  readFile('./texto.txt', "utf8", function (er, data) {
    if (er) throw er;
    console.log(data);
    fs.writeFile('./nuevo.txt', data, 'utf8', function (err) {
		if (err) throw err;
    console.log(data);
		console.log('Guardado.');
	});
});

