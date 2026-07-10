import { useContext, useEffect, useState } from "react"
import "./sobreMi.css"
import { modeContext } from "../../context/ModeContext"
import { LuCodeXml } from "react-icons/lu";
import { AiOutlineTeam } from "react-icons/ai";
import { TfiStatsUp } from "react-icons/tfi";
import { HiOutlineLightBulb } from "react-icons/hi";
import imgDark from "../../../public/sobreMi.png"
import img80s from "../../../public/sobreMi-80s.png"
import imgLight from "../../../public/sobreMi-light3.png"
import fiumba from "../../../public/fiumba.png"
import Separador from "../separador/Separador";
const SobreMi = () => {

    const Res = ({children}) =>{
    return <span className={`color-${mode.type}`}>{children}</span>
}


    const { mode } = useContext(modeContext)

    const [img,setImg] = useState(imgDark);

    useEffect(()=>{
        switch(mode.type)
        {
            case "dark": setImg(imgDark)
            break
            case "80s": setImg(img80s)
            break
            case "light": setImg(imgLight)
            break
            case"matrix": setImg(imgDark)
        }
    },[mode])

    return <div className="divAnimation">
        <div id="sobre-mi" className={`sobreMi content content-${mode.type}`} style={mode.content}>
            <h2 style={mode.text} >Sobre Mi</h2>
            <Separador clase="sobreMi-sep"/>
            <div className="sobreMi-data">
                <div className="sobreMi-text">
                    <p style={mode.text} >Mi nombre es Fernando Koss, soy <Res>Técnico Universitario en Programación</Res> egresado de la <Res>UTN</Res> y actualmente estudio la carrera de <Res>Licenciatura en Ciencias de la Computación (LCC)</Res> en la <Res>UNR</Res>. {<br />}
                        Me apasiona la tecnología, la resolución de problemas y el desarrollo de software. Me destaco por mi compromiso, capacidad de aprendizaje y predisposición para trabajar en equipo, siempre con el objetivo de aportar soluciones eficientes e innovadoras.{<br />}
                        Busco seguir creciendo profesionalmente y consolidar mi experiencia en el área de la programación y las ciencias de la computación.</p>
                    <div className="sobreMi-div-logos">

                        <div className={`sobreMi-logos sobreMi-logos-${mode.type}`}>
                            <LuCodeXml className="sobreMi-icon" style={mode.text} />
                            <h5 style={mode.text}>Programación</h5>
                        </div>
                        <div className={`sobreMi-logos sobreMi-logos-${mode.type}`}>
                            <HiOutlineLightBulb className="sobreMi-icon" style={mode.text} />
                            <h5 style={mode.text}>Resolucion de problemas</h5>
                        </div>
                        <div className={`sobreMi-logos sobreMi-logos-${mode.type}`}>
                            <AiOutlineTeam className="sobreMi-icon" style={mode.text} />
                            <h5 style={mode.text}>Trabajo en equipo</h5>
                        </div>
                        <div className={`sobreMi-logos sobreMi-logos-${mode.type}`}>
                            <TfiStatsUp className="sobreMi-icon" style={mode.text} />
                            <h5 style={mode.text}>Mejora Continua</h5>
                        </div>
                    </div>
                </div>
                <div className="sobreMi-div-img">
                    <img className={`sobreMi-img sobreMi-img-${mode.type}`} src={img} alt="" />
                </div>
            </div>
        </div>



        <br id="educacion" /> {/*sino, da error*/}
    </div>
}
export default SobreMi