import styles from '../Home/Home.module.scss'
import imageHero from '../../assets/imagehero.png'
import Card from '../../components/Card';
import HeroImage from '../../components/HeroImage';
import Loader from '../../components/Loader'
import FetchData from '../../data/fetchData'

export default function Home() {

    const url = '/src/data/logement.json'
    const apartment = FetchData(url)
    
    if (apartment.isLoading) {
        return <Loader />
    }
    if (apartment.error) {
        return <div>Erreur de chargement...</div>
    }

    return (
        <main className={styles.mainContainer}>
            <HeroImage>
                <img src={`${imageHero}`} alt="image bannière" />
                <h1>Chez vous, partout et ailleurs</h1>
            </HeroImage>
            <ul className={styles.gallery}>
                {apartment.dataLog.map(({id, title, cover}) =>
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