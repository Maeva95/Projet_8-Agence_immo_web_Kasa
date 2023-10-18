import { useParams } from 'react-router-dom'
import '../../../style.css'
import Carousel from '../../components/Carousel'
import Collapse from '../../components/Collapse'
import ApartmentList from '../../data/logement'
import ProfileHost from '../../components/ProfileHost'
import Rating from '../../components/Rating'

export default function Apartment() {
    let {id} = useParams()
    const getApartmentById = ApartmentList.filter(item => item.id === id)
    const itemApartment = getApartmentById.map(idApart => idApart)

    return (
        <>
            {itemApartment.map((item) =>
                <div key= {item.id}>
                    <Carousel
                    id={item.id}
                    pictures={item.pictures}
                    />
                    <div className='section_info'>
                        <section className='rentalTitle'>
                            <div className='rentalTitle__detail'>
                                <h2>{item.title}</h2>
                                <p>{item.location}</p>
                            </div>
                            <ul className='rentalTitle__tag'>
                                {item.tags.map((tag, index) =>
                                    <li key={index}>{tag}</li>
                                )}
                            </ul>
                        </section>
                        <section className='info_host'>
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
                    <section className= 'sectionCollapse'>
                        <div className='description-container'>
                            <h2 >Description</h2>
                            <Collapse>
                                <p>{item.description}</p>
                            </Collapse>
                        </div>
                        <div className='description-container'>
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