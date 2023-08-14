import trash from '../../static/images/trash.svg';

// Componente Formulario | Crea y Elimina tareas
export default function CrearTareaForm() {
    return <>
    
        <form method="post">
            <div className="input-group">
                <button className="btn btn-danger">
                    <img src={trash} className="trash-svg invert" />
                </button>
                <input type="text" name="tarea" id="tarea" placeholder="Nombre de la Tarea" className="form-control" />
                <button className="btn btn-primary" type="submit">Crear Tarea</button>
            </div>
        </form>

    </>
}
