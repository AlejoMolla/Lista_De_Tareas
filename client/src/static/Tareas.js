// Simula los datos de una base de datos

export const TAREAS_DB = [
    {
        "id": 0,
        "titulo": "Tareas Rápidas",
        "link": "/", // El link de las tareas puede ser un cuchuflo generado, ej: XFR43FSD43432 | Así lo genero directamente y lo mando a la base de datos
        "tareas": [
            {
                "id": 0,
                "tarea": "Limpiar la casa"
            },
            {
                "id": 1,
                "tarea": "Comer el almuerzo"
            },
            {
                "id": 2,
                "tarea": "Dormir Temprano"
            }
        ]
    },
    {
        "id": 1,
        "titulo": "Tareas del Hogar",
        "link": "/tareas-del-hogar",
        "tareas": [
            {
                "id": 0,
                "tarea": "Limpiar la casa"
            },
            {
                "id": 1,
                "tarea": "Comer el almuerzo"
            },
            {
                "id": 2,
                "tarea": "Dormir Temprano"
            }
        ]
    },
];
