import { useState } from 'react';
import './MiOrg.css'
const MiOrg = (props) => {
    //const [nombreVariable, funcion] = useState('valorInicialDeVariable');
    // const [mostrar, actualizarMostrar] = useState(true)
    // const manejarClick = () => {
    //     console.log('ocultar elemento', !mostrar);
    //     actualizarMostrar(!mostrar)
    // }
    return <div className="org-div">
        <h3 className='org-titulo'>Mi Organización</h3>
        <img src="/img/add.png" alt="org" onClick={props.cambiarMostrar}/>
    </div>
}

export default MiOrg