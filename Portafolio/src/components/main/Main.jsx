import { useContext } from "react"
import "./main.css"
import imageUtn from "../../../public/logoutn.png"
import imageUnr from "../../../public/logounr.png"
import cyb from "../../../public/Projects/CYB/PAG.PNG"
import gym from "../../../public/Projects/GYM/GYM.png"
import cotizador from "../../../public/projects/cotizador/cotizador.png"
import { modeContext } from "../../context/ModeContext"
import Project from "../project/Project"
import Separador from "../separador/Separador"
import Education from "../education/Education"
import SobreMi from "../sobreMi/SobreMi"
import LengProg from "../lengProg/LengProg"

const Main = () => {

    const { mode } = useContext(modeContext)


    return <main style={{ ...mode.sombraAnimation, ...mode.main }}>
        <SobreMi />
        <Education />
        <LengProg/>
        <div className="divAnimation">
            <div id="proyectos" className={`content content-${mode.type}`} style={mode.content}>
                <h2 style={mode.text} >Proyectos</h2>


                <Project
                    title={"Gestor de ventas"}
                    text={"Aplicación para gestionar ventas, clientes, productos y reportes."}
                    img={cyb}
                    linkPage={"https://ferkoss.github.io/cyb/"}
                    linkFront={"https://github.com/Ferkoss/cyb"}
                    linkBack={"https://github.com/Ferkoss/cyb-api"}
                    lang={["R", ".NET"]} />

                <Separador />



                <Project
                    title={"Gestor de Reservas para un Gimnasio"}
                    text={"Aplicación para gestionar las reservas de turnos de un Gimnasio."}
                    img={gym}
                    linkFront={"https://github.com/Agustin-Castelli/Gym-UTNegger-React"}
                    linkBack={"https://github.com/GiulianoPairone1/BackendGimnasio"}
                    lang={["R", ".NET"]}
                />
                <Separador />

                <Project
                    title={"Cotizador de monedas"}
                    text={"Aplicacion que proyecta las modificaciones de las cotizaciones monetarias."}
                    img={cotizador}
                    linkPage={"https://ferkoss.github.io/TP-Integrador/HTML/index.html"}
                    linkFront={"https://github.com/Ferkoss/TP-Integrador"}
                    lang={["HTML", "CSS", "JS"]}
                />


                {/* <div>
                    <h3 style={mode.text} >Gestor de Ventas</h3>
                    <a style={mode.text} href="https://ferkoss.github.io/cyb/" target="_blank">https://ferkoss.github.io/cyb/</a>
                </div>

                <div>
                    <h3 style={mode.text} >Gestor de Reservas para un Gimnasio</h3>
                    <a style={mode.text} href="https://github.com/Agustin-Castelli/Gym-UTNegger-React">https://github.com/Agustin-Castelli/Gym-UTNegger-React</a>
                </div>

                <div>
                    <h3 style={mode.text} >Cotizador de monedas</h3>
                    <a style={mode.text} href="https://ferkoss.github.io/TP-Integrador/HTML/index.html" target="_blank">https://ferkoss.github.io/TP-Integrador/HTML/index.html</a>
                </div> */}

            </div>
        </div>


    </main>
}
export default Main