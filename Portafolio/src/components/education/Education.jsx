import { useContext } from "react"
import { modeContext } from "../../context/ModeContext"
import imageUtn from "../../../public/logoutn.png"
import imageUnr from "../../../public/logounr.png"
import { FaUniversity } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { PiStudentFill } from "react-icons/pi";
import "./education.css"
import Separador from "../separador/Separador"
const Education = () => {
    const { mode } = useContext(modeContext)
    return <div className="divAnimation"  >
        
        <div className={`content content-${mode.type}`}  style={mode.content}>
            <h2 style={mode.text} >Educacion</h2>
            <div className="divEdu">
                <div className="edu-conteiner">
                    <img className={`edu-img-${mode.type}`} src={imageUtn} alt="" />
                    <div className="edu-data">
                        <h3 style={mode.text} ><PiStudentFill className="edu-ico" style={mode.text}/> Técnico Universitario en Programación</h3>
                        <div className="edu-text">
                            <p style={mode.text} ><FaUniversity className="edu-ico" style={mode.text} /> Universidad Tecnológica Nacional (UTN)</p>
                            <p style={mode.text} ><FaCalendarDays className="edu-ico" style={mode.text} /> Egresado el 25/08/2025</p>
                        </div>
                    </div>
                </div>
                <Separador clase="edu-sep" />
                <div className="edu-conteiner">
                    <img src={imageUnr} alt="" />
                    <div className="edu-data">
                        <h3 style={mode.text} ><PiStudentFill className="edu-ico" style={mode.text}/> Licenciatura en Ciencias de la Computación</h3>

                        <div className="edu-text">
                            <p style={mode.text} ><FaUniversity className="edu-ico" style={mode.text} /> Universidad Nacional de Rosario (UNR)</p>
                            <p style={mode.text}><FaCalendarDays className="edu-ico" style={mode.text} /> En curso</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default Education