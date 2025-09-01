import styles from "./header.module.css"
import fotoPerfil from "../../../public/foto-perfil.jpg"
const Header = ()=>{
    const navCV= ()=>{
        open("https://www.canva.com/design/DAFwfmZPpQg/xigmmOPFLFMk3tyVvfMIiA/edit?utm_content=DAFwfmZPpQg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton","_blank")
    }
    return(
        <header>
            <div className={styles.img_name}>
                <img src={fotoPerfil} alt="" />
                <h1>
                    Fernando Koss
                </h1>
            </div>
            <ul className={styles.nav}>
                <li>Inicio</li>
                <li>Sobre Mi</li>
                <li>Educacion</li>
                <li>Contacto</li>
                <li onClick={navCV} >CV</li>
            </ul>
        </header>
    )
}
export default Header