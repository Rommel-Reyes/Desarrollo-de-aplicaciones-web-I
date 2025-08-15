// Importar Express y el PORT donde se va trabajar:
const express = require('express');
const app = express();
const PORT = 3000;

// Ruta principal
app.get('/', (req, res) => {
    //Usamos un 'res' ya que es el respond que vamos a enviar y visualizar:
    res.send('¡Hola Mundo!');
});


// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor trabajando en http://localhost:${PORT}`);
});
