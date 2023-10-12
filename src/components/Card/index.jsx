import { Link } from 'react-router-dom'
//import style from './Card.module.css'
import '../../../style.css'
import { PropTypes } from 'prop-types'

export default function FlatItem ({ id, title, cover }) {

	return (
        <div>
            <Link to={id} className='card'>
                <img src={cover} alt={`${title} cover`} />
                <h2>{title}</h2>
            </Link>
        </div>
	)
}

FlatItem.propTypes = {
    apartment: PropTypes.node,
    title: PropTypes.node,
    cover: PropTypes.node,
    id: PropTypes.node
    }