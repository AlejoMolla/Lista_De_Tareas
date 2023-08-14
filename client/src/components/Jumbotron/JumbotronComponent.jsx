import { useState, useEffect } from "react";

export default function Jumbotron({ src, alt }) {
    // Controla la url de la imagen del servidor
    const [jumbotronImage, setJumbotronImage] = useState([]);
    // Controla el estado de carga de la imagen
    const [loading, setLoading] = useState(false);

    // Obtiene la imagen del servidor y modifica el estado
    useEffect(function() {
        setLoading(true);
        fetch(src)
            .then(res => res.blob())
            .then(res => {
                const url = URL.createObjectURL(res);
                setJumbotronImage(url);
                setLoading(false);
            });
    }, [src]);

    return <>
        
        <div className="container-fluid jumbotron p-0">
            {
                loading ? <div className="w-100 h-100 bg-body-secondary"></div>
                : (
                    <img src={jumbotronImage} alt={alt} className="img-fluid" />
                )
            }
        </div>

    </>
}