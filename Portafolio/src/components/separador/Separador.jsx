import { use, useContext } from "react"
import "./separador.css"
import { modeContext } from "../../context/ModeContext"
const Separador = ()=>{
    const {mode} = useContext(modeContext)
return <div className="separador" style={{...mode.backgroundAnimation,...mode.separador}} ></div>
}
export default Separador