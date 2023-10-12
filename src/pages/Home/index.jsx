import ImageHero from "../../components/ImageHero";
import styles from '../Home/Home.module.css'
import imageHero from '../../assets/imagehero.png'
import ApartmentList from '../../data/logement'
import FlatItem from "../../components/FlatItem";

export default function Home() {
    return (
        <div className={styles.home}>
            <ImageHero>
                <img src={`${imageHero}`} alt="image bannière" />
                <h1>Chez vous, partout et ailleurs</h1>
            </ImageHero>
            <ul className={styles.gallery} id="flat">
                {ApartmentList.map(({id, title, cover}) =>
                    <li key={id} id={id}>
                        <FlatItem
                            id={id}
                            title={title}
                            cover={cover}
                        />
                    </li>
                )}
            </ul>
        </div>
    )
}