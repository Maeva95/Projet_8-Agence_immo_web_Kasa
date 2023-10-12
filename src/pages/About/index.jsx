import HeroImage from "../../components/HeroImage"
import imageHero from '../../assets/imageheroA.png'
import styles from '../About/About.module.css'
import value from '../../data/value'
import Collapse from "../../components/Collapse"



export default function About() {

    return (
        <div className={styles.about}>
            <HeroImage>
                <img src={`${imageHero}`} alt="image bannière" />
            </HeroImage>
            <section className={styles.description}>
                {value.map(({id, title, detail}) =>
                <div key={id} className={styles.descriptionContainer}>
                    <h2 className={styles.descriptionTitle}>{title}</h2>
                    <Collapse>
                    <p>{detail}</p>
                    </Collapse>
                </div>
                )}
            </section>
        </div>
    )
}