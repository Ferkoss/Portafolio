import styles from "./main.module.css"
const Main = () => {


    

    return <main>
        <div className={styles.content}>
            <h2>Sobre Mi</h2>
            <p>Mi nombre es Fernando Koss, soy Técnico Universitario en Programación egresado de la UTN y actualmente estudio la carrera de Licenciatura en Ciencias de la Computación (LCC) en la UNR. {<br />}
                Me apasiona la tecnología, la resolución de problemas y el desarrollo de software. Me destaco por mi compromiso, capacidad de aprendizaje y predisposición para trabajar en equipo, siempre con el objetivo de aportar soluciones eficientes e innovadoras. Busco seguir creciendo profesionalmente y consolidar mi experiencia en el área de la programación y las ciencias de la computación.</p>
        </div>
        <div className={styles.content}>
            <h2>Educacion</h2>
            <div className={styles.divEdu}>
                <div>
                    <h3>Técnico Universitario en Programación</h3>
                    <p>Universidad Tecnológica Nacional (UTN) — [Año de egreso]</p>
                    <img src="https://i2.wp.com/diagonalalaro.com.ar/wp-content/uploads/2018/03/UTN.png?ssl=1" alt="" />
                </div>
                <div>
                    <h3>Licenciatura en Ciencias de la Computación</h3>
                    <p>Universidad Nacional de Rosario (UNR) — En curso </p>
                    <img src="https://unr.edu.ar/wp-content/uploads/2022/11/logounr.png" alt="" />
                </div>
            </div>
        </div>
        <div className={styles.content}>
            <h2>Lenguajes</h2>
            <h3>Frontend:</h3>
            <div className={styles.divImg}>
                <div><img style={{ height: "60px" }} src="https://cdn-icons-png.flaticon.com/256/5968/5968267.png" alt=""/> <p>HTML</p></div>
                <div><img style={{ height: "60px" }} src="https://cdn-icons-png.flaticon.com/256/5968/5968242.png" alt="" /> <p>CSS</p> </div>
                <div><img src="https://i.imgur.com/IgwKCEI.png" alt="" /><p>JS</p> </div>
                <div><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" alt="" /><p>React</p></div>
            </div>
            <h3>Backend:</h3>
            <div className={styles.divImg}>
                <div><img src="https://cdn.jsdelivr.net/npm/@programming-languages-logos/csharp@0.0.0/csharp_256x256.png" alt="" /> <p>C#</p> </div>
                <div><img src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg" alt="" /> <p>.NET</p> </div>
            </div>
        </div>
        <div className={styles.content}>
            <h2>Proyectos</h2>
            
            <div>
            <h3>Gestor de Ventas</h3>
            <a href="https://ferkoss.github.io/cyb/" target="_blank">https://ferkoss.github.io/cyb/</a>
            </div>

            <div>
                <h3>Gestor de Reservas para un Gimnasio</h3>
                <a href="https://github.com/Agustin-Castelli/Gym-UTNegger-React">https://github.com/Agustin-Castelli/Gym-UTNegger-React</a>
            </div>

            <div>
            <h3>Cotizador de monedas</h3>
            <a href="https://ferkoss.github.io/TP-Integrador/HTML/index.html" target="_blank">https://ferkoss.github.io/TP-Integrador/HTML/index.html</a>
            </div>

        </div>


    </main>
}
export default Main