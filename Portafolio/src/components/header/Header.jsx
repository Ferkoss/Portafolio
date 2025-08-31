import styles from "./header.module.css"
const Header = ()=>{
    return(
        <header>
            <div className={styles.img_name}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/A._Schwarzenegger.jpg/250px-A._Schwarzenegger.jpg" alt="" />
                <h1>
                    Fernando Koss
                </h1>
            </div>
            <ul className={styles.nav}>
                <li>Inicio</li>
                <li>Sobre Mi</li>
                <li>Educacion</li>
                <li>Contacto</li>
                <li>CV</li>
            </ul>
        </header>
    )
}
export default Header