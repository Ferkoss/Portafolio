import { FaReact,FaCss3Alt   } from "react-icons/fa6";
import { FaJsSquare } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { SiDotnet } from "react-icons/si";
import { MdOutlineError } from "react-icons/md";
import { Badge } from "react-bootstrap"
import "./languages.css"
import { modeContext } from "../../context/ModeContext";
import { useContext } from "react";

import html from "../../../public/html.png"
import css from "../../../public/css.png"
import js from "../../../public/js.png"
import react from "../../../public/react.png"
import cSharp from "../../../public/csharp.png"
import net from "../../../public/.net.svg"

const Languages = ({l})=>{
    let name
    let icon

const {mode} = useContext(modeContext)
    
    switch(l)
    {
        case "R":name="React";icon=<img src={react} className={`lang-icon lang-icon-${mode.type}`} /> 
        break;
        case "CSS":name="CSS";icon=<img src={css}  className={`lang-icon lang-icon-${mode.type}`} /> 
        break;
        case "JS":name="JavaScript" ;icon=<img src={js}  className={`lang-icon lang-icon-${mode.type}`} /> 
        break;
        case ".NET":name=".NET";icon=<img src={net}  className={`lang-icon lang-icon-${mode.type}`} /> 
        break;
        case "HTML":name="HTML";icon=<img src={html}  className={`lang-icon lang-icon-${mode.type}`} /> 
        break;
        default:name="ERROR";icon=<MdOutlineError />
    }
    return <div className={`lang-badge lang-${mode.type}`} style={mode.text}>{name}<span>{icon}</span></div>
}
export default Languages