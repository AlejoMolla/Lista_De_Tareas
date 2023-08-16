import { NavLink } from "react-router-dom";

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

export default function Nav({items, sections, onClick = null}) {
    return <>
        <ul className="nav flex-column">
            {items.map(({id, texto, link}) => (
                <li className="nav-item" key={id}>
                    <NavItemLink texto={texto} link={link} onClick={onClick} />
                </li>
            ))}
            <div className="border-bottom my-3 border-black-subtle"></div>
            {
                sections.map(({id, titulo, link}) => (
                    <li className="nav-item" key={id}>
                        <NavItemLink texto={titulo} link={link} onClick={onClick} />
                    </li>
                ))
            }
        </ul>
    </>
}