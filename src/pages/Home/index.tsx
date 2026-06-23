import { Banner } from "../../shared/Banner"
import { ServiceCard } from "../../shared/ServiceCard"
import { Title } from "../../shared/Title"
import styles from "./index.module.css"

export const Home =()=>{

    const services = [
    {
        id: 1,
        title: "Pago en línea",
        description: "Realiza tus pagos de inscripción de forma rápida y segura.",
        linkText: "Ir a pagos",
        img: "/assets/payment.png"
    },
    {
        id: 2,
        title: "Imprime tu factura",
        description: "Consulta e imprime tu factura de inscripción.",
        linkText: "Descargar factura",
        img: "/assets/file.png"
    },
    {
        id: 3,
        title: "Convocatorias",
        description: "Consulta convocatorias vigentes y resultados.",
        linkText: "Ver convocatorias",
        img: "/assets/announcement.png"
    }
];
    return(
        <div className={styles.homeContainer}>
            <Banner/>
            <section className={styles.services}>
                {services.map(s =>(
                    <ServiceCard key={s.id} 
                    title={s.title}
                    description={s.description}
                    linkText={s.linkText}
                    img={s.img}/>
                ))}
            </section>
            <Title title="Nuestros campus"/>
        </div>
    )
}