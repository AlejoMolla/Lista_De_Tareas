// Simula datos de una base de datos
import { TAREAS_DB } from "../static/Tareas"

export default function TrashPage() {
    return <>
    
        {/* Formulario */}
        <form method="post" className="border mt-4 p-5">
            <h4 className="fw-bold">Eliminar Sección</h4>
            
            <div className="row mt-4">
                <div className="col-12">
                    <label htmlFor="nombre" className="form-label">
                        Seleccione la sección
                    </label>

                    <select name="nombre" id="nombre" className="form-select">
                        <option>Selecciona una sección</option>
                        { // Filtra la sección por defecto y luego muestra las otras
                            TAREAS_DB
                            .filter(({id}) => id != 0)
                            .map(({id, titulo}) => (
                                <option key={id} value={titulo}>
                                    {titulo}
                                </option>
                            ))
                        }
                    </select>
                </div>
            </div>
            {/* Confirmar */}
            <div className="d-grid mt-4 d-sm-flex justify-content-md-end">
                <button className="btn btn-danger" type="submit">
                    Eliminar Sección
                </button>
            </div>
        </form>
    
    </>
}