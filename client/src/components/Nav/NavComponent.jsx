import { NavLink } from "react-router-dom";

export default function Nav({items, sections}) {
    return <>
        <ul className="nav flex-column">
            {items.map(({id, texto, link}) => (
                <li className="nav-item" key={id}>
                    <NavLink
                        to={link}
                        className={({ isActive }) => (
                            'nav-link' + (isActive ? ' nav-underline' : '')
                        )}
                    >
                        {texto}
                    </NavLink>
                </li>
            ))}
            <div className="border-bottom my-3 border-black-subtle"></div>
            {
                sections.map(({id, titulo, link}) => (
                    <li className="nav-item" key={id}>
                        <NavLink
                            to={link}
                            className={({ isActive }) => (
                                'nav-link' + (isActive ? ' active' : '')
                            )}
                        >
                            {titulo}
                        </NavLink>
                    </li>
                ))
            }
        </ul>
    </>
}