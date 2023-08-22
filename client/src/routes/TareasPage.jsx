import { useContext } from 'react';

// Componentes
import CrearTareaForm from '../components/CrearTareaForm/CrearTareaFormComponent';

// Context
import { APIDataContext } from './RootPage';

import { TAREAS_DB } from '../static/Tareas';
import { useLoaderData } from 'react-router-dom';

export function loader({ params }) {
    const data = params.tarea;

    return data;
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
    const APIData = useContext(APIDataContext);
    const tareaURL = useLoaderData();
    const tarea = APIData.filter(({Link}) => Link == tareaURL)[0];

    return <>
        
        {tarea != undefined && 
            <>
            
                <CrearTareaForm />
                <h4 className="mt-5">{tarea.Nombre}</h4>
                <List tareas={tarea.tareas} />

            </>
        }
    
    </>
}