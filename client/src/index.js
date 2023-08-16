import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
// Bootstrap 5
import 'bootstrap/dist/css/bootstrap.min.css';

// Routes
import Root from './routes/RootPage';
import ErrorPage from './routes/ErrorPage';
import TareasPage from './routes/TareasPage';
import CreatePage from './routes/CreatePage';
import TrashPage from './routes/TrashPage';


const router = createBrowserRouter([{
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
        {index: true, element: <TareasPage />},
        {
            path: 'create',
            element: <CreatePage />
        },
        {
            path: 'trash',
            element: <TrashPage />
        },
        {
            // Usa los parametros para cargar las secciones que el usuario cree
            path: ':tarea',
            element: <TareasPage />
            // Listo, el diseño ya está terminado, solamente falta crear la base de datos y reemplazar los datos, y luego de eso quedaría agregar las funciones para añadir y eliminar tareas
            // Ya cree la base de datos y reemplaze los datos por los de la api, ahora me tira el error que Tareas Rápidas se queda con la clase active
        }
    ]
}]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
