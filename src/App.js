import { useState } from 'react';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg/MiOrg';
import Equipo from './componentes/Equipo/Equipo';
import './App.css';
import Footer from './componentes/Footer/Footer';
import { v4 as uuid } from 'uuid';


function App() {
  const [mostrarForm, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/jaycode404.png",
    nombre: "User jay",
    puesto: "Instructor",
    fav: true

  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/jaycode404.png",
    nombre: "User jay",
    puesto: "Desarrolladora de software e instructora",
    fav: false
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/jaycode404.png",
    nombre: "User jay",
    puesto: "Instructora en Alura Latam",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/jaycode404.png",
    nombre: "User jay",
    puesto: "Head de Alura e Instructor",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/jaycode404.png",
    nombre: "User jay",
    puesto: "Dev FullStack",
    fav: false
  }])

  const [equipos, actualizarEquipos] = useState(
    [
      {
        id: uuid(),
        titulo: "Programación",
        colorPrimario: "#57C278",
        colorSecundario: "#D9F7E9"
      },
      {
        id: uuid(),
        titulo: "Front End",
        colorPrimario: "#82CFFA",
        colorSecundario: "#E8F8FF"
      },
      {
        id: uuid(),
        titulo: "Data Science",
        colorPrimario: "#A6D157",
        colorSecundario: "#F0F8E2"
      },
      {
        id: uuid(),
        titulo: "DevOps",
        colorPrimario: "#E06B69",
        colorSecundario: "#FDE7E8"
      },
      {
        id: uuid(),
        titulo: "UX y Diseño",
        colorPrimario: "#DB6EBF",
        colorSecundario: "#FFF5D9"
      },
      {
        id: uuid(),
        titulo: "Móvil",
        colorPrimario: "#FFBA05",
        colorSecundario: "#FFEEDF"
      },
      {
        id: uuid(),
        titulo: "Inovación",
        colorPrimario: "#FF8A29",
        colorSecundario: "#FFEEDF"
      }
    ])

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarForm)
  }
  //registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log('nuevo colaborador', colaborador);
    //spread operator
    actualizarColaboradores([...colaboradores, colaborador])

  }

  //eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log('eliminar colaborador', id);
    const colaboradoresNew = colaboradores.filter((colaborador) => colaborador.id != id)
    actualizarColaboradores(colaboradoresNew);
  }

  //actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log('actualizar a:', color, id);
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }
  //crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo);
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid }])
  }

  const like = (id) => {
    console.log("like", id);
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }
  return (
    <div>
      <Header />
      {/* {mostrarForm ? <Formulario /> : <></>} */}
      {mostrarForm && <Formulario
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo}
      />}
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {
        equipos.map((equipo) => {
          return <Equipo
            key={equipo.titulo} datos={equipo}
            colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
            eliminarColaborador={eliminarColaborador}
            actualizarColor={actualizarColor}
            like={like}
          />
        })
      }
      <Footer />
    </div>
  );
}

export default App;
