import { useRouteError } from "react-router-dom";

export function ErrorElement() {
    const error = useRouteError();
    console.log(error);

    return <div className="d-flex flex-column align-items-center">
        <h2 className="fw-bolder display-4">Oops!</h2>
        <p className="text-muted mt-3">Ha ocurrido un error inesperado</p>
        <i className="text-muted">{error.message || error.statusText}</i>
    </div>
}

export default function ErrorPage() {
    return <div className="container">
        <div className="row vh-100 d-flex justify-content-center align-items-center">
            <ErrorElement />
        </div>
    </div>
}
