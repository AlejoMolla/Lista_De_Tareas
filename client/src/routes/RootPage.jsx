import { Fragment, useEffect, useState, createContext } from "react";
import { Outlet } from "react-router-dom";

// Components
import Nav from "../components/Nav/NavComponent";
import Jumbotron from "../components/Jumbotron/JumbotronComponent";
import CrearTareaForm from '../components/CrearTareaForm/CrearTareaFormComponent';

// Configs
import { ITEMS_NAV } from "../static/navConfigs";
import { IMAGES_JUMBOTRON } from "../static/jumbotronConfigs";

// Database !
import { TAREAS_DB } from "../static/Tareas";
import BottomNav from "../components/BottomNav/BottomNavComponent";

// Context
const APIDataContext = createContext([]);

export default function App() {
    // Guarda la información que se obtiene de la API
    const [APIData, setAPIData] = useState([]);
    
    // Se obtienen los datos de la API
    useEffect(function() {
        fetch("/api/all")
            .then(res => res.json())
            .then(res => {
                setAPIData(res.data);
                // console.log(res);
            });
    }, []);

    // Controla la configuración del jumbotron
    const [jumbotronItem, setJumbotronItem] = useState([]);
    // Se elige un jumbotron a través de un número random
    useEffect(function() {
        let rand = Math.round(Math.random()*(IMAGES_JUMBOTRON.length-1));

        setJumbotronItem(IMAGES_JUMBOTRON[rand]);
    }, []);

    return <Fragment>
        <APIDataContext.Provider value={APIData}>
            <div className="container-fluid">
                <div className="row vh-100">
                    <div className="d-none d-sm-block col-sm-3 bg-body-tertiary border-end pt-sm-5">
                        <Nav items={ITEMS_NAV} sections={APIData} />
                    </div>

                    <div className="col-12 col-sm-9 p-0 scrollable-sm">
                        <Jumbotron
                            src={jumbotronItem.src}
                            alt={jumbotronItem.alt}
                        />
                        <div className="m-5">
                            <CrearTareaForm />
                            <Outlet />
                        </div>
                    </div>

                    <BottomNav
                        items={ITEMS_NAV}
                        sections={APIData}
                    />

                </div>
            </div>
        </APIDataContext.Provider>
    </Fragment>
}