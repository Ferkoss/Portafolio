import styles from "./footer.module.css"
const Footer = () => {
    return (<footer>
        <div className={styles.contacto}>
            <h3>Contacto:</h3>
            <div>
                <p>Telefono: +54 9 3416489983</p>
                <p>Email: fermkoss@gmail.com</p>
                <p>GitHub: <a href="https://github.com/Ferkoss" target="_blank" >https://github.com/Ferkoss</a></p>
                <p>Linkedin: <a href="https://www.linkedin.com/in/fernando-koss-39a951322/" target="_blank" >https://www.linkedin.com</a></p>
                <p>WhatsApp: <a href="https://wa.me/3416489983" target="_blank">Click aqui!</a></p>
            </div>
        </div>

        <div className={styles.escribime}>
            <h3>Enviar consulta</h3>
            <form className={styles.mandarMail}>
                <div><label htmlFor="">Nombre Completo: </label><input type="text" /></div>
                <div><label htmlFor="">Email: </label><input type="text" /></div>
                <div><label htmlFor="">Mensaje: </label><textarea name="" id=""></textarea></div>
                <button type="button">Enviar</button>
            </form>
        </div>

    </footer>)
}
export default Footer