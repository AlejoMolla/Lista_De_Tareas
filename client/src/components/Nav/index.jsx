import { NavLink } from "react-router-dom";

export default function Nav({items}) {
    return <>
        <ul className="nav flex-column">
            {items.map(({id, texto}) => (
                <li className="nav-item" key={id}>
                    <NavLink
                        to="create"
                        className={({ isActive }) => (
                            'nav-link' + (isActive ? ' active' : '')
                        )}
                    >
                        {texto}
                    </NavLink>
                </li>
            ))}
        </ul>
    </>
}