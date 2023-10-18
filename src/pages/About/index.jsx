import HeroImage from "../../components/HeroImage"
import imageHero from '../../assets/imageheroA.png'
//import styles from '../About/About.module.css'
import '../../../style.css'
import value from '../../data/value'
import Collapse from "../../components/Collapse"



export default function About() {

    return (
        <>
            <HeroImage>
                <img src={`${imageHero}`} alt="image bannière" />
            </HeroImage>
            <section className='description'>
                {value.map(({id, title, detail}) =>
                <div key={id} className='description-container'>
                    <h2>{title}</h2>
                    <Collapse>
                    <p>{detail}</p>
                    </Collapse>
                </div>
                )}
            </section>
        </>
    )
}