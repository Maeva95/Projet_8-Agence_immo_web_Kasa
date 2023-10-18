import styles from '../HeroImage/HeroImage.module.scss'
import '../../../style.css'
import { PropTypes } from 'prop-types'

export default function HeroImage ({ children }) {
    return (
        <div className = {styles.heroImage}>{children}</div>
    )
}

HeroImage.propTypes = {
    children: PropTypes.node.isRequired
    }