const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Configuración de middleware para analizar los datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));

// Página principal con el formulario
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Manejador de solicitudes POST para procesar el formulario
app.post('/submit', (req, res) => {
  // Recuperar datos del formulario
  const nombre = req.body.nombre;
  const apellido = req.body.apellido;
  const sexo = req.body.sexo;
  const mail = req.body.mail;
  const fechaNacimiento = req.body.fechaNacimiento;
  const nacionalidad = req.body.nacionalidad;

  // Mostrar datos en la consola del servidor (puedes almacenarlos en una base de datos en lugar de hacer esto)
  console.log('Datos recibidos:');
  console.log('Nombre:', nombre);
  console.log('Apellido:', apellido);
  console.log('Sexo:', sexo);
  console.log('Mail:', mail);
  console.log('Fecha de Nacimiento:', fechaNacimiento);
  console.log('Nacionalidad:', nacionalidad);

  // Mostrar los datos en una tabla HTML
  const tablaHTML = `
    <table border="1">
      <tr>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Sexo</th>
        <th>Mail</th>
        <th>Fecha de Nacimiento</th>
        <th>Nacionalidad</th>
      </tr>
      <tr>
        <td>${nombre}</td>
        <td>${apellido}</td>
        <td>${sexo}</td>
        <td>${mail}</td>
        <td>${fechaNacimiento}</td>
        <td>${nacionalidad}</td>
      </tr>
    </table>
  `;

  res.send(tablaHTML);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
