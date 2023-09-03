import { useState } from 'react';
import './Formulario.css';
import Campo from '../Campo/Campo';
import ListaOpciones from '../ListaOpciones/ListaOpciones';
import Boton from '../Boton/Boton';
const Formulario = (props) => {
    const [nombre, actualizarNombre] = useState('')
    const [puesto, actualizarPuesto] = useState('')
    const [foto, actualizarFoto] = useState('')
    const [equipo, actualizarEquipo] = useState('')
    const [titulo, actualizarTitulo] = useState('')
    const [color, actualizarColor] = useState('')

    const { registrarColaborador, crearEquipo  } = props
    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log('manejando envio', e);
        let datosEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        props.registrarColaborador(datosEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault();
        crearEquipo({titulo, colorPrimario: color});
    }
    return <section className='formulario'>
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el Formulario para crear el colaborador</h2>
            <Campo titulo='Nombre' placeholder='Ingresar nombre del colaborador' required valor={nombre} actualizarValor={actualizarNombre} />
            <Campo titulo='Puesto' placeholder='Ingresar puesto del colaborador' required valor={puesto} actualizarValor={actualizarPuesto} />
            <Campo titulo='Foto' placeholder='Ingresar imagen del colaborador' required valor={foto} actualizarValor={actualizarFoto} />
            <ListaOpciones titulo={'Equipo'} valor={equipo} actualizarEquipo={actualizarEquipo} equipos={props.equipos} />
            <Boton>
                Crear
            </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el Formulario para crear equipo</h2>
            <Campo titulo='Titulo' placeholder='Ingresar titulo' required valor={titulo} actualizarValor={actualizarTitulo} />
            <Campo titulo='Color' placeholder='Ingresar color' required valor={color} actualizarValor={actualizarColor} type="color" />
            <Boton>
                Registrar Equipo
            </Boton>
        </form>
    </section>
}

export default Formulario