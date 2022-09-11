import PropTypes from 'prop-types';
import { Contact } from "../models/contact.class";

const ComponentB = (props) => {
    const {contact, changeStatus} = props;
    return (
        
        <div>
            <h2>
                Nombre: {contact.firstName}
            </h2>
            <h2>
                Apellido: {contact.lastName}
            </h2>
            <h2>
                Correo: {contact.email}
            </h2>
            <h3>
                CONTACTO {contact.online ? 'EN LINEA' : 'NO DISPONIBLE'}
            </h3>

            <button onClick={changeStatus}>
                Cambiar estado
            </button>
        </div>
    )

}

ComponentB.propTypes = {
    contact : PropTypes.instanceOf(Contact)
}

export default ComponentB;