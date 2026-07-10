import "./lengProg.css"
import { useContext } from "react"
import { modeContext } from "../../context/ModeContext"
import html from "../../../public/html.png"
import css from "../../../public/css.png"
import js from "../../../public/js.png"
import react from "../../../public/react.png"
import cSharp from "../../../public/csharp.png"
import C from "../../../public/C.png"
import vsCode from "../../../public/vscode.png"
import vsc from "../../../public/vsc.png"
import Python from "../../../public/Python.svg.webp"
import Git from "../../../public/git.png"
import GitHub from "../../../public/github.svg"
import net from "../../../public/.net.svg"
import Separador from "../separador/Separador"
const LengProg = () => {

    const { mode } = useContext(modeContext)

    return <div className="divAnimation">
        <div id="lenguajes" className={`lengProg content content-${mode.type}`} style={mode.content}>
            <h2 style={mode.text} >Lenguajes</h2>
            <Separador clase="sobreMi-sep" />
            <div className="leng-prog">
                <div className="leng-prog-div">
                    <h3 style={mode.text} >Frontend</h3>
                    <div className="divImg">
                        <div ><img  src={html} alt="" /> <p style={mode.text} >HTML</p></div>
                        <div ><img  src={css} alt="" /> <p style={mode.text} >CSS</p> </div>
                        <div><img src={js} alt="" /><p style={mode.text} >JS</p> </div>
                        <div><img src={react} alt="" /><p style={mode.text} >React</p></div>
                    </div>
                </div>
                <Separador clase="sobreMi-sep lengProg-phone" />
                <div className="leng-prog-div">
                    <h3 style={mode.text} >Backend</h3>
                    <div className="divImg">
                        <div><img src={cSharp} alt="" /> <p style={mode.text} >C#</p> </div>
                        <div><img src={net} alt="" /> <p style={mode.text} >.NET</p> </div>
                    </div>
                </div>

            </div>
            <Separador clase="sobreMi-sep"/>
            <div className="leng-prog">
        
                <div className="leng-prog-div">
                    <h3 style={mode.text} >Otros</h3>
                    <div className="divImg">
                        <div><img src={C} alt="" /> <p style={mode.text} >C</p> </div>
                        <div><img src={Python} alt="" /> <p style={mode.text} >Python</p> </div>
                        
                    </div>
                </div>
                <Separador clase="sobreMi-sep lengProg-phone" />
                <div className="leng-prog-div">
                    <h3 style={mode.text} >Herramientas</h3>
                    <div className="divImg">
                        
                        <div><img src={Git} alt="" /> <p style={mode.text} >Git</p> </div>
                        <div><img src={GitHub} style={{filter:"drop-shadow(0px 0px 2px white)"}} alt="" /> <p style={mode.text} >GitHub</p> </div>
                        <div><img src={vsCode} alt="" /> <p style={mode.text} >VSCode</p> </div>
                        <div><img src={vsc} alt="" /> <p style={mode.text} >VSCommunity</p> </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
}
export default LengProg