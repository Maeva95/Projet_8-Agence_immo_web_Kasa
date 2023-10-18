import StarSolid from '../../assets/star-solid.svg'
import StarUnchecked from '../../assets/star-solid_unchecked.svg'
import style from '../Rating/Rating.module.scss'
//import '../../../style.css'
import PropTypes from 'prop-types'

export default function Rating ({ratingValue}) {
    const scaleRatingValue = [1, 2, 3, 4, 5]
    
    return (
        <div className= {style.ratingContainer}>
            {scaleRatingValue.map((ratingElem) => 
                ratingValue >= ratingElem ? (
                    <img key={ratingElem.toString()} src={StarSolid} alt='étoile rempli'/>
                ) : (<img key={ratingElem.toString()} src={StarUnchecked} alt='étoile non rempli'/>)
            )}
        </div>
)}

Rating.propTypes = {
    ratingValue: PropTypes.node
}