import { useState } from 'react'
import style from '../Collapse/Collapse.module.scss'
import expand from '../../assets/Expand.svg'
import { PropTypes } from 'prop-types'


export default function Collapse ({ children }) {
    const [hidden, visible] = useState(false)
    const mounted = { animation: 'inAnimation 470ms linear' }
    const unmounted = { height: '0', animation: 'outAnimation 470ms linear reverse'}

    return (
        <div className={style.collapse}>
            <button onClick={() => visible (!hidden)}>
                <img src={expand} alt='icone show hide' className={hidden ? style.collapseIcon__open : style.collapseIcon__close}/> 
            </button>
            <div className={style.collapseContent} style={hidden ? mounted : unmounted}>{children}</div>
        </div>
    )
}






Collapse.propTypes = {
    children: PropTypes.node,
    isMounted: PropTypes.node
}


