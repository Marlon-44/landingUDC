import styles from "./index.module.css"
type props ={
    title : string;
}

export const Title =({title}:props)=>{
    return(
        <div className={styles.titleContainer}>
            <h2>{title}</h2>
        </div>
        
    )
}