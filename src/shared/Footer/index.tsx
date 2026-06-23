import { Link } from "react-router-dom"
import styles from "./index.module.css"

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerTop}>
                <img src="/assets/logoWhite.png" alt="Logo udc" />
                <nav>
                    <ul className={styles.footerList}>
                        <li>
                            <Link to="/convocatorias" className={styles.headerLink}>
                                Convocatorias
                            </Link>
                        </li>

                        <li>
                            <Link to="/estudiantes" className={styles.headerLink}>
                                Egresados
                            </Link>
                        </li>

                        <li>
                            <Link to="/docentes" className={styles.headerLink}>
                                Resultados
                            </Link>
                        </li>
                        <li>
                            <Link to="/convocatorias" className={styles.headerLink}>
                                Credenciales
                            </Link>
                        </li>

                        <li>
                            <Link to="/estudiantes" className={styles.headerLink}>
                                Contactos
                            </Link>
                        </li>

                        <li>
                            <Link to="/docentes" className={styles.headerLink}>
                                Soporte tecnico
                            </Link>
                        </li>
                    </ul>


                </nav>
                <div className={styles.redes}>
                    <img src="/assets/facebook.png" alt="Facebook" />
                    <img src="/assets/instagram.png" alt="Instagram" />
                    <img src="/assets/gmail.png" alt="Gmail" />
                </div>
            </div>
            <p>@2026 Universidad de cartagena</p>
        </footer>
    )
}