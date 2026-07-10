import { use, useContext } from "react"
import "./separador.css"
import { modeContext } from "../../context/ModeContext"
const Separador = ({clase=""})=>{
    const {mode} = useContext(modeContext)
return <div className={`separador ${clase}`} style={{...mode.backgroundAnimation,...mode.separador}} ></div>
}
export default Separador