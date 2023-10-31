import HeroImage from "../../components/HeroImage"
import imageHero from '../../assets/imageheroA.png'
import styles from '../About/About.module.scss'
import value from '../../data/value'
import Collapse from "../../components/Collapse"



export default function About() {

    return (
        <main className={styles.mainContainer}>
            <HeroImage>
                <img src={`${imageHero}`} alt="image bannière" />
            </HeroImage>
            <section className= {styles.description}>
                {value.map(({id, title, detail}) =>
                    <Collapse 
                        key={id} 
                        title={title} 
                        detail={<p>{detail}</p>} 
                    >
                    </Collapse>
                )}
            </section>
        </main>
    )
}