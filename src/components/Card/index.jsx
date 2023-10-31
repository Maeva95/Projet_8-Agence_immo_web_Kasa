import { Link } from 'react-router-dom'
import style from './Card.module.scss'
import { PropTypes } from 'prop-types'

export default function Card ({ id, title, cover }) {

	return (
        <>
            <Link to={'/appartement/' + id} className={style.card}>
                <img src={cover} alt={`${title} cover`} />
                <h2>{title}</h2>
            </Link>
        </>
	)
}

Card.propTypes = {
    apartment: PropTypes.node,
    title: PropTypes.node,
    cover: PropTypes.node,
    id: PropTypes.node
    }