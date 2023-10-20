import { useParams } from 'react-router-dom'
import style from '../Apartment/Apartment.module.scss'
//import '../../../style.css'
import Carousel from '../../components/Carousel'
import Collapse from '../../components/Collapse'
import ApartmentList from '../../data/logement'
import ProfileHost from '../../components/ProfileHost'
import Rating from '../../components/Rating'
import ErrorPage from '../ErrorPage'

export default function Apartment() {
    let {id} = useParams()
    const getApartmentById = ApartmentList.filter(item => item.id === id)
    const itemApartment = getApartmentById.map(idApart => idApart)

    if (getApartmentById === undefined || !getApartmentById) {
        return (
            <ErrorPage/>
        )
    } 
        return (
            <>
                {itemApartment.map((item) =>
                    <div key= {item.id}>
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
                            <div className={style.dropdown}>
                                <h2 >Description</h2>
                                <Collapse>
                                    <p>{item.description}</p>
                                </Collapse>
                            </div>
                            <div className={style.dropdown}>
                                <h2 >Équipements</h2>
                                <Collapse>
                                    <ul>
                                    {item.equipments.map((equipment, index) =>
                                        <li key={index}>{equipment}</li>
                                    )}
                                    </ul>
                                </Collapse>
                            </div>
                        </section>
                    </div>
                )}
            </>
        )
    
    


}