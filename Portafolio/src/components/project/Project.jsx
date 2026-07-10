import { useNavigate } from "react-router-dom"
import "./project.css"
import { useContext } from "react"
import { modeContext } from "../../context/ModeContext"
import { Accordion, Badge } from "react-bootstrap"
import Languages from "../languages/Languages"
import { TbWorld } from "react-icons/tb";
import { FaServer } from "react-icons/fa";
const Project = ({ title, text, img, linkFront,linkBack, linkPage,lang }) => {

const {mode} = useContext(modeContext)



    return <div className="project-container">
        <div className={`project-img project-img-${mode.type}`}><img  src={img} alt="" /></div>
        <div className="project-div">
            <h2 style={mode.text}>{title}</h2>

            
            <p style={mode.text}>{text}</p>
            <div className="languages">
                {lang?lang.map(x=><Languages l={x} key={x}/>):<></>}
            
            </div>
            {linkPage ? <button  style={mode.botonSend} className={`sombra-${mode.type}`} onClick={() => { open(linkPage) }} className={`project-button sombra-${mode.type}`} >Visitar</button>: <></>}
            {/* <div className="project-div-button">
                {linkFront ? <button style={mode.botonSend} onClick={() => { open(linkFront) }} className={`project-button sombra-${mode.type}`} >Ver Frontend</button> : <></>}
                {linkBack ? <button style={mode.botonSend} onClick={() => { open(linkBack) }} className={`project-button sombra-${mode.type}`} >Ver Backend</button> : <></>}
            </div> */}

            <div className="project-div-button">
                {linkFront ? <a style={mode.botonSend}  onClick={() => { open(linkFront) }} className={`proj-a`} ><TbWorld style={mode.text} className="proj-ico"/>Ver Frontend</a> : <></>}
                {linkBack ? <a style={mode.botonSend} onClick={() => { open(linkBack) }} className={`proj-a`} ><FaServer style={mode.text} className="proj-ico"/>Ver Backend</a> : <></>}
            </div>
            
        </div>
    </div>
}
export default Project