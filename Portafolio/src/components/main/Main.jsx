import { useContext } from "react"
import "./main.css"
import { modeContext } from "../../context/ModeContext"
import html from "../../../public/html.png"
import css from "../../../public/css.png"
import js from "../../../public/js.png"
import react from "../../../public/react.png"
import cSharp from "../../../public/csharp.png"
import net from "../../../public/.net.svg"
const Main = () => {

const {mode} = useContext(modeContext)


    return <main style={{...mode.sombraAnimation,...mode.main}}>
        <div className="divAnimation">
            <div className={`content content-${mode.type}`} style={mode.content}>
                <h2 style={mode.text} >Sobre Mi</h2>
                <p style={mode.text} >Mi nombre es Fernando Koss, soy Técnico Universitario en Programación egresado de la UTN y actualmente estudio la carrera de Licenciatura en Ciencias de la Computación (LCC) en la UNR. {<br />}
                    Me apasiona la tecnología, la resolución de problemas y el desarrollo de software. Me destaco por mi compromiso, capacidad de aprendizaje y predisposición para trabajar en equipo, siempre con el objetivo de aportar soluciones eficientes e innovadoras. Busco seguir creciendo profesionalmente y consolidar mi experiencia en el área de la programación y las ciencias de la computación.</p>
            </div>
        </div>
        <div className="divAnimation"  >

            <div className={`content content-${mode.type}`} style={mode.content}>
                <h2 style={mode.text} >Educacion</h2>
                <div className="divEdu">
                    <div>
                        <h3 style={mode.text} >Técnico Universitario en Programación</h3>
                        <p style={mode.text} >Universidad Tecnológica Nacional (UTN) — Egresado el 25/08/2025</p>
                        <img src="https://i2.wp.com/diagonalalaro.com.ar/wp-content/uploads/2018/03/UTN.png?ssl=1" alt="" />
                    </div>
                    <div style={mode.text} >
                        <h3 style={mode.text} >Licenciatura en Ciencias de la Computación</h3>
                        <p style={mode.text} >Universidad Nacional de Rosario (UNR) — En curso </p>
                        <img src="https://unr.edu.ar/wp-content/uploads/2022/11/logounr.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className="divAnimation">
            <div className={`content content-${mode.type}`} style={mode.content}>
                <h2 style={mode.text} >Lenguajes</h2>
                <h3 style={mode.text} >Frontend:</h3>
                <div className="divImg">
                    <div><img src={html} alt="" /> <p style={mode.text} >HTML</p></div>
                    <div><img src={css} alt="" /> <p style={mode.text} >CSS</p> </div>
                    <div><img src={js} alt="" /><p style={mode.text} >JS</p> </div>
                    <div><img src={react} alt="" /><p style={mode.text} >React</p></div>
                </div>
                <h3 style={mode.text} >Backend:</h3>
                <div className="divImg">
                    <div><img src={cSharp} alt="" /> <p style={mode.text} >C#</p> </div>
                    <div><img src={net} alt="" /> <p style={mode.text} >.NET</p> </div>
                </div>
            </div>
        </div>
        <div className="divAnimation">
            <div className={`content content-${mode.type}`} style={mode.content}>
                <h2 style={mode.text} >Proyectos</h2>

                <div>
                    <h3 style={mode.text} >Gestor de Ventas</h3>
                    <a  style={mode.text} href="https://ferkoss.github.io/cyb/" target="_blank">https://ferkoss.github.io/cyb/</a>
                </div>

                <div>
                    <h3 style={mode.text} >Gestor de Reservas para un Gimnasio</h3>
                    <a  style={mode.text} href="https://github.com/Agustin-Castelli/Gym-UTNegger-React">https://github.com/Agustin-Castelli/Gym-UTNegger-React</a>
                </div>

                <div>
                    <h3 style={mode.text} >Cotizador de monedas</h3>
                    <a  style={mode.text} href="https://ferkoss.github.io/TP-Integrador/HTML/index.html" target="_blank">https://ferkoss.github.io/TP-Integrador/HTML/index.html</a>
                </div>

            </div>
        </div>


    </main>
}
export default Main