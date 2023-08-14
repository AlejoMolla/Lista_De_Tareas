export default function CreatePage() {
    return <>
    
        {/* Formulario */}
        <form method="post" className="border mt-4 p-5">
            <h4 className="fw-bold">Crear Sección</h4>
            
            <div className="row mt-4">
                <div className="col-12">
                    <label htmlFor="nombre" className="form-label">
                        Nombre de la sección
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        id="nombre"
                        name="nombre"
                        placeholder="Tareas del Hogar"
                    />
                </div>
            </div>
            {/* Subir el Formulario */}
            <div className="d-grid mt-4 d-sm-flex justify-content-md-end">
                <button className="btn btn-primary" type="submit">
                    Crear Sección
                </button>
            </div>
        </form>

    </>
}