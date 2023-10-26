import { useParams } from 'react-router-dom'
import style from '../Apartment/Apartment.module.scss'
//import '../../../style.css'
import Carousel from '../../components/Carousel'
import Collapse from '../../components/Collapse'
import ApartmentList from '../../data/logement'
import ProfileHost from '../../components/ProfileHost'
import Rating from '../../components/Rating'

export default function Apartment() {
    let {id} = useParams()
    const getApartmentById = ApartmentList.filter(item => item.id === id)
    const itemApartment = getApartmentById.map(idApart => idApart)

    const descriptionTitle = 'Description'
    const equipmentTitle = 'Équipement'

        return (
            <>
                {itemApartment.map((item) =>
                    <main key= {item.id} className={style.mainContainer}>
                        <Carousel
                        id={item.id}
                        pictures={item.pictures}
                        />
                        <section className= {style.sectionInfo}>
                            <article className={style.infoRental}>
                                <div className={style.rentalTitle__detail}>
                                    <h2>{item.title}</h2>
                                    <p>{item.location}</p>
                                </div>
                                <ul className={style.rentalTitle__tag}>
                                    {item.tags.map((tag, index) =>
                                        <li key={index}>{tag}</li>
                                    )}
                                </ul>
                            </article>
                            <article className={style.infoHost}>
                                <ProfileHost 
                                    key={`${item.host.name}-${item.host.index}`}
                                    name={item.host.name}
                                    picture={item.host.picture}
                                />
                                <Rating 
                                    ratingValue={item.rating}
                                />
                            </article>
                        </section>
                        <section className= {style.sectionCollapse}>
                                <Collapse
                                    key={`description appartment ${id}`}
                                    title={descriptionTitle}
                                    detail={<p>{item.description}</p>}
                                >
                                </Collapse>
                                <Collapse
                                    key={`equipments appartment ${id}`}
                                    title={equipmentTitle}
                                    detail={
                                        <ul>
                                        {item.equipments.map((equipment, index) =>
                                            <li key={index}>{equipment}</li>
                                        )}
                                        </ul>
                                    }
                                >
                                </Collapse>
                        </section>
                    </main>
                )}
            </>
        )
    
    


}