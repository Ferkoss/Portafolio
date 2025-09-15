import { useContext } from "react"
import { modeContext } from "../../context/ModeContext"

const Layout = ({children})=>{

    const {mode} = useContext(modeContext)


    return <div className="layout" style={mode.layout}>{children}</div>
}
export default Layout