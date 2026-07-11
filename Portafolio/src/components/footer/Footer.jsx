import { useContext, useState } from "react"
import styles from "./footer.module.css"
import { modeContext } from "../../context/ModeContext"
import emailjs from '@emailjs/browser';
const Footer = () => {
    const {mode} = useContext(modeContext)

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [message,setMessage]=useState("");
    const [loading,setLoading]=useState(false);
    const [status,setStatus]=useState("");
    
    const enviarMail = (e) =>{
        e.preventDefault()
        setLoading(true)
        setStatus("")
        
        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
                from_name: name,
                message: message,
                email_id: email,
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then((response) => {
            setEmail("")
            setName("")
            setMessage("")
            setStatus("success")
            setLoading(false)
        })
        .catch((error) => {
            console.error("Error al enviar:", error)
            setStatus("error")
            setLoading(false)
        })
    }

    return (<footer id="contacto" style={mode.footer}>
        <div className={styles.contacto}>
            <h3 style={mode.text} >Contacto:</h3>
            <div>
                <p style={mode.text} >Telefono: +54 9 341-648-9983</p>
                <p style={mode.text} >Email: fermkoss@gmail.com</p>
                <p style={mode.text} >GitHub: <a  style={mode.text} href="https://github.com/Ferkoss" target="_blank" >https://github.com/Ferkoss</a></p>
                <p style={mode.text} >Linkedin: <a  style={mode.text} href="https://www.linkedin.com/in/fernando-koss-39a951322/" target="_blank" >https://www.linkedin.com</a></p>
                <p style={mode.text} >WhatsApp: <a  style={mode.text} href="https://wa.me/3416489983" target="_blank">Click aqui!</a></p>
            </div>
        </div>

        <div className={styles.escribime}>
            <h3 style={mode.text} >Enviar consulta</h3>
            <form className={styles.mandarMail} onSubmit={enviarMail}>
                <div><label style={mode.text} htmlFor="">Nombre Completo: </label><input required type="text" value={name} onChange={(e)=>{setName(e.target.value)}} disabled={loading}/></div>
                <div><label style={mode.text} htmlFor="">Email: </label><input required type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} disabled={loading}/></div>
                <div><label style={mode.text} htmlFor="">Mensaje: </label><textarea required name="" id="" value={message} onChange={(e)=>{setMessage(e.target.value)}} disabled={loading}></textarea></div>
                <button type="submit" style={mode.botonSend} disabled={loading}>{loading ? "Enviando..." : "Enviar"}</button>
                {status === "success" && <p style={{color: "green", marginTop: "10px"}}>✅ Mensaje enviado correctamente</p>}
                {status === "error" && <p style={{color: "red", marginTop: "10px"}}>❌ Error al enviar. Intenta de nuevo.</p>}
            </form>
        </div>

    </footer>)
}
export default Footer