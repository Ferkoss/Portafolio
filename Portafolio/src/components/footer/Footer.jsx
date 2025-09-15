import { useContext, useState } from "react"
import styles from "./footer.module.css"
import { modeContext } from "../../context/ModeContext"
import emailjs from '@emailjs/browser';
const Footer = () => {
    const {mode} = useContext(modeContext)

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [message,setMessage]=useState("");
    
    const enviarMail = (e) =>{
        emailjs.send("service_n2lxghc","template_l0x5k8k",{
from_name: name,
message: message,
email_id: email,
},
"tvR12jHg4Tez_c-w3"
);
setEmail("")
setName("")
setMessage("")
    }

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
                <div><label style={mode.text} htmlFor="">Nombre Completo: </label><input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/></div>
                <div><label style={mode.text} htmlFor="">Email: </label><input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}/></div>
                <div><label style={mode.text} htmlFor="">Mensaje: </label><textarea name="" id="" value={message} onChange={(e)=>{setMessage(e.target.value)}}></textarea></div>
                <button type="button" style={mode.botonSend} onClick={enviarMail}>Enviar</button>
            </form>
        </div>

    </footer>)
}
export default Footer