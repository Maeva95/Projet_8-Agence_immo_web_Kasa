import { useState } from 'react'
import  '../../../style.css'
import expand from '../../assets/Expand.svg'
import { PropTypes } from 'prop-types'


export default function Collapse ({ children }) {
    const [hidden, visible] = useState(false)
    //const showDiv = useDelayUnmount(isMounted)
    const mountedStyle = { height: '250px' }
    const unmountedStyle = { height: '0px' }

    return (
        <div className='collapse'>
            <button onClick={() => visible (!hidden)}>
                <img src={expand} alt='icone show hide' className={hidden ? 'collapse-icon collapse-icon__open' : 'collapse-icon collapse-icon__close'}/> 
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


