import { useContext } from "react"
import styles from "./footer.module.css"
import { modeContext } from "../../context/ModeContext"
const Footer = () => {
    const {mode} = useContext(modeContext)
    return (<footer style={mode.footer}>
        <div className={styles.contacto}>
            <h3 style={mode.text} >Contacto:</h3>
            <div>
                <p style={mode.text} >Telefono: +54 9 3416489983</p>
                <p style={mode.text} >Email: fermkoss@gmail.com</p>
                <p style={mode.text} >GitHub: <a  style={mode.text} href="https://github.com/Ferkoss" target="_blank" >https://github.com/Ferkoss</a></p>
                <p style={mode.text} >Linkedin: <a  style={mode.text} href="https://www.linkedin.com/in/fernando-koss-39a951322/" target="_blank" >https://www.linkedin.com</a></p>
                <p style={mode.text} >WhatsApp: <a  style={mode.text} href="https://wa.me/3416489983" target="_blank">Click aqui!</a></p>
            </div>
        </div>

        <div className={styles.escribime}>
            <h3 style={mode.text} >Enviar consulta</h3>
            <form className={styles.mandarMail}>
                <div><label style={mode.text} htmlFor="">Nombre Completo: </label><input type="text" /></div>
                <div><label style={mode.text} htmlFor="">Email: </label><input type="text" /></div>
                <div><label style={mode.text} htmlFor="">Mensaje: </label><textarea name="" id=""></textarea></div>
                <button type="button" style={mode.botonSend} >Enviar</button>
            </form>
        </div>

    </footer>)
}
export default Footer