import { Fragment, useEffect, useState } from "react";

// Components
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";

// Configs
import { ITEMS_NAV } from "../static/navConfigs";
import { IMAGES_JUMBOTRON } from "../static/jumbotronConfigs";

export default function App() {
    const [tareas, setTareas] = useState([]);

    useEffect(function() {
        fetch("/api")
            .then(res => res.json())
            .then(res => {
                setTareas(res);
                console.log(res);
            });
    }, []);

    return <Fragment>

        <div className="container-fluid">
            <div className="row vh-100">
                <div className="col-12 col-md-3 bg-body-tertiary border-end pt-md-5">
                    <Nav items={ITEMS_NAV} />
                </div>
                <div className="col-12 col-md-9 p-0">
                    <Jumbotron src={IMAGES_JUMBOTRON[1].src} alt={IMAGES_JUMBOTRON[1].alt} />
                </div>
            </div>
        </div>

    </Fragment>
}