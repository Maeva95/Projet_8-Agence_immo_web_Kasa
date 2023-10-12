import { useParams } from 'react-router-dom'
import style from './Apartment.module.css'
import Carousel from '../../components/Carousel'
import Collapse from '../../components/Collapse'
import ApartmentList from '../../data/logement'
import ErrorElement from '../../components/ErrorElement'
import ProfileHost from '../../components/ProfileHost'
import Rating from '../../components/Rating'

export default function Apartment() {
    let {id} = useParams()

    const getApartmentById = ApartmentList.filter(item => item.id === id)
    const itemApartment = getApartmentById.map(idApart => idApart)

    if(!itemApartment === '') {
        return <ErrorElement />
    }

    return (
        <div className={style.mainContainer} key={getApartmentById.id}>
            {itemApartment.map((item) =>
                <>
                    <Carousel
                    id={item.id}
                    pictures={item.pictures}
                    />
                    <div className={style.section_info}>
                        <section className='rentalTitle'>
                            <div className={style.rentalTitle__detail}>
                                <h2>{item.title}</h2>
                                <p>{item.location}</p>
                            </div>
                            <ul className='rentalTitle__tag'>
                                <li key={item.tags}>{item.tags}</li>
                            </ul>
                        </section>
                        <section className={style.info_host}>
                            <ProfileHost 
                                key={`${item.host.name}-${item.host.index}`}
                                name={item.host.name}
                                picture={item.host.picture}
                            />
                            <Rating 
                                ratingValue={item.rating}
                            />
                        </section>
                    </div>
                    <section className= {style.sectionCollapse}>
                        <div className={style.description}>
                            <h2 className={style.descriptionTitle}>Description</h2>
                            <Collapse>
                                <p>{item.description}</p>
                            </Collapse>
                        </div>
                        <div className={style.description}>
                            <h2 className={style.descriptionTitle}>Equipement</h2>
                            <Collapse>
                                <p>{item.equipments}</p>
                            </Collapse>
                        </div>
                    </section>
                </>
            )}
        </div>
    )

}