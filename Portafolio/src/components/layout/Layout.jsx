import { useContext } from "react"
import { modeContext } from "../../context/ModeContext"
import matrix from "../../../public/fondo-matrix.gif"
const Layout = ({children})=>{

    const {mode} = useContext(modeContext)


    return <div className="layout" style={mode.layout}>{children}</div>
}
export default Layout