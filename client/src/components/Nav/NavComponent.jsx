// Componentes
import { useContext } from "react";
import { NavLink } from "react-router-dom";

// Contexts
import { APIDataContext } from "../../routes/RootPage";

function NavItemLink({texto, link, onClick = null}) {
    if (onClick != null) {
        return <>
            <NavLink
                to={link}
                className={({ isActive }) => (
                    'nav-link' + (isActive ? ' active' : '')
                )}
                onClick={onClick}
            >
                {texto}
            </NavLink>
        </>
    } else {
        return <>
            <NavLink
                to={link}
                className={({ isActive }) => (
                    'nav-link' + (isActive ? ' active' : '')
                )}
            >
                {texto}
            </NavLink>
        </>
    }
}

export default function Nav({items, onClick = null}) {
    // Obtiene las secciones del contexto de RootPage (Provedor)
    const APIData = useContext(APIDataContext);

    return <>
        <ul className="nav flex-column">
            {items.map(({id, texto, link}) => (
                <li className="nav-item" key={id}>
                    <NavItemLink texto={texto} link={link} onClick={onClick} />
                </li>
            ))}
            <div className="border-bottom my-3 border-black-subtle"></div>
            { // Hace un mapeo de las secciones para renderizarlas en el ul
                APIData.map(({Id, Nombre, Link}) => (
                    <li className="nav-item" key={Id}>
                        <NavItemLink texto={Nombre} link={Link} onClick={onClick} />
                    </li>
                ))
            }
        </ul>
    </>
}