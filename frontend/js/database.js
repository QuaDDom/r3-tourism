
//Conexión con el servidor de MySQL
var mysql = require('mysql');
var conexion= mysql.createConnection({
    host : 'localhost',
    database : 'turismo',
    user : 'root',
    password : 'PASS',
});

conexion.connect(function(err) {
    if (err) {
        console.error('Error de conexion: ' + err.stack);
        return;
    }
    console.log('Conectado con el identificador ' + conexion.threadId);
});
conexion.query('SELECT * FROM empleados', function (error, results, fields) {
    if (error)
        throw error;

    results.forEach(result => {
        console.log(result);
    });
});
connection.end();