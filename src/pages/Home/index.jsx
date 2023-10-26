import HeroImage from "../../components/HeroImage";
import styles from '../Home/Home.module.scss'
import imageHero from '../../assets/imagehero.png'
import ApartmentList from '../../data/logement'
import Card from "../../components/Card";

export default function Home() {
    return (
        <main className={styles.mainContainer}>
            <HeroImage>
                <img src={`${imageHero}`} alt="image bannière" />
                <h1>Chez vous, partout et ailleurs</h1>
            </HeroImage>
            <ul className={styles.gallery}>
                {ApartmentList.map(({id, title, cover}) =>
                    <li key={id}>
                        <Card
                            id={id}
                            title={title}
                            cover={cover}
                        />
                    </li>
                )}
            </ul>
        </main>
    )
}