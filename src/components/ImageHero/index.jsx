import styles from '../ImageHero/ImageHero.module.css'
import { PropTypes } from 'prop-types'

export default function ImageHero ({ children }) {
    return (
        <div className = {styles.imagehero}>{children}</div>
    )
}

ImageHero.propTypes = {
    children: PropTypes.node.isRequired
    }