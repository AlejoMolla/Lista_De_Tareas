import { useContext } from 'react';

// Componentes
import CrearTareaForm from '../components/CrearTareaForm/CrearTareaFormComponent';

// Context
import { APIDataContext } from './RootPage';

import { TAREAS_DB } from '../static/Tareas';
import { useActionData, useLoaderData } from 'react-router-dom';

export function loader({ params }) {
    const data = params.tarea;

    return data;
}

export async function action({ params, request }) {
    const data = await request.formData();
    const tarea = Object.fromEntries(data).tarea;

    if (tarea != "") {
        fetch("/api/add", {
            method: 'POST',
            // No se que pasa pero me tira el undefined cuando llega al server
            body: JSON.stringify({
                Nombre: tarea,
                Proceso: "NO COMPLETADO"
            }),
            headers: {'Content-Type': 'application/json'}
        });
    }

    return tarea;
}

// Componente Item de la lista | Se usa para renderizarlos en listas
function ListItem({id, tarea, Proceso}) {
    return <>
    
        <li className="list-group-item py-3 d-flex">
            <input
                type="checkbox"
                className="form-check-input me-2"
                name={`checkTarea${id}`}
                id={`checkTarea${id}`}
                defaultChecked={(Proceso == "COMPLETADO" ? true : false)}
            />
            <label
                htmlFor={`checkTarea${id}`}
                className="form-check-label stretched-link flex-grow-1"
            >
                {tarea}
            </label>
        </li>
    
    </>
}

// Componente List | Lista las tareas
function List({tareas}) {
    return <>
    
        <ul className="list-group list-group-flush">
            
            { // Renderiza las tareas en la lista
                tareas.map(({ID, Nombre, Proceso}) => (
                    <ListItem key={ID} id={ID} tarea={Nombre} Proceso={Proceso} />
                ))
            }
        </ul>

    </>
}

export default function TareasPage() {
    // Obtenemos el Contexto del provider (RootPage)
    const APIData = useContext(APIDataContext);
    // Obtenemos la URL del path que va a coincidir con el Link de la tarea
    const tareaURL = useLoaderData();
    // Seleccionamos la tarea
    const tarea = APIData.filter(({Link}) => Link == tareaURL)[0];
    
    const tareaAction = useActionData();
    console.log(tareaAction)

    return <>
        
        {tarea != undefined && // Renderizamos cuando haya cargado la tarea
            <>
            
                <CrearTareaForm />
                <h4 className="mt-5">{tarea.Nombre}</h4>
                <List tareas={tarea.tareas} />

            </>
        }
    
    </>
}