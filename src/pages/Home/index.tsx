import { Banner } from "../../shared/Banner"
import styles from "./index.module.css"

export const Home =()=>{
    return(
        <div className={styles.homeContainer}>
            <Banner/>
        </div>
    )
}