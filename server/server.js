const express = require('express');
const app = express();
const api = require('./router');

// Colocamos las imagenes estáticas para usarlas en el frontend
app.use(express.static('public'))

// Devolvemos respuesta básica a la ruta raíz
app.get("/", (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
        "statusCode": res.statusCode,
        "Content-Type": "text/json"
    });
});

// Usamos el router
app.use('/api', api);
/*
    /secciones => JSON con las secciones
    /tareas => JSON con las tareas
    /all => JSON con las secciones y sus respectivas tareas
*/

app.listen(5000, () => {
    console.log("Server running at http://localhost:5000");
});