import './ListaOpciones.css'
const ListaOpciones = (props) => {
    //metodo map ->arreglo.map((elemento, index) => {
    // return <option>elemento</option>
    //})
  

    const manejarCambio  = (e) => {
        console.log('cambio', e.target.value);
        props.actualizarEquipo(e.target.value)
    }
    return <div className='lista-opciones'>
        <label>{props.titulo.toUpperCase()}</label>
        <select value={props.valor} onChange={manejarCambio} >
            <option value='' disabled>Seleccionar equipo</option>
         {props.equipos.map( (equipo, index) =>  <option key={index} value={equipo}>{equipo}</option>)}
        </select>
    </div>
}


export default ListaOpciones