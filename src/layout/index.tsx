import { Outlet } from "react-router-dom"
import styles from "./index.module.css"
import { Header } from "../shared/Header"

export const MainLayout = () => {
    return (
        <div >
            <div className={styles.global__container}>
                <Header />
                <main className={styles.main}>
                    <Outlet />
                </main>
                {/*<Footer />*/}
            </div>
        </div>
    )
}