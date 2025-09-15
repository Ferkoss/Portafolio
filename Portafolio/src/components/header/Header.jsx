import "./header.css"

import fotoPerfil from "../../../public/foto-perfil.png"
import { useContext } from "react"
import { modeContext } from "../../context/ModeContext"

const Header = () => {

    const { mode } = useContext(modeContext)

    const navCV = () => {
        open("https://www.canva.com/design/DAFwfmZPpQg/xigmmOPFLFMk3tyVvfMIiA/edit?utm_content=DAFwfmZPpQg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", "_blank")
    }
    return (
        <header style={mode.header}>

            <div className="img_name" >
                <img src={fotoPerfil} style={{...mode.perfilAnimation,...mode.img}} alt="" />
                <h1 style={mode.text} >
                    Fernando Koss
                </h1>
            </div>
            <ul className="nav">
                <li style={mode.text} >Inicio</li>
                <li style={mode.text} >Sobre Mi</li>
                <li style={mode.text} >Educacion</li>
                <li style={mode.text} >Contacto</li>
                <li style={mode.text} onClick={navCV} >CV</li>
            </ul>
        </header>
    )
}
export default Header