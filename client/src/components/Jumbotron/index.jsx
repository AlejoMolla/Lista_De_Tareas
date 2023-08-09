export default function Jumbotron({ src, alt }) {
    return <>
    {/* Voy a cambiar las imagenes a src, o veo, como lo hice en el otro proyecto */}
        <div className="container-fluid jumbotron">
            <img src="/images/Arboles_Montañas_Y_Nubes.jpg" alt={alt} className="img-fluid" />
        </div>

    </>
}