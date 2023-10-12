//import styles from '../HeroImage/HeroImage.module.css'
import '../../../style.css'
import { PropTypes } from 'prop-types'

export default function HeroImage ({ children }) {
    return (
        <div className = 'hero-image'>{children}</div>
    )
}

HeroImage.propTypes = {
    children: PropTypes.node.isRequired
    }