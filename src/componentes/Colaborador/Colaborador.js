import './Colaborador.css'
import { AiFillDelete, AiOutlineLike, AiFillLike } from "react-icons/ai"

const Colaborador = (props) => {
    const { nombre, puesto, foto, equipo, id, fav } = props.datos
    const { colorPrimario, eliminarColaborador, like } = props
    return <div className='colaborador'>
        <AiFillDelete onClick={() => eliminarColaborador(id)} className='eliminar' />
        <div className='encabezado' style={{ backgroundColor: colorPrimario }}>
            <img src={foto} alt={nombre} />
        </div>
        <div className='info'>
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <AiFillLike color='blue' onClick={() => like(id)}/> : <AiOutlineLike onClick={() => like(id)}/>}
        </div>
    </div>
}

export default Colaborador