// Express
const express = require('express');
const router = express.Router();

// Database
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database("./db/Tareas.db", (error) => {
    // Error es null si no hay errores
    if (error == null) {
        console.log("Database Has Open");
    } else {
        console.error("Database Has Not Open", error);
    }
});

// Middleware que configura el contenido de la solicitud en JSON
router.use(function (req, res, next) {
    res.setHeader("Content-Type", "application/json");
    next();
})

// Respuesta por defecto en '/api'
router.get('/', function(req, res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
        "statusCode": res.statusCode,
        "Content-Type": "text/json"
    });
});

// Obtiene las secciones
router.get('/secciones', function(req, res) {
    db.all(
        `
            SELECT * FROM Secciones
        `,
        (err, rows) => {
            // Si hay un error devuelve el error en la solicitud
            if (err) {
                console.error("An error has ocurred", err);
                res.json({"statusCode": 500, "error": err});
            } else { // Sino, devuelve en data un array con los registros de la base de datos
                res.json({"statusCode": 200, "data": rows});
                // rows: [{Id, Nombre}]
            }
        }
    );
});

// Obtiene las tareas
router.get('/tareas', function(req, res) {
    db.all(
        `
            SELECT * FROM Tareas
        `,
        (err, rows) => {
            if (err) {
                console.error("An error has ocurred", err);
                res.json({"statusCode": 500, "error": err});
            } else {
                res.json({"statusCode": 200, "data": rows});
            }
        }
    );
});

// Obtenemos las Secciones con sus respectivas tareas
router.get('/all', function(req, res) {
    // Obtenemos las secciones
    db.all(
        `
            SELECT * FROM Secciones
        `,
        (err, rowsSecciones) => {
            // Si hay un error devuelve el error en la solicitud
            if (err) {
                console.error("An error has ocurred", err);
                res.json({"statusCode": 500, "error": err});
            } else { // Sino, vamos a obtener las tareas de cada sección
                db.all(
                    `
                        SELECT * FROM Tareas
                    `,
                    (err, rowsTareas) => {
                        // Si hay error, devolvemos error
                        if (err) {
                            console.error("An error has ocurred", err);
                            res.json({"statusCode": 500, "error": err});
                        } else {
                            // Data almacena el resultado final
                            const data = rowsSecciones.map(seccion => {
                                // Hacemos un map para poder editar cada sección y agregarle la propiedad tareas
                                // Filtramos para que pasen solo las que coincidan con el ID de la sección
                                seccion.tareas = rowsTareas.filter(
                                    tarea => tarea.ID_Seccion === seccion.Id
                                ).map(tarea => {
                                    // Y realizamos un map para que se borre la propiedad ID_Seccion de cada objeto tarea
                                    delete tarea.ID_Seccion

                                    return tarea;
                                });

                                // Retornamos la sección con las tareas añadidas
                                return seccion;
                            });
                            // Envíamos solicitud
                            res.json({"statusCode": 200, "data": data});
                        }
                    }
                );
            }
        }
    );
})

module.exports = router;
