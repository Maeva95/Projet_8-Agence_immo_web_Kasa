import { PropTypes } from 'prop-types'
import style from '../ProfileHost/ProfileHost.module.css'
export default function ProfileHost ({ name, picture }) {

	return (
        <div className={style.profile_host}>
            <h3>{name}</h3>
            <img src={picture} alt={`photo de l'hôte ${name}`} />
        </div>
	)
}

ProfileHost.propTypes = {
    name: PropTypes.string,
    picture: PropTypes.string
}