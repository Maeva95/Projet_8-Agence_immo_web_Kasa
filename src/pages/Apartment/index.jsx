import { useParams, useNavigate } from 'react-router-dom'
import FetchData from '../../data/fetchData'
import style from '../Apartment/Apartment.module.scss'
import Carousel from '../../components/Carousel'
import Collapse from '../../components/Collapse'
import Loader from '../../components/Loader'
import ProfileHost from '../../components/ProfileHost'
import Rating from '../../components/Rating'
//import AppartList from '../../data/logement'



export default function Apartment() {
    
    const descriptionTitle = 'Description'
    const equipmentTitle = 'Équipement'
    const url = '/src/data/logement.json'
    const {id} = useParams()
    const navigate = useNavigate()
    const apartment = FetchData(url)
    
    
    if (apartment.isLoading) {
        return <Loader />
    }
    if (apartment.error) {
        return <div>Erreur de chargement...</div>
    }
    const getApartmentById = apartment.dataLog.find((item) => item.id === id)

    if(getApartmentById === undefined){
        navigate('/ErrorPage')
    }
    
    return (
        <>
            <main key= {getApartmentById.id} className={style.mainContainer}>
                <Carousel
                id={getApartmentById.id}
                pictures={getApartmentById.pictures}
                />
                <section className= {style.sectionInfo}>
                    <article className={style.infoRental}>
                        <div className={style.rentalTitle__detail}>
                            <h2>{getApartmentById.title}</h2>
                            <p>{getApartmentById.location}</p>
                        </div>
                        <ul className={style.rentalTitle__tag}>
                            {getApartmentById.tags.map((tag, index) =>
                                <li key={index}>{tag}</li>
                            )}
                        </ul>
                    </article>
                    <article className={style.infoHost}>
                        <ProfileHost 
                            key={`${getApartmentById.host.name}-${getApartmentById.host.index}`}
                            name={getApartmentById.host.name}
                            picture={getApartmentById.host.picture}
                        />
                        <Rating 
                            ratingValue={getApartmentById.rating}
                        />
                    </article>
                </section>
                <section className= {style.sectionCollapse}>
                        <Collapse
                            key={`description appartment ${id}`}
                            title={descriptionTitle}
                            detail={<p>{getApartmentById.description}</p>}
                        >
                        </Collapse>
                        <Collapse
                            key={`equipments appartment ${id}`}
                            title={equipmentTitle}
                            detail={
                                <ul>
                                {getApartmentById.equipments.map((equipment, index) =>
                                    <li key={index}>{equipment}</li>
                                )}
                                </ul>
                            }
                        >
                        </Collapse>
                </section>
            </main>
        </>
    )

}