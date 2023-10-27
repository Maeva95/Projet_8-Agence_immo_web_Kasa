import { useParams, useNavigate } from 'react-router-dom'
import style from '../Apartment/Apartment.module.scss'
import Carousel from '../../components/Carousel'
import Collapse from '../../components/Collapse'
//import Loader from '../../components/Loader'
import ProfileHost from '../../components/ProfileHost'
import Rating from '../../components/Rating'
//import { useState, useEffect } from 'react'
import AppartList from '../../data/logement'



export default function Apartment() {
    
    const descriptionTitle = 'Description'
    const equipmentTitle = 'Équipement'
    const {id} = useParams()
    const navigate = useNavigate()
    const getApartmentById = AppartList.find((item) => item.id === id)
    
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