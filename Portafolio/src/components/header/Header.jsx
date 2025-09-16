import "./header.css"

import fotoPerfil from "../../../public/foto-perfil.png"
import { useContext } from "react"
import { modeContext } from "../../context/ModeContext"

const Header = () => {

    const { mode } = useContext(modeContext)


    return (
        <header style={mode.header} id="inicio">

            <div className="img_name" >
                <img src={fotoPerfil} style={{ ...mode.perfilAnimation, ...mode.img }} alt="" />
                <h1 style={mode.text} >
                    Fernando Koss
                </h1>
            </div>
            <ul className="nav">
                <li  ><a className={`nav-${mode.type}`} style={mode.text} href="#inicio">Inicio</a></li>
                <li  ><a className={`nav-${mode.type}`} style={mode.text} href="#sobre-mi">Sobre Mi</a></li>
                <li  ><a className={`nav-${mode.type}`} style={mode.text} href="#proyectos">Proyectos</a></li>
                <li  ><a className={`nav-${mode.type}`} style={mode.text} href="#contacto">Contacto</a></li>
                <li ><a className={`nav-${mode.type}`} style={mode.text} target="_blank" href="https://drive.google.com/file/d/187uzUZ6qOREjQNqUGc_DwbpHbplZUv_I/view?usp=sharing">CV</a></li>
            </ul>
        </header>
    )
}
export default Header