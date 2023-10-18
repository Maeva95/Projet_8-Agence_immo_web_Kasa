import { useState } from 'react'
import style from '../Collapse/Collapse.module.scss'
//import  '../../../style.css'
import expand from '../../assets/Expand.svg'
import { PropTypes } from 'prop-types'


export default function Collapse ({ children }) {
    const [hidden, visible] = useState(false)
    const mountedStyle = { height: '250px' }
    const unmountedStyle = { height: '0px' }

    return (
        <div className={style.collapse}>
            <button onClick={() => visible (!hidden)}>
                <img src={expand} alt='icone show hide' className={hidden ? style.collapseIcon__open : style.collapseIcon__close}/> 
            </button>
            <div className='collapse-content' style={hidden ? mountedStyle : unmountedStyle}>{children}</div>
        </div>
    )
}






Collapse.propTypes = {
    collapsible: PropTypes.node,
    children: PropTypes.node,
    props: PropTypes.node,
    title: PropTypes.string,
    isMounted: PropTypes.node
}


