import { Link } from 'react-router-dom';
// Components
import Nav from '../Nav/NavComponent';
// Icons
import addIcon from '../../static/images/plus.svg';
import trashIcon from '../../static/images/trash.svg';
import listIcon from '../../static/images/list.svg';

export default function BottomNav({ isOpen, items, sections, onClick }) {
    return <>
    
        {/* Barra de Navegación */}
        <div className="col-12 d-sm-none bg-body-secondary border-top fixed-bottom bottomNav d-flex justify-content-around align-items-center">
            <Link to="create" className="btn btn-link">
                <img src={addIcon} />
            </Link>
            <button className="btn btn-link" onClick={onClick}>
                <img src={listIcon} />
            </button>
            <Link to="trash" className="btn btn-link">
                <img src={trashIcon} />
            </Link>
        </div>

        {/* Contenedor Colapsado */}
        {isOpen &&
            <div id="collapse" className="bg-body-tertiary pt-5">
                <div className="d-flex justify-content-center align-items-center">
                    <Nav items={items} sections={sections} />
                </div>
            </div>
        }
    
    </>
}
