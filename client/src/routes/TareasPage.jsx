import { TAREAS_DB } from '../static/Tareas';

// Componente Item de la lista | Se usa para renderizarlos en listas
function ListItem({id, tarea}) {
    return <>
    
        <li className="list-group-item py-3 d-flex">
            <input
                type="checkbox"
                className="form-check-input me-2"
                name={`checkTarea${id}`}
                id={`checkTarea${id}`}
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
function List() {
    return <>
    
        <ul className="list-group list-group-flush">
            
            { // Renderiza las tareas en la lista
                TAREAS_DB[0].tareas.map(({id, tarea}) => (
                    <ListItem key={id} id={id} tarea={tarea} />
                ))
            }
        </ul>

    </>
}

export default function TareasPage() {
    return <>
            
        <h4 className="mt-5">{TAREAS_DB[0].titulo}</h4>
        <List />
    
    </>
}