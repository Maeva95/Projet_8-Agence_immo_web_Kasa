import { PropTypes } from 'prop-types'
import '../../../style.css'
//import style from '../ProfileHost/ProfileHost.module.css'
export default function ProfileHost ({ name, picture }) {

    const splits = name.split(/(\d)/)
    
	return (
        <div className='profile_host'>
            <h3>{splits}</h3>
            <img src={picture} alt={`photo de l'hôte ${name}`} />
        </div>
	)
}

ProfileHost.propTypes = {
    name: PropTypes.string,
    picture: PropTypes.string
}